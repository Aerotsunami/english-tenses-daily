// Content is separate from the shared trainer. Index loads it before app.js.
function rs(id, group, context, direct, answers, rule, changes, instruction = "Передай фразу с согласованием времён (backshift).") {
  return { id, group, context, direct, answers, rule, changes, instruction };
}

const REPORTED_ITEMS = [
  rs("tense-work", "tense", "Марта рассказывала о своей прежней работе. Ты пересказываешь её слова.", "Marta: ‘I work remotely.’", ["Marta said that she worked remotely.", "Marta said that she works remotely.", "Marta said that I worked remotely.", "Marta told that she worked remotely."], "Present Simple → Past Simple", ["Время: work → worked после said.", "Лицо: I — это Марта, поэтому she."]),
  rs("tense-be", "tense", "Вчера Лео говорил о своей усталости. Сейчас ты рассказываешь об этом.", "Leo: ‘I am exhausted.’", ["Leo said that he was exhausted.", "Leo said that he is exhausted.", "Leo said that I was exhausted.", "Leo said that he had exhausted."], "am/is → was", ["Время: am → was; exhausted остаётся прилагательным.", "Лицо: I → he, потому что речь о Лео."]),
  rs("tense-negative", "tense", "Анна рассказывала о своих прежних привычках.", "Anna: ‘I don't drink coffee.’", ["Anna said that she didn't drink coffee.", "Anna said that she doesn't drink coffee.", "Anna said that she didn't drank coffee.", "Anna said that I didn't drink coffee."], "don't/doesn't → didn't + V", ["Время: don't → didn't.", "После didn't остаётся базовая форма drink, не drank.", "Лицо: I → she."]),
  rs("tense-continuous", "tense", "Вчера Нина описала, чем занималась в тот момент.", "Nina: ‘I am studying.’", ["Nina said that she was studying.", "Nina said that she is studying.", "Nina said that she studied.", "Nina said that I was studying."], "Present Continuous → Past Continuous", ["Время: am studying → was studying; процесс остаётся процессом.", "Лицо: I → she."]),
  rs("tense-past", "tense", "Дэн рассказал о концерте, на котором уже побывал.", "Dan: ‘I loved the concert.’", ["Dan said that he had loved the concert.", "Dan said that he loves the concert.", "Dan said that he has loved the concert.", "Dan said that I had loved the concert."], "Past Simple → Past Perfect", ["Время: loved → had loved при стандартном backshift.", "Лицо: I → he.", "Past Simple иногда сохраняют; здесь условие просит вариант со сдвигом."]),
  rs("tense-perfect", "tense", "Инес рассказывала о своём опыте на тот момент.", "Ines: ‘I have never been to Rome.’", ["Ines said that she had never been to Rome.", "Ines said that she has never been to Rome.", "Ines said that she had never went to Rome.", "Ines said that I had never been to Rome."], "Present Perfect → Past Perfect", ["Время: have been → had been; never остаётся после помощника.", "Лицо: I → she."]),
  rs("tense-past-process", "tense", "Сэм объяснял, чем занимался ещё до разговора.", "Sam: ‘I was working.’", ["Sam said that he had been working.", "Sam said that he is working.", "Sam said that he has been working.", "Sam said that I had been working."], "Past Continuous → Past Perfect Continuous", ["Время: was working → had been working при backshift.", "Лицо: I → he."]),
  rs("tense-past-perfect", "tense", "Лаура говорила, что уже отправила отчёт до другого прошлого события.", "Laura: ‘I had already sent the report.’", ["Laura said that she had already sent the report.", "Laura said that she has already sent the report.", "Laura said that she had had sent the report.", "Laura said that I had already sent the report."], "Past Perfect не сдвигается дальше", ["Время: had sent остаётся had sent. Второй had не добавляем.", "Лицо: I → she."]),

  rs("modal-will", "modal", "Том пообещал помочь тебе. Ты пересказываешь это другому человеку.", "Tom to you: ‘I will help you.’", ["Tom said that he would help me.", "Tom said that he will help me.", "Tom said that I would help you.", "Tom told that he would help me."], "will → would", ["Модальный: will → would.", "Лица: I → he (Том), you → me (ты пересказываешь от своего лица)."]),
  rs("modal-can", "modal", "Сара разрешила тебе остановиться у неё.", "Sara to you: ‘You can stay with me.’", ["Sara said that I could stay with her.", "Sara said that I can stay with her.", "Sara said that you could stay with me.", "Sara said that I could to stay with her."], "can → could", ["Модальный: can → could.", "Лица: you → I, me → her.", "После could — stay без to."]),
  rs("modal-may", "modal", "Алекс говорил о возможном опоздании, не о разрешении.", "Alex: ‘I may arrive late.’", ["Alex said that he might arrive late.", "Alex said that he may arrive late.", "Alex said that I might arrive late.", "Alex said that he might to arrive late."], "may (возможность) → might", ["Модальный: may → might для возможности.", "Лицо: I → he."]),
  rs("modal-must-duty", "modal", "Елена сказала тебе об обязанности; ты пересказываешь прошедшую ситуацию.", "Elena to you: ‘You must pay attention.’", ["Elena told me that I had to pay attention.", "Elena told me that I had to paid attention.", "Elena said me that I had to pay attention.", "Elena told that you had to pay attention."], "must (обязанность) → had to", ["Обязанность в прошлом: must → had to.", "Лицо: you → I; после told назван адресат me.", "После had to остаётся pay."]),
  rs("modal-could", "modal", "Хьюго рассказывал об умении, которое у него было в детстве.", "Hugo: ‘I could swim at five.’", ["Hugo said that he could swim at five.", "Hugo said that he can swim at five.", "Hugo said that he had could swim at five.", "Hugo said that I could swim at five."], "could остаётся could", ["Модальный: could обычно не меняется при пересказе.", "Лицо: I → he."]),
  rs("modal-should", "modal", "Лена посоветовала тебе отдохнуть. Ты рассказываешь об этом.", "Lena to you: ‘You should rest.’", ["Lena told me that I should rest.", "Lena told me that I had to rest.", "Lena told me that I should to rest.", "Lena told that I should rest."], "should остаётся should", ["Совет остаётся советом: should не превращается в had to.", "Лицо: you → I. После told нужен me."]),
  rs("modal-might", "modal", "Эва говорила о возможной задержке.", "Eva: ‘I might be late.’", ["Eva said that she might be late.", "Eva said that she may be late.", "Eva said that she had might be late.", "Eva said that I might be late."], "might остаётся might", ["Модальный: might не сдвигается дальше.", "Лицо: I → she."]),
  rs("modal-must-guess", "modal", "Лена сделала вывод по гудению сервера, а не приказала ему работать.", "Lena: ‘The server must be running.’", ["Lena said that the server must be running.", "Lena said that the server had to run.", "Lena told that the server must be running.", "Lena said that the server must to be running."], "must (вывод) обычно сохраняется", ["Must здесь означает «должно быть», а не обязанность.", "Обычно сохраняем must; had to run поменяло бы смысл на необходимость."], "Передай вывод, сохранив его смысл."),

  rs("reference-owner", "reference", "София говорила о своей собственной квартире.", "Sofia: ‘I like my flat.’", ["Sofia said that she liked her flat.", "Sofia said that she liked my flat.", "Sofia said that I liked her flat.", "Sofia said that she likes her flat."], "I/my → she/her по личности говорящего", ["Время: like → liked.", "I и my относятся к Софии: she и her."]),
  rs("reference-you", "reference", "Павел сказал это тебе. Ты передаёшь его слова от своего лица.", "Pavel to you: ‘Your report is ready.’", ["Pavel told me that my report was ready.", "Pavel told me that your report was ready.", "Pavel told that my report was ready.", "Pavel told me that my report is ready."], "your → my по адресату исходной фразы", ["Your относится к тебе, поэтому в твоём пересказе — my.", "Время: is → was. Told + me."]),
  rs("reference-we", "reference", "Два коллеги говорили о своей команде. Ты не входишь в неё.", "The colleagues: ‘We are proud of our team.’", ["They said that they were proud of their team.", "They said that we were proud of our team.", "They said that they are proud of their team.", "They said that they were proud of your team."], "we/our → they/their, если рассказчик вне группы", ["Говорящие — отдельная группа: we → they, our → their.", "Время: are → were."]),
  rs("reference-tomorrow", "reference", "В понедельник Омар сказал это тебе. Ты пересказываешь в среду.", "Omar: ‘I will call tomorrow.’", ["Omar said that he would call the next day.", "Omar said that he would call tomorrow.", "Omar said that he will call the next day.", "Omar said that he would call the day before."], "tomorrow → the next day при смене дня", ["Время: will → would; I → he.", "Tomorrow означало вторник, а не четверг: the next day — после исходного разговора."]),
  rs("reference-yesterday", "reference", "Во вторник Эмма говорила о понедельнике. Пересказываешь в пятницу.", "Emma: ‘I arrived yesterday.’", ["Emma said that she had arrived the day before.", "Emma said that she had arrived yesterday.", "Emma said that she has arrived the day before.", "Emma said that she had arrived the next day."], "yesterday → the day before при смене дня", ["Время: arrived → had arrived; I → she.", "The day before — день до исходного разговора, то есть понедельник."]),
  rs("reference-now", "reference", "Райан описывал своё состояние вчера. Ты рассказываешь об этом сегодня.", "Ryan: ‘I am busy now.’", ["Ryan said that he was busy then.", "Ryan said that he was busy now.", "Ryan said that he is busy then.", "Ryan said that I was busy then."], "now → then при смене момента", ["Время: am → was; I → he.", "Then указывает на момент исходного разговора."]),
  rs("reference-here", "reference", "Карла сказала это в Бильбао. Теперь ты пересказываешь её слова из Мадрида.", "Carla: ‘I work here.’", ["Carla said that she worked there.", "Carla said that she worked here.", "Carla said that she works there.", "Carla said that I worked there."], "here → there при смене места", ["Время: work → worked; I → she.", "Место рассказчика изменилось: here → there (Бильбао)."]),
  rs("reference-today", "reference", "В понедельник Бен сообщил о свободном дне. Пересказываешь в четверг.", "Ben: ‘I am free today.’", ["Ben said that he was free that day.", "Ben said that he was free today.", "Ben said that he is free that day.", "Ben said that I was free that day."], "today → that day при смене дня", ["Время: am → was; I → he.", "That day — понедельник, а не сегодняшний четверг."]),

  rs("structure-told", "structure", "Луис сообщил тебе, что устал.", "Luis to you: ‘I am tired.’", ["Luis told me that he was tired.", "Luis told that he was tired.", "Luis said me that he was tired.", "Luis told to me that he was tired."], "told + адресат + (that) + предложение", ["В этой конструкции после told нужен адресат: me.", "Время: am → was; I → he."], "Выбери правильную конструкцию с told и backshift."),
  rs("structure-said", "structure", "Ты просто сообщаешь, что произнесла Рита, без адресата.", "Rita: ‘I am ready.’", ["Rita said that she was ready.", "Rita said me that she was ready.", "Rita told that she was ready.", "Rita said that was she ready."], "said + (that) + предложение", ["После said можно сразу передать содержание; said me неправильно.", "Время: am → was; порядок слов утверждения: she was."], "Выбери правильный пересказ с said и backshift."),
  rs("structure-said-to", "structure", "Мила сказала это тебе. Нужно сохранить said и назвать адресата.", "Mila to you: ‘I am leaving.’", ["Mila said to me that she was leaving.", "Mila said me that she was leaving.", "Mila said to me that I was leaving.", "Mila said to me that she is leaving."], "said to + адресат (не said me)", ["Say допускает адресата с to: said to me.", "Время: am leaving → was leaving; I → she."], "Сохрани said, укажи адресата и используй backshift."),
  rs("structure-that", "structure", "Люк сказал: «Я устал». Начни с Luke said и опусти that.", "Luke: ‘I am tired.’", ["Luke said he was tired.", "Luke said was he tired.", "Luke told he was tired.", "Luke said he tired."], "that в пересказе утверждения можно опустить", ["Luke said (that) he was tired — оба варианта допустимы.", "Условие просит убрать that, но сохранить he was и обычный порядок слов."], "Передай с backshift без that."),
  rs("structure-says", "structure", "Джо говорит это сейчас о своей текущей работе.", "Joe: ‘I work remotely.’", ["Joe says that he works remotely.", "Joe says that I work remotely.", "Joe says that he work remotely.", "Joe says me that he works remotely."], "после says сдвиг не нужен сам по себе", ["Says — настоящее: для текущего факта сохраняем Present Simple.", "I → he, поэтому work → works по лицу, а не по времени."], "Начни с Joe says и сохрани настоящее время."),
  rs("structure-still-true", "structure", "Мария только что сказала это; она всё ещё живёт в Бильбао. Подчеркни актуальность факта.", "Maria: ‘I live in Bilbao.’", ["Maria said that she lives in Bilbao.", "Maria said that she had lived in Bilbao.", "Maria said that I live in Bilbao.", "Maria told that she lives in Bilbao."], "актуальный факт можно передать без backshift", ["Lives подчёркивает, что факт остаётся верным.", "Lived тоже бывает допустимо, но в этом задании просим сохранить актуальное настоящее."], "Сохрани настоящее время для по-прежнему верного факта."),
  rs("structure-general-truth", "structure", "Учитель сообщил общеизвестный факт. Сохрани его как общую истину.", "The teacher: ‘The Earth orbits the Sun.’", ["The teacher said that the Earth orbits the Sun.", "The teacher said that the Earth orbit the Sun.", "The teacher told that the Earth orbits the Sun.", "The teacher said that does the Earth orbit the Sun."], "общую истину можно оставить в настоящем", ["Общая истина: orbits можно не сдвигать.", "Порядок слов обычный: the Earth orbits, без do/does."], "Выбери пересказ без backshift с обычным порядком слов."),
  rs("structure-same-context", "structure", "Ана только что сказала это в кафе. Ты всё ещё там и пересказываешь в тот же день.", "Ana: ‘I am working here today.’", ["Ana said that she is working here today.", "Ana said that I am working here today.", "Ana told that she is working here today.", "Ana said she working here today."], "here/today сохраняются, если место и день те же", ["Ситуация продолжается: по условию сохраняем is working.", "Место и день те же: here и today по-прежнему точны.", "I → she. В другом контексте возможны there и that day."], "Сохрани актуальное время, место и день без backshift."),
];

const REPORTED_TENSE_ROWS = [
  ["Present Simple", "Past Simple", "work → worked · am/is → was · are → were"],
  ["Present Continuous", "Past Continuous", "am working → was working"],
  ["Past Simple", "Past Perfect", "sent → had sent"],
  ["Present Perfect", "Past Perfect", "have sent → had sent"],
  ["Past Continuous", "Past Perfect Continuous", "was working → had been working"],
  ["Present Perfect Continuous", "Past Perfect Continuous", "have been working → had been working"],
  ["Past Perfect / Past Perfect Continuous", "без дальнейшего сдвига", "had sent → had sent · had been working → had been working"],
  ["will", "would", "will help → would help"],
  ["can", "could", "can stay → could stay"],
  ["may (возможность)", "might", "may arrive → might arrive"],
  ["must (обязанность)", "обычно had to", "must leave → had to leave"],
  ["could / should / might / would", "обычно без изменений", "should rest → should rest"],
];

function rsEscape(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function reportedQuestionFor(item, recognizeRule = false) {
  const correctAnswer = recognizeRule ? item.rule : item.answers[0];
  // Don't pit a broad rule against its equally valid special case.
  const overlapping = [
    ["tense-work", "tense-be", "tense-negative"],
    ["structure-says", "structure-still-true", "structure-general-truth"],
  ].find(ids => ids.includes(item.id)) || [item.id];
  const rulePool = REPORTED_ITEMS.filter(entry => entry.group === item.group && !overlapping.includes(entry.id));
  const focus = {
    "structure-told": "Почему после told стоит me?",
    "structure-said": "Как вводится содержание после said без адресата?",
    "structure-said-to": "Почему между said и me стоит to?",
    "structure-that": "Почему после said можно сразу поставить he?",
    "structure-says": "Почему после says стоит настоящее works?",
    "structure-still-true": "Почему после said сохранилось настоящее lives?",
    "structure-general-truth": "Почему сохранилось настоящее orbits?",
    "structure-same-context": "Почему сохранились here и today?",
  }[item.id] || ({ tense: "Как изменена форма основного глагола?", modal: "Что произошло с модальной конструкцией?", reference: "Как изменились местоимения или слова времени/места?" }[item.group]);
  const candidates = recognizeRule
    ? [item.rule, ...shuffle(rulePool.map(entry => entry.rule)).slice(0, 3)]
    : item.answers;
  const answers = shuffle(candidates);
  return {
    id: item.id, type: recognizeRule ? "reported-rule" : "reported", topicKey: "reportedSpeech",
    context: `${item.context} ${recognizeRule ? focus : item.instruction}`,
    text: recognizeRule ? `${rsEscape(item.direct)}<br><span class="reported-result">→ ${rsEscape(item.answers[0])}</span>` : rsEscape(item.direct),
    answers, correct: answers.indexOf(correctAnswer), example: item.answers[0],
    explanation: `<b>${rsEscape(item.rule)}</b><ul class="reported-changes">${item.changes.map(change => `<li>${rsEscape(change)}</li>`).join("")}</ul>`,
  };
}

function startReportedSession() {
  // Three different examples per group: two transformations and one rule question.
  const questions = ["tense", "modal", "reference", "structure"].flatMap(group =>
    shuffle(REPORTED_ITEMS.filter(item => item.group === group)).slice(0, 3)
      .map((item, index) => reportedQuestionFor(item, index === 2))
  );
  startSession("reported-speech", "Косвенная речь", shuffle(questions));
}

function renderReportedGuide() {
  guide.innerHTML = `
    <button class="back-button" type="button" data-action="home">← К каталогу</button>
    <article class="lesson-card guide-page reported-guide">
      <span class="lesson-tag">Reported statements</span>
      <h1>Как передать чужие слова</h1>
      <p class="subtitle">Не переводим «слово в слово»: проверяем время, участников разговора и точку отсчёта.</p>
      <div class="lesson-actions"><button class="primary-button" type="button" data-action="start-reported">Начать 12 заданий</button></div>
      <div class="reported-example"><strong>Marta: “I am working.”</strong><span>→ Marta said (that) she was working.</span><p>I → she: говорим о Марте. Am working → was working: переносим процесс в прошлое.</p></div>
      <ol class="reported-steps"><li><b>Кто и когда сказал?</b> Says и said задают разную точку отсчёта.</li><li><b>Нужен ли backshift?</b> При пересказе прошлого обычно сдвигаем время назад.</li><li><b>Кто такие I, you, we?</b> Меняем по участникам, а не по слепой таблице.</li><li><b>Те же место и день?</b> Меняем here/today только если они больше не точны.</li></ol>
      <h2 class="guide-heading">Таблица сдвига времён</h2>
      <p>Это схема стандартного backshift после said/told, а не запрет на другие варианты при живом общении.</p>
      <div class="reported-table-wrap" role="region" aria-label="Сдвиг времён" tabindex="0"><table class="reported-table"><thead><tr><th scope="col">Было</th><th scope="col">Стало</th><th scope="col">Форма</th></tr></thead><tbody>${REPORTED_TENSE_ROWS.map(row => `<tr>${row.map(cell => `<td>${rsEscape(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      <aside class="principle-box"><b>Не все must одинаковы:</b> обязанность обычно передаём через had to; must в значении вывода («должно быть») обычно сохраняем. May о возможности → might; разрешение с may часто передаём через could.</aside>
      <details class="reported-details" open><summary>Said, told и необязательное that</summary><div class="aux-chain-list"><div><strong>She said (that) she was ready.</strong><span>Адресат не обязателен.</span></div><div><strong>She told me (that) she was ready.</strong><span>При пересказе утверждения после told называем адресата: me, us, Anna.</span></div><div><strong>She said to me that she was ready.</strong><span>С said адресат вводится через to. Said me — ошибка, said to me — правильно.</span></div></div><p>That можно убрать. После него обычный порядок слов: <b>she was</b>, не <b>was she</b>.</p></details>
      <details class="reported-details"><summary>Местоимения: кто говорит и кому?</summary><p>Tom to you: “I will help you.” → Tom said that <b>he</b> would help <b>me</b>. I — Том, you — ты, пересказывающий от своего лица.</p><p>Если пересказываешь собственные слова: I said I was tired. I остаётся I. We сохраняется, если ты всё ещё говоришь от лица той же группы.</p></details>
      <details class="reported-details"><summary>День и место: tomorrow, yesterday, here…</summary><div class="reported-reference-grid"><span>now → then</span><span>today → that day</span><span>tomorrow → the next / following day</span><span>yesterday → the day before / previous day</span><span>here → there</span><span>this / these → that / those</span><span>last week → the week before</span><span>next week → the following week</span><span>two days ago → two days before</span></div><p>В понедельник “tomorrow” означает вторник. В пересказе в среду — “the next day” после понедельника, а не после среды. В том же месте и в тот же день here и today можно сохранить.</p></details>
      <details class="reported-details"><summary>Когда можно не сдвигать время?</summary><p>После says для текущего факта: She says she works remotely. После said настоящее тоже возможно, если факт всё ещё верен, общеизвестен или ты передаёшь ещё актуальную новость.</p><p>Сдвинутый вариант часто также допустим. Поэтому в упражнениях явно указано: нужен backshift или требуется сохранить актуальное настоящее. Само по себе «сказано недавно» не отменяет согласование автоматически.</p></details>
      <h2 class="guide-heading">Практика: пересказ + определение правила</h2><p>${REPORTED_ITEMS.length} контекстных примера. В подходе — 8 заданий на пересказ и 4 на правило; время, модальные, местоимения и конструкция said/told встречаются каждый раз.</p>
      <div class="lesson-actions"><button class="primary-button" type="button" data-action="start-reported">Начать 12 заданий</button><button class="secondary-button" type="button" data-action="home">К каталогу</button></div>
      <p class="reported-sources">Проверить правила: <a href="https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-statements" target="_blank" rel="noopener noreferrer">British Council</a> · <a href="https://dictionary.cambridge.org/grammar/british-grammar/reported-speech-indirect-speech" target="_blank" rel="noopener noreferrer">Cambridge Grammar</a>.</p>
    </article>`;
  showOnly(guide);
}
