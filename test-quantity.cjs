const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = __dirname;

function boot() {
  const nodes = new Map();
  const store = new Map();
  const document = { addEventListener() {}, querySelector(selector) { if (!nodes.has(selector)) nodes.set(selector, { innerHTML: '', classList: { add() {}, remove() {} } }); return nodes.get(selector); } };
  const context = vm.createContext({ document, localStorage: { getItem: key => store.get(key) || null, setItem: (key, value) => store.set(key, value), removeItem: key => store.delete(key) }, window: { scrollTo() {}, addEventListener() {} }, navigator: {}, location: { protocol: 'https:' }, Date, Math, console, setTimeout() {}, confirm() { return false; } });
  for (const file of ['reported-speech.js', 'quantity.js', 'app.js']) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  return { context, nodes, run: code => vm.runInContext(code, context) };
}

const app = boot();
const json = code => JSON.parse(app.run(`JSON.stringify(${code})`));
assert.equal(app.run('QUANTITY_ITEMS.length'), 40);
assert.equal(app.run('new Set(QUANTITY_ITEMS.map(item => item.id)).size'), 40);
for (const group of ['large', 'small', 'need', 'zero']) assert.equal(app.run(`QUANTITY_ITEMS.filter(item => item.group === '${group}').length`), 10);
assert.equal(app.run('QUANTITY_ITEMS.every(item => item.answers.length === 4 && new Set(item.answers).size === 4 && item.text.includes("___") && item.explanation)'), true);
for (let i = 0; i < 40; i += 1) {
  const question = json(`quantityQuestionFor(QUANTITY_ITEMS[${i}])`);
  const item = json(`QUANTITY_ITEMS[${i}]`);
  assert.equal(question.answers[question.correct], item.answer);
  assert.equal(new Set(question.answers).size, 4);
  assert.ok(question.example.includes(item.answer));
}
for (let run = 0; run < 200; run += 1) {
  app.run('startQuantitySession()');
  const questions = json('session.questions');
  assert.equal(questions.length, 12);
  assert.equal(new Set(questions.map(question => question.text)).size, 12);
  for (const group of ['large', 'small', 'need', 'zero']) {
    const sourceTexts = new Set(json(`QUANTITY_ITEMS.filter(item => item.group === '${group}').map(item => item.text)`));
    assert.equal(questions.filter(question => sourceTexts.has(question.text)).length, 3);
  }
}
app.run('renderQuantityGuide()');
for (const phrase of ['many, (a) few', 'a few friends', 'few friends', 'too many', 'fast enough', "don't have any", 'loads of apps']) assert.ok(app.nodes.get('#guide').innerHTML.includes(phrase), phrase);
app.run('startQuantitySession()');
for (let i = 0; i < 12; i += 1) { app.run('answerQuestion(session.questions[session.index].correct)'); app.run('nextQuestion()'); }
assert.deepEqual(json('state.grammarStats.quantity'), { total: 12, correct: 12 });
console.log('PASS: 40 quantity examples, 200 balanced sessions, answer mappings, guide and progress.');

