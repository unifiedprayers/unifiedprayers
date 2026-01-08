// Arabic prayer data
const prePrayers = [
  { name: 'تقديم الذات للروح القدس', sections: [
    'يا روح الله، إنا نقدم لك ذواتنا وصلواتنا مع صلاة مريم العذراء والرسل المجتمعين في العلية طالبين منك أن تأتي وتجددنا وتجدد وجه الأرض.',
    'هلم أيها الروح القدس، وأرسل من السماء شعاع نورك هلم يا أبا المساكين. هلم يا معولا المواهب. هلم يا ضياء القلوب، أيها المعزية الجليل، هلم يا ساكن القلوب العذب، أيتها الاستراحة اللذيذة.',
    'أنتَ في التعب راحة وفي الحر اعتدال وفي البكاء تعزية، أيها النور الطوباوي، إملأ باطن قلوب المؤمنين، لأنه بدون قدرتك لا شيء في الإنسان ولا شيء طاهر.',
    'طهر ما كان دنساً، إسق ما كان يابساً، اشف ما كان معلولا، لين ما كان صلباً، أضرم ما كان بارداً، دبّر ما كان حائداً.',
    'أعط مؤمنيك المتكلين عليك المواهب السبع، إمنحهم ثواب الفضيلة، هب لهم غاية الخلاص، أعطهم السرور الأبدي. آمین.',
  ]},
  { name: 'الصلاة لمريم العذراء', sections: [
    'يا مريم، أيتها العذراء الكلية الطهارة، أنت التي بحبلك بلا دنس، جعل منك الروح القدس بيت القربان الإلهي، صلي لأجلنا.',
    'لكي يأتي الروح القدس الله قريباً، ويجدّد وجه الأرض. (السلام عليك...)',
    'يا مريم، أيتها العذراء الكلية الطهارة، أنت التي بسر التجسد أصبحت بالروح القدس أم الله الحقيقية، صلي لأجلنا.',
    'لكي يأتي الروح القدس الله قريباً، ويجدّد وجه الأرض. (السلام عليك...)',
    'يا مريم، أيتها العذراء الكلية الطهارة، أنت التي صلّيت في العلية مع الرسل فامتلأت بفيض من الروح القدس، صلي لأجلنا.',
    'لكي يأتي الروح القدس الله قريباً، ويجدّد وجه الأرض. (السلام عليك...)'
  ]},
  { name: 'صلاة لاستمداد مواهب الروح القدس', sections: [
    'يا حبيبي يسوع، يا ذا الجود والصلاح يا من قبل صعودك إلى السماء، وعدت تلاميذك بإرسال روحك القدوس إليهم، ليعزيهم ويُشددهم.',
    'تعطف وأرسل إلينا هذا الروح الذي يقدس النفوس ليحل فينا ويقدسنا ويملأنا من مواهبه السنية. آمين.'
  ]}
];

const houseInfo = [
  {name:'الحكمة', super:'تعال يا روح الحكمة، وحل فينا لتدلنا على الخير الحقيقي وتوفر لنا وسائل الحصول عليه. (أبانا الذي...)'},
  {name:'الفهم', super:'تعال يا روح الفهم، وحل فينا، وأنر عقولنا لندرك حقائق ديانتنا وأسرارها العميقة. (أبانا الذي...)'},
  {name:'العلم', super:'تعال يا روح العلم، وحل فينا لنعرف الله ونعرف ذواتنا والآخرين، لأن المعرفة أساس المحبة. (أبانا الذي...)'},
  {name:'المشورة', super:'تعال يا روح المشورة، وحل فينا، ونوّرنا لنعرف مشيئة الله، وقوّنا على إتمامها. (أبانا الذي...)'},
  {name:'القوة', super:'تعال يا روح القوة، وحل فينا، واملأ قلوبنا م الله، وقونا على إتمام واجباتنا بكل أمانة وإخلاص. (أبانا الذي...)'},
  {name:'مخافة الله', super:'تعال يا روح مخافة الله، وحل فينا، وقوّنا على أن نحترم الله وأوامر الله ووصاياه. (أبانا الذي...)'},
  {name:'التقوى', super:'تعال يا روح التقوى، وحل فينا، وأنعم علينا بأن نختبر أن نيرك طيب وحملك خفيف ونستطيع حمله. (أبانا الذي...)'}
];

const postPrayers = [
  {name: 'صلاة الختام: لمريم سيدة جميع الشعوب', sections:[
    'أيها الرب يسوع يا ابن ألآب، أفض الآن روحك على الأرض، وأسكن الروح القدس في قلوب جميع الشعوب، ليُحفظوا من الفساد ومن الحرب ومن الآفات، ولتكن سيدة جميع الشعوب، وهي مريم محامية لنا، آمين.',
  ]}
];

// English translation data
const prePrayersEn = [
  { name: 'Offering of Self to the Holy Spirit', sections: [
    'O Spirit of God, we offer you our persons and our prayers with the prayer of Mary and the apostles gathered in the upper room, asking you to come, renew us, and renew the face of the earth',
    'Come, O Holy Spirit, and send from heaven the ray of your light. Come, Father of the poor. Come, giver of gifts. Come, O light of hearts, O glorious Comforter, O sweet inhabitant of hearts, delightful rest',
    'You are rest in labor, temperance in heat, and consolation in weeping, O beatific light; fill the inner hearts of the faithful, for without your power nothing in man is pure',
    'Purify what was defiled, water what was dry, heal what was sick, soften what was rigid, inflame what was cold, correct what has gone astray',
    'Grant to your faithful who trust in you the seven gifts; grant them the reward of virtue; give them the goal of salvation and eternal joy. Amen'
  ]},
  { name: 'Prayer to the Virgin Mary', sections: [
    'O Mary, immaculate Virgin, you who by your sinless womb became through the Holy Spirit the dwelling of the Divine Sacrament, pray for us',
    'That the Holy Spirit may come soon and renew the face of the earth. (Hail Mary...)',
    'O Mary, immaculate Virgin, who by the mystery of the Incarnation through the Holy Spirit became the true Mother of God, pray for us',
    'That the Holy Spirit may come soon and renew the face of the earth. (Hail Mary...)',
    'O Mary, immaculate Virgin, who prayed in the upper room with the apostles and was filled with an outpouring of the Holy Spirit, pray for us',
    'That the Holy Spirit may come soon and renew the face of the earth. (Hail Mary...)'
  ]},
  { name: 'Prayer to Receive the Gifts of the Holy Spirit', sections: [
    'My beloved Jesus, O generous and good One, You who before Your ascension promised Your disciples to send them Your Holy Spirit to console and strengthen them',
    'Have mercy and send upon us this Spirit who sanctifies souls to dwell in us, sanctify us, and fill us with His holy gifts. Amen'
  ]}
];

const houseInfoEn = [
  {name:'Wisdom', super:'Come, O Spirit of Wisdom, and dwell in us to guide us to true good and provide the means to obtain it. (Our Father...)'},
  {name:'Understanding', super:'Come, O Spirit of Understanding, and dwell in us, enlighten our minds to perceive the truths and mysteries of our faith. (Our Father...)'},
  {name:'Knowledge', super:'Come, O Spirit of Knowledge, and dwell in us to know God, ourselves and others, for knowledge is the foundation of love. (Our Father...)'},
  {name:'Counsel', super:'Come, O Spirit of Counsel, and dwell in us, enlighten us to know God\'s will and strengthen us to accomplish it. (Our Father...)'},
  {name:'Fortitude', super:'Come, O Spirit of Fortitude, and dwell in us, fill our hearts with courage and strengthen us to fulfill our duties faithfully. (Our Father...)'},
  {name:'Fear of the Lord', super:'Come, O Spirit of the Fear of the Lord, and dwell in us, strengthen us to revere God and keep His commandments. (Our Father...)'},
  {name:'Piety', super:'Come, O Spirit of Piety, and dwell in us, grant us to know your sweet yoke and bear it lightly. (Our Father...)'}
];

const postPrayersEn = [
  {name: 'Closing Prayer: For Mary, Lady of All Peoples', sections:[
    'Lord Jesus, Son of the Father, pour out now Your Spirit upon the earth and let the Holy Spirit dwell in the hearts of all peoples, that they may be preserved from corruption, war and afflictions, and may Mary be Lady of all peoples and our advocate. Amen',
  ]}
];

// Arabic Rosary prayers for Virgin Mary
const maryPrePrayers = [
  { name: 'علامة الصليب', sections: ['باسم الآب والابن والروح القدس. آمين.'] },
  { name: 'الإيمان الرسولي', sections: [
    'أؤمن بالله الآب القدير خالق السماء والأرض.',
    'وباليسوع المسيح ابنه الوحيد ربنا. الذي حبل به من الروح القدس. ولد من مريم العذراء.',
    'تألم في أيام بيلاطس البنطي. صلب. مات ودفن. نزل إلى الجحيم.',
    'في اليوم الثالث قام من بين الأموات. صعد إلى السماء. جلس عن يمين الآب.',
    'من هناك سيأتي ليدين الأحياء والأموات. أؤمن بالروح القدس.',
    'الكنيسة المقدسة الكاثوليكية. شركة القديسين. مغفرة الخطايا. قيامة الجسد. والحياة الأبدية. آمين.'
  ] },
  { name: 'أبانا', sections: ['أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'] },
  { name: 'السلام عليك يا مريم (ثلاث مرات)', sections: [
    'السلام عليك يا مريم ملأنة نعمة الرب معك. مباركة أنت في النساء ومبارك ثمرة بطنك يسوع. يا قديسة مريم يا أم الله صلي لأجلنا نحن الخطأة الآن وفي ساعة موتنا. آمين.',
    'السلام عليك يا مريم ملأنة نعمة الرب معك. مباركة أنت في النساء ومبارك ثمرة بطنك يسوع. يا قديسة مريم يا أم الله صلي لأجلنا نحن الخطأة الآن وفي ساعة موتنا. آمين.',
    'السلام عليك يا مريم ملأنة نعمة الرب معك. مباركة أنت في النساء ومبارك ثمرة بطنك يسوع. يا قديسة مريم يا أم الله صلي لأجلنا نحن الخطأة الآن وفي ساعة موتنا. آمين.'
  ] },
  { name: 'المجد للآب', sections: ['المجد للآب والابن والروح القدس. كما كان في البدء والآن وكل أوان والى الأبد. آمين.'] }
];

// Arabic Rosary mysteries
const maryMysterySets = {
  joyful: [
    {name:'بشارة الملاك جبرائيل لمريم العذراء', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'زيارة مريم العذراء لإليزابيت', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'ميلاد يسوع في بيت لحم', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'تقديم يسوع في الهيكل', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'العثور على يسوع في الهيكل', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'}
  ],
  sorrowful: [
    {name:'صلاة يسوع في حديقة الجسمانية', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'جلد يسوع', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'تتويج يسوع بالشوك', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'حمل يسوع الصليب', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'صلب يسوع', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'}
  ],
  glorious: [
    {name:'قيامة يسوع', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'صعود يسوع إلى السماء', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'نزول الروح القدس', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'رفع مريم العذراء إلى السماء', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'تتويج مريم ملكة السماء', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'}
  ],
  luminous: [
    {name:'معمودية يسوع في الأردن', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'عرس قانا الجليل', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'إعلان ملكوت الله ودعوة إلى التوبة', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'التجلي على الجبل', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'},
    {name:'إقامة سر القربان المقدس', super:'أبانا الذي في السموات. يتقدس اسمك. يأتي ملكوتك. يكن مشيئتك كما في السماء كذلك على الأرض. أعطنا خبزنا كفافنا اليومي. واغفر لنا ذنوبنا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة لكن نجنا من الشرير. آمين.'}
  ]
};

const maryPostPrayers = [
  {name: 'السلام عليك يا ملكة', sections:[
    'السلام عليك يا ملكة السماء يا أم الرحمة. حياتنا وحلاوتنا ورجاؤنا.',
    'السلام عليك. إليك نصرخ نحن أبناء حواء المطرودين. إليك نرسل تنهداتنا باكين ويائكين',
    'في هذا الوادي المسكوب بالدموع. فأقبلي يا شفيعة يا لطيفة عينيك علينا.',
    'وبعد غربة هذه الحياة أرينا يسوع ثمرة بركة أحشائك.',
    'يا رؤوم يا حنان يا عذراء مريم. صلي لأجلنا يا قديسة أم الله.',
    'لنستحق مواعيد المسيح. آمين.'
  ]}
];

// English Rosary mysteries
const maryMysterySetsEn = {
  joyful: [
    {name:'The Annunciation', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Visitation', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Nativity', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Presentation', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Finding in the Temple', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'}
  ],
  sorrowful: [
    {name:'The Agony in the Garden', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Scourging at the Pillar', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Crowning with Thorns', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Carrying of the Cross', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Crucifixion', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'}
  ],
  glorious: [
    {name:'The Resurrection', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Ascension', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Descent of the Holy Spirit', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Assumption of Mary', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Coronation of Mary', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'}
  ],
  luminous: [
    {name:'The Baptism of Jesus', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Wedding at Cana', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Proclamation of the Kingdom', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Transfiguration', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'},
    {name:'The Institution of the Eucharist', super:'Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'}
  ]
};

// English Rosary prayers for Virgin Mary
const maryPrePrayersEn = [
  { name: 'Sign of the Cross', sections: ['In the name of the Father, and of the Son, and of the Holy Spirit. Amen.'] },
  { name: 'Apostles\' Creed', sections: [
    'I believe in God, the Father almighty, Creator of heaven and earth.',
    'and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit,',
    'born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried;',
    'he descended into hell; on the third day he rose again from the dead;',
    'he ascended into heaven, and is seated at the right hand of the Father;',
    'he will come again to judge the living and the dead. I believe in the Holy Spirit,',
    'the holy catholic Church, the communion of saints, the forgiveness of sins,',
    'the resurrection of the body, and life everlasting. Amen.'
  ] },
  { name: 'Our Father', sections: ['Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'] },
  { name: 'Hail Mary (three times)', sections: [
    'Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
    'Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
    'Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.'
  ] },
  { name: 'Glory Be', sections: ['Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.'] }
];

const maryPostPrayersEn = [
  {name: 'Hail Holy Queen', sections:[
    'Hail, holy Queen, Mother of mercy, our life, our sweetness, and our hope.',
    'To thee do we cry, poor banished children of Eve. To thee do we send up our sighs,',
    'mourning and weeping in this valley of tears.',
    'Turn then, most gracious advocate, thine eyes of mercy toward us,',
    'and after this our exile, show unto us the blessed fruit of thy womb, Jesus.',
    'O clement, O loving, O sweet Virgin Mary! Pray for us, O holy Mother of God,',
    'that we may be made worthy of the promises of Christ. Amen.'
  ]}
];

// Prayer sets for multiple prayer pages
const prayerSets = [
  {
    id: 'holy-spirit',
    title: 'مسبحة الروح القدس',
    titleEn: 'Holy Spirit Rosary',
    beadsPerHouse: 8,
    prePrayers: prePrayers,
    houseInfo: houseInfo,
    postPrayers: postPrayers,
    prePrayersEn: prePrayersEn,
    houseInfoEn: houseInfoEn,
    postPrayersEn: postPrayersEn
  },
  {
    id: 'mary',
    title: 'مسبحة مريم',
    titleEn: 'Mary Rosary',
    beadsPerHouse: 12,
    prePrayers: maryPrePrayers,
    houseInfo: maryMysterySets.joyful,
    postPrayers: maryPostPrayers,
    prePrayersEn: maryPrePrayersEn,
    houseInfoEn: maryMysterySetsEn.joyful,
    postPrayersEn: maryPostPrayersEn
  }
];
