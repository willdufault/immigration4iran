import { Dictionary } from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: ");

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";

export let title = new Dictionary();

title.setText(english, "NGO Information");
title.setText(german, "NGO-Informationen");

export let sample1title = new Dictionary();
sample1title.setText(english, "Name of NGO");
//probably don't want a translation for ngo names? unsure
sample1title.setText(german, "Name von NGO");
export let sample1body = new Dictionary();
sample1body.setText(english, "Description of NGO");
sample1body.setText(german, "German description of NGO");

export let wu_title = new Dictionary();
wu_title.setText(english, "Welcome United");
export let wu_body = new Dictionary();
wu_body.setText(english, "Welcome United is a social and antiracism group that organizes events and protests throughout Germany. \
                              On their website, you can network with other community members, attend local events, and sign up for the \
                              Welcome United newsletter.");
wu_body.setText(german, "German description of NGO");
export let wu_lang = new Dictionary();
wu_lang.setText(english, german + ", " + english);

export let jog_title = new Dictionary();
jog_title.setText(english, "Youth without Borders");
jog_title.setText(german, "Jungendliche ohne Grenzen");
export let jog_body = new Dictionary();
jog_body.setText(english, "Youth without Borders is an organization for German refugees with a focus on protecting the rights of young refugees \
                                who may face any form of discrimination. The organization has regular meetings, hosts local events, and works with \
                                other similar NGOs.");
jog_body.setText(german, "German description of NGO");
export let jog_lang = new Dictionary();
jog_lang.setText(english, german);

export let kar_title = new Dictionary();
kar_title.setText(english, "The Caravan for the Right of Refugees and Migrants");
kar_title.setText(german, "Karawane für die Rechte der Flüchtlinge und Migrantinnen");
export let kar_body = new Dictionary();
kar_body.setText(english, "The Caravan is a website which allows users to post about events, news, and other community activities. \
                                The website aims to connect refugees through an online forum and encourages people to share local events.");
kar_body.setText(german, "German description of NGO");
export let kar_lang = new Dictionary();
kar_lang.setText(english, german + ", " + english + ", " + french + ", " + turkish + ", " + persian);

export let voice_title = new Dictionary();
voice_title.setText(english, "The VOICE Refugee Forum Germany");
export let voice_body = new Dictionary();
voice_body.setText(english, "The VOICE is a forum for refugees, where users can post about events, news, and other community activities.");
voice_body.setText(german, "German description of NGO");


export let pa_title = new Dictionary();
pa_title.setText(english, "Pro Asyl");
export let pa_body = new Dictionary();
pa_body.setText(english, "For human rights and refugee protection in Europe (with a focus on Germany). \
                            Includes hotline for legal or general advice, as well as resources regarding refugee rights and support. \
                            Solely funded by membership fees, donations, grants from foundations.");
pa_body.setText(german, "German description of NGO");
export let pa_lang = new Dictionary();
pa_lang.setText(english, german + ", " + english);

export let weu_title = new Dictionary();
weu_title.setText(english, "Welcome to Europe (w2eu.info)");
export let weu_body = new Dictionary();
weu_body.setText(english, "Welcome to Europe gives migrants and refugees information about coming to and living in Europe. \
                            On the website there are a lot of helpful resources for refugees coming to Germany, \
                            including information about the legal processes and available social services.");
weu_body.setText(german, "German description of NGO");
export let weu_lang = new Dictionary();
weu_lang.setText(english, arabic + ", " + english + ", " + french + ", " + persian);

export let tdf_title = new Dictionary();
tdf_title.setText(english, "Terre des Femmes");
export let tdf_body = new Dictionary();
tdf_body.setText(english, "Terre des Femmes is an organization focused on womens’ rights. \
                            Their website includes a newsletter, recent campaigns, and ways to get involved.");
tdf_body.setText(german, "German description of NGO");
export let tdf_lang = new Dictionary();
tdf_lang.setText(english, german);

export let mk_title = new Dictionary();
mk_title.setText(english, "Medibüro Kiel");
export let mk_body = new Dictionary();
mk_body.setText(english, "Medibüro Kiel helps undocumented migrants and refugees seek medical help. \
                            They offer anonymous and free access to health services, as well as allowing for opportunities to volunteer and participate.");
mk_body.setText(german, "German description of NGO");
export let mk_lang = new Dictionary();
mk_lang.setText(english, german);