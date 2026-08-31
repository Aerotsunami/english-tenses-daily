const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = __dirname;
const original = { diagnosed: true, totalAnswered: 43, totalCorrect: 29, sessions: 3, streak: 2, lastStudyDate: '2026-08-29', tenseStats: { 'present-simple': {total: 10, correct: 8, level: 2, dueAt: 12345} }, grammarStats: {gerundInfinitive:{total:12,correct:7}, auxiliaries:{total:21,correct:14}} };
const store = new Map([['tense-day-progress-v1', JSON.stringify(original)]]);
function boot() {
  const nodes = new Map();
  const document = { addEventListener() {}, querySelector(selector) { if (!nodes.has(selector)) nodes.set(selector, {innerHTML:'', classList:{add(){},remove(){}}}); return nodes.get(selector); } };
  const context = vm.createContext({ document, localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)}, window:{scrollTo(){},addEventListener(){}}, navigator:{}, location:{protocol:'https:'}, Date, Math, console, setTimeout(){}, confirm(){return false;} });
  for (const file of ['reported-speech.js','app.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
  return {context, nodes, run: code=>vm.runInContext(code,context)};
}
const app=boot();
const json=code=>JSON.parse(app.run(`JSON.stringify(${code})`));
assert.equal(app.run('REPORTED_ITEMS.length'),96);
assert.equal(app.run('new Set(REPORTED_ITEMS.map(x=>x.id)).size'),96);
for (const group of ['tense','modal','reference','structure']) assert.equal(app.run(`REPORTED_ITEMS.filter(x=>x.group==='${group}').length`),24);
assert.equal(app.run('REPORTED_ITEMS.every(x=>x.answers.length===4 && new Set(x.answers).size===4 && x.changes.length>=2 && x.context && x.instruction)'),true);
for (const mode of [false,true]) for(let i=0;i<96;i++) {
  const q=json(`reportedQuestionFor(REPORTED_ITEMS[${i}],${mode})`);
  const item=json(`REPORTED_ITEMS[${i}]`);
  assert.equal(q.answers.length,4); assert.equal(new Set(q.answers).size,4);
  assert.equal(q.answers[q.correct],mode?item.rule:item.answers[0]);
  assert.ok(q.context && q.explanation && q.example);
}
assert.equal(app.run('state.totalAnswered'),43);
assert.deepEqual(json('state.grammarStats.auxiliaries'),original.grammarStats.auxiliaries);
assert.deepEqual(json('state.tenseStats["present-simple"]'),original.tenseStats['present-simple']);
assert.deepEqual(json('state.grammarStats.reportedSpeech'),{total:0,correct:0});
assert.equal((app.nodes.get('#dashboard').innerHTML.match(/<article class="mode-card /g)||[]).length,6);
assert.ok(app.nodes.get('#dashboard').innerHTML.includes('Времена и косвенная речь'));
app.run('renderReportedGuide()');
for (const text of ['Present Continuous','Past Perfect Continuous','said to me','must','here','told','Начать 12 заданий']) assert.ok(app.nodes.get('#guide').innerHTML.includes(text),text);
for(let n=0;n<200;n++) {
  app.run('startReportedSession()');
  const qs=json('session.questions');
  assert.equal(qs.length,12);assert.equal(new Set(qs.map(x=>x.id)).size,12);
  assert.equal(qs.filter(x=>x.type==='reported').length,8);
  assert.equal(qs.filter(x=>x.type==='reported-rule').length,4);
  for(const group of ['tense','modal','reference','structure']) assert.equal(qs.filter(x=>x.id.startsWith(group+'-')).length,3);
  for(const question of qs.filter(x=>x.type==='reported-rule')) assert.equal(new Set(question.answers).size,4);
}
// Full correct session, double-answer guard, save/reload and old modes.
for(let i=0;i<12;i++) {app.run('answerQuestion(session.questions[session.index].correct)');app.run('answerQuestion(0)');app.run('nextQuestion()');}
assert.deepEqual(json('state.grammarStats.reportedSpeech'),{total:12,correct:12});
assert.equal(app.run('state.totalAnswered'),55);
assert.equal(app.run('state.sessions'),4);
assert.ok(app.nodes.get('#quiz').innerHTML.includes('12 / 12'));
const reloaded=boot();assert.equal(reloaded.run('state.grammarStats.reportedSpeech.total'),12);
assert.equal(reloaded.run('state.grammarStats.auxiliaries.total'),21);
for (const [fn,count] of [['startIdentifySession',10],['startGerundSession',16],['startAuxiliarySession',16],['startArticleSession',12],['startPhraseSession',14]]) { app.run(`${fn}()`);assert.equal(app.run('session.questions.length'),count);app.run('answerQuestion(session.questions[0].correct)'); }
assert.equal(app.run('rsEscape(`<img src=x onerror=x>`).includes("<img")'),false);
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.ok(index.indexOf('reported-speech.js?v=19')<index.indexOf('app.js?v=19'));
assert.ok(fs.readFileSync(path.join(root,'sw.js'),'utf8').includes('./reported-speech.js?v=19'));
console.log('PASS: 96 examples, 200 balanced sessions, all answer mappings, migration, persistence, duplicate-answer guard, 5 existing modes and v19 cache.');
