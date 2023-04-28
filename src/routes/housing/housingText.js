import { Dictionary } from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let title = new Dictionary();

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: ");

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";

title.setText(english, "Housing");
title.setText(german, "german translation");

export let housing_title = new Dictionary();
housing_title.setText(english, "House-hunting Sites");
export let housing_body1 = new Dictionary();
housing_body1.setText(english, "The following resources are available for those looking for housing, either short-term or long term:");
export let housing_link = new Dictionary();
housing_link.setText(english, "Refugees Welcome");
// Could make this an unordered list later
export let housing_body2 = new Dictionary();
housing_body2.setText(english, " is a program designed to match refugees to open rooms across Germany, also allowing people to rent out their open rooms if they want to help! \n\
                                A few other links to sites which offer housing aid are: ");
export const housing_list = [
    "warmes-bett.de",
    "jugendherberge.de",
    "icanhelp.host",
    "mapahelp.me",
    "wunderflats.com",
    "everybedhelps.com"
]