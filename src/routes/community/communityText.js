import { Dictionary } from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: "); //note: change to external reference due to reuse

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";
let italian = "Italiano";



export let contact = new Dictionary();
contact.setText(english, "Contact:");
contact.setText(german, "Kontact:") //set to external reference due to reuse

export let title = new Dictionary();

title.setText(english, "Community");
title.setText(german, "Community");
title.setText(persian, "اطلاعات جامعه");

export let fnet_title = new Dictionary();
fnet_title.setText(english, "Fare Network Football Map");
fnet_title.setText(persian, "نقشه فوتبال شبکه کرایه");
export let fnet_body = new Dictionary();
fnet_body.setText(english, "Fare Networks is a football network that believes sports play an important role in community building.  \
                              Their website linked below displays a helpful map of teams and football clubs that facilitate \
                              welcoming refugees to training sessions or other fun activities.");
fnet_body.setText(german, "German description of NGO");
fnet_body.setText(persian, "Fare Networks یک شبکه فوتبال است که معتقد است ورزش نقش مهمی در ایجاد جامعه دارد. وب سایت آنها که در زیر پیوند داده شده است، نقشه مفیدی از تیم ها و باشگاه های فوتبال را نشان می دهد که استقبال از پناهندگان را در جلسات آموزشی یا سایر فعالیت های سرگرم کننده تسهیل می کند.");
export let fnet_lang = new Dictionary();
fnet_lang.setText(english, english);


export let be_title = new Dictionary();
be_title.setText(english, "The Official Website of Berlin");
be_title.setText(persian, "وب سایت رسمی برلین");
export let be_body = new Dictionary();
be_body.setText(english, "The official website for the city of Berlin displays events in many languages \
                            to encourage the local community to go out and meet people. They display local \
                            monthly events like arts and crafts, opera, and various concerts.");
be_body.setText(german, "German description of Website");
be_body.setText(persian, "وب‌سایت رسمی شهر برلین رویدادها را به زبان‌های مختلف نمایش می‌دهد تا جامعه محلی را به بیرون رفتن و ملاقات با مردم تشویق کند. آنها رویدادهای ماهانه محلی مانند هنر و صنایع دستی، اپرا و کنسرت های مختلف را به نمایش می گذارند.");
export let be_lang = new Dictionary();
be_lang.setText(english, `${german}, ${english}, ${italian}, ${french}`);


export let disc_title = new Dictionary();
disc_title.setText(english, "Discord Community Forum");
disc_title.setText(persian, "انجمن انجمن Discord");
export let disc_body = new Dictionary();
disc_body.setText(english, `Immigration4Iran's community forum where refugees and asylum seekers can go to 
								ask for help with any step of the asylum-seeking process.`);
disc_body.setText(german, "German description of Website");
disc_body.setText(persian, "به جامعه محلی ما در Discord بپیوندید! روی دکمه Join Discord کلیک کنید. جامعه محلی ما متشکل از سازمان های غیردولتی و داوطلبانی است که به پناهندگانی که به آلمان می آیند کمک می کنند.");
export let disc_lang = new Dictionary();
disc_lang.setText(english, `${german}, ${english}, ${arabic}, ${persian}`);
