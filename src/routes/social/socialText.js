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

export let handbook_title = new Dictionary();
handbook_title.setText(english, "Handbook Germany");
export let handbook_body = new Dictionary();
handbook_body.setText(english, "Handbook Germany is a helpful source that gives information about many topics for people coming into the country, \
                                    available in many languages. Includes information about housing, work, language, rights, health, and the asylum-seeking process.");
handbook_body.setText(german, "German description of NGO");
export let handbook_lang = new Dictionary();
handbook_lang.setText(english, arabic + ", " + german + ", " + english + ", " + persian + ", " + french + ", " + russian + ", " + turkish + ", " + ukrainian);

export let housing_title = new Dictionary();
housing_title.setText(english, "Housing");
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

export let health_title = new Dictionary();
health_title.setText(english, "Healthcare");
export let health_body1 = new Dictionary();
health_body1.setText(english, "Health services for undocumented migrants can be found throughout Germany, with free medical assistance available in “Medibüros.” \
                                Some locations can be found on the following webpage: ");
export let health_link = new Dictionary();
health_link.setText(english, "medibueros.org");
export let health_body2 = new Dictionary();
health_body2.setText(english, "(with map) Many of these locations do not require proof of status or paperwork, and are sensitive to those who may have experienced trauma. ");

export let jobs_title = new Dictionary();
jobs_title.setText(english, "Jobs");
export let jobs_body1 = new Dictionary();
jobs_body1.setText(english, "Those who have applied for or received a residence permit are allowed to work in Germany. Links to job boards include:");
export const jobs_list = [
    "de.indeed.com/jobs",
    "jobs4refugees.org",
    "workeer.de",
    "hr-integrate.com",
    "arbeitsagentur.de"
]
export let jobs_body2 = new Dictionary();
jobs_body2.setText(english, "All German employees have rights while working in the country. Information about these rights and resources to \
                                resolve labor-related issues can be found on");
export let jobs_link = new Dictionary();
jobs_link.setText(english, "w2eu.info");

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

export let edu_title = new Dictionary();
edu_title.setText(english, "Education");
export let edu_body1 = new Dictionary();
edu_body1.setText(english, "This Google Map (from Pro Asyl) contains locations of German Universities that offer ways for refugees to learn or study, \
                                with more information about each location on the map. There are many sources of free informative videos and articles for refugees, \
                                collected on sites such as ");
export let edu_body2 = new Dictionary();
edu_body2.setText(english, " and ");
export let edu_link2 = new Dictionary();
edu_link2.setText(english, "Hochschulforum Digitalisierung");
export let edu_link3 = new Dictionary();
edu_link3.setText(english, "oncampus.de");

export let programs_title = new Dictionary();
programs_title.setText(english, "Local Programs for Refugees");
export let programs_body1 = new Dictionary();
programs_body1.setText(english, " (from Pro Asyl) contains locations of programs for refugees across Germany. There are many ways to get involved whether you are a refugee or just want to help out.");
export let programs_link = new Dictionary();
programs_link.setText(english, "This Google Map");

export let integration_title = new Dictionary();
integration_title.setText(english, "Integration Courses");
export let integration_body1 = new Dictionary();
integration_body1.setText(english, "Information about integration courses in Germany can be found on ");
export let integration_body2 = new Dictionary();
integration_body2.setText(english, " in multiple languages. Integration courses often include courses about language, history, and culture.");
export let integration_link = new Dictionary();
integration_link.setText(english, "the BAMF website");
