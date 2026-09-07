// Central content + imagery for the Discover Bangladesh experience.
// Image URLs are AI-generated cinematic photography (placeholders resolve at runtime).

const img = {
  hero: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/bc1ac0480_generated_3b6856a0.jpg",
  introBoat: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/4cbae8b55_generated_f9f397be.jpg",
  dhaka: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/98947ebd9_generated_6d721902.jpg",
  coxsbazar: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/5ff0e01c8_generated_a5daea87.jpg",
  sundarbans: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/43b4734ec_generated_cb8f175b.jpg",
  sylhet: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/6d906a4f8_generated_a64f0879.jpg",
  bandarban: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/1e1cb2735_generated_555fd529.jpg",
  saintmartin: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/da9849851_generated_b20e9dae.jpg",
  rangamati: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/a165a915c_generated_d23ed0e3.jpg",
  sonargaon: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/7b13ee672_generated_5270a5eb.jpg",
  sajek: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/d67a7d5b6_generated_9f73863d.jpg",
  village: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/c08923d3e_generated_fd5b95ef.jpg",
  jamdani: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/db3a67d6b_generated_7adbd46b.jpg",
  baul: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/7c634504a_generated_80d2e4cd.jpg",
  boishakh: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/26c93d134_generated_44922e01.jpg",
  biriyani: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/0388d3248_generated_6aa7d80d.jpg",
  hilsa: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/e0f112003_generated_1f6abe53.jpg",
  mango: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/253dd1e8e_generated_d9491e37.jpg",
  sunsetRiver: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/44e50203e_generated_af91baaa.jpg",
  nightDhaka: "https://media.base44.com/images/public/6a9f08b87e979eb81d02089e/952cedcc0_generated_dbf614d6.jpg",
};

export const IMAGES = img;

// Map pins use percentage coordinates over the stylized map container.
export const destinations = [
  {
    id: "dhaka",
    name: "Dhaka",
    bangla: "ঢাকা",
    region: "Capital City",
    image: img.dhaka,
    description: "A pulsing megacity where centuries-old Mughal heritage meets relentless modern energy along the Buriganga river.",
    pin: { x: 40, y: 47 },
  },
  {
    id: "coxsbazar",
    name: "Cox's Bazar",
    bangla: "কক্সবাজার",
    region: "Bay of Bengal",
    image: img.coxsbazar,
    description: "Home to the world's longest unbroken natural sandy beach — 120 kilometres of golden shoreline meeting the sea.",
    pin: { x: 72, y: 86 },
  },
  {
    id: "sundarbans",
    name: "Sundarbans",
    bangla: "সুন্দরবন",
    region: "Mangrove Delta",
    image: img.sundarbans,
    description: "The largest mangrove forest on Earth, a misty labyrinth of tidal rivers and the last refuge of the Bengal tiger.",
    pin: { x: 30, y: 80 },
  },
  {
    id: "sylhet",
    name: "Sylhet",
    bangla: "সিলেট",
    region: "Tea Country",
    image: img.sylhet,
    description: "Endless emerald tea gardens rolling into misty hills, where every morning smells of fresh leaves and rain.",
    pin: { x: 66, y: 22 },
  },
  {
    id: "bandarban",
    name: "Bandarban",
    bangla: "বান্দরবান",
    region: "Hill Tracts",
    image: img.bandarban,
    description: "Layered blue mountains floating above the clouds — the spiritual heart of the Chittagong hill tracts.",
    pin: { x: 78, y: 70 },
  },
  {
    id: "saintmartin",
    name: "Saint Martin",
    bangla: "সেন্ট মার্টিন",
    region: "Coral Island",
    image: img.saintmartin,
    description: "Bangladesh's only coral island — turquoise lagoons, coconut palms and a pace measured by the tides.",
    pin: { x: 86, y: 95 },
  },
  {
    id: "rangamati",
    name: "Rangamati",
    bangla: "রাঙ্গামাটি",
    region: "Lake District",
    image: img.rangamati,
    description: "The serene Kaptai lake cradled by green hills, dotted with bamboo villages and hanging bridges.",
    pin: { x: 72, y: 64 },
  },
  {
    id: "sonargaon",
    name: "Sonargaon",
    bangla: "সোনারগাঁও",
    region: "Ancient Capital",
    image: img.sonargaon,
    description: "The medieval capital of Bengal — crumbling mansions and artisans keeping the old crafts alive.",
    pin: { x: 46, y: 55 },
  },
];

export const journeyStops = [
  {
    id: "rivers",
    label: "The Rivers",
    bangla: "নদী",
    icon: "🌊",
    text: "Life Flows Here.",
    description: "700 rivers vein through the land — carrying boats, fishermen and centuries of stories to the sea.",
    image: img.introBoat,
    tint: "var(--river)",
  },
  {
    id: "villages",
    label: "The Villages",
    bangla: "গ্রাম",
    icon: "🌾",
    text: "Where Simplicity Feels Beautiful.",
    description: "Green paddy stretches to the horizon, where the rhythm of the seasons still sets the pace of life.",
    image: img.village,
    tint: "var(--moss)",
  },
  {
    id: "modern",
    label: "Modern Bangladesh",
    bangla: "নগরী",
    icon: "🏙️",
    text: "Always Moving Forward.",
    description: "Dhaka rises — glass and steel reaching skyward as a nation races toward its future.",
    image: img.dhaka,
    tint: "var(--azure)",
  },
  {
    id: "tea",
    label: "The Tea Gardens",
    bangla: "চা বাগান",
    icon: "🍃",
    text: "Where Green Goes Beyond the Horizon.",
    description: "Sylhet's terraced plantations roll into mist — a sea of emerald that never seems to end.",
    image: img.sylhet,
    tint: "var(--moss)",
  },
  {
    id: "wild",
    label: "The Wild",
    bangla: "অরণ্য",
    icon: "🌳",
    text: "Into the Heart of the Wild.",
    description: "The Sundarbans — a primeval mangrove maze where the Bengal tiger still rules the tides.",
    image: img.sundarbans,
    tint: "var(--moss)",
  },
  {
    id: "mountains",
    label: "The Mountains",
    bangla: "পাহাড়",
    icon: "🏔️",
    text: "Adventure Above the Clouds.",
    description: "Bandarban's layered ridges float above the mist — a quiet kingdom in the sky.",
    image: img.bandarban,
    tint: "var(--azure)",
  },
  {
    id: "sea",
    label: "The Sea",
    bangla: "সাগর",
    icon: "🏖️",
    text: "Where the Horizon Never Ends.",
    description: "Cox's Bazar — 120 kilometres of sand where the beach simply refuses to stop.",
    image: img.coxsbazar,
    tint: "var(--river)",
  },
];

export const destinationCards = [
  { ...destinations[1], tag: "Beach" },
  { ...destinations[2], tag: "Wildlife" },
  { ...destinations[3], tag: "Nature" },
  { ...destinations[4], tag: "Mountains" },
  { ...destinations[5], tag: "Island" },
  { ...destinations[6], tag: "Lake" },
  { ...destinations[7], tag: "Heritage" },
  { id: "sajek", name: "Sajek Valley", bangla: "সাজেক উপত্যকা", region: "Hill Tracts", image: img.sajek, description: "A remote valley where clouds roll through your window and sunrises paint the hills gold.", tag: "Valley", pin: { x: 80, y: 60 } },
];

export const stats = [
  { value: 170, suffix: "M+", label: "People", bangla: "মানুষ" },
  { value: 700, suffix: "+", label: "Rivers", bangla: "নদী" },
  { value: 8, suffix: "", label: "Divisions", bangla: "বিভাগ" },
  { value: 6, suffix: "", label: "Seasons", bangla: "ঋতু" },
  { value: 0, suffix: "", label: "Of Stories", bangla: "গল্প", isText: true, textValue: "Thousands" },
];

export const culture = [
  { id: "jamdani", name: "Jamdani", bangla: "জামদানি", icon: "🧵", image: img.jamdani, short: "The legendary hand-woven muslin of Bengal, a UNESCO heritage craft.", story: "For centuries, weavers have threaded poetry into looms — each Jamdani saree takes weeks of patient, rhythmic work, its motifs born entirely from the weaver's memory. No pattern is ever drawn; every flower is imagined into the cloth." },
  { id: "baul", name: "Baul Music", bangla: "বাউল", icon: "🎶", image: img.baul, short: "Wandering mystic minstrels singing of love, divinity and the human soul.", story: "With a single-string ektara and a voice weathered by the road, Baul singers carry a philosophy older than borders — a search for the divine inside the human heart. Their songs drift through train stations, fields and fairs." },
  { id: "boishakh", name: "Pohela Boishakh", bangla: "পহেলা বৈশাখ", icon: "🎉", image: img.boishakh, short: "The Bengali New Year — a riot of colour, masks and procession.", story: "On the first dawn of Boishakh, the streets erupt in red-and-white as Mangal Shobhajatra winds through Dhaka — giant masks, painted faces and drums welcoming the new year with defiant joy." },
  { id: "boats", name: "Traditional Boats", bangla: "নৌকা", icon: "🚣", image: img.introBoat, short: "The nouka — sculpted wooden vessels that are the soul of the rivers.", story: "Each river boat is carved by hand to a shape perfected over a thousand years — the sampan, the patam, the bajra. They are not transport; they are the floating architecture of an entire civilisation." },
  { id: "cricket", name: "Cricket", bangla: "ক্রিকেট", icon: "🏏", image: img.nightDhaka, short: "More than a sport — a national heartbeat played on every street.", story: "From gully cricket with a tennis ball to roaring stadiums, cricket unites 170 million people in a single breath. Every match night, the whole country leans into the same hope." },
  { id: "art", name: "Bengali Art", bangla: "শিল্প", icon: "🎭", image: img.jamdani, short: "From Alpana folk painting to the modernist canvases of Zainul Abedin.", story: "Bengali art flows from the soil — the famine sketches of Zainul Abedin, the swirling Alpana drawn on doorsteps, the rickshaw art that turns every vehicle into a moving gallery." },
  { id: "architecture", name: "Historic Architecture", bangla: "স্থাপত্য", icon: "🕌", image: img.sonargaon, short: "Sixty Dome Mosque, Panam City, and centuries of terracotta temples.", story: "From the 15th-century Sixty Dome Mosque of Bagerhat to the crumbling mansions of Panam, Bengal's architecture tells of sultans, merchants and devotees who built in brick, terracotta and faith." },
];

export const foods = [
  { id: "kacchi", name: "Kacchi Biriyani", bangla: "কাচ্চি বিরিয়ানি", icon: "🍛", image: img.biriyani, description: "Raw mutton layered with fragrant basmati, saffron and ghee — the crown jewel of Bengali feasts." },
  { id: "hilsa", name: "Hilsa Fish", bangla: "ইলিশ", icon: "🐟", image: img.hilsa, description: "The national fish — silvery, rich and unmistakable, best with mustard gravy and green chilli." },
  { id: "panta", name: "Panta Ilish", bangla: "পান্তা ইলিশ", icon: "🍚", image: img.hilsa, description: "Fermented rice with fried hilsa — the iconic plate of Pohela Boishakh mornings." },
  { id: "mango", name: "Mango", bangla: "আম", icon: "🥭", image: img.mango, description: "Rajshahi's golden Alphonso and Langra — the sweet, juicy king of summer fruits." },
  { id: "sweets", name: "Traditional Sweets", bangla: "মিষ্টি", icon: "🍬", image: img.mango, description: "Rasgolla, sandesh and chomchok — Bengal turns milk and sugar into edible art." },
  { id: "tea", name: "Bengali Tea", bangla: "চা", icon: "🍵", image: img.sylhet, description: "Strong, milky and sweet — the cup that fuels every conversation, morning to midnight." },
];

export const dayNight = [
  { id: "morning", label: "Morning", bangla: "সকাল", icon: "🌅", text: "Villages wake to mist and birdsong.", image: img.village, tint: "38 60% 80%" },
  { id: "afternoon", label: "Afternoon", bangla: "বিকেল", icon: "☀️", text: "Cities hum and fields glow green.", image: img.sylhet, tint: "45 70% 60%" },
  { id: "sunset", label: "Sunset", bangla: "গোধূলি", icon: "🌇", text: "Rivers turn to liquid gold.", image: img.sunsetRiver, tint: "20 75% 55%" },
  { id: "night", label: "Night", bangla: "রাত", icon: "🌙", text: "Dhaka blazes into electric life.", image: img.nightDhaka, tint: "220 60% 18%" },
];

export const gallery = [
  { src: img.sylhet, label: "Nature", span: "tall" },
  { src: img.baul, label: "People", span: "wide" },
  { src: img.biriyani, label: "Food", span: "normal" },
  { src: img.boishakh, label: "Culture", span: "tall" },
  { src: img.nightDhaka, label: "Cities", span: "wide" },
  { src: img.village, label: "Villages", span: "normal" },
  { src: img.sundarbans, label: "Wildlife", span: "tall" },
  { src: img.coxsbazar, label: "Beaches", span: "normal" },
  { src: img.bandarban, label: "Mountains", span: "wide" },
];

export const stories = [
  {
    id: "beach",
    title: "The Endless Beach of Cox's Bazar",
    excerpt: "Where 120 kilometres of sand meet the Bay of Bengal, and a single morning walk can feel like crossing a country.",
    image: img.coxsbazar,
    read: 6,
  },
  {
    id: "sundarbans",
    title: "Life Inside the Sundarbans",
    excerpt: "A boatman's quiet account of navigating the world's largest mangrove — a forest that breathes with the tide.",
    image: img.sundarbans,
    read: 8,
  },
  {
    id: "tea",
    title: "A Morning in Sylhet's Tea Gardens",
    excerpt: "Before the sun clears the hills, the pickers are already moving through the emerald rows, baskets filling slowly.",
    image: img.sylhet,
    read: 5,
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Destinations", href: "#destinations" },
  { label: "Culture", href: "#culture" },
  { label: "Food", href: "#food" },
  { label: "Stories", href: "#stories" },
  { label: "About Bangladesh", href: "#intro" },
  { label: "Travel Guide", href: "#journey" },
];