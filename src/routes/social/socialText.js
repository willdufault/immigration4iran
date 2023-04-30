import { Dictionary } from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let title = new Dictionary();

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: ");
available_langs.setText(persian, "قابل دسترسی در:");

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";

title.setText(english, "Social Services Information");
title.setText(german, "Informationen zu sozialen Diensten");


/* 
export let title = new Dictionary();
title.setText(english, "Title");
export let body = new Dictionary();
body.setText(english, "Body");
*/


export let handbook_title = new Dictionary();
handbook_title.setText(english, "Handbook Germany");
handbook_title.setText(persian, "هندبوک آلمان");
export let handbook_body = new Dictionary();
handbook_body.setText(english, "Handbook Germany is a helpful source that gives information about many topics for people coming into the country, \
                                    available in many languages. Includes information about housing, work, language, rights, health, and the asylum-seeking process.");
handbook_body.setText(german, "German description of NGO");
handbook_body.setText(persian, "هندبوک آلمان منبع مفیدی است که به بسیاری از زبان‌ها در دسترس است که در مورد بسیاری از موضوعات برای افرادی که وارد کشور می‌شوند اطلاعات می‌دهد. شامل اطلاعاتی در مورد مسکن، کار، زبان، حقوق، سلامت، و فرآیند پناهندگی است.");
export let handbook_lang = new Dictionary();
handbook_lang.setText(english, `${arabic}, ${german}, ${english}, ${persian}, ${french}, ${russian}, ${turkish}, ${ukrainian}`);

export let housing_title = new Dictionary();
housing_title.setText(english, "Housing");
housing_title.setText(persian, "مسکن");
export let housing_body = new Dictionary();
housing_body.setText(english, `Click to go to our housing page which contains information about finding
 								housing in Germany.`);

export let jobs_title = new Dictionary();
jobs_title.setText(english, "Jobs");
jobs_title.setText(persian, "شغل ها");
export let jobs_body = new Dictionary();
jobs_body.setText(english, `Click to go to our jobs page which contains information about finding a job
							 in Germany.`);
jobs_body.setText(persian, `برای رفتن به صفحه مشاغل ما کلیک کنید، این صفحه حاوی اطلاعاتی مانند مکان های نحوه ایجاد CV و Lebenslauf است،و نحوه درخواست برای مشاغل همچنین حاوی پیوندهایی به سایت های شغلی محبوب برای شروع است.`);

export let education_title = new Dictionary();
education_title.setText(english, "Education");
education_title.setText(persian, "تحصیلات");
export let education_body = new Dictionary();
education_body.setText(english, `Click to go to our education page which contians information about education 
									in Germany. This page includes links to university opportunities,
									integration courses, and more. `);
education_body.setText(persian, `برای رفتن به صفحه آموزش ما کلیک کنید، این صفحه حاوی اطلاعاتی مانند مکان دانشگاه ها و همچنین ادغام است.و دوره های زبان`);

export let health_title = new Dictionary();
health_title.setText(english, "Healthcare");
health_title.setText(persian, "مراقبت های بهداشتی");
export let health_body1 = new Dictionary();
health_body1.setText(english, "Health services for undocumented migrants can be found throughout Germany, with free medical assistance available in “Medibüros.” \
                                Some locations can be found on the following webpage: ");
health_body1.setText(persian, "خدمات بهداشتی برای مهاجران غیرقانونی را می توان در سرتاسر آلمان با کمک های پزشکی رایگان در «Medibüros» پیدا کرد. برخی از مکان ها را می توان در صفحه وب زیر یافت:");
export let health_link = new Dictionary();
health_link.setText(english, "medibueros.org");
export let health_body2 = new Dictionary();
health_body2.setText(english, "(with map) Many of these locations do not require proof of status or paperwork, and are sensitive to those who may have experienced trauma. ");
health_body2.setText(persian, "(همراه با نقشه) بسیاری از این مکان ها نیازی به اثبات وضعیت یا مدارک ندارند و نسبت به کسانی که ممکن است آسیب دیده باشند حساس هستند.");

export let map_title = new Dictionary();
map_title.setText(english, "Map");
map_title.setText(persian, "نقشه");
export let map_body1 = new Dictionary();
map_body1.setText(english, "The Federal Office for Migration and Refugees offers a tool that can help find integration courses, projects, \
                                migration counseling, and BAMF locations across Germany. The tool can be found ");
map_body1.setText(persian, "اداره فدرال مهاجرت و پناهندگان ابزاری را ارائه می دهد که می تواند به یافتن دوره های ادغام، پروژه ها، مشاوره مهاجرت و مکان های BAMF در سراسر آلمان کمک کند. ابزار را می توان پیدا کرد");
export let map_link = new Dictionary();
map_link.setText(english, "here.");
map_link.setText(persian, "اینجا.");

export let asylum_title = new Dictionary();
asylum_title.setText(english, "Asylum Seeking for Family Members");
asylum_title.setText(persian, "درخواست پناهندگی برای اعضای خانواده");
export let asylum_body1 = new Dictionary();
asylum_body1.setText(english, "Resources for those still seeking asylum in Europe can be found on ");
asylum_body1.setText(persian, "منابع برای کسانی که هنوز به دنبال پناهندگی در اروپا هستند را می توان در این سایت یافت");
export let asylum_link1 = new Dictionary();
asylum_link1.setText(english, "w2eu.info");
export let asylum_body2 = new Dictionary();
asylum_body2.setText(english, " or via ");
asylum_body2.setText(persian, "یا از طریق");
export let asylum_link2 = new Dictionary();
asylum_link2.setText(english, "the ELENA index.");
asylum_link2.setText(persian, "شاخص ELENA");


export let programs_title = new Dictionary();
programs_title.setText(english, "Local Programs for Refugees");
programs_title.setText(persian, "برنامه های محلی برای پناهندگان");
export let programs_body1 = new Dictionary();
programs_body1.setText(english, " (from Pro Asyl) contains locations of programs for refugees across Germany. There are many ways to get involved whether you are a refugee or just want to help out.");
programs_body1.setText(persian, "(Pro Asyl از) شامل مکان های برنامه برای پناهندگان در سراسر آلمان است. راه های زیادی برای درگیر شدن وجود دارد، چه پناهنده باشید و چه فقط می خواهید کمک کنید.");
export let programs_link = new Dictionary();
programs_link.setText(english, "This Google Map");
programs_link.setText(persian, "این نقشه گوگل");
