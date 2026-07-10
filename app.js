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
  if (action === "focus-tense") startFocusSession(key);
  if (action === "open-tense") renderLesson(key);
  if (action === "open-guide") renderGuide();
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

    <section class="guide-banner">
      <div>
        <p class="eyebrow">Конструктор грамматики</p>
        <h2>Как собирать времена, а не зубрить 12 таблиц</h2>
        <p class="section-note">V, V-s, V-ing, V2 и V3; правила окончаний; вспомогательные глаголы; вопросы и отрицания.</p>
      </div>
      <button class="secondary-button" type="button" data-action="open-guide">Открыть правила</button>
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
    .map(({ tense }) => questionFor(tense));
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
