import { Dictionary } from "./dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: ");

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";

export let contact = new Dictionary();
contact.setText(english, "Contact:");
contact.setText(german, "Kontact:")
contact.setText(persian, "مخاطب:")

export let title = new Dictionary();

title.setText(english, "Main Page");
title.setText(german, "Hauptpage");
title.setText(persian, "صفحه اصلی");

export let intro = new Dictionary();
intro.setText(english, "Welcome");
intro.setText(german, "Willkommen"); 
intro.setText(persian, "خوش آمدی"); 
export let introText = new Dictionary();
introText.setText(english, "Navigate Around");
introText.setText(german, "Sehen Pages");
introText.setText(persian, "در اطراف حرکت کنید");

export let legal_title = new Dictionary();
legal_title.setText(english, "Legal Support");
legal_title.setText(german, "Rechtliche");
legal_title.setText(persian, "صفحه حقوقی");
export let legal_body = new Dictionary();
legal_body.setText(english, `Click to navigate to our legal help page. It contains information like a step-by-step
								guide to the asylum process as well as various other legal tools.`);
legal_body.setText(german, `German translation`);
legal_body.setText(persian, `برای رفتن به صفحه کمک حقوقی ما کلیک کنید، این صفحه حاوی اطلاعاتی مانند راهنمای گام به گام فرآیند پناهندگی است.
و همچنین ابزارهای قانونی برای کمک در طول فرآیند.
`);

export let social_title = new Dictionary();
social_title.setText(english, "Social Services");
social_title.setText(german, "Soziale");
social_title.setText(persian, "صفحه خدمات اجتماعی");
export let social_body = new Dictionary();
social_body.setText(english, `Click to navigate to our social page. It contains places to find social 
								services like housing, jobs, education, and healthcare.`);
social_body.setText(german, "German translation");
social_body.setText(persian, `برای رفتن به صفحه اجتماعی ما کلیک کنید، این صفحه شامل مکان هایی برای یافتن خدمات اجتماعی مانند مسکن، شغل، تحصیل و
مراقبت های بهداشتی.
`);

export let community_title = new Dictionary();
community_title.setText(english, "Community");
community_title.setText(german, "Gemeinschaft");
community_title.setText(persian, "صفحه انجمن");
export let community_body = new Dictionary();
community_body.setText(english, `Click to navigate to our community page. It contains information 
									like ways to connect to the local community, meet people, and join 
									in on soccer and cricket clubs.`);
community_body.setText(german, "German translation");
community_body.setText(persian, `برای رفتن به صفحه انجمن ما کلیک کنید، این صفحه حاوی اطلاعاتی مانند راه های اتصال به جامعه محلی و ملاقات با افراد در هر سنی است. این شامل فعالیت هایی مانند باشگاه های فوتبال و کریکت است.`);

export let ngo_title = new Dictionary();
ngo_title.setText(english, "NGOs");
ngo_title.setText(german, "NROs");
ngo_title.setText(persian, `صفحه سازمان مردم نهاد`);
export let ngo_body = new Dictionary();
ngo_body.setText(english, `Click to navigate to our NGO page. It contains a sorted list of NGOs and 
							what they can provide to asylum seekers. The NGOs cover subjects including 
							legal help, social services, and community activities.`);
ngo_body.setText(german, "German translation");
ngo_body.setText(persian, `برای رفتن به صفحه سازمان های غیردولتی ما کلیک کنید، این صفحه شامل لیست مرتب شده ای از سازمان های غیردولتی و آنچه که آنها می توانند به پناهجویان ارائه دهند، است. سازمان های غیردولتی مختلف موضوعات مختلفی مانند کمک حقوقی، خدمات اجتماعی و فعالیت های اجتماعی را پوشش می دهند.`);

export let edu_title = new Dictionary();
edu_title.setText(english, "Education");
edu_title.setText(german, "Bildung");
edu_title.setText(persian, "صفحه آموزش");
export let edu_body = new Dictionary();
edu_body.setText(english, `Click to navigate to our education page. It contains information like locations
							of universities and integration courses.`);
edu_body.setText(german, "German translation");
edu_body.setText(persian, `برای رفتن به صفحه آموزش ما کلیک کنید، این صفحه حاوی اطلاعاتی مانند مکان دانشگاه ها و همچنین ادغام است.
و دوره های زبان`);

export let jobs_title = new Dictionary();
jobs_title.setText(english, "Jobs");
jobs_title.setText(german, "Jobs");
jobs_title.setText(persian, "صفحه مشاغل");
export let jobs_body = new Dictionary();
jobs_body.setText(english, `Click to navigate to our jobs page. It contains information about creating a 
								lebenslauf and cover letter. It also contains information on how to apply 
								to jobs on popular sites.`);
jobs_body.setText(german, "German translation");
jobs_body.setText(persian, `برای رفتن به صفحه مشاغل ما کلیک کنید، این صفحه حاوی اطلاعاتی مانند مکان های نحوه ایجاد CV و Lebenslauf است،
و نحوه درخواست برای مشاغل همچنین حاوی پیوندهایی به سایت های شغلی محبوب برای شروع است.`);