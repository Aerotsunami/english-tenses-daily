function qty(id, group, text, answer, distractors, explanation) {
  return { id, group, text, answer, answers: [answer, ...distractors], explanation };
}

const QUANTITY_ITEMS = [
  // Large amount
  qty("large-messages", "large", "I have ___ unread messages on my phone.", "a lot of", ["a lot", "much", "many of"], "В утвердительном предложении перед существительным ставим a lot of. Messages — исчисляемое множественное."),
  qty("large-work", "large", "We have ___ work to finish before Friday.", "a lot of", ["many", "a lot", "many of"], "Work здесь неисчисляемое. В обычном утвердительном предложении естественно a lot of work."),
  qty("large-photos", "large", "She has ___ photos from Bilbao.", "lots of", ["lots", "much", "a lots of"], "Lots of можно использовать перед исчисляемым множественным существительным в утвердительной фразе."),
  qty("large-traffic", "large", "There is ___ traffic this morning.", "lots of", ["lots", "many", "a lots of"], "Traffic неисчисляемое; lots of подходит и к исчисляемым, и к неисчисляемым словам."),
  qty("large-informal", "large", "I've got ___ emails to answer! (informal)", "loads of", ["load of", "loads", "much of"], "В разговорной речи обычно говорят loads of или a load of. Форма load of без a неверна."),
  qty("large-no-noun", "large", "Some freelancers work a lot but don't earn ___.", "a lot", ["a lot of", "many", "lots of"], "После пропуска нет существительного, поэтому нужен a lot без of."),
  qty("large-many-question", "large", "How ___ devices do you use every day?", "many", ["much", "a lot of", "plenty"], "В вопросе many ставится перед исчисляемым существительным во множественном числе: many devices."),
  qty("large-much-negative", "large", "This update doesn't require ___ space.", "much", ["many", "a lot", "few"], "В отрицании перед неисчисляемым space используем much."),
  qty("large-many-negative", "large", "There aren't ___ sockets in this room.", "many", ["much", "a lot", "little"], "Sockets можно посчитать, и слово стоит во множественном числе: many sockets."),
  qty("large-plenty", "large", "Don't hurry — we have ___ time.", "plenty of", ["plenty", "many", "a lot"], "Plenty of означает «больше чем достаточно» и ставится перед существительным."),

  // Small amount
  qty("small-few-gadgets", "small", "My children have only ___ gadgets, but those are enough.", "a few", ["few", "a little", "little"], "A few + множественное исчисляемое означает «несколько, и этого достаточно»."),
  qty("small-little-time", "small", "This shortcut saves us ___ time every day.", "a little", ["a few", "few", "many"], "Time неисчисляемое; a little означает некоторое небольшое, но полезное количество."),
  qty("small-few-friends", "small", "He has ___ friends here, so he often feels lonely.", "few", ["a few", "little", "a little"], "Few подчёркивает, что друзей почти нет и этого недостаточно."),
  qty("small-little-hope", "small", "There is ___ hope of repairing this very old device.", "little", ["a little", "few", "a few"], "Hope здесь неисчисляемое; little передаёт негативный смысл «почти нет»."),
  qty("small-a-few-minutes", "small", "We still have ___ minutes, so we can check the settings.", "a few", ["few", "a little", "little"], "Minutes — множественное исчисляемое; a few = несколько, достаточно для действия."),
  qty("small-few-minutes", "small", "We have ___ minutes left; we won't finish the installation.", "few", ["a few", "little", "a little"], "Few + minutes означает, что времени в виде отдельных минут недостаточно."),
  qty("small-a-little-money", "small", "I have ___ money left, enough for the bus.", "a little", ["little", "a few", "few"], "Money неисчисляемое; a little даёт положительный смысл: немного, но хватит."),
  qty("small-little-money", "small", "I have ___ money left, so I can't buy the charger.", "little", ["a little", "few", "a few"], "Little money = денег почти нет, и их недостаточно."),
  qty("small-fewer-devices", "small", "A single smart hub lets us use ___ devices.", "fewer", ["less", "few", "little"], "Devices исчисляемое множественное, поэтому сравнительная форма — fewer."),
  qty("small-less-storage", "small", "The compressed file needs ___ storage.", "less", ["fewer", "few", "a few"], "Storage неисчисляемое, поэтому используем less, а не fewer."),

  // More or less than needed
  qty("need-too-slow", "need", "I don't like this mouse; it's ___ slow.", "too", ["too much", "enough", "too many"], "Перед прилагательным slow ставим too: медленнее, чем нужно."),
  qty("need-too-quietly", "need", "The speaker plays ___ quietly for this large room.", "too", ["too much", "enough", "too many"], "Too ставится перед наречием quietly и означает «чрезмерно тихо»."),
  qty("need-too-much-electricity", "need", "This old device uses ___ electricity.", "too much", ["too many", "too", "enough of"], "Electricity неисчисляемое: too much electricity."),
  qty("need-too-much-time", "need", "You spend ___ time scrolling on your phone.", "too much", ["too many", "too", "not enough"], "Time неисчисляемое, поэтому используем too much."),
  qty("need-too-many-apps", "need", "I installed ___ apps and now my phone is full.", "too many", ["too much", "too", "many too"], "Apps — исчисляемое множественное: too many apps."),
  qty("need-too-many-tabs", "need", "There are ___ tabs open in my browser.", "too many", ["too much", "too", "much too"], "Tabs можно посчитать, поэтому too many."),
  qty("need-fast-enough", "need", "This charger isn't fast ___.", "enough", ["enough fast", "too", "enough of"], "После прилагательного: fast enough. В отрицании это значит «недостаточно быстрый»."),
  qty("need-loud-enough", "need", "Is the microphone loud ___ for everyone?", "enough", ["enough loud", "too many", "enough of"], "Enough ставится после прилагательного loud."),
  qty("need-enough-time", "need", "We don't have ___ time to install the update.", "enough", ["time enough of", "too", "many"], "Перед существительным: enough time."),
  qty("need-enough-sockets", "need", "There are ___ sockets for all our chargers.", "enough", ["sockets enough", "too much", "much"], "Enough ставится перед существительным: enough sockets."),

  // Zero quantity
  qty("zero-any-sockets", "zero", "We couldn't find ___ sockets in the room.", "any", ["no", "some", "none"], "С отрицательным couldn't используем any + множественное существительное."),
  qty("zero-no-speakers", "zero", "There are ___ speakers for this computer.", "no", ["any", "none", "not"], "Глагол положительный are, поэтому no + существительное: no speakers."),
  qty("zero-any-information", "zero", "The website doesn't provide ___ information about the price.", "any", ["no", "many", "none"], "Information неисчисляемое; после отрицательного doesn't используем any."),
  qty("zero-no-wifi", "zero", "There is ___ Wi-Fi on this train.", "no", ["any", "none", "not"], "Положительный is сочетается с no: there is no Wi-Fi."),
  qty("zero-any-files", "zero", "I haven't downloaded ___ files yet.", "any", ["no", "none", "some of"], "В отрицании haven't downloaded ставим any перед множественным files."),
  qty("zero-no-battery", "zero", "The tablet has ___ battery left.", "no", ["any", "none", "not any of"], "Положительный has + no battery означает нулевой заряд."),
  qty("zero-any-reason", "zero", "Is there ___ reason to replace the router?", "any", ["no", "none", "many"], "В общем вопросе используем any. Оно возможно и с исчисляемым существительным в единственном числе."),
  qty("zero-no-reason", "zero", "There is ___ reason to restart the server now.", "no", ["any", "none", "not"], "Положительная форма is + no reason. Не добавляем второе отрицание."),
  qty("zero-dont-no", "zero", "We don't have ___ free storage.", "any", ["no", "none", "nothing"], "С don't уже есть отрицание, поэтому any. Don't have no — двойное отрицание в стандартном английском."),
  qty("zero-have-no", "zero", "We have ___ free storage.", "no", ["any", "none", "not"], "С положительным have используем no перед существительным."),
];

function quantityComplete(item) {
  return item.text.replace("___", item.answer);
}

function quantityQuestionFor(item) {
  const answers = shuffle(item.answers);
  return {
    type: "quantity",
    topicKey: "quantity",
    text: item.text,
    answers,
    correct: answers.indexOf(item.answer),
    example: quantityComplete(item),
    explanation: `<span class="quantity-explanation"><b>${item.answer}</b>: ${item.explanation}</span>`,
  };
}

function startQuantitySession() {
  const questions = ["large", "small", "need", "zero"].flatMap(group =>
    shuffle(QUANTITY_ITEMS.filter(item => item.group === group)).slice(0, 3).map(quantityQuestionFor)
  );
  startSession("quantity", "Количество: much, many, few, little…", shuffle(questions));
}

function renderQuantityGuide() {
  const groups = [
    ["Много", "a lot of / lots of", "Перед существительным в обычном утверждении", "a lot без существительного · much/many чаще в отрицаниях и вопросах · plenty of = больше чем достаточно"],
    ["Мало", "a few / a little", "Немного, но достаточно", "few + исчисляемое и little + неисчисляемое означают «почти нет, недостаточно» · fewer devices, но less time"],
    ["Норма", "too / enough", "Больше или меньше необходимого", "too + adjective/adverb · too many + plural countable · too much + uncountable · enough time, но fast enough"],
    ["Ноль", "any / no", "Отрицательный или положительный глагол", "don't have any sockets · have no sockets. Не ставим no после уже отрицательного глагола"],
  ];
  guide.innerHTML = `
    <button class="back-button" type="button" data-action="home">← К каталогу</button>
    <article class="lesson-card guide-page quantity-guide">
      <span class="lesson-tag">Quantifiers</span>
      <h1>Сколько: много, мало или совсем нет?</h1>
      <p class="subtitle">Сначала реши, можно ли посчитать существительное. Потом определи смысл: много, немного, слишком много, достаточно или ноль.</p>
      <div class="article-decision"><strong>Быстрый алгоритм</strong><ol>
        <li><b>Можно посчитать?</b> many, (a) few, fewer, too many — с books, apps, people.</li>
        <li><b>Нельзя посчитать?</b> much, (a) little, less, too much — с time, money, information.</li>
        <li><b>Есть существительное?</b> a lot of work, но work a lot.</li>
        <li><b>Глагол уже отрицательный?</b> don't have any; с положительным — have no.</li>
      </ol></div>
      <div class="quantity-rule-grid">${groups.map(([title,token,meaning,note]) => `<section class="quantity-rule-card"><span>${title}</span><h2>${token}</h2><strong>${meaning}</strong><p>${note}</p></section>`).join("")}</div>
      <div class="quantity-contrast">
        <section><strong>a few friends / a little time</strong><span>Немного, но достаточно — нейтральный или положительный смысл.</span></section>
        <section><strong>few friends / little time</strong><span>Почти нет, недостаточно — отрицательный смысл.</span></section>
      </div>
      <aside class="mistake-box"><p class="eyebrow">Разговорный вариант</p><p><strong>loads of apps</strong> или <strong>a load of apps</strong>. Форма <s>load of apps</s> без a обычно неверна.</p></aside>
      <div class="lesson-actions"><button class="primary-button" type="button" data-action="start-quantity">Начать 12 заданий</button><button class="secondary-button" type="button" data-action="home">К каталогу</button></div>
    </article>`;
  showOnly(guide);
}

