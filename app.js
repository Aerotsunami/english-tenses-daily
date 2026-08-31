Warning: truncated output (original token count: 57064)
Total output lines: 5523

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

const TENSE_DETAILS = {
  "present-simple": {
    forms: {
      affirmative: "I / you / we / they + V · he / she / it + V-s",
      negative: "do not (don't) / does not (doesn't) + V",
      question: "Do / Does + subject + V?",
    },
    useCases: ["привычки и регулярные действия", "факты и общие истины", "постоянные состояния", "расписания транспорта и событий"],
    markers: ["always", "usually", "often", "sometimes", "rarely", "never", "every day", "on Mondays"],
    mistake: { wrong: "He work here.", right: "He works here.", note: "В he/she/it добавляем -s. После does и doesn't снова ставим начальную форму: Does he work?" },
    examples: [
      ["I work from home most days.", "Я работаю из дома большую часть недели."],
      ["She doesn't drink coffee.", "Она не пьёт кофе."],
      ["Does the shop open at nine?", "Магазин открывается в девять?"],
      ["The train leaves at 7:10.", "Поезд отправляется в 7:10."],
    ],
  },
  "present-continuous": {
    forms: {
      affirmative: "am / is / are + V-ing",
      negative: "am / is / are + not + V-ing",
      question: "Am / Is / Are + subject + V-ing?",
    },
    useCases: ["действие прямо сейчас", "временная ситуация текущего периода", "твёрдая договорённость на ближайшее будущее", "раздражающая привычка с always"],
    markers: ["now", "right now", "at the moment", "currently", "Look!", "Listen!", "today", "this week"],
    mistake: { wrong: "I'm knowing him well.", right: "I know him well.", note: "Глаголы состояния know, want, like, believe обычно не ставятся в Continuous." },
    examples: [
      ["I'm working now.", "Я сейчас работаю."],
      ["She isn't sleeping.", "Она не спит."],
      ["Are you listening to me?", "Ты меня слушаешь?"],
      ["I'm meeting Marta tomorrow at five.", "Завтра в пять я встречаюсь с Мартой."],
    ],
  },
  "present-perfect": {
    forms: {
      affirmative: "have / has + V3",
      negative: "have not (haven't) / has not (hasn't) + V3",
      question: "Have / Has + subject + V3?",
    },
    useCases: ["прошлое действие с результатом сейчас", "жизненный опыт без точной даты", "состояние от прошлого до настоящего", "результат внутри ещё не закончившегося периода"],
    markers: ["just", "already", "yet", "ever", "never", "since", "for", "recently", "lately", "so far"],
    mistake: { wrong: "I have seen him yesterday.", right: "I saw him yesterday.", note: "Точное прошлое - yesterday, ago, last year, in 2020 - требует Past Simple." },
    examples: [
      ["I've lost my keys.", "Я потерял ключи, и сейчас их нет."],
      ["She hasn't finished yet.", "Она ещё не закончила."],
      ["Have you ever been to London?", "Ты когда-нибудь был в Лондоне?"],
      ["I've read two books this week.", "На этой неделе я прочитал две книги."],
    ],
  },
  "present-perfect-continuous": {
    forms: {
      affirmative: "have / has been + V-ing",
      negative: "haven't / hasn't been + V-ing",
      question: "Have / Has + subject + been + V-ing?",
    },
    useCases: ["действие началось раньше и всё ещё длится", "важна длительность процесса", "действие только закончилось и оставило видимый след", "ответ на how long"],
    markers: ["for two hours", "since morning", "all day", "how long", "lately", "recently"],
    mistake: { wrong: "I've been knowing him for years.", right: "I've known him for years.", note: "Глаголы состояния не идут в Continuous даже здесь. Используйте Present Perfect." },
    examples: [
      ["I've been waiting for two hours.", "Я жду уже два часа."],
      ["She hasn't been sleeping well.", "В последнее время она плохо спит."],
      ["How long have you been learning English?", "Как долго ты учишь английский?"],
      ["I'm tired - I've been running.", "Я устал - я бегал."],
    ],
  },
  "past-simple": {
    forms: {
      affirmative: "V2: V-ed или неправильная форма",
      negative: "did not (didn't) + V",
      question: "Did + subject + V?",
    },
    useCases: ["завершённое действие в известный момент прошлого", "цепочка событий в рассказе", "прошлые привычки", "завершённый период"],
    markers: ["yesterday", "ago", "last week", "last year", "in 2020", "when?", "the other day"],
    mistake: { wrong: "Did you saw it?", right: "Did you see it?", note: "После did и didn't ставим начальную форму: прошедшее уже выражено вспомогательным глаголом." },
    examples: [
      ["We moved here two years ago.", "Мы переехали сюда два года назад."],
      ["He didn't call me.", "Он мне не позвонил."],
      ["Did you see that film?", "Ты видел тот фильм?"],
      ["She came home, ate and went to bed.", "Она пришла домой, поела и легла спать."],
    ],
  },
  "past-continuous": {
    forms: {
      affirmative: "was / were + V-ing",
      negative: "was not (wasn't) / were not (weren't) + V-ing",
      question: "Was / Were + subject + V-ing?",
    },
    useCases: ["процесс в конкретный момент прошлого", "фон для короткого действия в Past Simple", "два параллельных процесса", "действие, тянувшееся в прошлом"],
    markers: ["at 5 yesterday", "while", "when", "all evening", "all day"],
    mistake: { wrong: "When you called, I cooked dinner.", right: "When you called, I was cooking dinner.", note: "Если действие уже было в процессе, нужен Continuous. Past Simple означал бы последовательность." },
    examples: [
      ["I was watching TV at eight.", "В восемь я смотрел телевизор."],
      ["They weren't listening.", "Они не слушали."],
      ["What were you doing at noon?", "Что ты делал в полдень?"],
      ["While I was cooking, he was working.", "Пока я готовил, он работал."],
    ],
  },
  "past-perfect": {
    forms: {
      affirmative: "had + V3",
      negative: "had not (hadn't) + V3",
      question: "Had + subject + V3?",
    },
    useCases: ["действие раньше другого прошлого действия", "результат уже существовал к моменту в прошлом", "объяснение порядка событий"],
    markers: ["by the time", "before", "after", "already", "never before"],
    mistake: { wrong: "Yesterday I had gone to the gym.", right: "Yesterday I went to the gym.", note: "Past Perfect нужен только при второй прошлой точке, относительно которой одно действие произошло раньше." },
    examples: [
      ["The train had left before we arrived.", "Поезд ушёл до нашего приезда."],
      ["I hadn't seen it before.", "Я раньше этого не видел."],
      ["Had she left when you came?", "Она уже ушла, когда ты пришёл?"],
      ["By the time he called, we had eaten.", "К его звонку мы уже поели."],
    ],
  },
  "past-perfect-continuous": {
    forms: {
      affirmative: "had been + V-ing",
      negative: "hadn't been + V-ing",
      question: "Had + subject + been + V-ing?",
    },
    useCases: ["длительный процесс до момента в прошлом", "сколько действие успело продлиться", "объяснение состояния или результата в прошлом"],
    markers: ["for ... before", "by the time", "all day before", "how long"],
    mistake: { wrong: "He was tired because he worked all day.", right: "He was tired because he had been working all day.", note: "Если процесс длился до прошлого результата и объясняет его, используйте had been + V-ing." },
    examples: [
      ["I had been working for hours.", "Я работал уже несколько часов."],
      ["He hadn't been sleeping well.", "До этого он плохо спал."],
      ["Had you been waiting long?", "Ты долго ждал?"],
      ["His eyes were red - he had been crying.", "Глаза были красные - до этого он плакал."],
    ],
  },
  "future-simple": {
    forms: {
      affirmative: "will + V",
      negative: "will not (won't) + V",
      question: "Will + subject + V?",
    },
    useCases: ["спонтанное решение", "обещание или предложение помощи", "предсказание-мнение", "нейтральный факт о будущем"],
    markers: ["tomorrow", "soon", "next week", "in an hour", "probably", "I think", "maybe"],
    mistake: { wrong: "When I will come home, I'll call you.", right: "When I come home, I'll call you.", note: "После when, if, as soon as, before и until будущее выражается Present Simple." },
    examples: [
      ["I'll help you.", "Я помогу тебе."],
      ["It won't rain tomorrow.", "Завтра дождя не будет."],
      ["Will you come with us?", "Ты пойдёшь с нами?"],
      ["I think she will win.", "Думаю, она победит."],
    ],
  },
  "future-continuous": {
    forms: {
      affirmative: "will be + V-ing",
      negative: "won't be + V-ing",
      question: "Will + subject + be + V-ing?",
    },
    useCases: ["процесс в конкретный момент будущего", "ожидаемый ход событий", "вежливый вопрос о планах"],
    markers: ["this time tomorrow", "at 10 tomorrow", "all day tomorrow"],
    mistake: { wrong: "Don't call at six, I'll work.", right: "Don't call at six, I'll be working.", note: "Если в этот момент действие будет в процессе, нужен will be + V-ing." },
    examples: [
      ["I'll be flying to Rome.", "Я буду лететь в Рим."],
      ["I won't be working at six.", "В шесть я не буду работать."],
      ["Will you be using the car?", "Ты будешь пользоваться машиной?"],
      ["This time tomorrow, we'll be having lunch.", "Завтра в это время мы будем обедать."],
    ],
  },
  "future-perfect": {
    forms: {
      affirmative: "will have + V3",
      negative: "won't have + V3",
      question: "Will + subject + have + V3?",
    },
    useCases: ["результат будет готов к будущему моменту", "действие завершится до дедлайна", "подведение будущего итога"],
    markers: ["by Friday", "by 2030", "by the end of", "by the time you arrive"],
    mistake: { wrong: "I will finish by the time you arrive.", right: "I will have finished by the time you arrive.", note: "Если подчёркивается уже готовый результат к будущей точке, используйте will have + V3." },
    examples: [
      ["I'll have finished by Friday.", "К пятнице я закончу."],
      ["She won't have arrived by noon.", "К полудню она ещё не приедет."],
      ["Will you have done it by Monday?", "Ты закончишь это к понедельнику?"],
      ["We'll have eaten by the time you arrive.", "К твоему приходу мы уже поедим."],
    ],
  },
  "future-perfect-continuous": {
    forms: {
      affirmative: "will have been + V-ing",
      negative: "won't have been + V-ing",
      question: "Will + subject + have been + V-ing?",
    },
    useCases: ["длительность процесса к будущему моменту", "ответ на вопрос сколько времени уже будет длиться действие"],
    markers: ["by June ... for a year", "by 2030 ... for ten years", "how long ... by"],
    mistake: { wrong: "By May I will live here for a year.", right: "By May I will have been living here for a year.", note: "Будущая точка + накопленная длительность требуют will have been + V-ing." },
    examples: [
      ["By May, I'll have been living here for a year.", "К маю будет год, как я здесь живу."],
      ["He won't have been working here for long.", "К тому моменту он будет работать здесь недолго."],
      ["Will you have been studying for a year by June?", "К июню будет год, как ты учишься?"],
      ["By noon, they will have been driving for five hours.", "К полудню они будут ехать уже пять часов."],
    ],
  },
};

const EXTRA_QUESTIONS = {
  "present-simple": [
    q("My colleague usually ___ the first meeting.", ["leads", "is leading", "led", "has led"], 0, "usually показывает регулярность; colleague = he/she, поэтому leads."),
    q("The museum ___ at ten on Sundays.", ["open", "opens", "is opening", "opened"], 1, "Расписание выражаем Present Simple: opens."),
    q("He doesn't ___ meat.", ["eats", "eat", "eating", "ate"], 1, "После doesn't глагол возвращается в начальную форму: eat."),
  ],
  "present-continuous": [
    q("Look! The bus ___.", ["comes", "is coming", "came", "has come"], 1, "Look! указывает на процесс прямо сейчас: is coming."),
    q("I ___ from a coworking space today.", ["work", "am working", "worked", "have worked"], 1, "today здесь означает временную ситуацию: am working."),
    q("She ___ the client tomorrow at four.", ["meets", "is meeting", "met", "has met"], 1, "Твёрдая договорённость на ближайшее будущее: is meeting."),
  ],
  "present-perfect": [
    q("We ___ three tests so far.", ["run", "ran", "have run", "are running"], 2, "so far + накопленный результат: have run."),
    q("He hasn't replied ___.", ["already", "yet", "yesterday", "ago"], 1, "yet ставится в конце отрицания Present Perfect."),
    q("I ___ her since university.", ["know", "knew", "have known", "have been knowing"], 2, "since + состояние до сих пор; know не используется в Continuous: have known."),
  ],
  "present-perfect-continuous": [
    q("It ___ since early morning.", ["rains", "has rained", "has been raining", "rained"], 2, "Процесс продолжается с утра: has been raining."),
    q("How long ___ you ___ on this project?", ["do / work", "have / been working", "did / work", "are / work"], 1, "How long спрашивает о длительности до настоящего."),
    q("Your hands are dirty. ___ you ___ the bike?", ["Did / repair", "Have / been repairing", "Are / repair", "Do / repair"], 1, "Видимый след недавнего процесса: Have you been repairing…?"),
  ],
  "past-simple": [
    q("We ___ the prototype last Friday.", ["launch", "launched", "have launched", "were launching"], 1, "last Friday - точное завершённое прошлое: launched."),
    q("She didn't ___ the message.", ["saw", "seen", "see", "seeing"], 2, "После didn't используем начальную форму: see."),
    q("Where ___ you live in 2020?", ["do", "did", "have", "were"], 1, "in 2020 задаёт прошлый период: did you live?"),
  ],
  "past-continuous": [
    q("While they ___, the lights went out.", ["talked", "were talking", "have talked", "had talked"], 1, "Длительный фон + короткое событие: were talking."),
    q("At midnight, we ___.", ["still drove", "were still driving", "have driven", "drive"], 1, "Процесс в конкретный прошлый момент: were still driving."),
    q("___ it ___ when you left?", ["Did / rain", "Was / raining", "Has / rained", "Is / raining"], 1, "Погода в процессе в момент ухода: Was it raining?"),
  ],
  "past-perfect": [
    q("By the time I opened the app, the sale ___.", ["ended", "had ended", "has ended", "was ending"], 1, "Распродажа закончилась раньше другой прошлой точки: had ended."),
    q("I couldn't pay because I ___ my wallet.", ["forgot", "had forgotten", "have forgotten", "was forgetting"], 1, "Забыл кошелёк до момента оплаты: had forgotten."),
    q("Had you ever ___ Bilbao before that trip?", ["visit", "visited", "visiting", "visits"], 1, "После had нужна третья форма; у правильного глагола visited."),
  ],
  "past-perfect-continuous": [
    q("She was exhausted because she ___ all night.", ["worked", "was working", "had been working", "has worked"], 2, "Длительный процесс объясняет прошлый результат: had been working."),
    q("They ___ for long before the bus arrived.", ["didn't wait", "hadn't been waiting", "weren't wait", "haven't waited"], 1, "Длительность до события в прошлом: hadn't been waiting."),
    q("How long ___ he ___ there before he moved?", ["did / live", "had / been living", "was / live", "has / lived"], 1, "How long до прошлой точки: had he been living?"),
  ],
  "future-simple": [
    q("The phone is ringing. I ___ it.", ["answer", "will answer", "am answering yesterday", "have answered"], 1, "Спонтанное решение в момент речи: will answer."),
    q("I think the test ___ useful.", ["is being", "will be", "was", "has been"], 1, "I think + прогноз-мнение: will be."),
    q("When I ___ home, I'll text you.", ["will get", "get", "got", "will be getting"], 1, "После when будущее выражается Present Simple: get."),
  ],
  "future-continuous": [
    q("This time tomorrow, I ___ over the Atlantic.", ["fly", "will fly", "will be flying", "will have flown"], 2, "Процесс в будущий момент: will be flying."),
    q("Don't message at nine; we ___ the results.", ["discuss", "will discuss", "will be discussing", "have discussed"], 2, "В девять обсуждение будет в процессе: will be discussing."),
    q("___ you ___ us for dinner?", ["Will / be joining", "Do / join", "Have / joined", "Did / join"], 0, "Вежливый вопрос о планах: Will you be joining…?"),
  ],
  "future-perfect": [
    q("By next week, we ___ the analysis.", ["finish", "will finish", "will have finished", "are finishing"], 2, "Результат к будущему дедлайну: will have finished."),
    q("She ___ by the time the meeting starts.", ["will arrive", "will have arrived", "arrived", "has arrived"], 1, "К началу встречи прибытие уже завершится: will have arrived."),
    q("Will they ___ the migration by Friday?", ["complete", "have completed", "be completing", "completed"], 1, "Вопрос Future Perfect: Will + subject + have + V3."),
  ],
  "future-perfect-continuous": [
    q("By December, I ___ here for two years.", ["will work", "will have worked", "will have been working", "am working"], 2, "Длительность к будущей точке: will have been working."),
    q("Next month, she ___ English for a year.", ["studies", "will have been studying", "will study", "has studied"], 1, "К следующему месяцу накопится год процесса: will have been studying."),
    q("How long ___ they ___ by the end of the project?", ["will / work", "will / have been working", "have / worked", "are / working"], 1, "Вопрос о длительности к будущей точке: will they have been working?"),
  ],
};

TENSES.forEach((tense) => {
  Object.assign(tense, TENSE_DETAILS[tense.key]);
  tense.questions.push(...EXTRA_QUESTIONS[tense.key]);
});

const IDENTIFY_ITEMS = {
  "present-simple": [
    ["My team reviews the dashboard every Monday.", "every Monday показывает повторяющееся действие; reviews - форма Present Simple для he/she/it."],
    ["Water boils at 100°C.", "Это общий факт, поэтому используется Present Simple."],
    ["The store opens at eight tomorrow.", "Несмотря на tomorrow, речь о расписании - его выражают Present Simple."],
  ],
  "present-continuous": [
    ["I'm reviewing the results right now.", "right now и am + V-ing прямо указывают на Present Continuous."],
    ["She's working from Madrid this week.", "this week здесь описывает временную ситуацию; форма is working - Present Continuous."],
    ["We're meeting the designer tomorrow at five.", "Present Continuous может выражать твёрдую договорённость на ближайшее будущее."],
  ],
  "present-perfect": [
    ["I've just sent the report.", "just и результат к настоящему моменту; have sent - Present Perfect."],
    ["She has visited London twice.", "Жизненный опыт без точной даты выражен через has + V3."],
    ["We have known each other since school.", "since school и состояние, продолжающееся до сих пор; know не ставится в Continuous."],
  ],
  "present-perfect-continuous": [
    ["I've been testing the app since morning.", "since morning подчёркивает длительность до настоящего; have been testing."],
    ["It has been raining all day.", "Процесс продолжается весь день: has been + V-ing."],
    ["How long have you been waiting?", "how long спрашивает о длительности процесса до настоящего момента."],
  ],
  "past-simple": [
    ["They moved to Berlin last year.", "last year - завершённый прошлый период; moved - Past Simple."],
    ["I saw him yesterday.", "yesterday - точное прошлое; saw - вторая форма глагола see."],
    ["He came home, ate dinner and went to bed.", "Цепочка завершённых прошлых событий выражена Past Simple."],
  ],
  "past-continuous": [
    ["At eight p.m. I was cooking dinner.", "В конкретный момент прошлого действие находилось в процессе: was cooking."],
    ["We were walking when it started to rain.", "were walking - длительный фон; started - короткое событие."],
    ["While she was reading, I was working.", "Два параллельных процесса в прошлом выражены was + V-ing."],
  ],
  "past-perfect": [
    ["The train had left before we arrived.", "Поезд ушёл раньше другого прошлого действия; had left - Past Perfect."],
    ["By the time I called, she had finished.", "К моменту звонка результат уже был готов: had + V3."],
    ["He couldn't pay because he had forgotten his wallet.", "Сначала он забыл кошелёк, потом не смог заплатить - Past Perfect показывает более раннее действие."],
  ],
  "past-perfect-continuous": [
    ["She had been waiting for two hours before the doctor saw her.", "Процесс длился два часа до другого момента в прошлом: had been waiting."],
    ["His eyes were red because he had been crying.", "Длительный процесс до прошлого результата объясняет красные глаза."],
    ["How long had they been living there before they moved?", "how long + длительность до прошлой точки: had been living."],
  ],
  "future-simple": [
    ["I think he will win.", "I think показывает прогноз-мнение; will + V - Future Simple."],
    ["The phone is ringing - I'll answer it.", "Решение принято прямо в момент речи, поэтому используется will."],
    ["Don't worry, I won't forget.", "Обещание о будущем выражено через won't + V."],
  ],
  "future-continuous": [
    ["This time tomorrow I'll be flying to Rome.", "this time tomorrow и will be + V-ing обозначают процесс в будущем моменте."],
    ["At ten tomorrow we'll be presenting the roadmap.", "В десять презентация будет идти: will be presenting."],
    ["Will you be using the car tonight?", "Вежливый вопрос о планах построен как Will + subject + be + V-ing."],
  ],
  "future-perfect": [
    ["By Friday, I'll have finished the report.", "by Friday задаёт будущий дедлайн; результат будет готов к нему."],
    ["They will have built the bridge by 2030.", "will have + V3 показывает завершённый результат к 2030 году."],
    ["Will she have arrived by noon?", "Вопрос о результате к будущему моменту - Future Perfect."],
  ],
  "future-perfect-continuous": [
    ["By May, I'll have been living here for a year.", "К будущей точке накопится год длительности: will have been living."],
    ["At noon, they will have been driving for five hours.", "К полудню процесс будет длиться уже пять часов."],
    ["How long will you have been working here by December?", "Вопрос о длительности к будущей точке построен в Future Perfect Continuous."],
  ],
};

const IDENTIFY_DISTRACTORS = {
  "present-simple": ["present-continuous", "present-perfect", "past-simple"],
  "present-continuous": ["present-simple", "past-continuous", "present-perfect-continuous"],
  "present-perfect": ["past-simple", "present-perfect-continuous", "past-perfect"],
  "present-perfect-continuous": ["present-perfect", "present-continuous", "past-perfect-continuous"],
  "past-simple": ["past-continuous", "present-perfect", "past-perfect"],
  "past-continuous": ["past-simple", "present-continuous", "past-perfect-continuous"],
  "past-perfect": ["past-simple", "present-perfect", "past-perfect-continuous"],
  "past-perfect-continuous": ["past-continuous", "present-perfect-continuous", "past-perfect"],
  "future-simple": ["future-continuous", "future-perfect", "present-simple"],
  "future-continuous": ["future-simple", "future-perfect", "present-continuous"],
  "future-perfect": ["future-simple", "future-continuous", "past-perfect"],
  "future-perfect-continuous": ["future-continuous", "future-perfect", "present-perfect-continuous"],
};

const GERUND_INFINITIVE_ITEMS = [
  gi("I enjoy ___ from home.", ["working", "to work", "work", "worked"], 0, "I enjoy working from home.", "После enjoy используем герундий: enjoy doing something.…37064 tokens truncated… помню уже произошедшее действие.</span></div>
        <div class="meaning-pair"><strong>He stopped smoking.</strong><span>Он перестал курить.</span><strong>He stopped to smoke.</strong><span>Он остановился, чтобы покурить.</span></div>
      </div>

      <aside class="principle-box"><strong>Отрицание:</strong> ставь not перед нужной формой — <em>try not to be late</em>, но <em>recommend not worrying</em>.</aside>

      <div class="lesson-actions">
        <button class="primary-button" type="button" data-action="start-gerund">Начать 16 заданий</button>
        <button class="secondary-button" type="button" data-action="home">К прогрессу</button>
      </div>
    </article>
  `;
  showOnly(guide);
}

function renderPhraseGuide() {
  const categories = [...new Set(PHRASE_ITEMS.map((item) => item.category))];
  guide.innerHTML = `
    <button class="back-button" type="button" data-action="home">← К тренировке</button>
    <article class="lesson-card guide-page phrase-guide">
      <span class="lesson-tag">Phrasal verbs & expressions</span>
      <h1>Библиотека речевых оборотов</h1>
      <p class="subtitle">${PHRASE_ITEMS.length} примеров из повседневной речи. Запоминай оборот целиком, но форму первого глагола меняй по времени предложения.</p>

      <aside class="principle-box">
        <strong>Алгоритм:</strong> 1) пойми смысл ситуации; 2) найди маркер времени или порядок событий; 3) выбери время; 4) измени только глагольную часть оборота: <em>run out → ran out → have run out</em>. Частицы <em>up, out, off, after</em> не меняются.
      </aside>

      <div class="phrase-category-list">
        ${categories.map((category, categoryIndex) => {
          const categoryItems = PHRASE_ITEMS.filter((item) => item.category === category);
          return `<details class="phrase-category" ${categoryIndex === 0 ? "open" : ""}>
            <summary><span>${category}</span><small>${categoryItems.length} примеров</small></summary>
            <div class="phrase-grid">
              ${categoryItems.map((item) => {
                const tense = TENSES.find((entry) => entry.key === item.tenseKey);
                return `<article class="phrase-card">
                  <div><strong>${item.base}</strong><span>${item.meaning}</span></div>
                  <p>${phraseComplete(item)}</p>
                  <small>${tense.name}</small>
                </article>`;
              }).join("")}
            </div>
          </details>`;
        }).join("")}
      </div>

      <div class="lesson-actions">
        <button class="primary-button" type="button" data-action="start-phrases">Начать 14 заданий</button>
        <button class="secondary-button" type="button" data-action="home">К прогрессу</button>
      </div>
    </article>
  `;
  showOnly(guide);
}

function renderArticleGuide() {
  const groups = [
    {
      token: "a / an",
      title: "Один из многих",
      rules: [
        "только с исчисляемым существительным в единственном числе",
        "профессия или описание: She is an engineer",
        "первое упоминание: I bought a book",
        "восклицание What a... и частота twice a week",
        "a/an выбирается по звуку: an hour, но a university",
      ],
      examples: ["a useful device", "an honest answer", "a UX designer"],
    },
    {
      token: "the",
      title: "Тот самый",
      rules: [
        "предмет уже упоминался или понятен из контекста",
        "уникальный объект: the sun, the internet",
        "превосходная степень, first, last, only и same",
        "реки, моря, океаны, горные цепи и некоторые страны",
        "the cinema; play the guitar; in the morning",
      ],
      examples: ["the book I bought", "the best result", "the United States"],
    },
    {
      token: "Ø",
      title: "Без артикля",
      rules: [
        "множественное число и неисчисляемые слова в общем смысле",
        "home, work, school, church — когда важна их функция",
        "приёмы пищи, языки, спорт и учебные предметы",
        "большинство стран, городов, улиц, озёр и отдельных гор",
        "by bus, in bed, next Monday",
      ],
      examples: ["Money matters", "go to work", "speak English"],
    },
  ];
  guide.innerHTML = `
    <button class="back-button" type="button" data-action="home">← К тренировке</button>
    <article class="lesson-card guide-page article-guide">
      <span class="lesson-tag">Articles</span>
      <h1>A, an, the или ничего?</h1>
      <p class="subtitle">Артикль показывает, как собеседник должен воспринимать существительное: это один новый предмет, конкретный знакомый предмет или понятие вообще.</p>

      <div class="article-decision">
        <strong>Быстрый алгоритм</strong>
        <ol>
          <li>Существительное исчисляемое и в единственном числе? Тогда чаще нужен a/an или the.</li>
          <li>Собеседник уже знает, о чём речь? Выбирай the.</li>
          <li>Это один новый предмет? Выбирай a/an по первому звуку.</li>
          <li>Это общее понятие, имя или устойчивое выражение? Проверь вариант без артикля.</li>
        </ol>
      </div>

      <div class="article-rule-grid">
        ${groups.map((group) => `<section class="article-rule-card">
          <span class="article-token">${group.token}</span>
          <h2>${group.title}</h2>
          <ul class="rule-list">${group.rules.map((rule) => `<li>${rule}</li>`).join("")}</ul>
          <div class="article-examples">${group.examples.map((example) => `<span>${example}</span>`).join("")}</div>
        </section>`).join("")}
      </div>

      <aside class="mistake-box">
        <p class="eyebrow">Смотри на звук, не на букву</p>
        <p><strong>an hour</strong>, <strong>an honest answer</strong>, но <strong>a university</strong>, <strong>a European city</strong>, <strong>a one-time offer</strong>.</p>
      </aside>

      <div class="lesson-actions">
        <button class="primary-button" type="button" data-action="start-articles">Начать 12 заданий</button>
        <button class="secondary-button" type="button" data-action="home">К каталогу</button>
      </div>
    </article>
  `;
  showOnly(guide);
}

function renderAuxiliaryGuide() {
  const helpers = [
    ["have / has", "настоящее", "I/you/we/they have · he/she/it has", "наличие или помощник Present Perfect"],
    ["had", "прошлое", "все лица: had", "наличие в прошлом или помощник Past Perfect"],
    ["do / does", "Present Simple", "do: I/you/we/they · does: he/she/it", "вопросы и отрицания"],
    ["did", "Past Simple", "все лица: did + V", "вопросы и отрицания в прошлом"],
    ["am / is / are", "настоящее be", "I am · he/she/it is · you/we/they are", "состояние или Continuous"],
    ["was / were", "прошлое be", "I/he/she/it was · you/we/they were", "состояние или Past Continuous"],
    ["will", "будущее", "все лица: will + V", "решение, обещание или прогноз"],
    ["have / has / had to", "необходимость", "have to сейчас · had to раньше", "что приходится или пришлось делать"],
  ];
  guide.innerHTML = `
    <button class="back-button" type="button" data-action="home">← К тренировке</button>
    <article class="lesson-card guide-page auxiliary-guide">
      <span class="lesson-tag">Auxiliary & modal verbs</span>
      <h1>Как собрать предложение с помощником</h1>
      <p class="subtitle">Сначала выбери смысл: факт, вопрос, совет, обязанность или запрет. Затем поставь помощник перед базовой формой глагола — и не добавляй лишние to или -s.</p>

      <h2 class="guide-heading">Карта помощников</h2>
      <div class="aux-rule-grid">
        ${helpers.map(([form,time,pattern,use]) => `<section class="aux-rule-card">
          <span>${time}</span><h2>${form}</h2><strong>${pattern}</strong><p>${use}</p>
        </section>`).join("")}
      </div>

      <h2 class="guide-heading">Must, should и have to: три конструкции</h2>
      <div class="modal-structure-grid">
        <section class="modal-structure-card"><span>Утверждение</span><strong>Subject + must/should + V</strong><p>You should wear a jacket.<br>He must arrive early.</p></section>
        <section class="modal-structure-card"><span>Отрицание</span><strong>Subject + shouldn't/mustn't + V</strong><p>You shouldn't worry.<br>You mustn't park here.</p></section>
        <section class="modal-structure-card"><span>Вопрос</span><strong>Should/Must + subject + V?</strong><p>Should I call him?<br>Must we pay now?</p></section>
        <section class="modal-structure-card"><span>Have to</span><strong>do/does/did + subject + have to + V?</strong><p>Does she have to go?<br>Did you have to wait?</p></section>
      </div>

      <div class="modal-contrast">
        <section><strong>You mustn't swim here.</strong><span>Строгий запрет: плавать нельзя.</span></section>
        <section><strong>You don't have to swim.</strong><span>Нет необходимости: можно не плавать, но запрета нет.</span></section>
      </div>

      <h2 class="guide-heading">Can, could или be able to?</h2>
      <div class="modal-structure-grid">
        <section class="modal-structure-card"><span>Сейчас / вообще</span><strong>can + V</strong><p>I can work from home.<br>She can’t see without glasses.</p></section>
        <section class="modal-structure-card"><span>Общая способность раньше</span><strong>could + V</strong><p>He could read at five.<br>Could you swim then?</p></section>
        <section class="modal-structure-card"><span>Конкретно смог</span><strong>was/were able to + V</strong><p>We were able to open the door.<br>Was she able to finish?</p></section>
        <section class="modal-structure-card"><span>Другие формы</span><strong>be able to + V</strong><p>I’ve been able to practise.<br>I’ll be able to come.</p></section>
      </div>

      <div class="aux-chain-list">
        <div><strong>can / could + V</strong><span>Без <b>to</b> и без окончания <b>-s</b>: <em>She can drive</em>, не <em>cans</em> и не <em>can to drive</em>.</span></div>
        <div><strong>have/has been able to + V</strong><span>Для Present Perfect: <em>I’ve never been able to speak fluently</em>.</span></div>
        <div><strong>will / might / should be able to + V</strong><span>Два модальных подряд нельзя: <em>will can</em> → <em>will be able to</em>.</span></div>
        <div><strong>could или was able to?</strong><span><em>Could</em> — умел вообще; <em>was/were able to</em> — смог в одной конкретной ситуации.</span></div>
      </div>

      <aside class="principle-box"><strong>Быстрый выбор:</strong> сейчас — <em>can</em>; вообще умел раньше — <em>could</em>; один раз смог — <em>was/were able to</em>; после have, will, might, should или want — нужная форма <em>be able to</em>.</aside>

      <h2 class="guide-heading">Все формы be able to</h2>
      <div class="modal-structure-grid">
        <section class="modal-structure-card"><span>Обычная форма</span><strong>am/is/are/was/were able to + V</strong><p>She is able to help.<br>We were able to finish.</p></section>
        <section class="modal-structure-card"><span>Perfect</span><strong>have/has/had been able to + V</strong><p>I haven’t been able to sleep.<br>He had been able to walk.</p></section>
        <section class="modal-structure-card"><span>Инфинитив</span><strong>to be able to + V</strong><p>I want to be able to drive.<br>We hope to be able to come.</p></section>
        <section class="modal-structure-card"><span>Gerund</span><strong>being able to + V</strong><p>I enjoy being able to travel.<br>He hated not being able to call.</p></section>
      </div>

      <div class="aux-chain-list">
        <div><strong>После will, may, might, should</strong><span>Используем базовую форму <em>be able to</em>: <em>Will you be able to attend?</em>, <em>She might be able to help</em>.</span></div>
        <div><strong>Условие</strong><span><em>If the weather improved, we could go</em>. Для результата с would: <em>I would be able to work faster</em>.</span></div>
        <div><strong>Запомни цепочку</strong><span><em>be → am/is/are · was/were · been · being</em>. Именно первая часть меняется, а <em>able to + V</em> остаётся.</span></div>
      </div>

      <aside class="principle-box"><strong>Быстрый тест:</strong> если перед пропуском стоит have/has/had — выбирай <em>been able to</em>; после предлога или enjoy/hate — <em>being able to</em>; после want/hope — <em>to be able to</em>; после will/may/should — <em>be able to</em>.</aside>

      <h2 class="guide-heading">Тонкости: просьбы, косвенная речь и результат</h2>
      <div class="modal-structure-grid">
        <section class="modal-structure-card"><span>Просьба / разрешение</span><strong>Can/Could + subject + V?</strong><p>Can you help me?<br>Could I leave early?</p><p><b>Could</b> здесь не прошлое — оно просто вежливее.</p></section>
        <section class="modal-structure-card"><span>Present Perfect</span><strong>have/has been able to + V</strong><p>I haven’t been able to sleep lately.</p><p>У can нет формы Present Perfect.</p></section>
        <section class="modal-structure-card"><span>Косвенная речь</span><strong>says → can · said → could</strong><p>She says she can swim.<br>She said she could swim.</p></section>
        <section class="modal-structure-card"><span>Один случай в прошлом</span><strong>плюс и минус ведут себя по-разному</strong><p>We were able to stop it.<br>We couldn’t stop it.</p></section>
      </div>

      <div class="aux-chain-list">
        <div><strong>Положительный конкретный результат</strong><span><em>was/were able to</em> или <em>managed to</em>: <em>Finally, we were able to persuade him</em>.</span></div>
        <div><strong>Отрицательный конкретный результат</strong><span>Можно <em>couldn’t</em> или <em>wasn’t/weren’t able to</em>: <em>We tried, but we couldn’t stop the fire</em>.</span></div>
        <div><strong>Исключение: восприятие</strong><span>С <em>see, hear, feel, understand</em> форма <em>could</em> возможна и в одном конкретном случае: <em>I could hear her clearly</em>.</span></div>
      </div>

      <aside class="principle-box"><strong>Не определяй could только по слову «мог»:</strong> сначала спроси, это вежливая просьба, общая способность, косвенная речь или конкретный результат. В последнем случае проверь, положительное предложение или отрицательное.</aside>

      <h2 class="guide-heading">Managed to: когда всё-таки удалось</h2>
      <div class="modal-structure-grid">
        <section class="modal-structure-card"><span>Успех несмотря на трудность</span><strong>managed to + V</strong><p>We finally managed to fix it.<br>She managed to stay calm.</p></section>
        <section class="modal-structure-card"><span>Не получилось</span><strong>didn’t manage to + V</strong><p>I didn’t manage to call him.<br>They didn’t manage to escape.</p></section>
        <section class="modal-structure-card"><span>Вопрос</span><strong>Did + subject + manage to + V?</strong><p>Did you manage to finish?<br>How did she manage to win?</p></section>
        <section class="modal-structure-card"><span>Другие времена</span><strong>manage меняется по времени</strong><p>She manages to practise.<br>We’ll manage to finish.<br>He has managed to recover.</p></section>
      </div>

      <div class="modal-contrast">
        <section><strong>He could swim at five.</strong><span>Умел вообще — общая способность в прошлом.</span></section>
        <section><strong>He was able to reach the shore.</strong><span>Смог в конкретной ситуации — нейтральный результат.</span></section>
        <section><strong>He managed to reach the shore.</strong><span>Всё-таки добрался — подчёркиваем трудность или усилие.</span></section>
      </div>

      <aside class="principle-box"><strong>Формула:</strong> после manage всегда <em>to + V</em>. В вопросе и отрицании прошедшего времени: <em>Did you manage to…?</em> и <em>didn’t manage to…</em> — не <em>managed</em> после did.</aside>

      <h2 class="guide-heading">Почему два had подряд — это нормально</h2>
      <div class="aux-chain-list">
        <div><strong>I have had this phone for three years.</strong><span><b>have</b> — помощник Present Perfect; <b>had</b> — V3 глагола have.</span></div>
        <div><strong>She has had a busy week.</strong><span><b>has</b> — помощник для she; <b>had</b> — третья форма смыслового have.</span></div>
        <div><strong>I had had breakfast before the call.</strong><span>первое <b>had</b> — помощник Past Perfect; второе <b>had</b> — V3. Завтрак был раньше звонка.</span></div>
      </div>

      <aside class="principle-box"><strong>Главная проверка:</strong> после must, should, can, could, do, does и did всегда базовая форма без лишнего to и без -s: <em>She should go</em>, <em>He can drive</em>, <em>Does he have to work?</em>.</aside>

      <div class="lesson-actions">
        <button class="primary-button" type="button" data-action="start-auxiliaries">Начать 16 заданий</button>
        <button class="secondary-button" type="button" data-action="home">К каталогу</button>
      </div>
    </article>
  `;
  showOnly(guide);
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
    .map(({ tense }, index) => index < 4 ? questionFor(tense) : identifyQuestionFor(tense));
  startSession("daily", "Ежедневная практика", shuffle(selected));
}

function startIdentifySession() {
  const questions = [...TENSES]
    .map((tense) => ({ tense, score: focusScore(state.tenseStats[tense.key]) + Math.random() * 0.65 }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(({ tense }) => identifyQuestionFor(tense));
  startSession("identify", "Определи время", shuffle(questions));
}

function startIdentifyForTense(key) {
  const tense = TENSES.find((item) => item.key === key);
  if (!tense) return;
  const questions = IDENTIFY_ITEMS[key].map((_, index) => identifyQuestionFor(tense, index));
  startSession("identify-focus", `Распознаём: ${tense.name}`, shuffle(questions));
}

function startGerundSession() {
  const gerundQuestions = shuffle(GERUND_INFINITIVE_ITEMS).slice(0, 8).map(gerundQuestionFor);
  const adjectiveQuestions = shuffle(ADJECTIVE_ENDING_ITEMS).slice(0, 8).map(adjectiveQuestionFor);
  startSession("gerund-infinitive", "Формы глагола и -ed/-ing", shuffle([...gerundQuestions, ...adjectiveQuestions]));
}

function phraseComplete(item) {
  return item.text.replace("___", item.form);
}

function phraseRule(item) {
  const tense = TENSES.find((entry) => entry.key === item.tenseKey);
  return `<span class="phrase-explanation"><b>${item.base}</b> — ${item.meaning}.<br><b>${tense.name}:</b> ${PHRASE_TENSE_CLUES[item.tenseKey]}.<br><b>Форма оборота:</b> ${item.base} → ${item.form}.</span>`;
}

function phraseQuestionFor(item) {
  const distractors = shuffle(PHRASE_ITEMS.filter((entry) => entry.category === item.category && entry !== item))
    .filter((entry, index, all) => all.findIndex((candidate) => candidate.form === entry.form) === index)
    .slice(0, 3);
  const options = shuffle([
    { answer: item.form, correct: true },
    ...distractors.map((entry) => ({ answer: entry.form, correct: false })),
  ]);
  return {
    type: "phrase",
    topicKey: "speechPatterns",
    text: item.text,
    answers: options.map((option) => option.answer),
    correct: options.findIndex((option) => option.correct),
    example: phraseComplete(item),
    explanation: phraseRule(item),
  };
}

function phraseTenseQuestionFor(item) {
  const tense = TENSES.find((entry) => entry.key === item.tenseKey);
  const optionKeys = shuffle([item.tenseKey, ...IDENTIFY_DISTRACTORS[item.tenseKey]]);
  return {
    type: "phrase-tense",
    topicKey: "speechPatterns",
    text: phraseComplete(item),
    answers: optionKeys.map((key) => TENSES.find((entry) => entry.key === key).name),
    correct: optionKeys.indexOf(tense.key),
    explanation: phraseRule(item),
  };
}

function startPhraseSession() {
  const selected = shuffle(PHRASE_ITEMS).slice(0, 14);
  const questions = selected.map((item, index) => index < 7 ? phraseQuestionFor(item) : phraseTenseQuestionFor(item));
  startSession("speech-patterns", "Речевые обороты + времена", shuffle(questions));
}

function articleComplete(item) {
  return item.answer === "Без артикля" ? item.text.replace("___ ", "") : item.text.replace("___", item.answer);
}

function articleQuestionFor(item) {
  const options = shuffle(["a", "an", "the", "Без артикля"]);
  return {
    type: "article",
    topicKey: "articles",
    text: item.text,
    answers: options,
    correct: options.indexOf(item.answer),
    example: articleComplete(item),
    explanation: `<span class="article-explanation"><b>${item.answer === "Без артикля" ? "Без артикля (Ø)" : item.answer}</b>: ${item.explanation}</span>`,
  };
}

function startArticleSession() {
  const questions = shuffle(ARTICLE_ITEMS).slice(0, 12).map(articleQuestionFor);
  startSession("articles", "Артикли: a, an, the или Ø", questions);
}

function auxiliaryComplete(item) {
  return item.text.replace("___", item.correct);
}

function auxiliaryQuestionFor(item) {
  const options = shuffle(item.answers);
  return {
    type: "auxiliary",
    topicKey: "auxiliaries",
    text: item.text,
    answers: options,
    correct: options.indexOf(item.correct),
    example: auxiliaryComplete(item),
    explanation: `<span class="aux-explanation">${item.explanation}</span>`,
  };
}

function modalQuestionFor(item) {
  const options = shuffle(item.answers);
  return {
    type: "modal-build",
    topicKey: "auxiliaries",
    text: item.prompt,
    answers: options,
    correct: options.indexOf(item.correct),
    example: item.correct,
    explanation: `<span class="aux-explanation">${item.explanation}</span>`,
  };
}

function startAuxiliarySession() {
  const helperQuestions = shuffle(AUXILIARY_ITEMS).slice(0, 4).map(auxiliaryQuestionFor);
  const modalQuestions = shuffle(MODAL_ITEMS).slice(0, 4).map(modalQuestionFor);
  const abilityQuestions = shuffle([
    ...shuffle(ABILITY_ITEMS).slice(0, 1),
    ...shuffle(ABILITY_NUANCE_ITEMS).slice(0, 1),
    ...shuffle(ABILITY_FORM_ITEMS).slice(0, 2),
  ]).map(modalQuestionFor);
  const managedQuestions = shuffle(MANAGED_TO_ITEMS).slice(0, 4).map(modalQuestionFor);
  startSession("auxiliaries", "Помощники и модальные", shuffle([...helperQuestions, ...modalQuestions, ...abilityQuestions, ...managedQuestions]));
}

function startFocusSession(key) {
  const tense = TENSES.find((item) => item.key === key);
  if (!tense) return;
  const questions = shuffle(tense.questions.map((item) => ({ tense, type: "form", ...item })));
  startSession("focus", `Фокус: ${tense.name}`, questions);
}

function questionFor(tense, forcedIndex) {
  const index = Number.isInteger(forcedIndex) ? forcedIndex : Math.floor(Math.random() * tense.questions.length);
  return { tense, type: "form", ...tense.questions[index] };
}

function identifyQuestionFor(tense, forcedIndex) {
  const items = IDENTIFY_ITEMS[tense.key];
  const itemIndex = Number.isInteger(forcedIndex) ? forcedIndex : Math.floor(Math.random() * items.length);
  const [text, explanation] = items[itemIndex];
  const optionKeys = shuffle([tense.key, ...IDENTIFY_DISTRACTORS[tense.key]]);
  const answers = optionKeys.map((key) => TENSES.find((item) => item.key === key).name);
  return {
    tense,
    type: "identify",
    text,
    answers,
    correct: optionKeys.indexOf(tense.key),
    explanation,
  };
}

function gerundQuestionFor(item) {
  const options = shuffle(item.answers.map((answer, index) => ({ answer, correct: index === item.correct })));
  return {
    type: "gerund",
    topicKey: "gerundInfinitive",
    text: item.text,
    answers: options.map((option) => option.answer),
    correct: options.findIndex((option) => option.correct),
    example: item.example,
    explanation: item.explanation,
  };
}


function adjectiveQuestionFor(item) {
  const options = shuffle(item.answers);
  return {
    type: "adjective-ending",
    topicKey: "gerundInfinitive",
    text: item.text,
    answers: options,
    correct: options.indexOf(item.correct),
    example: item.text.replace("___", item.correct),
    explanation: `<span class="aux-explanation">${item.explanation}</span>`,
  };
}

function startSession(type, title, questions) {
  session = { type, title, questions, index: 0, correct: 0, answered: false, completed: false };
  renderQuiz();
}

function renderQuiz() {
  if (!session) return renderDashboard();
  if (session.completed) return renderResult();

  const question = session.questions[session.index];
  const isIdentify = question.type === "identify";
  const isGerund = question.type === "gerund";
  const isAdjectiveEnding = question.type === "adjective-ending";
  const isPhrase = question.type === "phrase";
  const isPhraseTense = question.type === "phrase-tense";
  const isArticle = question.type === "article";
  const isAuxiliary = question.type === "auxiliary";
  const isModalBuild = question.type === "modal-build";
  const isReported = question.type === "reported" || question.type === "reported-rule";
  const taskText = isReported
    ? question.type === "reported-rule" ? "Определи правило изменения" : "Выбери правильный пересказ"
    : isIdentify
    ? "Какое время используется в предложении?"
    : isGerund
      ? "Выбери форму второго глагола"
      : isAdjectiveEnding
        ? "Выбери прилагательное на -ed или -ing"
        : isPhrase
        ? "Выбери оборот в форме, подходящей контексту"
        : isPhraseTense
          ? "Определи время готового предложения"
          : isArticle
            ? "Выбери артикль или вариант без него"
            : isModalBuild
              ? "Выбери правильно построенное предложение"
              : isAuxiliary
                ? "Выбери подходящий глагол-помощник"
                : "Выбери правильную форму";
  const modeText = isReported
    ? "Reported speech"
    : isIdentify
    ? "Определи время"
    : isGerund
      ? "Gerund or infinitive"
      : isAdjectiveEnding
        ? "-ed / -ing adjectives"
        : isPhrase || isPhraseTense
        ? "Речевые обороты"
        : isArticle
          ? "Articles"
          : isAuxiliary || isModalBuild
            ? "Auxiliary & modal verbs"
            : question.tense.name;
  const modeClass = isReported ? "reported-mode" : isIdentify ? "identify-mode" : isGerund || isAdjectiveEnding ? "grammar-mode" : isPhrase || isPhraseTense ? "phrase-mode" : isArticle ? "article-mode" : isAuxiliary || isModalBuild ? "auxiliary-mode" : "";
  const answerButtons = question.answers.map((answer, index) => {
    let stateClass = "";
    if (session.answered && index === question.correct) stateClass = "correct";
    if (session.answered && index === session.selected && index !== question.correct) stateClass = "incorrect";
    return `<button class="answer ${stateClass}" type="button" data-action="answer" data-index="${index}" ${session.answered ? "disabled" : ""}>${answer}</button>`;
  }).join("");
  const feedback = session.answered
    ? `<div class="feedback"><strong>${session.selected === question.correct ? "Верно." : "Почти — запомни этот паттерн."}</strong>${question.example ? `<span class="answer-example">${question.example}</span>` : ""}${question.explanation}</div>
       <div class="next-row"><button class="primary-button" type="button" data-action="next">${session.index === session.questions.length - 1 ? "Посмотреть результат" : "Следующий вопрос"}</button></div>`
    : "";

  quiz.innerHTML = `
    <div class="quiz-wrap">
      <button class="back-button" type="button" data-action="home">← Закончить позже</button>
      <div class="quiz-progress"><span>${session.title}</span><span>${session.index + 1} / ${session.questions.length}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width: ${Math.round((session.index / session.questions.length) * 100)}%"></div></div>
      <article class="quiz-card" style="margin-top: 14px">
        <span class="question-tense ${modeClass}">${modeText}</span>
        <p class="question-task">${taskText}</p>
        ${isReported ? `<p class="reported-context">${rsEscape(question.context)}</p>` : ""}
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
  if (question.topicKey) {
    recordGrammarAnswer(question.topicKey, correct);
  } else {
    recordAnswer(question.tense.key, correct);
  }
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

function recordGrammarAnswer(key, correct) {
  const stat = state.grammarStats[key];
  if (!stat) return;
  state.totalAnswered += 1;
  stat.total += 1;
  if (correct) {
    state.totalCorrect += 1;
    stat.correct += 1;
  }
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
  const message = session.type === "reported-speech"
    ? score >= 85
      ? "Уверенный пересказ! Ты замечаешь смену времён, участников и контекста. Повтори тему через пару дней."
      : "Проверь четыре вещи: время, модальный глагол, участники разговора и место/день. Разбор каждого ответа показывает, что именно изменилось."
    : session.type === "auxiliaries"
    ? score >= 85
      ? "Отлично: ты уверенно строишь предложения с помощниками и модальными глаголами, включая can, could, be able to и managed to."
      : score >= 55
        ? "Хорошая база. Сначала определяй время и смысл: способность вообще, конкретный результат, трудный успех, совет, обязанность или запрет."
        : "Вернись к памятке и повтори формулы: modal + V, have to + V, be able to + V и manage to + V. Затем пройди ещё один смешанный подход."
    : session.type === "articles"
    ? score >= 85
      ? "Отлично: ты уверенно различаешь новый предмет, конкретный предмет и общее понятие. Повтори тему через пару дней."
      : score >= 55
        ? "Хорошая база. Перед выбором артикля сначала решай: собеседник уже знает этот предмет или слышит о нём впервые?"
        : "Вернись к быстрому алгоритму и пройди ещё один подход. Отдельно повтори выбор a/an по звуку и случаи без артикля."
    : session.type === "speech-patterns"
    ? score >= 85
      ? "Отлично: ты распознаёшь и смысл оборота, и время, в котором он используется. Возвращайся к режиму через пару дней для закрепления."
      : score >= 55
        ? "Хорошая база. Сначала определяй время по контексту, затем изменяй только глагольную часть оборота — частица остаётся на месте."
        : "Открой библиотеку и повтори примеры по одной категории. В следующем подходе проговаривай вслух базовую форму, готовое предложение и правило времени."
    : session.type === "gerund-infinitive"
    ? score >= 85
      ? "Отлично: ты уверенно различаешь gerund, infinitive, форму без to и прилагательные на -ed/-ing."
      : score >= 55
        ? "Хорошая база. Для глагола смотри на предыдущее слово; для прилагательного решай, кто испытывает чувство и что его вызывает."
        : "Вернись к памятке: повтори формы глагола, затем правило «-ing вызывает, -ed чувствует» и пройди ещё один подход."
    : score >= 85
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

renderDashboard();\n
