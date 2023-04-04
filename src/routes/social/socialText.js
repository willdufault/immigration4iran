import {Dictionary} from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let title = new Dictionary();

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";

title.setText(english, "Social Services Information");
title.setText(german, "Informationen zu sozialen Diensten");

export let handbook_title = new Dictionary();
handbook_title.setText(english, "Handbook Germany");
export let handbook_body = new Dictionary();
handbook_body.setText(english, "Handbook Germany is a helpful source that gives information about many topics for people coming into the country, \
                                    available in many languages. Includes information about housing, work, language, rights, health, and the asylum-seeking process.");
handbook_body.setText(german, "German description of NGO");
export let handbook_lang = new Dictionary();
handbook_lang.setText(english, arabic + ", " + german + ", " + english + ", " + persian + ", " + french + + ", " + russian + ", " + turkish + ", " + ukrainian);

export let housing_title = new Dictionary();
housing_title.setText(english, "Handbook Germany");
export let housing_body1 = new Dictionary();
housing_body1.setText(english, "The following resources are available for those looking for housing, either short-term or long term: \n");
export let housing_link = new Dictionary();
housing_link.setText(english, "Refugees Welcome");
// Could make this an unordered list later
export let housing_list = new Dictionary(); 
housing_list.setText(english, " is a program designed to match refugees to open rooms across Germany, also allowing people to rent out their open rooms if they want to help! \n\
                                A few other links to sites which offer housing aid are: \n\
                                warmes-bett.de\n\
                                jugendherberge.de\n\
                                icanhelp.host\n\
                                mapahelp.me\n\
                                wunderflats.com\n\
                                everybedhelps.com");