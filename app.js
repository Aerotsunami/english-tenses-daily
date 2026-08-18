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
  gi("I enjoy ___ from home.", ["working", "to work", "work", "worked"], 0, "I enjoy working from home.", "После enjoy используем герундий: enjoy doing something."),
  gi("Try to avoid ___ your email every five minutes.", ["checking", "to check", "check", "checked"], 0, "Try to avoid checking your email every five minutes.", "После avoid ставим verb + ing."),
  gi("She is very good at ___ complex ideas.", ["explaining", "to explain", "explain", "explained"], 0, "She is very good at explaining complex ideas.", "После предлога at нужен герундий: good at doing."),
  gi("Read the message again before ___ it.", ["sending", "to send", "send", "sent"], 0, "Read the message again before sending it.", "После предлога before используется verb + ing."),
  gi("He is interested in ___ more about AI.", ["learning", "to learn", "learn", "learned"], 0, "He is interested in learning more about AI.", "In — предлог, поэтому после него ставим герундий."),
  gi("___ from home saves me a lot of time.", ["Working", "To working", "Work", "Worked"], 0, "Working from home saves me a lot of time.", "Когда действие является подлежащим предложения, обычно используем герундий."),
  gi("She suggested ___ the experiment for another week.", ["running", "to run", "run", "ran"], 0, "She suggested running the experiment for another week.", "После suggest используем verb + ing, а не to + verb."),
  gi("Would you mind ___ the window?", ["opening", "to open", "open", "opened"], 0, "Would you mind opening the window?", "После mind нужен герундий: mind doing."),
  gi("We finished ___ the presentation at midnight.", ["preparing", "to prepare", "prepare", "prepared"], 0, "We finished preparing the presentation at midnight.", "После finish ставим verb + ing."),
  gi("Keep ___ — your English is getting better.", ["practising", "to practise", "practise", "practised"], 0, "Keep practising — your English is getting better.", "После keep используем герундий: keep doing."),
  gi("I want ___ my spoken English.", ["to improve", "improving", "improve", "improved"], 0, "I want to improve my spoken English.", "После want нужен инфинитив с to."),
  gi("We decided ___ the launch until Monday.", ["to postpone", "postponing", "postpone", "postponed"], 0, "We decided to postpone the launch until Monday.", "После decide используем to + verb."),
  gi("I need ___ this report today.", ["to finish", "finishing", "finish", "finished"], 0, "I need to finish this report today.", "После need обычно ставим инфинитив с to."),
  gi("I'm happy ___ you with the analysis.", ["to help", "helping", "help", "helped"], 0, "I'm happy to help you with the analysis.", "После прилагательных, например happy, часто используется to + verb."),
  gi("I opened the dashboard ___ the latest numbers.", ["to check", "checking", "check", "checked"], 0, "I opened the dashboard to check the latest numbers.", "Инфинитив выражает цель: открыл зачем? Чтобы проверить."),
  gi("She promised ___ the file by Friday.", ["to send", "sending", "send", "sent"], 0, "She promised to send the file by Friday.", "После promise используем to + verb."),
  gi("They refused ___ the scope.", ["to change", "changing", "change", "changed"], 0, "They refused to change the scope.", "После refuse нужен инфинитив с to."),
  gi("I hope ___ Bilbao again next year.", ["to visit", "visiting", "visit", "visited"], 0, "I hope to visit Bilbao again next year.", "После hope используем to + verb."),
  gi("You can't ___ here.", ["park", "to park", "parking", "parked"], 0, "You can't park here.", "После модального can используется инфинитив без to."),
  gi("Let me ___ when you're ready.", ["know", "to know", "knowing", "knew"], 0, "Let me know when you're ready.", "После let ставим инфинитив без to."),
  gi("The feedback made me ___ the whole proposal.", ["rewrite", "to rewrite", "rewriting", "rewrote"], 0, "The feedback made me rewrite the whole proposal.", "После make + object используется инфинитив без to."),
  gi("Если хочешь проверить, поможет ли звонок: Try ___ him.", ["calling", "to call", "call", "called"], 0, "Try calling him — he may help you.", "Try doing = поэкспериментировать с методом и посмотреть, сработает ли он."),
  gi("Если поднять тяжёлый чемодан будет трудно: Don't try ___ it alone.", ["to lift", "lifting", "lift", "lifted"], 0, "Don't try to lift it alone.", "Try to do = попытаться сделать что-то трудное, приложить усилие."),
  gi("Не забудь оставить документ на столе: Remember ___ it there.", ["to leave", "leaving", "leave", "left"], 0, "Remember to leave the document on the table.", "Remember to do = не забыть выполнить действие в будущем."),
  gi("Я помню нашу первую встречу: I remember ___ you on my first working day.", ["meeting", "to meet", "meet", "met"], 0, "I remember meeting you on my first working day.", "Remember doing = иметь воспоминание о действии, которое уже произошло."),
  gi("Он бросил курить: He stopped ___.", ["smoking", "to smoke", "smoke", "smoked"], 0, "He stopped smoking.", "Stop doing = перестать выполнять действие."),
  gi("Он остановился, чтобы ответить на звонок: He stopped ___ the call.", ["to answer", "answering", "answer", "answered"], 0, "He stopped to answer the call.", "Stop to do = остановить другое действие ради новой цели."),
  gi("Try ___ late for the meeting.", ["not to be", "to not being", "not being", "not be"], 0, "Try not to be late for the meeting.", "Отрицание ставим перед инфинитивом: not to + verb."),
  gi("I recommend ___ too much about one bad result.", ["not worrying", "not to worry", "to not worry", "not worry"], 0, "I recommend not worrying too much about one bad result.", "После recommend нужен герундий; not ставится перед ним: not doing."),
  gi("She offered ___ the meeting notes.", ["to write", "writing", "write", "wrote"], 0, "She offered to write the meeting notes.", "После offer используем инфинитив с to."),
];

function gi(text, answers, correct, example, explanation) {
  return { text, answers, correct, example, explanation };
}

const PHRASE_ITEMS = [
  {
    "category": "Быт",
    "base": "wake up",
    "meaning": "просыпаться",
    "text": "I usually ___ at seven on weekdays.",
    "form": "wake up",
    "tenseKey": "present-simple"
  },
  {
    "category": "Быт",
    "base": "get up",
    "meaning": "вставать с кровати",
    "text": "We ___ late yesterday.",
    "form": "got up",
    "tenseKey": "past-simple"
  },
  {
    "category": "Быт",
    "base": "turn on",
    "meaning": "включать",
    "text": "She always ___ the lights before sunset.",
    "form": "turns on",
    "tenseKey": "present-simple"
  },
  {
    "category": "Быт",
    "base": "turn off",
    "meaning": "выключать",
    "text": "I ___ the oven before I left home.",
    "form": "turned off",
    "tenseKey": "past-simple"
  },
  {
    "category": "Быт",
    "base": "clean up",
    "meaning": "убираться, приводить в порядок",
    "text": "We ___ the kitchen right now.",
    "form": "are cleaning up",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Быт",
    "base": "run out of",
    "meaning": "исчерпать запас, остаться без",
    "text": "We ___ gas on the motorway.",
    "form": "ran out of",
    "tenseKey": "past-simple"
  },
  {
    "category": "Быт",
    "base": "pick up",
    "meaning": "забрать, подобрать",
    "text": "I ___ from the airport when you arrive.",
    "form": "will pick you up",
    "tenseKey": "future-simple"
  },
  {
    "category": "Быт",
    "base": "drop off",
    "meaning": "подвезти и высадить",
    "text": "He usually ___ the children at school.",
    "form": "drops off",
    "tenseKey": "present-simple"
  },
  {
    "category": "Быт",
    "base": "look after",
    "meaning": "присматривать за",
    "text": "Marta ___ my cat this week.",
    "form": "is looking after",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Быт",
    "base": "find out",
    "meaning": "выяснить, узнать",
    "text": "We ___ why the app was crashing.",
    "form": "have found out",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Быт",
    "base": "give up",
    "meaning": "сдаться, бросить занятие",
    "text": "She ___ on the course yet.",
    "form": "hasn't given up",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Быт",
    "base": "calm down",
    "meaning": "успокоиться",
    "text": "He ___ after we explained the problem.",
    "form": "calmed down",
    "tenseKey": "past-simple"
  },
  {
    "category": "Быт",
    "base": "put on",
    "meaning": "надевать",
    "text": "I ___ my coat when the phone rang.",
    "form": "was putting on",
    "tenseKey": "past-continuous"
  },
  {
    "category": "Быт",
    "base": "take off",
    "meaning": "снимать одежду",
    "text": "He always ___ his shoes at the door.",
    "form": "takes off",
    "tenseKey": "present-simple"
  },
  {
    "category": "Быт",
    "base": "try on",
    "meaning": "примерять",
    "text": "She ___ three jackets so far.",
    "form": "has tried on",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Быт",
    "base": "throw away",
    "meaning": "выбрасывать",
    "text": "I ___ these old papers tomorrow.",
    "form": "will throw away",
    "tenseKey": "future-simple"
  },
  {
    "category": "Путешествия",
    "base": "set off",
    "meaning": "отправиться в путь",
    "text": "They ___ early in the morning.",
    "form": "set off",
    "tenseKey": "past-simple"
  },
  {
    "category": "Путешествия",
    "base": "check in",
    "meaning": "регистрироваться в отеле или аэропорту",
    "text": "We ___ at the hotel right now.",
    "form": "are checking in",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Путешествия",
    "base": "check out",
    "meaning": "выписаться из отеля",
    "text": "We ___ before eleven tomorrow.",
    "form": "will check out",
    "tenseKey": "future-simple"
  },
  {
    "category": "Путешествия",
    "base": "get in",
    "meaning": "сесть в машину или такси",
    "text": "She ___ the taxi and gave the driver the address.",
    "form": "got in",
    "tenseKey": "past-simple"
  },
  {
    "category": "Путешествия",
    "base": "get on",
    "meaning": "сесть в автобус, поезд или самолёт",
    "text": "We ___ the wrong bus yesterday.",
    "form": "got on",
    "tenseKey": "past-simple"
  },
  {
    "category": "Путешествия",
    "base": "get off",
    "meaning": "выйти из транспорта",
    "text": "I ___ at the next stop.",
    "form": "will get off",
    "tenseKey": "future-simple"
  },
  {
    "category": "Путешествия",
    "base": "board",
    "meaning": "сесть на борт",
    "text": "The passengers ___ the plane on time.",
    "form": "boarded",
    "tenseKey": "past-simple"
  },
  {
    "category": "Путешествия",
    "base": "take off",
    "meaning": "взлетать",
    "text": "The plane ___ when the storm began.",
    "form": "was taking off",
    "tenseKey": "past-continuous"
  },
  {
    "category": "Путешествия",
    "base": "land",
    "meaning": "приземляться",
    "text": "Our flight ___ in Bilbao at six.",
    "form": "will land",
    "tenseKey": "future-simple"
  },
  {
    "category": "Путешествия",
    "base": "reach",
    "meaning": "достичь места",
    "text": "We ___ our destination at last.",
    "form": "have reached",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Путешествия",
    "base": "arrive at",
    "meaning": "прибыть в конкретное место",
    "text": "They ___ the hotel before the rain started.",
    "form": "had arrived at",
    "tenseKey": "past-perfect"
  },
  {
    "category": "Путешествия",
    "base": "head for",
    "meaning": "направляться к",
    "text": "We ___ the city centre now.",
    "form": "are heading for",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Путешествия",
    "base": "stop over",
    "meaning": "сделать промежуточную остановку",
    "text": "This time tomorrow, we ___ in Lisbon.",
    "form": "will be stopping over",
    "tenseKey": "future-continuous"
  },
  {
    "category": "Путешествия",
    "base": "see someone off",
    "meaning": "проводить уезжающего",
    "text": "We ___ our friends at the station.",
    "form": "saw off",
    "tenseKey": "past-simple"
  },
  {
    "category": "Путешествия",
    "base": "break down",
    "meaning": "сломаться",
    "text": "The bus ___ before the replacement arrived.",
    "form": "had broken down",
    "tenseKey": "past-perfect"
  },
  {
    "category": "Путешествия",
    "base": "miss",
    "meaning": "опоздать на транспорт, пропустить",
    "text": "I ___ the last train.",
    "form": "have missed",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Работа",
    "base": "carry out",
    "meaning": "проводить, выполнять",
    "text": "We ___ a user study this week.",
    "form": "are carrying out",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Работа",
    "base": "come up with",
    "meaning": "придумать",
    "text": "She ___ a much simpler solution.",
    "form": "has come up with",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Работа",
    "base": "figure out",
    "meaning": "разобраться, найти решение",
    "text": "I finally ___ what caused the error.",
    "form": "figured out",
    "tenseKey": "past-simple"
  },
  {
    "category": "Работа",
    "base": "follow up on",
    "meaning": "вернуться к вопросу, проверить продолжение",
    "text": "I ___ the open tasks tomorrow.",
    "form": "will follow up on",
    "tenseKey": "future-simple"
  },
  {
    "category": "Работа",
    "base": "look into",
    "meaning": "изучить проблему",
    "text": "The analyst ___ the drop in conversion now.",
    "form": "is looking into",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Работа",
    "base": "point out",
    "meaning": "указать, обратить внимание",
    "text": "He ___ a risk we had missed.",
    "form": "pointed out",
    "tenseKey": "past-simple"
  },
  {
    "category": "Работа",
    "base": "set up",
    "meaning": "настроить, организовать",
    "text": "We ___ a new dashboard for the team.",
    "form": "have set up",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Работа",
    "base": "take over",
    "meaning": "принять ответственность, руководство",
    "text": "Marta ___ the project next month.",
    "form": "will take over",
    "tenseKey": "future-simple"
  },
  {
    "category": "Работа",
    "base": "hand in",
    "meaning": "сдать работу или документ",
    "text": "I ___ the report yesterday.",
    "form": "handed in",
    "tenseKey": "past-simple"
  },
  {
    "category": "Работа",
    "base": "go over",
    "meaning": "просмотреть, разобрать",
    "text": "We ___ the latest results at the moment.",
    "form": "are going over",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Работа",
    "base": "deal with",
    "meaning": "заниматься проблемой",
    "text": "Our support team ___ these requests every day.",
    "form": "deals with",
    "tenseKey": "present-simple"
  },
  {
    "category": "Работа",
    "base": "work out",
    "meaning": "разработать решение, получиться",
    "text": "The team ___ a realistic plan.",
    "form": "has worked out",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Работа",
    "base": "put off",
    "meaning": "отложить",
    "text": "They ___ the launch before the new issue appeared.",
    "form": "had put off",
    "tenseKey": "past-perfect"
  },
  {
    "category": "Работа",
    "base": "bring up",
    "meaning": "поднять тему",
    "text": "She ___ the budget during the meeting.",
    "form": "brought up",
    "tenseKey": "past-simple"
  },
  {
    "category": "Работа",
    "base": "wrap up",
    "meaning": "заканчивать",
    "text": "At six, we ___ the workshop.",
    "form": "will be wrapping up",
    "tenseKey": "future-continuous"
  },
  {
    "category": "Работа",
    "base": "fall behind",
    "meaning": "отставать от плана",
    "text": "The project ___ for several weeks.",
    "form": "has been falling behind",
    "tenseKey": "present-perfect-continuous"
  },
  {
    "category": "Общение",
    "base": "get back to",
    "meaning": "ответить позже, вернуться с ответом",
    "text": "I ___ you after I check the numbers.",
    "form": "will get back to",
    "tenseKey": "future-simple"
  },
  {
    "category": "Общение",
    "base": "reach out to",
    "meaning": "связаться по собственной инициативе",
    "text": "We ___ three potential partners.",
    "form": "have reached out to",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Общение",
    "base": "speak up",
    "meaning": "говорить громче или открыто высказаться",
    "text": "She ___ when nobody else challenged the decision.",
    "form": "spoke up",
    "tenseKey": "past-simple"
  },
  {
    "category": "Общение",
    "base": "cut off",
    "meaning": "оборвать связь или перебить",
    "text": "The connection ___ during the call.",
    "form": "cut us off",
    "tenseKey": "past-simple"
  },
  {
    "category": "Общение",
    "base": "go on",
    "meaning": "происходить, продолжаться",
    "text": "What ___ in the next room?",
    "form": "is going on",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Общение",
    "base": "get a point across",
    "meaning": "донести мысль",
    "text": "She finally ___ during the presentation.",
    "form": "got her point across",
    "tenseKey": "past-simple"
  },
  {
    "category": "Общение",
    "base": "fill someone in",
    "meaning": "ввести в курс дела",
    "text": "He always ___ after the weekly meeting.",
    "form": "fills me in",
    "tenseKey": "present-simple"
  },
  {
    "category": "Общение",
    "base": "talk over",
    "meaning": "подробно обсудить",
    "text": "We ___ the options tonight.",
    "form": "will talk over",
    "tenseKey": "future-simple"
  },
  {
    "category": "Общение",
    "base": "call back",
    "meaning": "перезвонить",
    "text": "The client ___ already.",
    "form": "has called back",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Общение",
    "base": "hear from",
    "meaning": "получить известие от",
    "text": "I ___ them since Monday.",
    "form": "haven't heard from",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Общение",
    "base": "keep in touch",
    "meaning": "поддерживать связь",
    "text": "We still ___ after all these years.",
    "form": "keep in touch",
    "tenseKey": "present-simple"
  },
  {
    "category": "Общение",
    "base": "catch up with",
    "meaning": "пообщаться после перерыва",
    "text": "I ___ an old colleague over lunch today.",
    "form": "am catching up with",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Общение",
    "base": "hang up",
    "meaning": "положить трубку",
    "text": "He ___ before I could answer.",
    "form": "hung up",
    "tenseKey": "past-simple"
  },
  {
    "category": "Общение",
    "base": "get through to",
    "meaning": "дозвониться, связаться",
    "text": "I finally ___ support.",
    "form": "have got through to",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Общение",
    "base": "put someone through",
    "meaning": "соединить по телефону",
    "text": "The receptionist ___ to the manager.",
    "form": "put me through",
    "tenseKey": "past-simple"
  },
  {
    "category": "Общение",
    "base": "sum up",
    "meaning": "подвести итог",
    "text": "She always ___ the main decisions at the end.",
    "form": "sums up",
    "tenseKey": "present-simple"
  },
  {
    "category": "Планы и время",
    "base": "plan ahead",
    "meaning": "планировать заранее",
    "text": "He always ___ before a busy week.",
    "form": "plans ahead",
    "tenseKey": "present-simple"
  },
  {
    "category": "Планы и время",
    "base": "set aside",
    "meaning": "отложить время или деньги",
    "text": "I ___ two hours for deep work.",
    "form": "have set aside",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Планы и время",
    "base": "make time for",
    "meaning": "находить время для",
    "text": "I ___ English practice tomorrow.",
    "form": "will make time for",
    "tenseKey": "future-simple"
  },
  {
    "category": "Планы и время",
    "base": "run late",
    "meaning": "опаздывать",
    "text": "The meeting ___, so I'll be home later.",
    "form": "is running late",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Планы и время",
    "base": "be about to",
    "meaning": "собираться сделать прямо сейчас",
    "text": "The train ___ leave.",
    "form": "is about to",
    "tenseKey": "present-simple"
  },
  {
    "category": "Планы и время",
    "base": "be supposed to",
    "meaning": "должен по договорённости или правилу",
    "text": "We ___ send the draft today.",
    "form": "are supposed to",
    "tenseKey": "present-simple"
  },
  {
    "category": "Планы и время",
    "base": "end up",
    "meaning": "в итоге оказаться или сделать",
    "text": "We ___ taking a taxi instead of the bus.",
    "form": "ended up",
    "tenseKey": "past-simple"
  },
  {
    "category": "Планы и время",
    "base": "get around to",
    "meaning": "наконец найти время сделать",
    "text": "I ___ reading that report yet.",
    "form": "haven't got around to",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Планы и время",
    "base": "keep up with",
    "meaning": "успевать за темпом",
    "text": "I ___ all the new releases this month.",
    "form": "am keeping up with",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Планы и время",
    "base": "catch up on",
    "meaning": "наверстать накопившееся",
    "text": "By Friday, I ___ all my emails.",
    "form": "will have caught up on",
    "tenseKey": "future-perfect"
  },
  {
    "category": "Планы и время",
    "base": "look forward to",
    "meaning": "с нетерпением ждать",
    "text": "I ___ seeing you next week.",
    "form": "am looking forward to",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Планы и время",
    "base": "put together",
    "meaning": "собрать, подготовить из частей",
    "text": "She ___ a clear action plan.",
    "form": "has put together",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Планы и время",
    "base": "sort out",
    "meaning": "разобраться, уладить",
    "text": "By tomorrow, we ___ the access problem.",
    "form": "will have sorted out",
    "tenseKey": "future-perfect"
  },
  {
    "category": "Планы и время",
    "base": "stick to",
    "meaning": "придерживаться",
    "text": "He ___ his study plan for a month.",
    "form": "has been sticking to",
    "tenseKey": "present-perfect-continuous"
  },
  {
    "category": "Планы и время",
    "base": "go ahead",
    "meaning": "продолжить, дать ход",
    "text": "We ___ with the test next week.",
    "form": "will go ahead",
    "tenseKey": "future-simple"
  },
  {
    "category": "Планы и время",
    "base": "come up",
    "meaning": "возникать",
    "text": "This issue often ___ in customer interviews.",
    "form": "comes up",
    "tenseKey": "present-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "get along with",
    "meaning": "ладить с",
    "text": "She ___ everyone on the team.",
    "form": "gets along with",
    "tenseKey": "present-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "fall out with",
    "meaning": "поссориться с",
    "text": "I ___ my neighbour last week.",
    "form": "fell out with",
    "tenseKey": "past-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "make up",
    "meaning": "помириться",
    "text": "They ___ after the argument.",
    "form": "have made up",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Люди и эмоции",
    "base": "count on",
    "meaning": "рассчитывать на",
    "text": "I always ___ her in difficult situations.",
    "form": "count on",
    "tenseKey": "present-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "care about",
    "meaning": "заботиться, считать важным",
    "text": "He really ___ the quality of his work.",
    "form": "cares about",
    "tenseKey": "present-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "cheer someone up",
    "meaning": "взбодриться или подбодрить",
    "text": "The good news ___ everyone.",
    "form": "cheered up",
    "tenseKey": "past-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "let someone down",
    "meaning": "подвести",
    "text": "She ___.",
    "form": "has never let me down",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Люди и эмоции",
    "base": "stand by",
    "meaning": "поддержать в трудной ситуации",
    "text": "I ___ you whatever happens.",
    "form": "will stand by",
    "tenseKey": "future-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "look up to",
    "meaning": "уважать, брать пример",
    "text": "I ___ my first manager.",
    "form": "looked up to",
    "tenseKey": "past-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "put up with",
    "meaning": "терпеть",
    "text": "We ___ this noise for months.",
    "form": "have been putting up with",
    "tenseKey": "present-perfect-continuous"
  },
  {
    "category": "Люди и эмоции",
    "base": "open up",
    "meaning": "начать говорить откровенно",
    "text": "He ___ more these days.",
    "form": "is opening up",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Люди и эмоции",
    "base": "grow apart",
    "meaning": "постепенно отдаляться",
    "text": "They ___ for years before they separated.",
    "form": "had been growing apart",
    "tenseKey": "past-perfect-continuous"
  },
  {
    "category": "Люди и эмоции",
    "base": "settle down",
    "meaning": "остепениться, устроиться",
    "text": "They ___ after they move to Bilbao.",
    "form": "will settle down",
    "tenseKey": "future-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "turn down",
    "meaning": "отклонить предложение",
    "text": "She ___ the job offer.",
    "form": "turned down",
    "tenseKey": "past-simple"
  },
  {
    "category": "Люди и эмоции",
    "base": "get over",
    "meaning": "оправиться, пережить",
    "text": "He ___ the disappointment at last.",
    "form": "has got over",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Люди и эмоции",
    "base": "take after",
    "meaning": "быть похожим на родственника",
    "text": "Marta ___ her mother.",
    "form": "takes after",
    "tenseKey": "present-simple"
  },
  {
    "category": "Деньги и покупки",
    "base": "pay someone back",
    "meaning": "вернуть долг",
    "text": "I ___ on Friday.",
    "form": "will pay you back",
    "tenseKey": "future-simple"
  },
  {
    "category": "Деньги и покупки",
    "base": "save up",
    "meaning": "копить",
    "text": "We ___ for a new laptop since January.",
    "form": "have been saving up",
    "tenseKey": "present-perfect-continuous"
  },
  {
    "category": "Деньги и покупки",
    "base": "cut back on",
    "meaning": "сокращать расходы или потребление",
    "text": "We ___ unnecessary subscriptions this month.",
    "form": "are cutting back on",
    "tenseKey": "present-continuous"
  },
  {
    "category": "Деньги и покупки",
    "base": "shop around",
    "meaning": "сравнивать предложения",
    "text": "We ___ when we found a better deal.",
    "form": "were shopping around",
    "tenseKey": "past-continuous"
  },
  {
    "category": "Деньги и покупки",
    "base": "sell out",
    "meaning": "полностью распродаться",
    "text": "The cheaper model ___ already.",
    "form": "has sold out",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Деньги и покупки",
    "base": "cost a fortune",
    "meaning": "стоить целое состояние",
    "text": "That last-minute flight ___.",
    "form": "cost a fortune",
    "tenseKey": "past-simple"
  },
  {
    "category": "Деньги и покупки",
    "base": "be worth",
    "meaning": "стоить своих денег или усилий",
    "text": "This course ___ the price.",
    "form": "is worth",
    "tenseKey": "present-simple"
  },
  {
    "category": "Деньги и покупки",
    "base": "take back",
    "meaning": "вернуть товар в магазин",
    "text": "I ___ these shoes tomorrow.",
    "form": "will take back",
    "tenseKey": "future-simple"
  },
  {
    "category": "Деньги и покупки",
    "base": "ask for",
    "meaning": "просить, запрашивать",
    "text": "She ___ a refund when the manager arrived.",
    "form": "was asking for",
    "tenseKey": "past-continuous"
  },
  {
    "category": "Деньги и покупки",
    "base": "pick out",
    "meaning": "выбрать из нескольких",
    "text": "We ___ a gift for Marta.",
    "form": "have picked out",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Деньги и покупки",
    "base": "go with",
    "meaning": "подходить, сочетаться",
    "text": "This jacket ___ your shoes.",
    "form": "goes with",
    "tenseKey": "present-simple"
  },
  {
    "category": "Деньги и покупки",
    "base": "come to",
    "meaning": "составить сумму",
    "text": "The final bill ___ eighty euros.",
    "form": "came to",
    "tenseKey": "past-simple"
  },
  {
    "category": "Деньги и покупки",
    "base": "pay for",
    "meaning": "заплатить за",
    "text": "We ___ the hotel already.",
    "form": "have paid for",
    "tenseKey": "present-perfect"
  },
  {
    "category": "Деньги и покупки",
    "base": "waste money on",
    "meaning": "тратить деньги впустую на",
    "text": "He often ___ apps he never uses.",
    "form": "wastes money on",
    "tenseKey": "present-simple"
  },
  {
    "category": "Деньги и покупки",
    "base": "live on",
    "meaning": "жить на определённую сумму",
    "text": "They ___ a very small budget before the move.",
    "form": "had been living on",
    "tenseKey": "past-perfect-continuous"
  },
  {
    "category": "Деньги и покупки",
    "base": "get by",
    "meaning": "справляться с имеющимися деньгами",
    "text": "We ___ without a car for now.",
    "form": "are getting by",
    "tenseKey": "present-continuous"
  }
];

const PHRASE_TENSE_CLUES = {
  "present-simple": "регулярность, привычка, факт или устойчивое состояние; форма V / V-s",
  "present-continuous": "действие идёт сейчас или является временной ситуацией; am/is/are + V-ing",
  "present-perfect": "есть результат или связь с настоящим, а точное законченное время не названо; have/has + V3",
  "present-perfect-continuous": "важна длительность процесса до настоящего; have/has been + V-ing",
  "past-simple": "завершённое событие в прошлом; V2 или форма с -ed",
  "past-continuous": "действие было в процессе в конкретный прошлый момент; was/were + V-ing",
  "past-perfect": "одно действие завершилось раньше другого прошлого события; had + V3",
  "past-perfect-continuous": "процесс длился до другого момента в прошлом; had been + V-ing",
  "future-simple": "решение, обещание или нейтральное будущее; will + V",
  "future-continuous": "действие будет в процессе в определённый будущий момент; will be + V-ing",
  "future-perfect": "результат будет готов к будущему сроку; will have + V3",
  "future-perfect-continuous": "длительность накопится к будущему моменту; will have been + V-ing"
};

const ARTICLE_ITEMS = [
  {
    "text": "She works as ___ engineer.",
    "answer": "an",
    "ruleKey": "job",
    "explanation": "После профессии ставим a/an; engineer начинается с гласного звука."
  },
  {
    "text": "He wants to buy ___ new laptop.",
    "answer": "a",
    "ruleKey": "first",
    "explanation": "Предмет упоминается впервые и является одним из многих."
  },
  {
    "text": "What ___ useful idea!",
    "answer": "a",
    "ruleKey": "exclamation",
    "explanation": "В конструкции What a... нужен неопределённый артикль; useful начинается со звука /j/."
  },
  {
    "text": "I practise English twice ___ week.",
    "answer": "a",
    "ruleKey": "frequency",
    "explanation": "В выражениях частоты используем a: once a day, twice a week."
  },
  {
    "text": "We waited for ___ hour.",
    "answer": "an",
    "ruleKey": "sound",
    "explanation": "Hour начинается с гласного звука: буква h не произносится."
  },
  {
    "text": "She studies at ___ university in Madrid.",
    "answer": "a",
    "ruleKey": "sound",
    "explanation": "University начинается с согласного звука /j/, поэтому a, а не an."
  },
  {
    "text": "He gave me ___ honest answer.",
    "answer": "an",
    "ruleKey": "sound",
    "explanation": "В honest буква h не произносится, поэтому первый звук гласный."
  },
  {
    "text": "Take ___ umbrella; it's raining.",
    "answer": "an",
    "ruleKey": "first",
    "explanation": "Umbrella — исчисляемый предмет в единственном числе, упоминается впервые."
  },
  {
    "text": "They adopted ___ cat from a shelter.",
    "answer": "a",
    "ruleKey": "first",
    "explanation": "Один неопределённый кот упоминается впервые."
  },
  {
    "text": "She works as ___ UX designer.",
    "answer": "a",
    "ruleKey": "sound",
    "explanation": "UX произносится с начальным звуком /j/: a UX designer."
  },
  {
    "text": "We watched ___ European film.",
    "answer": "a",
    "ruleKey": "sound",
    "explanation": "European начинается со звука /j/, поэтому используем a."
  },
  {
    "text": "He ate ___ apple after lunch.",
    "answer": "an",
    "ruleKey": "first",
    "explanation": "Apple начинается с гласного звука и упоминается впервые."
  },
  {
    "text": "It was ___ one-time offer.",
    "answer": "a",
    "ruleKey": "sound",
    "explanation": "One начинается со звука /w/, поэтому a one-time offer."
  },
  {
    "text": "I had ___ unusual experience yesterday.",
    "answer": "an",
    "ruleKey": "sound",
    "explanation": "Unusual начинается с гласного звука."
  },
  {
    "text": "My brother is ___ doctor.",
    "answer": "a",
    "ruleKey": "job",
    "explanation": "С профессией в единственном числе используем a/an."
  },
  {
    "text": "I bought a book yesterday. ___ book is already on my desk.",
    "answer": "the",
    "ruleKey": "mentioned",
    "explanation": "Book уже упоминалась, поэтому при повторе используем the."
  },
  {
    "text": "Please close ___ door.",
    "answer": "the",
    "ruleKey": "specific",
    "explanation": "Из ситуации понятно, о какой двери идёт речь."
  },
  {
    "text": "___ sun is shining today.",
    "answer": "the",
    "ruleKey": "unique",
    "explanation": "С уникальными объектами используем the."
  },
  {
    "text": "This is ___ best restaurant in the area.",
    "answer": "the",
    "ruleKey": "superlative",
    "explanation": "Перед превосходной степенью нужен the."
  },
  {
    "text": "It was ___ first time I had visited London.",
    "answer": "the",
    "ruleKey": "superlative",
    "explanation": "Перед порядковыми числительными используем the."
  },
  {
    "text": "We went to ___ cinema last night.",
    "answer": "the",
    "ruleKey": "place",
    "explanation": "Cinema, theatre и подобные городские места часто используются с the."
  },
  {
    "text": "I'll meet you at ___ airport.",
    "answer": "the",
    "ruleKey": "specific",
    "explanation": "Речь о конкретном аэропорте, понятном из контекста."
  },
  {
    "text": "They arrived on ___ same day.",
    "answer": "the",
    "ruleKey": "specific",
    "explanation": "В устойчивом сочетании the same всегда нужен the."
  },
  {
    "text": "She is ___ only person who knows the password.",
    "answer": "the",
    "ruleKey": "only",
    "explanation": "Перед only, когда выделяем единственный объект, ставим the."
  },
  {
    "text": "I found the answer on ___ internet.",
    "answer": "the",
    "ruleKey": "unique",
    "explanation": "Устойчивое выражение: on the internet."
  },
  {
    "text": "___ moon looks bright tonight.",
    "answer": "the",
    "ruleKey": "unique",
    "explanation": "Луна рассматривается как уникальный объект."
  },
  {
    "text": "They moved to ___ Netherlands.",
    "answer": "the",
    "ruleKey": "geography",
    "explanation": "Названия стран во множественном числе употребляются с the."
  },
  {
    "text": "He has never been to ___ United States.",
    "answer": "the",
    "ruleKey": "geography",
    "explanation": "Названия государств со словами States, Kingdom, Republic требуют the."
  },
  {
    "text": "They sailed across ___ Pacific Ocean.",
    "answer": "the",
    "ruleKey": "geography",
    "explanation": "Перед океанами и морями ставим the."
  },
  {
    "text": "We went skiing in ___ Alps.",
    "answer": "the",
    "ruleKey": "geography",
    "explanation": "Перед горными цепями во множественном числе ставим the."
  },
  {
    "text": "London stands on ___ Thames.",
    "answer": "the",
    "ruleKey": "geography",
    "explanation": "Перед названиями рек используем the."
  },
  {
    "text": "She can play ___ piano.",
    "answer": "the",
    "ruleKey": "instrument",
    "explanation": "Перед музыкальными инструментами после play обычно ставим the."
  },
  {
    "text": "The policy will affect ___ elderly.",
    "answer": "the",
    "ruleKey": "groups",
    "explanation": "The + adjective может обозначать группу людей."
  },
  {
    "text": "I usually exercise in ___ morning.",
    "answer": "the",
    "ruleKey": "timePhrase",
    "explanation": "Устойчивые выражения: in the morning, in the afternoon, in the evening."
  },
  {
    "text": "Read ___ last page carefully.",
    "answer": "the",
    "ruleKey": "superlative",
    "explanation": "Перед last и first в последовательности обычно ставим the."
  },
  {
    "text": "___ Water is essential for life.",
    "answer": "Без артикля",
    "ruleKey": "general",
    "explanation": "Неисчисляемое существительное используется в общем смысле."
  },
  {
    "text": "___ Dogs need daily exercise.",
    "answer": "Без артикля",
    "ruleKey": "general",
    "explanation": "Множественное число в общем смысле употребляется без артикля."
  },
  {
    "text": "I usually go to ___ work by bus.",
    "answer": "Без артикля",
    "ruleKey": "institution",
    "explanation": "Home, work, school и church без артикля, когда речь об их обычной функции."
  },
  {
    "text": "She is at ___ home today.",
    "answer": "Без артикля",
    "ruleKey": "institution",
    "explanation": "Устойчивое выражение at home используется без артикля."
  },
  {
    "text": "The children go to ___ school at eight.",
    "answer": "Без артикля",
    "ruleKey": "institution",
    "explanation": "Без артикля, когда дети идут в школу учиться."
  },
  {
    "text": "We had ___ breakfast at seven.",
    "answer": "Без артикля",
    "ruleKey": "meal",
    "explanation": "Названия приёмов пищи обычно употребляются без артикля."
  },
  {
    "text": "She speaks ___ English fluently.",
    "answer": "Без артикля",
    "ruleKey": "languageSportSubject",
    "explanation": "Перед названиями языков артикль не нужен."
  },
  {
    "text": "They play ___ football every Sunday.",
    "answer": "Без артикля",
    "ruleKey": "languageSportSubject",
    "explanation": "Перед видами спорта артикль не нужен."
  },
  {
    "text": "He studied ___ history at university.",
    "answer": "Без артикля",
    "ruleKey": "languageSportSubject",
    "explanation": "Перед учебными дисциплинами артикль обычно не ставится."
  },
  {
    "text": "We live in ___ Spain.",
    "answer": "Без артикля",
    "ruleKey": "names",
    "explanation": "Большинство стран и городов употребляются без артикля."
  },
  {
    "text": "I moved to ___ Bilbao last year.",
    "answer": "Без артикля",
    "ruleKey": "names",
    "explanation": "Перед названиями городов артикль обычно не ставится."
  },
  {
    "text": "They climbed ___ Mount Etna.",
    "answer": "Без артикля",
    "ruleKey": "names",
    "explanation": "Перед отдельными горами с Mount артикль не нужен."
  },
  {
    "text": "We stayed near ___ Lake Como.",
    "answer": "Без артикля",
    "ruleKey": "names",
    "explanation": "Перед озёрами со словом Lake артикль не нужен."
  },
  {
    "text": "The shop is on ___ Oxford Street.",
    "answer": "Без артикля",
    "ruleKey": "names",
    "explanation": "Перед названиями улиц артикль обычно не ставится."
  },
  {
    "text": "We travelled there by ___ bus.",
    "answer": "Без артикля",
    "ruleKey": "transport",
    "explanation": "В конструкции by + транспорт артикль не используется."
  },
  {
    "text": "The children are in ___ bed.",
    "answer": "Без артикля",
    "ruleKey": "fixed",
    "explanation": "Устойчивое выражение in bed используется без артикля."
  },
  {
    "text": "They go to ___ church every Sunday.",
    "answer": "Без артикля",
    "ruleKey": "institution",
    "explanation": "Без артикля, когда речь о посещении церкви по назначению."
  },
  {
    "text": "___ Money doesn't grow on trees.",
    "answer": "Без артикля",
    "ruleKey": "general",
    "explanation": "Money — неисчисляемое существительное в общем смысле."
  },
  {
    "text": "___ Life can be unpredictable.",
    "answer": "Без артикля",
    "ruleKey": "general",
    "explanation": "Абстрактное существительное life используется в общем смысле."
  },
  {
    "text": "___ Children need enough sleep.",
    "answer": "Без артикля",
    "ruleKey": "general",
    "explanation": "Множественное число в общем значении не требует артикля."
  },
  {
    "text": "I went to ___ school to speak to my son's teacher.",
    "answer": "the",
    "ruleKey": "specific",
    "explanation": "Здесь school — конкретное здание, а не обычная функция ученика."
  },
  {
    "text": "She plays ___ guitar in a band.",
    "answer": "the",
    "ruleKey": "instrument",
    "explanation": "Перед музыкальным инструментом после play используем the."
  },
  {
    "text": "I left my laptop at ___ office.",
    "answer": "the",
    "ruleKey": "specific",
    "explanation": "Речь о конкретном офисе говорящего."
  },
  {
    "text": "They elected her ___ president.",
    "answer": "Без артикля",
    "ruleKey": "title",
    "explanation": "После elect, appoint и make перед должностью артикль часто не ставится."
  },
  {
    "text": "Let's meet ___ next Monday.",
    "answer": "Без артикля",
    "ruleKey": "nextLast",
    "explanation": "Перед next/last + день или период артикль не используется."
  }
];

const AUXILIARY_ITEMS = [
  {
    "text": "I ___ two brothers.",
    "answers": [
      "have",
      "has",
      "had",
      "am"
    ],
    "correct": "have",
    "explanation": "С I, you, we, they в настоящем времени используем have."
  },
  {
    "text": "She ___ a new laptop.",
    "answers": [
      "have",
      "has",
      "had",
      "is"
    ],
    "correct": "has",
    "explanation": "С he, she, it в настоящем времени используем has."
  },
  {
    "text": "They ___ enough time.",
    "answers": [
      "have",
      "has",
      "had",
      "are"
    ],
    "correct": "have",
    "explanation": "They требует форму have."
  },
  {
    "text": "The app ___ a dark mode.",
    "answers": [
      "have",
      "has",
      "had",
      "is"
    ],
    "correct": "has",
    "explanation": "The app = it, поэтому has."
  },
  {
    "text": "Do you ___ any questions?",
    "answers": [
      "have",
      "has",
      "had",
      "having"
    ],
    "correct": "have",
    "explanation": "После do смысловой глагол всегда возвращается в базовую форму have."
  },
  {
    "text": "He doesn't ___ access to this report.",
    "answers": [
      "have",
      "has",
      "had",
      "having"
    ],
    "correct": "have",
    "explanation": "После doesn't ставим базовую форму: doesn't have, не doesn't has."
  },
  {
    "text": "We ___ an old car when we lived in Madrid.",
    "answers": [
      "have",
      "has",
      "had",
      "were"
    ],
    "correct": "had",
    "explanation": "Had выражает наличие в прошлом для любого подлежащего."
  },
  {
    "text": "She ___ no idea what had happened.",
    "answers": [
      "have",
      "has",
      "had",
      "was"
    ],
    "correct": "had",
    "explanation": "Состояние относится к прошлому, поэтому had."
  },
  {
    "text": "Did they ___ enough money for the tickets?",
    "answers": [
      "have",
      "has",
      "had",
      "having"
    ],
    "correct": "have",
    "explanation": "Прошлое уже выражено did; после него нужна базовая форма have."
  },
  {
    "text": "I didn't ___ time to call you.",
    "answers": [
      "have",
      "has",
      "had",
      "having"
    ],
    "correct": "have",
    "explanation": "После didn't используем have, а не had."
  },
  {
    "text": "I ___ finished the report.",
    "answers": [
      "have",
      "has",
      "had",
      "am"
    ],
    "correct": "have",
    "explanation": "Present Perfect: I + have + V3 finished."
  },
  {
    "text": "She ___ sent the email.",
    "answers": [
      "have",
      "has",
      "had",
      "is"
    ],
    "correct": "has",
    "explanation": "Present Perfect: she + has + V3 sent."
  },
  {
    "text": "They ___ never seen this film.",
    "answers": [
      "have",
      "has",
      "had",
      "are"
    ],
    "correct": "have",
    "explanation": "They + have + V3; never стоит между помощником и V3."
  },
  {
    "text": "He ___ just arrived.",
    "answers": [
      "have",
      "has",
      "had",
      "is"
    ],
    "correct": "has",
    "explanation": "He + has + V3; just показывает недавний результат."
  },
  {
    "text": "___ you ever tried surfing?",
    "answers": [
      "Have",
      "Has",
      "Had",
      "Do"
    ],
    "correct": "Have",
    "explanation": "Вопрос Present Perfect: Have + subject + V3."
  },
  {
    "text": "___ she completed the task yet?",
    "answers": [
      "Have",
      "Has",
      "Had",
      "Does"
    ],
    "correct": "Has",
    "explanation": "Вопрос Present Perfect с she начинается с Has."
  },
  {
    "text": "We ___ not decided yet.",
    "answers": [
      "have",
      "has",
      "had",
      "do"
    ],
    "correct": "have",
    "explanation": "Отрицание Present Perfect: have not + V3."
  },
  {
    "text": "It ___ stopped raining.",
    "answers": [
      "have",
      "has",
      "had",
      "is"
    ],
    "correct": "has",
    "explanation": "It требует has; stopped — третья форма глагола."
  },
  {
    "text": "I ___ finished dinner before she called.",
    "answers": [
      "have",
      "has",
      "had",
      "was"
    ],
    "correct": "had",
    "explanation": "Past Perfect: более раннее прошлое действие выражается had + V3."
  },
  {
    "text": "They ___ left by the time we arrived.",
    "answers": [
      "have",
      "has",
      "had",
      "were"
    ],
    "correct": "had",
    "explanation": "Сначала они ушли, потом мы приехали: had left."
  },
  {
    "text": "___ she seen the place before that trip?",
    "answers": [
      "Have",
      "Has",
      "Had",
      "Did"
    ],
    "correct": "Had",
    "explanation": "Вопрос Past Perfect: Had + subject + V3."
  },
  {
    "text": "He ___ noticed the mistake before the launch.",
    "answers": [
      "hasn't",
      "hadn't",
      "didn't",
      "wasn't"
    ],
    "correct": "hadn't",
    "explanation": "Отрицание Past Perfect: had not + V3."
  },
  {
    "text": "We ___ never met before that evening.",
    "answers": [
      "have",
      "has",
      "had",
      "were"
    ],
    "correct": "had",
    "explanation": "Оба события в прошлом; более раннее — had met."
  },
  {
    "text": "By noon, the team ___ completed the migration.",
    "answers": [
      "have",
      "has",
      "had",
      "was"
    ],
    "correct": "had",
    "explanation": "Результат был готов к прошлому сроку by noon: had + V3."
  },
  {
    "text": "I ___ this phone for three years.",
    "answers": [
      "have",
      "have had",
      "had",
      "am having"
    ],
    "correct": "have had",
    "explanation": "Have had — Present Perfect глагола have: I + have-помощник + had-V3."
  },
  {
    "text": "She ___ a very busy week.",
    "answers": [
      "has",
      "has had",
      "had",
      "is having"
    ],
    "correct": "has had",
    "explanation": "Has had: has — помощник для she, had — третья форма смыслового have."
  },
  {
    "text": "We ___ three meetings today.",
    "answers": [
      "have",
      "have had",
      "had",
      "are having"
    ],
    "correct": "have had",
    "explanation": "День ещё не закончен, важен накопленный результат: have had."
  },
  {
    "text": "He ___ a headache since morning.",
    "answers": [
      "has",
      "has had",
      "had",
      "is having"
    ],
    "correct": "has had",
    "explanation": "Since morning связывает прошлое с настоящим: he has had."
  },
  {
    "text": "I ___ breakfast before the call started.",
    "answers": [
      "have had",
      "has had",
      "had",
      "had had"
    ],
    "correct": "had had",
    "explanation": "Had had — Past Perfect глагола have: первое had — помощник, второе had — V3."
  },
  {
    "text": "By then, they ___ two major delays.",
    "answers": [
      "have had",
      "has had",
      "had",
      "had had"
    ],
    "correct": "had had",
    "explanation": "К прошлому моменту уже было два события: had had."
  },
  {
    "text": "___ you work from home?",
    "answers": [
      "Do",
      "Does",
      "Did",
      "Are"
    ],
    "correct": "Do",
    "explanation": "Вопрос Present Simple с you: Do + subject + V."
  },
  {
    "text": "___ she speak Spanish?",
    "answers": [
      "Do",
      "Does",
      "Did",
      "Is"
    ],
    "correct": "Does",
    "explanation": "Вопрос Present Simple с she: Does + subject + V."
  },
  {
    "text": "Where ___ they live?",
    "answers": [
      "do",
      "does",
      "did",
      "are"
    ],
    "correct": "do",
    "explanation": "They в Present Simple требует do."
  },
  {
    "text": "Why ___ he need access?",
    "answers": [
      "do",
      "does",
      "did",
      "is"
    ],
    "correct": "does",
    "explanation": "He в Present Simple требует does; need остаётся в базовой форме."
  },
  {
    "text": "___ you call him yesterday?",
    "answers": [
      "Do",
      "Does",
      "Did",
      "Have"
    ],
    "correct": "Did",
    "explanation": "Yesterday указывает на Past Simple: Did + subject + V."
  },
  {
    "text": "When ___ she arrive?",
    "answers": [
      "do",
      "does",
      "did",
      "has"
    ],
    "correct": "did",
    "explanation": "Вопрос о завершённом прошлом: did + arrive."
  },
  {
    "text": "I ___ not understand this rule.",
    "answers": [
      "do",
      "does",
      "did",
      "am"
    ],
    "correct": "do",
    "explanation": "Отрицание Present Simple с I: do not + V."
  },
  {
    "text": "He ___ not like coffee.",
    "answers": [
      "do",
      "does",
      "did",
      "is"
    ],
    "correct": "does",
    "explanation": "He в Present Simple: does not + like."
  },
  {
    "text": "They ___ not finish the task yesterday.",
    "answers": [
      "do",
      "does",
      "did",
      "were"
    ],
    "correct": "did",
    "explanation": "Past Simple отрицание: did not + finish."
  },
  {
    "text": "What ___ happen after the meeting?",
    "answers": [
      "do",
      "does",
      "did",
      "was"
    ],
    "correct": "did",
    "explanation": "Вопрос о прошлом: did + базовая форма happen."
  },
  {
    "text": "I ___ ready.",
    "answers": [
      "am",
      "is",
      "are",
      "have"
    ],
    "correct": "am",
    "explanation": "Форма be для I в настоящем времени — am."
  },
  {
    "text": "She ___ at home.",
    "answers": [
      "am",
      "is",
      "are",
      "has"
    ],
    "correct": "is",
    "explanation": "Форма be для he, she, it — is."
  },
  {
    "text": "They ___ busy today.",
    "answers": [
      "am",
      "is",
      "are",
      "have"
    ],
    "correct": "are",
    "explanation": "Форма be для you, we, they — are."
  },
  {
    "text": "We ___ tired yesterday.",
    "answers": [
      "was",
      "were",
      "are",
      "had"
    ],
    "correct": "were",
    "explanation": "В прошлом с we/you/they используем were."
  },
  {
    "text": "He ___ late yesterday.",
    "answers": [
      "was",
      "were",
      "is",
      "had"
    ],
    "correct": "was",
    "explanation": "В прошлом с I/he/she/it используем was."
  },
  {
    "text": "___ you okay?",
    "answers": [
      "Am",
      "Is",
      "Are",
      "Do"
    ],
    "correct": "Are",
    "explanation": "Вопрос с be строится без do: Are you okay?"
  },
  {
    "text": "___ she at the meeting yesterday?",
    "answers": [
      "Was",
      "Were",
      "Did",
      "Has"
    ],
    "correct": "Was",
    "explanation": "Состояние she в прошлом: Was she...?"
  },
  {
    "text": "There ___ many reasons to wait.",
    "answers": [
      "is",
      "are",
      "has",
      "have"
    ],
    "correct": "are",
    "explanation": "После there форма be согласуется с reasons во множественном числе."
  },
  {
    "text": "I ___ working right now.",
    "answers": [
      "am",
      "is",
      "are",
      "have"
    ],
    "correct": "am",
    "explanation": "Present Continuous: I am + V-ing."
  },
  {
    "text": "She ___ reading the report.",
    "answers": [
      "am",
      "is",
      "are",
      "has"
    ],
    "correct": "is",
    "explanation": "Present Continuous: she is + V-ing."
  },
  {
    "text": "They ___ waiting outside.",
    "answers": [
      "am",
      "is",
      "are",
      "have"
    ],
    "correct": "are",
    "explanation": "Present Continuous: they are + V-ing."
  },
  {
    "text": "We ___ driving at eight yesterday.",
    "answers": [
      "was",
      "were",
      "are",
      "had"
    ],
    "correct": "were",
    "explanation": "Past Continuous: we were + V-ing."
  },
  {
    "text": "He ___ sleeping when I called.",
    "answers": [
      "was",
      "were",
      "is",
      "had"
    ],
    "correct": "was",
    "explanation": "Past Continuous: he was + V-ing."
  },
  {
    "text": "What ___ you doing when it happened?",
    "answers": [
      "was",
      "were",
      "did",
      "had"
    ],
    "correct": "were",
    "explanation": "Вопрос Past Continuous: What were you doing...?"
  },
  {
    "text": "I ___ call you tomorrow.",
    "answers": [
      "will",
      "do",
      "have",
      "am"
    ],
    "correct": "will",
    "explanation": "Future Simple: will + базовая форма call."
  },
  {
    "text": "___ you help me with this?",
    "answers": [
      "Will",
      "Do",
      "Have",
      "Are"
    ],
    "correct": "Will",
    "explanation": "Will перед подлежащим образует вопрос о будущем или просьбу."
  },
  {
    "text": "I think it ___ be useful.",
    "answers": [
      "will",
      "does",
      "has",
      "is"
    ],
    "correct": "will",
    "explanation": "Прогноз с I think: will + be."
  },
  {
    "text": "I ___ to leave now.",
    "answers": [
      "have",
      "has",
      "had",
      "am"
    ],
    "correct": "have",
    "explanation": "Have to в настоящем времени с I/you/we/they выражает необходимость."
  },
  {
    "text": "She ___ to leave early every Friday.",
    "answers": [
      "have",
      "has",
      "had",
      "is"
    ],
    "correct": "has",
    "explanation": "Has to с she выражает регулярную необходимость."
  },
  {
    "text": "We ___ to cancel the meeting yesterday.",
    "answers": [
      "have",
      "has",
      "had",
      "did"
    ],
    "correct": "had",
    "explanation": "Had to выражает необходимость в прошлом для любого подлежащего."
  }
];

const MODAL_ITEMS = [
  {
    "prompt": "Исправь ошибку: You should to eat more vegetables.",
    "answers": [
      "You should eat more vegetables.",
      "You should to eat more vegetables.",
      "You should eats more vegetables.",
      "You do should eat more vegetables."
    ],
    "correct": "You should eat more vegetables.",
    "explanation": "После should ставим базовую форму без to и без окончания -s."
  },
  {
    "prompt": "Исправь ошибку: He musts arrive early.",
    "answers": [
      "He must arrive early.",
      "He musts arrive early.",
      "He must to arrive early.",
      "He does must arrive early."
    ],
    "correct": "He must arrive early.",
    "explanation": "Must не изменяется после he/she/it; после него сразу идёт базовая форма."
  },
  {
    "prompt": "Исправь ошибку: He have to goes to the store.",
    "answers": [
      "He has to go to the store.",
      "He have to goes to the store.",
      "He has go to the store.",
      "He musts go to the store."
    ],
    "correct": "He has to go to the store.",
    "explanation": "С he используем has to, а после to — базовую форму go."
  },
  {
    "prompt": "Как правильно сказать: «Тебе нужно отправить отчёт до полудня»?",
    "answers": [
      "You have to send your report by noon.",
      "You have send your report by noon.",
      "You must to send your report by noon.",
      "You has to send your report by noon."
    ],
    "correct": "You have to send your report by noon.",
    "explanation": "Have to + V выражает необходимость; с you используем have to."
  },
  {
    "prompt": "Исправь ошибку: Elizabeth musts answer immediately.",
    "answers": [
      "Elizabeth must answer immediately.",
      "Elizabeth musts answer immediately.",
      "Elizabeth must to answer immediately.",
      "Elizabeth has answer immediately."
    ],
    "correct": "Elizabeth must answer immediately.",
    "explanation": "После must всегда базовая форма; окончания -s у must не бывает."
  },
  {
    "prompt": "Исправь ошибку: Kevin shoulds arrive at ten.",
    "answers": [
      "Kevin should arrive at ten.",
      "Kevin shoulds arrive at ten.",
      "Kevin should to arrive at ten.",
      "Kevin does should arrive at ten."
    ],
    "correct": "Kevin should arrive at ten.",
    "explanation": "Should одинаков для всех лиц и требует базовую форму."
  },
  {
    "prompt": "Исправь ошибку: Mark have to come tomorrow.",
    "answers": [
      "Mark has to come tomorrow.",
      "Mark have to come tomorrow.",
      "Mark has to comes tomorrow.",
      "Mark musts come tomorrow."
    ],
    "correct": "Mark has to come tomorrow.",
    "explanation": "Mark = he, поэтому has to; после to ставим come."
  },
  {
    "prompt": "Исправь ошибку: I should to buy a new phone.",
    "answers": [
      "I should buy a new phone.",
      "I should to buy a new phone.",
      "I should buying a new phone.",
      "I do should buy a new phone."
    ],
    "correct": "I should buy a new phone.",
    "explanation": "Should + базовая форма buy, без to."
  },
  {
    "prompt": "Как правильно сказать о прошлой необходимости?",
    "answers": [
      "I had to leave early yesterday.",
      "I have to leave early yesterday.",
      "I musted leave early yesterday.",
      "I had leave early yesterday."
    ],
    "correct": "I had to leave early yesterday.",
    "explanation": "В прошлом have to превращается в had to для всех лиц; формы musted не существует."
  },
  {
    "prompt": "Как правильно сказать о будущей необходимости?",
    "answers": [
      "We will have to work tomorrow.",
      "We will must work tomorrow.",
      "We have to worked tomorrow.",
      "We will have work tomorrow."
    ],
    "correct": "We will have to work tomorrow.",
    "explanation": "Будущее необходимости: will have to + базовая форма."
  },
  {
    "prompt": "Исправь ошибку: She doesn't should be so rude.",
    "answers": [
      "She shouldn't be so rude.",
      "She doesn't should be so rude.",
      "She shouldn't to be so rude.",
      "She not should be so rude."
    ],
    "correct": "She shouldn't be so rude.",
    "explanation": "Отрицание should строится без do: should not / shouldn't + V."
  },
  {
    "prompt": "Как правильно выразить запрет?",
    "answers": [
      "They mustn't enter this room.",
      "They don't have to enter this room.",
      "They shouldn't to enter this room.",
      "They mustn't to enter this room."
    ],
    "correct": "They mustn't enter this room.",
    "explanation": "Mustn't означает строгий запрет: нельзя входить."
  },
  {
    "prompt": "Исправь ошибку: She don't have to study tonight.",
    "answers": [
      "She doesn't have to study tonight.",
      "She don't have to study tonight.",
      "She hasn't to study tonight.",
      "She doesn't has to study tonight."
    ],
    "correct": "She doesn't have to study tonight.",
    "explanation": "С she используем doesn't; после него базовая форма have."
  },
  {
    "prompt": "Как сказать, что приходить необязательно?",
    "answers": [
      "You don't have to come tomorrow.",
      "You mustn't come tomorrow.",
      "You shouldn't to come tomorrow.",
      "You haven't to come tomorrow."
    ],
    "correct": "You don't have to come tomorrow.",
    "explanation": "Don't have to означает отсутствие необходимости: можно не приходить."
  },
  {
    "prompt": "Исправь ошибку: I hadn't to cook because we ordered pizza.",
    "answers": [
      "I didn't have to cook because we ordered pizza.",
      "I hadn't to cook because we ordered pizza.",
      "I mustn't cook because we ordered pizza.",
      "I didn't had to cook because we ordered pizza."
    ],
    "correct": "I didn't have to cook because we ordered pizza.",
    "explanation": "Прошлое отсутствие необходимости: didn't have to + V."
  },
  {
    "prompt": "На табличке написано No swimming. Что сказать?",
    "answers": [
      "People mustn't swim here.",
      "People don't have to swim here.",
      "People shouldn't to swim here.",
      "People mustn't to swim here."
    ],
    "correct": "People mustn't swim here.",
    "explanation": "Это запрет, поэтому mustn't, а не don't have to."
  },
  {
    "prompt": "Исправь ошибку: You don't should drive so fast.",
    "answers": [
      "You shouldn't drive so fast.",
      "You don't should drive so fast.",
      "You shouldn't to drive so fast.",
      "You doesn't should drive so fast."
    ],
    "correct": "You shouldn't drive so fast.",
    "explanation": "Совет в отрицании: shouldn't + базовая форма."
  },
  {
    "prompt": "Как сказать, что платить в будущем не придётся?",
    "answers": [
      "We won't have to pay next time.",
      "We won't must pay next time.",
      "We don't have to paid next time.",
      "We will haven't to pay next time."
    ],
    "correct": "We won't have to pay next time.",
    "explanation": "Будущее отсутствие необходимости: won't have to + V."
  },
  {
    "prompt": "Исправь ошибку: He don't have to work today.",
    "answers": [
      "He doesn't have to work today.",
      "He don't have to work today.",
      "He hasn't to work today.",
      "He doesn't has to work today."
    ],
    "correct": "He doesn't have to work today.",
    "explanation": "He требует doesn't; после doesn't — have."
  },
  {
    "prompt": "Как правильно выразить строгий запрет трогать оборудование?",
    "answers": [
      "You must not touch the equipment.",
      "You do not must touch the equipment.",
      "You must not to touch the equipment.",
      "You don't have to touch the equipment."
    ],
    "correct": "You must not touch the equipment.",
    "explanation": "Must not + V выражает запрет; do не используется."
  },
  {
    "prompt": "Исправь вопрос: Should he goes to the beach?",
    "answers": [
      "Should he go to the beach?",
      "Should he goes to the beach?",
      "Does he should go to the beach?",
      "Should he to go to the beach?"
    ],
    "correct": "Should he go to the beach?",
    "explanation": "Вопрос с should: Should + subject + базовая форма?"
  },
  {
    "prompt": "Исправь вопрос: Does he must finish today?",
    "answers": [
      "Must he finish today?",
      "Does he must finish today?",
      "Must he finishes today?",
      "Does he must to finish today?"
    ],
    "correct": "Must he finish today?",
    "explanation": "Must сам выходит перед подлежащим; does не нужен."
  },
  {
    "prompt": "Исправь вопрос: Have they to pay now?",
    "answers": [
      "Do they have to pay now?",
      "Have they to pay now?",
      "Do they has to pay now?",
      "Must they to pay now?"
    ],
    "correct": "Do they have to pay now?",
    "explanation": "Вопрос с have to в Present Simple строится через do."
  },
  {
    "prompt": "Исправь вопрос: Has she to leave early?",
    "answers": [
      "Does she have to leave early?",
      "Has she to leave early?",
      "Does she has to leave early?",
      "Is she have to leave early?"
    ],
    "correct": "Does she have to leave early?",
    "explanation": "С she: Does + subject + have to + V."
  },
  {
    "prompt": "Как спросить о прошлой необходимости?",
    "answers": [
      "Did you have to wait long?",
      "Had you to wait long?",
      "Did you had to wait long?",
      "Were you have to wait long?"
    ],
    "correct": "Did you have to wait long?",
    "explanation": "Вопрос в прошлом: Did + subject + have to + V."
  },
  {
    "prompt": "Как попросить совет: «Мне позвонить ему?»",
    "answers": [
      "Should I call him?",
      "Do I should call him?",
      "Should I to call him?",
      "Must I calling him?"
    ],
    "correct": "Should I call him?",
    "explanation": "Should I...? используется, когда спрашиваем совет."
  },
  {
    "prompt": "Исправь вопрос: Do we must wear a uniform?",
    "answers": [
      "Must we wear a uniform?",
      "Do we must wear a uniform?",
      "Must we to wear a uniform?",
      "Must we wears a uniform?"
    ],
    "correct": "Must we wear a uniform?",
    "explanation": "Вопрос с must строится без do и без to."
  },
  {
    "prompt": "Как спросить о будущей необходимости?",
    "answers": [
      "Will he have to travel next week?",
      "Will he must travel next week?",
      "Does he will have to travel next week?",
      "Will he has to travel next week?"
    ],
    "correct": "Will he have to travel next week?",
    "explanation": "Будущий вопрос: Will + subject + have to + V?"
  },
  {
    "prompt": "Исправь вопрос: Why she has to leave?",
    "answers": [
      "Why does she have to leave?",
      "Why she has to leave?",
      "Why does she has to leave?",
      "Why has she to leave?"
    ],
    "correct": "Why does she have to leave?",
    "explanation": "Present Simple: Why + does + subject + have to + V?"
  },
  {
    "prompt": "Исправь вопрос: When did they had to leave?",
    "answers": [
      "When did they have to leave?",
      "When did they had to leave?",
      "When had they to leave?",
      "When did they have leave?"
    ],
    "correct": "When did they have to leave?",
    "explanation": "После did используем базовую форму have, не had."
  },
  {
    "prompt": "Галстук необязателен. Как сказать?",
    "answers": [
      "You don't have to wear a tie.",
      "You mustn't wear a tie.",
      "You shouldn't wear a tie.",
      "You must wear a tie."
    ],
    "correct": "You don't have to wear a tie.",
    "explanation": "Don't have to = нет необходимости, но можно сделать."
  },
  {
    "prompt": "Парковка запрещена. Как сказать?",
    "answers": [
      "You mustn't park here.",
      "You don't have to park here.",
      "You shouldn't to park here.",
      "You haven't to park here."
    ],
    "correct": "You mustn't park here.",
    "explanation": "Mustn't = нельзя, строгий запрет."
  },
  {
    "prompt": "Вчера пришлось вызвать врача. Как сказать?",
    "answers": [
      "I had to call a doctor yesterday.",
      "I must call a doctor yesterday.",
      "I have to called a doctor yesterday.",
      "I did have to called a doctor yesterday."
    ],
    "correct": "I had to call a doctor yesterday.",
    "explanation": "Прошлая необходимость выражается had to + V."
  },
  {
    "prompt": "Это моё сильное личное решение: не забыть. Как сказать?",
    "answers": [
      "I must remember this.",
      "I have remember this.",
      "I must to remember this.",
      "I shoulds remember this."
    ],
    "correct": "I must remember this.",
    "explanation": "Must часто выражает сильную необходимость, которую ощущает сам говорящий."
  },
  {
    "prompt": "Это совет обратиться к врачу. Как сказать?",
    "answers": [
      "You should see a doctor.",
      "You must to see a doctor.",
      "You should to see a doctor.",
      "You have see a doctor."
    ],
    "correct": "You should see a doctor.",
    "explanation": "Should выражает совет, а не строгую обязанность."
  },
  {
    "prompt": "Как уточнить внешнее требование про паспорт?",
    "answers": [
      "Do I have to bring my passport?",
      "Must I to bring my passport?",
      "Have I to bring my passport?",
      "Do I has to bring my passport?"
    ],
    "correct": "Do I have to bring my passport?",
    "explanation": "Have to удобно использовать для правил и внешних требований; вопрос строится через do."
  }
];

const STORAGE_KEY = "tense-day-progress-v1";
const DAY = 24 * 60 * 60 * 1000;
let state = loadState();
let session = null;

const dashboard = document.querySelector("#dashboard");
const lesson = document.querySelector("#lesson");
const guide = document.querySelector("#guide");
const quiz = document.querySelector("#quiz");

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;
  const { action, key, index } = trigger.dataset;

  if (action === "home") renderDashboard();
  if (action === "start-daily") startDailySession();
  if (action === "start-identify") startIdentifySession();
  if (action === "start-gerund") startGerundSession();
  if (action === "start-phrases") startPhraseSession();
  if (action === "start-articles") startArticleSession();
  if (action === "start-auxiliaries") startAuxiliarySession();
  if (action === "focus-tense") startFocusSession(key);
  if (action === "identify-tense") startIdentifyForTense(key);
  if (action === "open-tense") renderLesson(key);
  if (action === "open-guide") renderGuide();
  if (action === "open-gerund-guide") renderGerundGuide();
  if (action === "open-phrases") renderPhraseGuide();
  if (action === "open-articles") renderArticleGuide();
  if (action === "open-auxiliaries") renderAuxiliaryGuide();
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
    grammarStats: {
      gerundInfinitive: { total: 0, correct: 0 },
      speechPatterns: { total: 0, correct: 0 },
      articles: { total: 0, correct: 0 },
      auxiliaries: { total: 0, correct: 0 },
    },
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
      grammarStats: {
        ...fresh.grammarStats,
        ...(saved.grammarStats || {}),
      },
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showOnly(page) {
  [dashboard, lesson, guide, quiz].forEach((section) => section.classList.add("hidden"));
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
    : `8 вопросов: четыре на форму глагола и четыре на распознавание времени в тексте. В фокусе — ${focus.name}.`;
  const buttonText = isFirstRun ? "Пройти диагностику · 8 мин" : "Начать 8 вопросов · 6 мин";
  const accuracyText = state.totalAnswered ? `${overallAccuracy()}%` : "—";
  const progress = Math.round((learnedCount() / TENSES.length) * 100);
  const gerundStat = state.grammarStats.gerundInfinitive;
  const gerundStatText = gerundStat.total ? `${accuracy(gerundStat)}% · ${gerundStat.total} ответов` : "Ещё не тренировались";
  const phraseStat = state.grammarStats.speechPatterns;
  const phraseStatText = phraseStat.total ? `${accuracy(phraseStat)}% · ${phraseStat.total} ответов` : "Ещё не тренировались";
  const articleStat = state.grammarStats.articles;
  const articleStatText = articleStat.total ? `${accuracy(articleStat)}% · ${articleStat.total} ответов` : "Ещё не тренировались";
  const auxiliaryStat = state.grammarStats.auxiliaries;
  const auxiliaryStatText = auxiliaryStat.total ? `${accuracy(auxiliaryStat)}% · ${auxiliaryStat.total} ответов` : "Ещё не тренировались";

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


    <section class="mode-section">
      <div class="section-heading">
        <div><p class="eyebrow">Каталог</p><h2>Тренировки по темам</h2></div>
        <p class="section-note">Выбирай одну тему — прогресс сохраняется отдельно</p>
      </div>
      <div class="mode-grid">
        <article class="mode-card mode-violet">
          <span class="mode-kicker">Система времён</span>
          <h3>Конструктор грамматики</h3>
          <p>Формулы V, V-ing, V2 и V3, вопросы, отрицания и неправильные глаголы.</p>
          <div class="mode-card-footer"><small>Общая памятка</small><button class="secondary-button" type="button" data-action="open-guide">Открыть</button></div>
        </article>
        <article class="mode-card mode-forest">
          <span class="mode-kicker">Контекст</span>
          <h3>Определи время</h3>
          <p>Готовые предложения без пропусков: найди форму и признак времени.</p>
          <div class="mode-card-footer"><small>36 примеров</small><button class="primary-button" type="button" data-action="start-identify">10 заданий</button></div>
        </article>
        <article class="mode-card mode-blue">
          <span class="mode-kicker">Форма глагола</span>
          <h3>Gerund или infinitive</h3>
          <p>Working, to work или work; включая try, remember и stop.</p>
          <div class="mode-card-meta">${gerundStatText}</div>
          <div class="mode-card-actions"><button class="secondary-button" type="button" data-action="open-gerund-guide">Правила</button><button class="primary-button" type="button" data-action="start-gerund">12 заданий</button></div>
        </article>
        <article class="mode-card mode-coral">
          <span class="mode-kicker">Лексика + времена</span>
          <h3>Речевые обороты</h3>
          <p>${PHRASE_ITEMS.length} контекстных примеров по семи жизненным темам.</p>
          <div class="mode-card-meta">${phraseStatText}</div>
          <div class="mode-card-actions"><button class="secondary-button" type="button" data-action="open-phrases">Библиотека</button><button class="primary-button" type="button" data-action="start-phrases">14 заданий</button></div>
        </article>
        <article class="mode-card mode-yellow">
          <span class="mode-kicker">Новая тема</span>
          <h3>Артикли: a, an, the или Ø</h3>
          <p>Первое упоминание, конкретный предмет, уникальные объекты и случаи без артикля.</p>
          <div class="mode-card-meta">${articleStatText}</div>
          <div class="mode-card-actions"><button class="secondary-button" type="button" data-action="open-articles">Правила</button><button class="primary-button" type="button" data-action="start-articles">12 заданий</button></div>
        </article>

        <article class="mode-card mode-green">
          <span class="mode-kicker">Глаголы-помощники</span>
          <h3>Помощники и модальные</h3>
          <p>Have had, do/does/did, формы be, must, should и have to — плюс порядок слов.</p>
          <div class="mode-card-meta">${auxiliaryStatText}</div>
          <div class="mode-card-actions"><button class="secondary-button" type="button" data-action="open-auxiliaries">Правила</button><button class="primary-button" type="button" data-action="start-auxiliaries">12 заданий</button></div>
        </article>
      </div>
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

      <h3 class="lesson-section-title">Как образуется</h3>
      <div class="formation-grid">
        <div class="formation-row"><span class="form-sign plus">+</span><div><small>Утверждение</small><strong>${tense.forms.affirmative}</strong></div></div>
        <div class="formation-row"><span class="form-sign minus">−</span><div><small>Отрицание</small><strong>${tense.forms.negative}</strong></div></div>
        <div class="formation-row"><span class="form-sign question-sign">?</span><div><small>Вопрос</small><strong>${tense.forms.question}</strong></div></div>
      </div>

      <div class="lesson-columns">
        <section>
          <h3 class="lesson-section-title">Когда использовать</h3>
          <ul class="rule-list">${tense.useCases.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section>
          <h3 class="lesson-section-title">Слова-подсказки</h3>
          <div class="marker-chips">${tense.markers.map((item) => `<span>${item}</span>`).join("")}</div>
        </section>
      </div>

      <h3 class="lesson-section-title">Примеры</h3>
      <div class="example-list">
        ${tense.examples.map(([en, ru]) => `<div class="example-row"><strong>${en}</strong><span>${ru}</span></div>`).join("")}
      </div>

      <aside class="mistake-box">
        <p class="eyebrow">Частая ошибка</p>
        <p><del>${tense.mistake.wrong}</del> <span aria-hidden="true">→</span> <strong>${tense.mistake.right}</strong></p>
        <small>${tense.mistake.note}</small>
      </aside>
      <div class="lesson-actions">
        <button class="primary-button" type="button" data-action="focus-tense" data-key="${tense.key}">Шесть вопросов по теме</button>
        <button class="secondary-button" type="button" data-action="identify-tense" data-key="${tense.key}">Распознать в тексте</button>
        <button class="secondary-button" type="button" data-action="home">К прогрессу</button>
      </div>
    </article>
  `;
  showOnly(lesson);
}

function renderGuide() {
  const verbForms = [
    ["V", "начальная форма", "work / go", "Present и Future Simple"],
    ["V-s", "форма для he/she/it", "works / goes", "Present Simple"],
    ["V-ing", "форма процесса", "working / going", "все Continuous"],
    ["V2", "прошедшая форма", "worked / went", "Past Simple"],
    ["V3", "причастие", "worked / gone", "все Perfect"],
  ];
  const irregulars = [
    ["be", "was/were", "been"], ["have", "had", "had"], ["do", "did", "done"], ["go", "went", "gone"],
    ["get", "got", "got"], ["make", "made", "made"], ["say", "said", "said"], ["see", "saw", "seen"],
    ["come", "came", "come"], ["take", "took", "taken"], ["know", "knew", "known"], ["give", "gave", "given"],
    ["find", "found", "found"], ["think", "thought", "thought"], ["tell", "told", "told"], ["buy", "bought", "bought"],
  ];

  guide.innerHTML = `
    <button class="back-button" type="button" data-action="home">← К тренировке</button>
    <article class="lesson-card guide-page">
      <span class="lesson-tag">Общая система</span>
      <h1>Конструктор английских времён</h1>
      <p class="subtitle">Сначала выбери, когда происходит действие: Past, Present или Future. Затем выбери характер: факт, процесс, результат к моменту или накопленная длительность.</p>

      <div class="idea-grid">
        <div><span>Simple</span><strong>факт и регулярность</strong></div>
        <div><span>Continuous</span><strong>процесс в моменте</strong></div>
        <div><span>Perfect</span><strong>результат к моменту</strong></div>
        <div><span>Perfect Continuous</span><strong>длится уже N времени</strong></div>
      </div>

      <h2 class="guide-heading">Пять форм смыслового глагола</h2>
      <div class="verb-table">
        ${verbForms.map(([form, meaning, sample, use]) => `<div class="verb-row"><strong>${form}</strong><span>${meaning}</span><code>${sample}</code><small>${use}</small></div>`).join("")}
      </div>

      <div class="guide-rule-grid">
        <section class="rule-card">
          <h3>Как добавить -s</h3>
          <ul class="rule-list">
            <li>обычно: work → works</li>
            <li>-s, -sh, -ch, -x, -o: watch → watches</li>
            <li>согласная + y: study → studies</li>
            <li>особая форма: have → has</li>
          </ul>
        </section>
        <section class="rule-card">
          <h3>Как добавить -ing</h3>
          <ul class="rule-list">
            <li>обычно: work → working</li>
            <li>немая -e отпадает: make → making</li>
            <li>короткий ударный слог: run → running</li>
            <li>-ie превращается в -y: lie → lying</li>
          </ul>
        </section>
        <section class="rule-card">
          <h3>Как добавить -ed</h3>
          <ul class="rule-list">
            <li>обычно: work → worked</li>
            <li>после -e только -d: live → lived</li>
            <li>согласная + y: study → studied</li>
            <li>короткий ударный слог: stop → stopped</li>
          </ul>
        </section>
        <section class="rule-card">
          <h3>Вспомогательные «моторчики»</h3>
          <ul class="rule-list">
            <li>do / does / did — Simple</li>
            <li>am / is / are / was / were — Continuous</li>
            <li>have / has / had — Perfect</li>
            <li>will — будущее</li>
          </ul>
        </section>
      </div>

      <aside class="principle-box"><strong>Главный принцип:</strong> в вопросе вспомогательный глагол выходит перед подлежащим. В отрицании к нему добавляется not. После do, does и did смысловой глагол всегда возвращается в форму V.</aside>

      <h2 class="guide-heading">Нужные неправильные глаголы</h2>
      <div class="irregular-grid">
        ${irregulars.map(([v, v2, v3]) => `<div><strong>${v}</strong><span>${v2}</span><span>${v3}</span></div>`).join("")}
      </div>

      <aside class="mistake-box">
        <p class="eyebrow">Два важных исключения</p>
        <p><strong>to be</strong> в Present Simple: I am, he is, we are; вопросы без do: Are you ready?</p>
        <p><strong>to be</strong> в Past Simple: was/were; отрицание wasn't/weren't; вопрос Was/Were…?</p>
      </aside>
    </article>
  `;
  showOnly(guide);
}

function renderGerundGuide() {
  guide.innerHTML = `
    <button class="back-button" type="button" data-action="home">← К тренировке</button>
    <article class="lesson-card guide-page gerund-guide">
      <span class="lesson-tag">Gerund or infinitive</span>
      <h1>Что ставить после глагола</h1>
      <p class="subtitle">Смотри не только на перевод, а на слово перед вторым глаголом. Оно чаще всего и определяет форму.</p>

      <div class="gerund-rule-grid">
        <section class="gerund-rule-card gerund-card">
          <span class="rule-form">verb + ing</span>
          <h2>Герундий</h2>
          <ul class="rule-list">
            <li>после предлогов: <strong>good at explaining</strong></li>
            <li>когда действие — подлежащее: <strong>Working helps</strong></li>
            <li>после enjoy, avoid, mind, finish, keep, suggest, recommend</li>
          </ul>
        </section>
        <section class="gerund-rule-card infinitive-card">
          <span class="rule-form">to + verb</span>
          <h2>Инфинитив</h2>
          <ul class="rule-list">
            <li>после прилагательных: <strong>happy to help</strong></li>
            <li>для цели — «зачем?»: <strong>opened it to check</strong></li>
            <li>после want, decide, hope, need, plan, promise, refuse, offer</li>
          </ul>
        </section>
        <section class="gerund-rule-card bare-card">
          <span class="rule-form">verb без to</span>
          <h2>Чистый инфинитив</h2>
          <ul class="rule-list">
            <li>после модальных: <strong>can't park</strong></li>
            <li>после let: <strong>let me know</strong></li>
            <li>после make: <strong>made me rewrite</strong></li>
          </ul>
        </section>
      </div>

      <h2 class="guide-heading">Форма меняет смысл</h2>
      <div class="meaning-pairs">
        <div class="meaning-pair"><strong>Try calling him.</strong><span>Попробуй как метод — вдруг сработает.</span><strong>Try to call him.</strong><span>Попытайся дозвониться, приложи усилие.</span></div>
        <div class="meaning-pair"><strong>Remember to leave it.</strong><span>Не забудь сделать это потом.</span><strong>I remember leaving it.</strong><span>Я помню уже произошедшее действие.</span></div>
        <div class="meaning-pair"><strong>He stopped smoking.</strong><span>Он перестал курить.</span><strong>He stopped to smoke.</strong><span>Он остановился, чтобы покурить.</span></div>
      </div>

      <aside class="principle-box"><strong>Отрицание:</strong> ставь not перед нужной формой — <em>try not to be late</em>, но <em>recommend not worrying</em>.</aside>

      <div class="lesson-actions">
        <button class="primary-button" type="button" data-action="start-gerund">Начать 12 заданий</button>
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

      <h2 class="guide-heading">Почему два had подряд — это нормально</h2>
      <div class="aux-chain-list">
        <div><strong>I have had this phone for three years.</strong><span><b>have</b> — помощник Present Perfect; <b>had</b> — V3 глагола have.</span></div>
        <div><strong>She has had a busy week.</strong><span><b>has</b> — помощник для she; <b>had</b> — третья форма смыслового have.</span></div>
        <div><strong>I had had breakfast before the call.</strong><span>первое <b>had</b> — помощник Past Perfect; второе <b>had</b> — V3. Завтрак был раньше звонка.</span></div>
      </div>

      <aside class="principle-box"><strong>Главная проверка:</strong> после must, should, do, does, did и will всегда базовая форма без to и без -s: <em>She should go</em>, <em>Does he have to work?</em>, <em>He must arrive</em>.</aside>

      <div class="lesson-actions">
        <button class="primary-button" type="button" data-action="start-auxiliaries">Начать 14 заданий</button>
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
  const questions = shuffle(GERUND_INFINITIVE_ITEMS)
    .slice(0, 12)
    .map(gerundQuestionFor);
  startSession("gerund-infinitive", "Gerund или infinitive", questions);
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
  const helperQuestions = shuffle(AUXILIARY_ITEMS).slice(0, 7).map(auxiliaryQuestionFor);
  const modalQuestions = shuffle(MODAL_ITEMS).slice(0, 7).map(modalQuestionFor);
  startSession("auxiliaries", "Помощники и модальные", shuffle([...helperQuestions, ...modalQuestions]));
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
  const isPhrase = question.type === "phrase";
  const isPhraseTense = question.type === "phrase-tense";
  const isArticle = question.type === "article";
  const isAuxiliary = question.type === "auxiliary";
  const isModalBuild = question.type === "modal-build";
  const taskText = isIdentify
    ? "Какое время используется в предложении?"
    : isGerund
      ? "Выбери форму второго глагола"
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
  const modeText = isIdentify
    ? "Определи время"
    : isGerund
      ? "Gerund or infinitive"
      : isPhrase || isPhraseTense
        ? "Речевые обороты"
        : isArticle
          ? "Articles"
          : isAuxiliary || isModalBuild
            ? "Auxiliary & modal verbs"
            : question.tense.name;
  const modeClass = isIdentify ? "identify-mode" : isGerund ? "grammar-mode" : isPhrase || isPhraseTense ? "phrase-mode" : isArticle ? "article-mode" : isAuxiliary || isModalBuild ? "auxiliary-mode" : "";
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
  const message = session.type === "auxiliaries"
    ? score >= 85
      ? "Отлично: ты уверенно различаешь помощник и смысловой глагол. Следующий шаг — замечать эти формулы в обычном тексте."
      : score >= 55
        ? "Хорошая база. Перед ответом определяй время, затем подлежащее, и только потом выбирай have/has, do/does или форму be."
        : "Вернись к памятке и проговори три цепочки: have had, has had и had had. Затем повтори правила do/does/did и be."
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
      ? "Отлично: ты уверенно различаешь gerund, infinitive и форму без to. Повтори режим через пару дней для закрепления."
      : score >= 55
        ? "Хорошая база. Обрати внимание на глагол или предлог перед пропуском — именно он чаще всего определяет форму."
        : "Вернись к памятке и пройди ещё один подход: сначала закрепи три базовых правила, затем смысловые пары try, remember и stop."
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

renderDashboard();
