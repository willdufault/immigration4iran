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

export let title = new Dictionary();

title.setText(english, "Main Page");
title.setText(german, "Hauptpage");

export let intro = new Dictionary();
intro.setText(english, "Welcome");
intro.setText(german, "Willkommen");
export let introText = new Dictionary();
introText.setText(english, "Navigate Around");
introText.setText(german, "Sehen Pages");

export let legal_title = new Dictionary();
legal_title.setText(english, "Legal Page");
legal_title.setText(german, "Rechtliche Seite")
export let legal_body = new Dictionary();
legal_body.setText(english, "Click to navigate to our legal help page, it contains information like a step by step guide to the asylum process\
                            as well as legal tools to help throughout the process.");
legal_body.setText(german, "Klicken Sie hier, um zu unserer Rechtshilfeseite zu gelangen. Sie enthält Informationen wie einen schrittweisen Leitfaden\
                        für das Asylverfahren und rechtliche Hilfsmittel, die während des gesamten Verfahrens helfen.");

export let social_title = new Dictionary();
social_title.setText(english, "Social Services Page");
social_title.setText(german, "Soziale Seite");
export let social_body = new Dictionary();
social_body.setText(english, "Click to navigate to our social page, it contains places to find social services like housing, jobs, education and\
                            healthcare.");
social_body.setText(german, "Klicken Sie hier, um zu unserer sozialen Seite zu gelangen. Dort finden Sie Informationen zu sozialen Diensten wie\
                            Wohnen, Arbeit, Bildung und Gesundheit.");

export let community_title = new Dictionary();
community_title.setText(english, "Community Page");
community_title.setText(german, "Gemeinschaft Seite");
export let community_body = new Dictionary();
community_body.setText(english, "Click to navigate to our community page, it contains information like ways to connect to the local community and\
                            meet people of all ages. It includes activities like soccer and cricket clubs.");
community_body.setText(german, "Klicken Sie hier, um zu unserer sozialen Seite zu gelangen. Sie enthält Informationen über Möglichkeiten, sich\
                            mit der örtlichen Gemeinschaft zu verbinden und Menschen jeden Alters zu treffen. Dazu gehören Aktivitäten wie\
                            Fußball- und Cricket-Clubs.");

export let ngo_title = new Dictionary();
ngo_title.setText(english, "NGO Page");
ngo_title.setText(german, "NRO Seite");
export let ngo_body = new Dictionary();
ngo_body.setText(english, "Click to navigate to our NGO page, it contains a sorted list of NGOS and what they can provide to asylum seekers.\
                        The various NGOs cover various subjects like legal help, social services, and community activities.");
ngo_body.setText(german, "Klicken Sie hier, um zu unserer NRO-Seite zu gelangen. Sie enthält eine sortierte Liste von NROs und deren Angebote\
                        für Asylbewerber. Die verschiedenen Nichtregierungsorganisationen decken verschiedene Themenbereiche ab, wie z. B.\
                        Rechtshilfe, soziale Dienste und Gemeinschaftsaktivitäten.");

export let edu_title = new Dictionary();
edu_title.setText(english, "Education Page");
edu_title.setText(german, "Bildung Seite");
export let edu_body = new Dictionary();
edu_body.setText(english, "Click to navigate to our education page, it contains information like locations of universities, and integration\
                            and language courses.");
edu_body.setText(german, "Klicken Sie hier, um zu unserer Bildungsseite zu gelangen. Sie enthält Informationen wie Standorte von Universitäten,\
                            Integrations- und Sprachkurse.");

export let jobs_title = new Dictionary();
jobs_title.setText(english, "Jobs Page");
jobs_title.setText(german, "Jobs Seite");
export let jobs_body = new Dictionary();
jobs_body.setText(english, "Click to navigate to our jobs page, it contains information like locations how to create a CV and Lebenslauf,\
                            and how to apply to jobs. It also contains links to popular job sites to get a start.");
jobs_body.setText(german, "Klicken Sie hier, um zu unserer Jobseite zu gelangen. Sie enthält Informationen darüber, wie Sie einen Lebenslauf\
                            erstellen und sich auf Stellen bewerben können. Sie enthält auch Links zu beliebten Stellenbörsen, um einen Anfang\
                            zu machen.");