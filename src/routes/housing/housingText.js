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

title.setText(english, "Housing");
title.setText(german, "german translation");

export let housing_title = new Dictionary();
housing_title.setText(english, "Housing Sites");
export let housing_body1 = new Dictionary();
housing_body1.setText(english, "The following resources are available for those looking for housing, either short-term or long term:");
housing_body1.setText(persian, "منابع زیر برای کسانی که به دنبال مسکن، کوتاه مدت یا بلند مدت هستند، در دسترس است:");
export let housing_link = new Dictionary();
housing_link.setText(english, "Refugees Welcome");
export let housing_body2 = new Dictionary();
housing_body2.setText(english, " is a program designed to match refugees to open rooms across Germany, also allowing people to rent out their open rooms if they want to help! \n\
                                A few other links to sites which offer housing aid are: ");
housing_body2.setText(persian, "برنامه ای است که برای تطبیق پناهندگان با اتاق های باز در سراسر آلمان طراحی شده است، همچنین به افراد اجازه می دهد در صورت تمایل به کمک، اتاق های باز خود را اجاره کنند! چند پیوند دیگر به سایت هایی که کمک های مسکن ارائه می کنند عبارتند از:");

export const housing_list = [
    "warmes-bett.de",
    "jugendherberge.de",
    "icanhelp.host",
    "mapahelp.me",
    "wunderflats.com",
    "everybedhelps.com"
]