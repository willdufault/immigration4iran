import {Dictionary} from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

export let available_langs = new Dictionary();
available_langs.setText(english, "Available in: ");

export let contact = new Dictionary();
contact.setText(english, "Contact:");
contact.setText(german, "Kontact:")

export let title = new Dictionary();

title.setText(english, "Community Information");
title.setText(german, "Community-Informationen");

export let gsbtb_title = new Dictionary();
gsbtb_title.setText(english, "Give Something Back to Berlin");
export let gsbtb_body = new Dictionary();
gsbtb_body.setText(english, "Give Something Back to Berlin holds local events in Berlin to facilitate a helpful local community.  \
                              On their Activity Calendar website they hold social events like learning to play musical instruments \
                              like Guitar and Piano.");
gsbtb_body.setText(german, "German description of NGO");
export let gsbtb_lang = new Dictionary();
gsbtb_lang.setText(english, german + ", " + english);
export let gsbtb_contact = new Dictionary();
gsbtb_contact.setText(english, "mail@welcome-united.org");


export let fnet_title = new Dictionary();
fnet_title.setText(english, "Fare Network Football Map");
export let fnet_body = new Dictionary();
fnet_body.setText(english, "Fare Networks is a football network that believes sports plays an important role in community building.  \
                              Their website linked below displays a helpful map of teams and football clubs that facilitates \
                              welcoming refugees to training sessions or other fun activities.");
fnet_body.setText(german, "German description of NGO");
export let fnet_lang = new Dictionary();
fnet_lang.setText(english, german + ", " + english);
export let fnet_contact = new Dictionary();
fnet_contact.setText(english, "mail@welcome-united.org");