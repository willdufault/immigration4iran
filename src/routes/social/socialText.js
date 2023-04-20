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
export let handbook_body = new Dictionary();
handbook_body.setText(english, "Handbook Germany is a helpful source that gives information about many topics for people coming into the country, \
                                    available in many languages. Includes information about housing, work, language, rights, health, and the asylum-seeking process.");
handbook_body.setText(german, "German description of NGO");
export let handbook_lang = new Dictionary();
handbook_lang.setText(english, `${arabic}, ${german}, ${english}, ${persian}, ${french}, ${russian}, ${turkish}, ${ukrainian}`);

export let health_title = new Dictionary();
health_title.setText(english, "Healthcare");
export let health_body1 = new Dictionary();
health_body1.setText(english, "Health services for undocumented migrants can be found throughout Germany, with free medical assistance available in “Medibüros.” \
                                Some locations can be found on the following webpage: ");
export let health_link = new Dictionary();
health_link.setText(english, "medibueros.org");
export let health_body2 = new Dictionary();
health_body2.setText(english, "(with map) Many of these locations do not require proof of status or paperwork, and are sensitive to those who may have experienced trauma. ");

export let map_title = new Dictionary();
map_title.setText(english, "Map");
export let map_body1 = new Dictionary();
map_body1.setText(english, "The Federal Office for Migration and Refugees offers a tool that can help find integration courses, projects, \
                                migration counseling, and BAMF locations across Germany. The tool can be found ");
export let map_link = new Dictionary();
map_link.setText(english, "here.");

export let asylum_title = new Dictionary();
asylum_title.setText(english, "Asylum Seeking for Family Members");
export let asylum_body1 = new Dictionary();
asylum_body1.setText(english, "Resources for those still seeking asylum in Europe can be found on ");
export let asylum_link1 = new Dictionary();
asylum_link1.setText(english, "w2eu.info");
export let asylum_body2 = new Dictionary();
asylum_body2.setText(english, " or via ");
export let asylum_link2 = new Dictionary();
asylum_link2.setText(english, "the ELENA index.");

export let programs_title = new Dictionary();
programs_title.setText(english, "Local Programs for Refugees");
export let programs_body1 = new Dictionary();
programs_body1.setText(english, " (from Pro Asyl) contains locations of programs for refugees across Germany. There are many ways to get involved whether you are a refugee or just want to help out.");
export let programs_link = new Dictionary();
programs_link.setText(english, "This Google Map");
