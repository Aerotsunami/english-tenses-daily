const TENSES = [
  {
    key: "present-simple",
    group: "Present",
    name: "Present Simple",
    formula: "I / you / we / they work · he / she / it works",
    use: "Регулярные действия, привычки, факты и расписания.",
    example: "I usually order groceries on Sunday. — Я обычно заказываю продукты по воскресеньям.",
    questions: [
      q("She ___ coffee every morning.", ["drink", "drinks", "is drinking", "has drunk"], 1, "Для she в Present Simple добавляем -s: drinks."),
      q("We ___ from home most days.", ["work", "are working", "worked", "have worked"], 0, "Регулярность most days — Present Simple: work."),
      q("___ your train leave at 7:10?", ["Do", "Does", "Is", "Has"], 1, "С train используем does: Does your train leave…?"),
    ],
  },
  {
    key: "present-continuous",
    group: "Present",
    name: "Present Continuous",
    formula: "am / is / are + verb-ing",
    use: "То, что происходит прямо сейчас или временно в этот период.",
    example: "I am learning English this month. — В этом месяце я учу английский.",
    questions: [
      q("Please be quiet — I ___ a call.", ["have", "am having", "had", "have had"], 1, "Действие идёт прямо сейчас: am having."),
      q("They ___ in Bilbao this week.", ["stay", "are staying", "stayed", "have stayed"], 1, "Временная ситуация this week — are staying."),
      q("Why ___ you ___ at me?", ["do / look", "are / looking", "did / look", "have / looked"], 1, "Вопрос о действии сейчас: Why are you looking…?"),
    ],
  },
  {
    key: "present-perfect",
    group: "Present",
    name: "Present Perfect",
    formula: "have / has + past participle",
    use: "Опыт или результат к настоящему моменту; время не названо или всё ещё актуально.",
    example: "I have already sent the report. — Я уже отправил отчёт.",
    questions: [
      q("I ___ this film before.", ["see", "saw", "have seen", "am seeing"], 2, "Опыт before без точного времени — have seen."),
      q("She ___ already ___ the order.", ["has / checked", "did / check", "is / checking", "has / checking"], 0, "already + результат сейчас: has checked."),
      q("___ you ever ___ sushi in Japan?", ["Did / eat", "Have / eaten", "Are / eating", "Do / eat"], 1, "ever спрашивает об опыте: Have you ever eaten…?"),
    ],
  },
  {
    key: "present-perfect-continuous",
    group: "Present",
    name: "Present Perfect Continuous",
    formula: "have / has been + verb-ing",
    use: "Действие началось раньше и длится до сих пор или только что закончилось с видимым результатом.",
    example: "I have been waiting for the bus for ten minutes. — Я жду автобус уже десять минут.",
    questions: [
      q("I ___ for your message since noon.", ["wait", "am waiting", "have been waiting", "waited"], 2, "since noon + продолжается сейчас: have been waiting."),
      q("She is tired because she ___ all day.", ["works", "worked", "has been working", "is working"], 2, "Причина усталости сейчас — длительное действие до настоящего: has been working."),
      q("How long ___ they ___ English?", ["do / study", "have / been studying", "are / studying", "did / study"], 1, "How long + до настоящего: have they been studying…?"),
    ],
  },
  {
    key: "past-simple",
    group: "Past",
    name: "Past Simple",
    formula: "verb-ed / irregular form · did + base verb",
    use: "Завершённое действие в прошлом, обычно с понятным временем.",
    example: "We moved to Bilbao last year. — Мы переехали в Бильбао в прошлом году.",
    questions: [
      q("I ___ the meeting yesterday.", ["miss", "missed", "have missed", "am missing"], 1, "yesterday — завершённое прошлое: missed."),
      q("They ___ to Madrid last weekend.", ["go", "went", "have gone", "are going"], 1, "last weekend требует Past Simple; go → went."),
      q("What time ___ you get home?", ["do", "did", "have", "are"], 1, "Прошедший вопрос строим с did + base verb."),
    ],
  },
  {
    key: "past-continuous",
    group: "Past",
    name: "Past Continuous",
    formula: "was / were + verb-ing",
    use: "Процесс в определённый момент прошлого или фон для другого события.",
    example: "I was cooking when you called. — Я готовил, когда ты позвонил.",
    questions: [
      q("At 8 p.m. yesterday, I ___ dinner.", ["cooked", "was cooking", "have cooked", "cook"], 1, "Конкретный момент в прошлом и процесс: was cooking."),
      q("We ___ home when it started to rain.", ["walked", "were walking", "have walked", "walk"], 1, "Фон + короткое событие started: were walking."),
      q("What ___ she ___ when you arrived?", ["did / do", "was / doing", "has / done", "is / doing"], 1, "Действие в процессе в прошлом: was she doing?"),
    ],
  },
  {
    key: "past-perfect",
    group: "Past",
    name: "Past Perfect",
    formula: "had + past participle",
    use: "Одно действие произошло раньше другого момента в прошлом.",
    example: "The shop had closed before we arrived. — Магазин закрылся до того, как мы пришли.",
    questions: [
      q("The film ___ before we got there.", ["started", "had started", "has started", "was starting"], 1, "Сначала фильм начался, потом мы пришли: had started."),
      q("She was nervous because she ___ the email.", ["didn't read", "hadn't read", "hasn't read", "isn't reading"], 1, "Не прочитала до прошлого момента — hadn't read."),
      q("___ they ___ before they moved to Spain?", ["Did / travel", "Had / travelled", "Have / travelled", "Were / travelling"], 1, "Сначала путешествовали, потом переехали: Had they travelled…?"),
    ],
  },
  {
    key: "past-perfect-continuous",
    group: "Past",
    name: "Past Perfect Continuous",
    formula: "had been + verb-ing",
    use: "Длительное действие продолжалось до определённого момента в прошлом.",
    example: "They had been driving for hours before they stopped. — Они ехали несколько часов, прежде чем остановились.",
    questions: [
      q("He ___ for two hours before the doctor saw him.", ["waited", "was waiting", "had been waiting", "has been waiting"], 2, "Длительность до прошлого события: had been waiting."),
      q("We were exhausted because we ___ all morning.", ["walked", "had been walking", "have been walking", "are walking"], 1, "Причина в прошлом + длительность до неё: had been walking."),
      q("How long ___ you ___ before the lesson began?", ["did / wait", "were / waiting", "had / been waiting", "have / been waiting"], 2, "До момента lesson began — had you been waiting?"),
    ],
  },
  {
    key: "future-simple",
    group: "Future",
    name: "Future Simple",
    formula: "will + base verb",
    use: "Решение сейчас, обещание, прогноз или нейтральный факт о будущем.",
    example: "I will call you after the meeting. — Я позвоню тебе после встречи.",
    questions: [
      q("I think it ___ rain tomorrow.", ["will", "is", "does", "has"], 0, "Прогноз с I think: will rain."),
      q("Don't worry, I ___ you with this.", ["help", "will help", "am helping", "helped"], 1, "Решение/обещание сейчас: will help."),
      q("___ you send me the link later?", ["Do", "Will", "Are", "Have"], 1, "Вопрос о будущем: Will you send…?"),
    ],
  },
  {
    key: "future-continuous",
    group: "Future",
    name: "Future Continuous",
    formula: "will be + verb-ing",
    use: "Процесс в определённый момент будущего; вежливый вопрос о планах.",
    example: "This time tomorrow, I will be flying to London. — Завтра в это время я буду лететь в Лондон.",
    questions: [
      q("At 10 tomorrow, we ___ the new feature.", ["test", "will test", "will be testing", "have tested"], 2, "Процесс в конкретный момент завтра: will be testing."),
      q("This time next week, she ___ on the beach.", ["relaxes", "will relax", "will be relaxing", "has relaxed"], 2, "This time next week — длительный будущий процесс."),
      q("___ you ___ your laptop tonight?", ["Will / use", "Will / be using", "Do / use", "Are / using"], 1, "Вежливо уточняем план: Will you be using…?"),
    ],
  },
  {
    key: "future-perfect",
    group: "Future",
    name: "Future Perfect",
    formula: "will have + past participle",
    use: "Действие будет завершено к моменту в будущем.",
    example: "By Friday, I will have finished the course. — К пятнице я закончу курс.",
    questions: [
      q("By 6 p.m., I ___ the report.", ["finish", "will finish", "will have finished", "have finished"], 2, "By + будущий дедлайн: will have finished."),
      q("They ___ the apartment by next month.", ["will have found", "find", "will be finding", "have found"], 0, "Результат к будущему моменту: will have found."),
      q("___ she ___ the course by July?", ["Will / finish", "Will / have finished", "Has / finished", "Is / finishing"], 1, "К сроку by July — Will she have finished…?"),
    ],
  },
  {
    key: "future-perfect-continuous",
    group: "Future",
    name: "Future Perfect Continuous",
    formula: "will have been + verb-ing",
    use: "Длительность действия к определённой точке в будущем.",
    example: "In May, I will have been living here for a year. — В мае будет год, как я здесь живу.",
    questions: [
      q("In August, I ___ English for six months.", ["will study", "will have studied", "will have been studying", "have been studying"], 2, "Подчёркиваем длительность к August: will have been studying."),
      q("By noon, they ___ for five hours.", ["will drive", "will have been driving", "will have driven", "are driving"], 1, "For five hours к будущему моменту — will have been driving."),
      q("How long ___ you ___ here by December?", ["will / work", "will / have worked", "will / have been working", "have / been working"], 2, "Длительность до будущего срока: will you have been working?"),
    ],
  },
];

function q(text, answers, correct, explanation) {
  return { text, answers, correct, explanation };
}

const STORAGE_KEY = "tense-day-progress-v1";
const DAY = 24 * 60 * 60 * 1000;
let state = loadState();
let session = null;

const dashboard = document.querySelector("#dashboard");
const lesson = document.querySelector("#lesson");
const quiz = document.querySelector("#quiz");

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;
  const { action, key, index } = trigger.dataset;

  if (action === "home") renderDashboard();
  if (action === "start-daily") startDailySession();
  if (action === "focus-tense") startFocusSession(key);
  if (action === "open-tense") renderLesson(key);
  if (action === "answer") answerQuestion(Number(index));
  if (action === "next") nextQuestion();
  if (action === "reset") resetProgress();
});

function defaultState() {
  return {
    diagnosed: false,
    totalAnswered: 0,
    totalCorrect: 0,
    sessions: 0,
    streak: 0,
    lastStudyDate: null,
    tenseStats: Object.fromEntries(TENSES.map((tense) => [tense.key, { total: 0, correct: 0, level: 0, dueAt: 0 }])),
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return defaultState();
    const fresh = defaultState();
    return {
      ...fresh,
      ...saved,
      tenseStats: Object.fromEntries(TENSES.map((tense) => [tense.key, { ...fresh.tenseStats[tense.key], ...(saved.tenseStats?.[tense.key] || {}) }])),
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showOnly(page) {
  [dashboard, lesson, quiz].forEach((section) => section.classList.add("hidden"));
  page.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function accuracy(stat) {
  return stat.total ? Math.round((stat.correct / stat.total) * 100) : null;
}

function overallAccuracy() {
  return state.totalAnswered ? Math.round((state.totalCorrect / state.totalAnswered) * 100) : 0;
}

function learnedCount() {
  return Object.values(state.tenseStats).filter((stat) => stat.level >= 2).length;
}

function getFocusTense() {
  return TENSES.map((tense) => ({ tense, stat: state.tenseStats[tense.key] }))
    .sort((a, b) => focusScore(b.stat) - focusScore(a.stat))[0]?.tense;
}

function focusScore(stat) {
  const weak = stat.total ? 1 - stat.correct / stat.total : 0.85;
  const due = !stat.dueAt || stat.dueAt <= Date.now() ? 1 : 0;
  return weak + due + (stat.level === 0 ? 0.35 : 0);
}

function levelDot(stat) {
  const level = Math.min(3, stat.level);
  return `<span class="level-dot ${level ? `level-${level}` : ""}">${stat.level}</span>`;
}

function renderDashboard() {
  session = null;
  const focus = getFocusTense();
  const isFirstRun = !state.diagnosed;
  const planTitle = isFirstRun ? "Сначала — быстрая диагностика" : "Твой короткий урок на сегодня";
  const planText = isFirstRun
    ? "12 коротких вопросов: по одному на каждое время. Потом тренажёр сам будет чаще возвращать слабые темы."
    : `8 вопросов, которые сейчас дадут максимум пользы. В фокусе — ${focus.name}.`;
  const buttonText = isFirstRun ? "Пройти диагностику · 8 мин" : "Начать 8 вопросов · 6 мин";
  const accuracyText = state.totalAnswered ? `${overallAccuracy()}%` : "—";
  const progress = Math.round((learnedCount() / TENSES.length) * 100);

  dashboard.innerHTML = `
    <section class="hero">
      <p class="eyebrow">10 минут в день</p>
      <h1>${planTitle}</h1>
      <p class="subtitle">${planText}</p>
      <button class="primary-button" type="button" data-action="start-daily">${buttonText}</button>
      <span class="hero-orbit" aria-hidden="true"></span><span class="hero-dot" aria-hidden="true"></span>
    </section>

    <section class="stat-row" aria-label="Твой прогресс">
      <article class="stat-card"><span class="stat-number">${state.streak}</span><span class="stat-label">дней подряд</span></article>
      <article class="stat-card"><span class="stat-number">${accuracyText}</span><span class="stat-label">точность ответов</span></article>
      <article class="stat-card"><span class="stat-number">${learnedCount()}/12</span><span class="stat-label">времён закреплено</span></article>
    </section>

    <section class="focus-card">
      <p class="eyebrow">Следующий фокус</p>
      <div class="focus-line"><span class="focus-swatch"></span><strong>${focus.name}</strong></div>
      <p class="section-note">${focus.use}</p>
      <button class="secondary-button" type="button" data-action="focus-tense" data-key="${focus.key}">Потренировать это время</button>
    </section>

    <div class="section-heading"><h2>Карта времён</h2><p class="section-note">Уровень 2 — можно редко повторять</p></div>
    <div class="progress-track" aria-label="Общий прогресс"><div class="progress-fill" style="width: ${progress}%"></div></div>
    <div class="tense-grid" style="margin-top: 14px">
      ${TENSES.map((tense) => {
        const stat = state.tenseStats[tense.key];
        const statText = stat.total ? `${accuracy(stat)}% · ${stat.total} ответов` : "Ещё не проверяли";
        return `<button class="tense-card" type="button" data-action="open-tense" data-key="${tense.key}">
          <span class="tense-card-top"><small>${tense.group}</small>${levelDot(stat)}</span>
          <strong>${tense.name}</strong>
          <small>${statText}</small>
        </button>`;
      }).join("")}
    </div>
  `;
  showOnly(dashboard);
}

function renderLesson(key) {
  const tense = TENSES.find((item) => item.key === key);
  if (!tense) return;
  const stat = state.tenseStats[key];
  lesson.innerHTML = `
    <button class="back-button" type="button" data-action="home">← К карте времён</button>
    <article class="lesson-card">
      <span class="lesson-tag">${tense.group} · уровень ${stat.level}</span>
      <h1>${tense.name}</h1>
      <p class="subtitle">${tense.use}</p>
      <div class="formula">${tense.formula}</div>
      <p class="example">${tense.example}</p>
      <div class="lesson-actions">
        <button class="primary-button" type="button" data-action="focus-tense" data-key="${tense.key}">Три вопроса по теме</button>
        <button class="secondary-button" type="button" data-action="home">К прогрессу</button>
      </div>
    </article>
  `;
  showOnly(lesson);
}

function startDailySession() {
  if (!state.diagnosed) {
    const questions = shuffle(TENSES.map((tense) => questionFor(tense, 0)));
    startSession("diagnostic", "Стартовая диагностика", questions);
    return;
  }

  const selected = [...TENSES]
    .map((tense) => ({ tense, score: focusScore(state.tenseStats[tense.key]) + Math.random() * 0.65 }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ tense }) => ({ tense, question: questionFor(tense) }));
  startSession("daily", "Ежедневная практика", shuffle(selected));
}

function startFocusSession(key) {
  const tense = TENSES.find((item) => item.key === key);
  if (!tense) return;
  const questions = shuffle(tense.questions.map((item) => ({ tense, ...item })));
  startSession("focus", `Фокус: ${tense.name}`, questions);
}

function questionFor(tense, forcedIndex) {
  const index = Number.isInteger(forcedIndex) ? forcedIndex : Math.floor(Math.random() * tense.questions.length);
  return { tense, ...tense.questions[index] };
}

function startSession(type, title, questions) {
  session = { type, title, questions, index: 0, correct: 0, answered: false, completed: false };
  renderQuiz();
}

function renderQuiz() {
  if (!session) return renderDashboard();
  if (session.completed) return renderResult();

  const question = session.questions[session.index];
  const answerButtons = question.answers.map((answer, index) => {
    let stateClass = "";
    if (session.answered && index === question.correct) stateClass = "correct";
    if (session.answered && index === session.selected && index !== question.correct) stateClass = "incorrect";
    return `<button class="answer ${stateClass}" type="button" data-action="answer" data-index="${index}" ${session.answered ? "disabled" : ""}>${answer}</button>`;
  }).join("");
  const feedback = session.answered
    ? `<div class="feedback"><strong>${session.selected === question.correct ? "Верно." : "Почти — запомни этот паттерн."}</strong>${question.explanation}</div>
       <div class="next-row"><button class="primary-button" type="button" data-action="next">${session.index === session.questions.length - 1 ? "Посмотреть результат" : "Следующий вопрос"}</button></div>`
    : "";

  quiz.innerHTML = `
    <div class="quiz-wrap">
      <button class="back-button" type="button" data-action="home">← Закончить позже</button>
      <div class="quiz-progress"><span>${session.title}</span><span>${session.index + 1} / ${session.questions.length}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width: ${Math.round((session.index / session.questions.length) * 100)}%"></div></div>
      <article class="quiz-card" style="margin-top: 14px">
        <span class="question-tense">${question.tense.name}</span>
        <h2 class="question">${question.text}</h2>
        <div class="answers">${answerButtons}</div>
        ${feedback}
      </article>
    </div>
  `;
  showOnly(quiz);
}

function answerQuestion(index) {
  if (!session || session.answered) return;
  const question = session.questions[session.index];
  const correct = index === question.correct;
  session.selected = index;
  session.answered = true;
  if (correct) session.correct += 1;
  recordAnswer(question.tense.key, correct);
  saveState();
  renderQuiz();
}

function nextQuestion() {
  if (!session?.answered) return;
  if (session.index === session.questions.length - 1) {
    session.completed = true;
    finishSession();
    return;
  }
  session.index += 1;
  session.answered = false;
  session.selected = null;
  renderQuiz();
}

function recordAnswer(key, correct) {
  const stat = state.tenseStats[key];
  state.totalAnswered += 1;
  stat.total += 1;
  if (correct) {
    state.totalCorrect += 1;
    stat.correct += 1;
    stat.level = Math.min(4, stat.level + 1);
  } else {
    stat.level = Math.max(0, stat.level - 1);
  }
  const intervals = [1, 1, 3, 7, 14];
  stat.dueAt = Date.now() + intervals[stat.level] * DAY;
}

function finishSession() {
  state.sessions += 1;
  if (session.type === "diagnostic") state.diagnosed = true;
  updateStreak();
  saveState();
  renderResult();
}

function renderResult() {
  const score = Math.round((session.correct / session.questions.length) * 100);
  const message = score >= 85
    ? "Отлично. Завтра тренажёр вернёт вопросы чуть позже — закрепим, а не будем гонять их подряд."
    : score >= 55
      ? "Нормальный рабочий результат. Слабые времена уже поставлены в ближайшее повторение."
      : "Хороший старт: ошибки — это карта того, что надо закрепить. Завтра будут короткие повторы.";
  quiz.innerHTML = `
    <article class="result-card">
      <div class="result-mark">✓</div>
      <p class="eyebrow">Сессия завершена</p>
      <h2>${session.title}</h2>
      <div class="result-score">${session.correct} / ${session.questions.length}</div>
      <p class="result-note">${message}</p>
      <button class="primary-button" type="button" data-action="home">К прогрессу</button>
    </article>
  `;
  showOnly(quiz);
}

function updateStreak() {
  const today = localDateKey();
  if (state.lastStudyDate === today) return;
  const yesterday = localDateKey(new Date(Date.now() - DAY));
  state.streak = state.lastStudyDate === yesterday ? state.streak + 1 : 1;
  state.lastStudyDate = today;
}

function localDateKey(date = new Date()) {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().slice(0, 10);
}

function resetProgress() {
  if (!confirm("Сбросить весь прогресс? Это действие нельзя отменить.")) return;
  state = defaultState();
  localStorage.removeItem(STORAGE_KEY);
  toast("Прогресс сброшен. Можно начать заново.");
  renderDashboard();
}

function toast(message) {
  const element = document.querySelector("#toast-template").content.firstElementChild.cloneNode(true);
  element.textContent = message;
  document.body.append(element);
  setTimeout(() => element.remove(), 2600);
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

renderDashboard();

