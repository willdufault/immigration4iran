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

export let integration_title = new Dictionary();
integration_title.setText(english, "Integration Courses");
export let integration_body1 = new Dictionary();
integration_body1.setText(english, "Information about integration courses in Germany can be found on ");
export let integration_body2 = new Dictionary();
integration_body2.setText(english, " in multiple languages. Integration courses often include courses about language, history, and culture.");
export let integration_link = new Dictionary();
integration_link.setText(english, "the BAMF website");