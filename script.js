/* ===== JS 1) البيانات =====
   k: ألوان السماء | i: الأيقونة | img: (اختياري) رابط صورة حقيقية يحل محل الرسم */
const eras = {
  early: "العصر المبكر",
  fatimid: "العصر الفاطمي",
  ayyubid: "العصر الأيوبي",
  mamluk: "العصر المملوكي",
  ottoman: "العصر العثماني",
  alawi: "الأسرة العلوية",
  modern: "العصر الحديث",
};
const cityNotes = {
  القاهرة: "مدينة الألف مئذنة وقلب العمارة الإسلامية في مصر.",
  الإسكندرية: "عروس المتوسط وحصونها التي تحرس الساحل منذ قرون.",
  رشيد: "مدينة النيل والبحر، وموطن حجر رشيد والبيوت العثمانية.",
  دمياط: "ثغر مصر الشمالي وأحد أقدم مواقعها الإسلامية.",
  الأقصر: "حيث يعانق المسجد أعمدة المعبد الفرعوني.",
  سيوة: "واحة الصحراء الغربية وقلعتها الطينية.",
};
const L = [
  {
    n: "جامع عمرو بن العاص",
    c: "القاهرة",
    e: "early",
    y: "641م",
    i: "mosque",
    k: ["#0f5e63", "#f0c27a"],
    t: "أول مسجد أُقيم في مصر وأفريقيا، بناه القائد عمرو بن العاص بعد الفتح في مدينة الفسطاط، وتعاقبت عليه التوسعات والتجديدات عبر القرون.",
  },
  {
    n: "جامع أحمد بن طولون",
    c: "القاهرة",
    e: "early",
    y: "879م",
    i: "minaret",
    k: ["#7a4a1d", "#f3c98b"],
    t: "من أقدم المساجد الباقية بحالتها في مصر وأوسعها صحنًا، ويتميز بمئذنته الفريدة ذات السلم الحلزوني الخارجي وطرازه المتأثر بسامراء.",
  },
  {
    n: "الجامع الأزهر",
    c: "القاهرة",
    e: "fatimid",
    y: "972م",
    i: "dome",
    k: ["#1d3557", "#e9b872"],
    t: "أسسه الفاطميون مع بناء القاهرة، وصار منارة علمية تُعد جامعته من أقدم الجامعات في العالم، وتجتمع فيه عمارة عصور متعاقبة.",
  },
  {
    n: "جامع الحاكم بأمر الله",
    c: "القاهرة",
    e: "fatimid",
    y: "1013م",
    i: "minaret",
    k: ["#5b2a4a", "#f0a97a"],
    t: "من أكبر المساجد الفاطمية، يقع عند سور القاهرة القديم، ويشتهر بمئذنتيه ذواتي القاعدة المائلة وصحنه الواسع المحاط بالأروقة.",
  },
  {
    n: "باب زويلة",
    c: "القاهرة",
    e: "fatimid",
    y: "1092م",
    i: "gate",
    k: ["#8a3b12", "#f5c77e"],
    t: "إحدى بوابات القاهرة الفاطمية الباقية، بناها بدر الجمالي بين برجين ضخمين، ويمكن الصعود إلى أبراجها لمشاهدة القاهرة القديمة من أعلى.",
  },
  {
    n: "قلعة صلاح الدين",
    c: "القاهرة",
    e: "ayyubid",
    y: "1176م",
    i: "fort",
    k: ["#3a3f5c", "#f2b56b"],
    t: "بدأ صلاح الدين الأيوبي بناءها لتحصين القاهرة، وظلت مقرًا للحكم قرابة سبعة قرون، وتضم اليوم عدة مساجد ومتاحف وإطلالة ساحرة على المدينة.",
  },
  {
    n: "جامع محمد علي",
    c: "القاهرة",
    e: "alawi",
    y: "1848م",
    i: "dome",
    k: ["#0a3f43", "#f7d08a"],
    t: "يُعرف بالمسجد المرمري، يقف فوق القلعة بطراز عثماني، وتتوجه قبة مركزية ضخمة ومئذنتان رشيقتان، وبداخله مقام محمد علي باشا.",
  },
  {
    n: "مجمع السلطان قلاوون",
    c: "القاهرة",
    e: "mamluk",
    y: "1285م",
    i: "mosque",
    k: ["#6b3a1f", "#f4bf75"],
    t: "مجمع مملوكي في شارع المعز يضم مسجدًا ومدرسة وضريحًا، وكان يضم أيضًا بيمارستانًا عظيمًا يُعد من أوائل المستشفيات.",
  },
  {
    n: "مسجد ومدرسة السلطان حسن",
    c: "القاهرة",
    e: "mamluk",
    y: "1363م",
    i: "mosque",
    k: ["#3d3d3d", "#eab37a"],
    t: "تحفة العمارة المملوكية وأحد أضخم مساجد العالم الإسلامي، بواجهته الحجرية الشاهقة وصحنه المحاط بأربعة إيوانات.",
  },
  {
    n: "خان الخليلي",
    c: "القاهرة",
    e: "mamluk",
    y: "1382م",
    i: "gate",
    k: ["#a12d2d", "#f7c27e"],
    t: "سوق تاريخي أنشأه الأمير جهاركس الخليلي، تمتلئ أزقته بالفضيات والنحاسيات والتوابل، وتجاوره مقاهٍ عريقة.",
  },
  {
    n: "مجمع السلطان قايتباي",
    c: "القاهرة",
    e: "mamluk",
    y: "1474م",
    i: "tomb",
    k: ["#5c3d2e", "#f3b56b"],
    t: "يقع في القرافة الشمالية، وتشتهر قبته بزخارفها الحجرية المنحوتة على شكل نجوم ونباتات، وتُعد من أجمل القباب المملوكية.",
  },
  {
    n: "مسجد الرفاعي",
    c: "القاهرة",
    e: "alawi",
    y: "1912م",
    i: "mosque",
    k: ["#2a4d69", "#f0c98a"],
    t: "بأسلوب الإحياء المملوكي قبالة مسجد السلطان حسن، ويضم مقابر أفراد الأسرة العلوية، وقد دُفن فيه الملك فاروق وشاه إيران.",
  },
  {
    n: "قلعة قايتباي",
    c: "الإسكندرية",
    e: "mamluk",
    y: "1477م",
    i: "fort",
    k: ["#134e6f", "#f6c483"],
    t: "حصن على الساحل بناه السلطان قايتباي على موقع فنار الإسكندرية القديم مستخدمًا حجارته، وتطل اليوم على البحر المتوسط.",
  },
  {
    n: "مسجد أبو العباس المرسي",
    c: "الإسكندرية",
    e: "modern",
    y: "القرن 20",
    i: "dome",
    k: ["#1b6b7a", "#f9d59a"],
    t: "مسجد وضريح الولي الصوفي أبي العباس المرسي، أُعيد بناؤه في القرن العشرين بقبابه ومآذنه، ويُعد من أشهر معالم كورنيش المدينة.",
  },
  {
    n: "حصن رشيد",
    c: "رشيد",
    e: "mamluk",
    y: "1479م",
    i: "fort",
    k: ["#4a5a3a", "#f2c078"],
    t: "بناه السلطان قايتباي لحماية مدخل النيل، واشتهر بأنه موقع العثور على حجر رشيد سنة 1799م، مفتاح فك رموز الهيروغليفية.",
  },
  {
    n: "مسجد عمرو بن العاص بدمياط",
    c: "دمياط",
    e: "early",
    y: "القرن 7م",
    i: "minaret",
    k: ["#2f5d62", "#f6cf8f"],
    t: "من أقدم مساجد دمياط، ويُنسب تأسيسه إلى عمرو بن العاص في صدر الإسلام. تعاقبت عليه أعمال التجديد، وظل من أبرز مساجد المدينة التاريخية.",
  },
  {
    n: "مسجد أبو الحجاج الأقصري",
    c: "الأقصر",
    e: "ayyubid",
    y: "القرن 13",
    i: "minaret",
    k: ["#a55a1f", "#fbd08a"],
    t: "مسجد فريد قائم فوق أعمدة معبد الأقصر، يحمل اسم الشيخ يوسف أبي الحجاج، ويجمع في مكان واحد آلاف السنين من التاريخ.",
  },
  {
    n: "قلعة شالي",
    c: "سيوة",
    e: "ayyubid",
    y: "القرن 13",
    i: "fort",
    k: ["#8f6a3a", "#fbd18e"],
    t: "قلعة مبنية من الكرشيف (الطين والملح)، كانت ملجأ أهل واحة سيوة، وتشرف اليوم على البلدة القديمة وصحرائها الذهبية.",
  },
];

const sitePhotos = {
  "جامع عمرو بن العاص": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Mosque_of_Amr_ibn_al-As_005.JPG/960px-Mosque_of_Amr_ibn_al-As_005.JPG",
    source: "https://commons.wikimedia.org/wiki/File:Mosque_of_Amr_ibn_al-As_005.JPG",
  },
  "جامع أحمد بن طولون": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Aerial_view_of_the_Mosque_of_Ibn_Tulun.jpg/960px-Aerial_view_of_the_Mosque_of_Ibn_Tulun.jpg",
    source: "https://en.wikipedia.org/wiki/File:Aerial_view_of_the_Mosque_of_Ibn_Tulun.jpg",
  },
  "الجامع الأزهر": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Al-Azhar_%28inside%29_2006.jpg/960px-Al-Azhar_%28inside%29_2006.jpg",
    source: "https://en.wikipedia.org/wiki/File:Al-Azhar_(inside)_2006.jpg",
  },
  "جامع الحاكم بأمر الله": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Karoleen_Eckerbert_-_Al-Hakim_Mosque_Cairo_Egypt_2012_04.JPG/960px-Karoleen_Eckerbert_-_Al-Hakim_Mosque_Cairo_Egypt_2012_04.JPG",
    source: "https://commons.wikimedia.org/wiki/File:Karoleen_Eckerbert_-_Al-Hakim_Mosque_Cairo_Egypt_2012_04.JPG",
  },
  "باب زويلة": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Bab_Zuwayla_Cairo_12_0864.jpg/960px-Bab_Zuwayla_Cairo_12_0864.jpg",
    source: "https://en.wikipedia.org/wiki/File:Bab_Zuwayla_Cairo_12_0864.jpg",
  },
  "قلعة صلاح الدين": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Cairo_citadel_entrance.jpg/960px-Cairo_citadel_entrance.jpg",
    source: "https://en.wikipedia.org/wiki/File:Cairo_citadel_entrance.jpg",
  },
  "جامع محمد علي": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Muhammad_Ali_Mosque%2C_Citadel%2C_Cairo%2C_Egypt3.jpg/960px-Muhammad_Ali_Mosque%2C_Citadel%2C_Cairo%2C_Egypt3.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Muhammad_Ali_Mosque,_Citadel,_Cairo,_Egypt3.jpg",
  },
  "مجمع السلطان قلاوون": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Qalawun_complex_09.jpg/960px-Qalawun_complex_09.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Qalawun_complex_09.jpg",
  },
  "مسجد ومدرسة السلطان حسن": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Kairo_Sultan_Hassan_Moschee_BW_1.jpg/960px-Kairo_Sultan_Hassan_Moschee_BW_1.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Kairo_Sultan_Hassan_Moschee_BW_1.jpg",
  },
  "خان الخليلي": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/The_Khan_el-Khalili_market_in_Cairo%2C_Egypt_%282743501345%29.jpg/960px-The_Khan_el-Khalili_market_in_Cairo%2C_Egypt_%282743501345%29.jpg",
    source: "https://commons.wikimedia.org/wiki/File:The_Khan_el-Khalili_market_in_Cairo,_Egypt_(2743501345).jpg",
  },
  "مجمع السلطان قايتباي": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Cairo-_Sultan_Aschraff%2C_Tomb_of_Caliph%2C_No._19_%28SM_stf559%29.png/960px-Cairo-_Sultan_Aschraff%2C_Tomb_of_Caliph%2C_No._19_%28SM_stf559%29.png",
    source: "https://commons.wikimedia.org/wiki/File:Cairo-_Sultan_Aschraff,_Tomb_of_Caliph,_No._19_(SM_stf559).png",
  },
  "مسجد الرفاعي": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Mausoleum_of_Sheikh_Ali_al-Rifa%27i.JPG/960px-Mausoleum_of_Sheikh_Ali_al-Rifa%27i.JPG",
    source: "https://en.wikipedia.org/wiki/File:Mausoleum_of_Sheikh_Ali_al-Rifa%27i.JPG",
  },
  "قلعة قايتباي": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/%D8%A7%D9%84%D9%82%D9%84%D8%B9%D8%A9_%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9.jpg/960px-%D8%A7%D9%84%D9%82%D9%84%D8%B9%D8%A9_%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9.jpg",
    source: "https://commons.wikimedia.org/wiki/File:%D8%A7%D9%84%D9%82%D9%84%D8%B9%D8%A9_%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9.jpg",
  },
  "مسجد أبو العباس المرسي": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Mosque_of_Abu_Abbas_al-Mursi.jpg/960px-Mosque_of_Abu_Abbas_al-Mursi.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Mosque_of_Abu_Abbas_al-Mursi.jpg",
  },
  "حصن رشيد": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Citadel_of_Qaitbay%2C_Rosetta%2C_Egypt_02.jpg/960px-Citadel_of_Qaitbay%2C_Rosetta%2C_Egypt_02.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Citadel_of_Qaitbay,_Rosetta,_Egypt_02.jpg",
  },
  "مسجد أبو الحجاج الأقصري": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Flickr_-_saaleha_-_Minaret.Masjid_Abu_Haggag.jpg/960px-Flickr_-_saaleha_-_Minaret.Masjid_Abu_Haggag.jpg",
    source: "https://en.wikipedia.org/wiki/File:Flickr_-_saaleha_-_Minaret.Masjid_Abu_Haggag.jpg",
  },
  "مسجد عمرو بن العاص بدمياط": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Amr_Ben_El_Ass_Mosque_in_Damietta2.JPG/960px-Amr_Ben_El_Ass_Mosque_in_Damietta2.JPG",
    source: "https://commons.wikimedia.org/wiki/File:Amr_Ben_El_Ass_Mosque_in_Damietta2.JPG",
  },
  "قلعة شالي": {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Shali_Fortress02.jpg/960px-Shali_Fortress02.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Shali_Fortress02.jpg",
  },
};

/* ===== JS 2) الأيقونات ورسم المشهد ===== */
const icons = {
  mosque:
    '<path d="M32 6c-9 8-14 13-14 20h28c0-7-5-12-14-20z"/><rect x="14" y="26" width="36" height="4"/><rect x="16" y="30" width="32" height="26"/><rect x="6" y="20" width="5" height="36"/><rect x="53" y="20" width="5" height="36"/>',
  minaret:
    '<path d="M32 4l5 10H27z"/><rect x="28" y="14" width="8" height="10"/><rect x="24" y="24" width="16" height="4"/><rect x="27" y="28" width="10" height="16"/><rect x="20" y="44" width="24" height="4"/><rect x="16" y="48" width="32" height="10"/>',
  dome: '<path d="M32 4v6M32 10c-13 4-20 14-20 24h40c0-10-7-20-20-24z"/><rect x="10" y="34" width="44" height="5"/><rect x="14" y="39" width="36" height="17"/>',
  gate: '<rect x="6" y="14" width="14" height="42"/><rect x="44" y="14" width="14" height="42"/><rect x="6" y="10" width="14" height="4"/><rect x="44" y="10" width="14" height="4"/><path d="M20 22h24v34H20z"/>',
  fort: '<rect x="4" y="30" width="56" height="26"/><rect x="4" y="24" width="8" height="6"/><rect x="18" y="24" width="8" height="6"/><rect x="38" y="24" width="8" height="6"/><rect x="52" y="24" width="8" height="6"/><rect x="26" y="12" width="12" height="18"/><rect x="24" y="8" width="16" height="4"/>',
  tomb: '<path d="M32 8c-12 4-18 13-18 22h36c0-9-6-18-18-22z"/><rect x="14" y="30" width="36" height="4"/><rect x="18" y="34" width="28" height="22"/>',
};
function scene(l, n) {
  const sun = 50 + ((n * 53) % 200);
  return `<svg viewBox="0 0 300 170" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${l.n}">
    <defs><linearGradient id="g${n}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${l.k[0]}"/><stop offset="1" stop-color="${l.k[1]}"/></linearGradient></defs>
    <rect width="300" height="170" fill="url(#g${n})"/><circle cx="${sun}" cy="46" r="22" fill="#fff" opacity=".7"/>
    <path d="M0 140q80-22 150-4t150-8v42H0z" fill="#000" opacity=".22"/>
    <g transform="translate(89 26) scale(1.9)" fill="#0b0b0b" fill-opacity=".62">${icons[l.i]}</g>
    <rect y="150" width="300" height="20" fill="#000" opacity=".3"/></svg>`;
}
const art = (l, n) =>
  sitePhotos[l.n]
    ? `<img src="${sitePhotos[l.n].image}" alt="صورة حقيقية لـ ${l.n}" data-site="${l.n}" loading="lazy"><a class="photo-credit" href="${sitePhotos[l.n].source}" target="_blank" rel="noopener">مصدر الصورة</a>`
    : scene(l, n);

const siteStories = {
  "جامع عمرو بن العاص": "تأسس الجامع في الفسطاط سنة 641م، قرب أول عاصمة إسلامية لمصر. لم يبقَ من بنائه الأول إلا الموقع؛ فقد اتسع وجُدّد مرارًا، وتكوّن مع الزمن حول صحن واسع وأروقة للصلاة. ارتبط الجامع ببدايات الحياة الدينية والعلمية في مصر.",
  "جامع أحمد بن طولون": "أنشأه أحمد بن طولون في القرن التاسع ضمن عاصمته القطائع. يشتهر بصحنه الرحب وأروقته ذات الأقواس، وبالمئذنة الحلزونية التي تصعد من خارج المسجد، وهي سمة معمارية نادرة في القاهرة. حافظ تخطيطه الواسع على طابعه العباسي المتأثر بعمارة سامراء.",
  "الجامع الأزهر": "بدأ تأسيسه في عهد الخليفة الفاطمي المعز لدين الله، واكتمل افتتاحه للصلاة سنة 972م تقريبًا. توسعت أروقته ومآذنه عبر عصور مختلفة، فصار سجلًا معماريًا حيًا لتاريخ القاهرة. ومنذ قرون طويلة ارتبط بالتعليم الديني، ثم نشأت حوله مؤسسة الأزهر العلمية.",
  "جامع الحاكم بأمر الله": "بدأ بناؤه في عهد الخليفة العزيز بالله أواخر القرن العاشر، وأتمه الحاكم بأمر الله سنة 1013م. يقع عند الطرف الشمالي للقاهرة الفاطمية، وتلفت الأنظار مئذنتاه الحجريتان وصحنه المحاط بالأروقة. مرّ بتغيرات واستخدامات متعددة قبل ترميمه وإعادته إلى وظيفة الصلاة.",
  "باب زويلة": "شيّده بدر الجمالي سنة 1092م بوصفه أحد أبواب سور القاهرة الفاطمية الجنوبية. يتألف من برجين حجريين يحيطان بمدخل عميق، وفوق برجيه مئذنتا مسجد المؤيد شيخ الذي بُني لاحقًا ملاصقًا للبوابة. ظل الباب شاهدًا على تحصينات المدينة وعلى نمو القاهرة خارج أسوارها.",
  "قلعة صلاح الدين": "بدأ صلاح الدين الأيوبي إنشاء القلعة على جبل المقطم في أواخر القرن الثاني عشر لتكون حصنًا ومقرًا للحكم. استمر استخدامها مركزًا للسلطة قرونًا، وأضيفت إليها مبانٍ ومنشآت في عصور متعاقبة. تضم اليوم مساجد ومتاحف، وتكشف إطلالتها الواسعة عن ملامح القاهرة التاريخية.",
  "جامع محمد علي": "أمر محمد علي باشا ببناء المسجد داخل قلعة صلاح الدين سنة 1830م، واكتمل بناؤه في منتصف القرن التاسع عشر. تتصدره قبة مركزية كبيرة تحيط بها أنصاف قباب، وتعلو واجهته مئذنتان رفيعتان. يغلب على تصميمه الطراز العثماني، بينما تكسو المرمر أجزاء بارزة من جدرانه الداخلية والخارجية.",
  "مجمع السلطان قلاوون": "أقيم المجمع في شارع المعز بين عامي 1284 و1285م، وجمع في موقع واحد مسجدًا ومدرسة وضريحًا وبيمارستانًا. تتجاور فيه الزخارف الحجرية والرخامية مع القبة المزينة، ويعكس تنوع وظائفه دور المنشآت المملوكية في العبادة والتعليم والرعاية الطبية.",
  "مسجد ومدرسة السلطان حسن": "شُيّد بين 1356 و1363م في ميدان القلعة، ويُعد من أبرز مباني القاهرة المملوكية حجمًا وتخطيطًا. يضم صحنًا مركزيًا تحيط به أربعة إيوانات خُصصت لتدريس المذاهب الفقهية، وتُظهر واجهاته الحجرية الضخمة عناية بالغة بالنسب والزخرفة.",
  "خان الخليلي": "نشأ الخان في أواخر القرن الرابع عشر في قلب القاهرة التجارية، ثم تطورت المنطقة إلى شبكة من الأزقة والأسواق والورش. ارتبطت حوانيته بتجارة الحرف والمعادن والتوابل، ولا يزال نسيج المكان يجمع بين النشاط اليومي والعمارة التاريخية للمحال والمقاهي.",
  "مجمع السلطان قايتباي": "بُني في القرافة الشمالية في سبعينيات القرن الخامس عشر، ويضم مسجدًا ومدرسة وضريحًا ومنشآت خدمية. تشتهر قبته بزخارفها الحجرية الدقيقة، وتُظهر المئذنة والواجهات أسلوبًا مملوكيًا متأخرًا يجمع بين دقة النحت وتناسق الكتل.",
  "مسجد الرفاعي": "بدأ تشييده في أواخر القرن التاسع عشر بجوار مسجد السلطان حسن، واكتمل سنة 1912م. استلهم تصميمه عناصر من العمارة المملوكية مع تفاصيل من عصور أخرى، ويضم أضرحة لأفراد من الأسرة العلوية وشخصيات تاريخية. ويكوّن مع المسجد المقابل مشهدًا معماريًا بارزًا عند ميدان القلعة.",
  "قلعة قايتباي": "أنشأ السلطان الأشرف قايتباي الحصن سنة 1477م تقريبًا على طرف جزيرة فاروس بالإسكندرية، قرب موضع فنار الإسكندرية القديم. صُممت القلعة للدفاع عن الساحل، وتضم أسوارًا وأبراجًا وفناءً داخليًا. يجمع موقعها بين قيمتها العسكرية وإطلالتها المباشرة على البحر المتوسط.",
  "مسجد أبو العباس المرسي": "يرتبط المسجد بضريح أبي العباس المرسي، العالم والمتصوف الذي عاش في الإسكندرية في القرن الثالث عشر. اكتسب المبنى صورته الحالية في القرن العشرين، بطراز يمزج تفاصيل إسلامية تاريخية مع قباب ومآذن بارزة. ويظل من أهم معالم ميدان المساجد في حي الأنفوشي.",
  "حصن رشيد": "يقع الحصن قرب مصب فرع رشيد من النيل، وأُعيد بناؤه في العصر المملوكي ضمن منظومة حماية الساحل. اشتهر عالميًا بعدما عثر جنود الحملة الفرنسية قربه على حجر رشيد سنة 1799م؛ وكان الحجر لاحقًا مفتاحًا مهمًا لفك الكتابة الهيروغليفية. ويُعرف أيضًا باسم قلعة قايتباي برشيد.",
  "مسجد عمرو بن العاص بدمياط": "يقع المسجد في قلب دمياط القديمة، ويُعد من أبرز جوامعها التاريخية. تنسب الروايات تأسيسه إلى عمرو بن العاص في صدر الإسلام، فيما تعكس صورته الحالية طبقات من التجديد والتغيير التي شهدتها المدينة عبر القرون. وتُظهر صورته المعمارية المئذنة والعناصر المحلية التي تميز مساجد دلتا النيل.",
  "مسجد أبو الحجاج الأقصري": "يقع المسجد فوق جزء من معبد الأقصر، في مشهد يجمع طبقات تاريخية متباعدة داخل موقع واحد. تعود جذور المسجد إلى العصور الوسطى، ويرتبط باسم الشيخ أبي الحجاج الأقصري. وتُظهر أجزاء المعبد المحيطة به كيف واصلت المدينة استخدام المكان وإعادة تشكيله عبر الزمن.",
  "قلعة شالي": "تطورت شالي، البلدة المحصنة في قلب واحة سيوة، منذ العصور الوسطى باستخدام الكرشيف؛ وهو خليط محلي من الملح والطين والحجر. تكدست بيوتها وممراتها داخل نسيج دفاعي متماسك يحمي السكان من العوامل الخارجية. ألحقت أمطار غزيرة أضرارًا كبيرة بالقلعة سنة 1926م، وبقيت أطلالها علامة مميزة على عمارة الواحة.",
};

const requestedSite = new URLSearchParams(window.location.search).get("site");

function renderDetail(site) {
  document.title = `${site.n} | حكاية مكان`;
  document.body.innerHTML = `
    <header class="nav"><div class="container detail-nav">
      <a class="logo" href="index.html">حكاية مكان</a>
      <a class="back-link" href="index.html">العودة إلى المعالم</a>
      <button class="theme-btn" id="themeBtn" aria-label="تغيير الوضع">☾</button>
    </div></header>
    <main class="detail-page container">
      <div class="detail-meta">${site.c} <span>·</span> ${site.y} <span>·</span> ${eras[site.e]}</div>
      <h1 class="detail-title">${site.n}</h1>
      <figure class="detail-figure">
        <div class="detail-image-wrap">
          ${
            sitePhotos[site.n]
              ? `<img class="detail-image" src="${sitePhotos[site.n].image}" alt="الصورة الكاملة لـ ${site.n}">`
              : scene(site, L.indexOf(site))
          }
        </div>
        <figcaption>
          ${
            sitePhotos[site.n]
              ? `<a href="${sitePhotos[site.n].source}" target="_blank" rel="noopener">مصدر الصورة</a>`
              : ""
          }
          <span>صورة المعلم الأثري</span>
        </figcaption>
      </figure>
      <section class="detail-story" aria-labelledby="story-heading">
        <h2 id="story-heading">حكاية المكان</h2>
        <p>${siteStories[site.n] || site.t}</p>
        <p class="detail-summary">${site.t}</p>
      </section>
      <a class="btn detail-back" href="index.html">اكتشف معالم أخرى</a>
    </main>
    <footer>© 2026 حكاية مكان · حكايات من تراث مصر</footer>`;
  const image = document.querySelector(".detail-image");
  image?.addEventListener("error", () => {
    const wrapper = image.parentElement;
    if (wrapper) wrapper.innerHTML = scene(site, L.indexOf(site));
  });
  document.getElementById("themeBtn").addEventListener("click", toggleTheme);
}

function toggleTheme() {
  const root = document.documentElement;
  root.dataset.theme =
    getComputedStyle(root).getPropertyValue("--bg").trim() === "#12110f"
      ? "light"
      : "dark";
}

/* ===== JS 3) العرض حسب المدينة ===== */
if (requestedSite) {
  const selected = L.find((site) => site.n === requestedSite);
  if (selected) {
    renderDetail(selected);
  } else {
    window.location.replace("index.html");
  }
} else {
const cities = [...new Set(L.map((l) => l.c))];
const wrap = document.getElementById("cities"),
  filters = document.getElementById("filters");
document.getElementById("nLand").textContent = L.length;
document.getElementById("nCity").textContent = cities.length;

function render(city) {
  const show = city === "all" ? cities : [city];
  wrap.innerHTML = show
    .map((c) => {
      const items = L.filter((l) => l.c === c);
      return `<div class="city" id="c-${cities.indexOf(c)}">
      <h2>${c}<small>${items.length} معالم</small></h2><p class="sub">${cityNotes[c] || ""}</p>
      <div class="grid">${items
        .map(
          (l) => `
        <article class="card" role="link" tabindex="0" aria-label="اعرف المزيد عن ${l.n}" data-site-name="${l.n}"><div class="art">${art(l, L.indexOf(l))}<span class="badge">${eras[l.e]}</span><span class="open-hint">اكتشف الحكاية</span></div>
        <div class="body"><h3>${l.n}</h3><div class="meta">${l.c} · ${l.y}</div><p>${l.t}</p></div></article>`,
        )
        .join("")}
      </div></div>`;
    })
    .join("");
  wrap.querySelectorAll(".art img").forEach((image) => {
    image.addEventListener("error", () => {
      const artwork = image.closest(".art");
      const site = L.find((place) => place.n === image.dataset.site);
      if (!artwork || !site) return;
      const badge = artwork.querySelector(".badge");
      artwork.innerHTML = scene(site, L.indexOf(site));
      artwork.append(badge);
    });
  });
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.1 },
  );
  document.querySelectorAll(".card").forEach((c) => io.observe(c));
  document.querySelectorAll(".card").forEach((card) => {
    const openDetail = (event) => {
      if (event.target.closest(".photo-credit")) return;
      window.location.href = `?site=${encodeURIComponent(card.dataset.siteName)}`;
    };
    card.addEventListener("click", openDetail);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetail(event);
      }
    });
  });
}

filters.innerHTML = ["الكل", ...cities]
  .map(
    (c, i) =>
      `<button class="chip ${i ? "" : "active"}" data-c="${i ? c : "all"}">${c}</button>`,
  )
  .join("");
filters.addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  filters
    .querySelectorAll(".chip")
    .forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  render(b.dataset.c);
});

/* ===== JS 4) الوضع الليلي ===== */
document.getElementById("themeBtn").addEventListener("click", toggleTheme);
render("all");
}
