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
let russian = "русский";
let ukrainian = "українська";
let italian = "Italiano";



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


export let fnet_title = new Dictionary();
fnet_title.setText(english, "Fare Network Football Map");
export let fnet_body = new Dictionary();
fnet_body.setText(english, "Fare Networks is a football network that believes sports plays an important role in community building.  \
                              Their website linked below displays a helpful map of teams and football clubs that facilitates \
                              welcoming refugees to training sessions or other fun activities.");
fnet_body.setText(german, "German description of NGO");
export let fnet_lang = new Dictionary();
fnet_lang.setText(english, english);


export let wb_title = new Dictionary();
wb_title.setText(english, "Willkommensbündnis Stieglitz-Zehlendorf");
export let wb_body = new Dictionary();
wb_body.setText(english, "Willkommensbündnis is an NGO that holds local events in Berlin like job fares and \
                            round tables where refugees can come and meet people while getting help. The round \
                            table lets people of many different backgrounds discuss what they need help on.");
wb_body.setText(german, "German description of NGO");
export let wb_lang = new Dictionary();
wb_lang.setText(english, german);


export let be_title = new Dictionary();
be_title.setText(english, "The Official Website of Berlin");
export let be_body = new Dictionary();
be_body.setText(english, "The official website for the city of Berlin displays events in many languages \
                            to encourage the local community to go out and meet people. They display local \
                            monthly events like arts and crafts, opera, and various concerts.");
be_body.setText(german, "German description of Website");
export let be_lang = new Dictionary();
be_lang.setText(english, german + ", " + english + ", " + italian + ", " + french);


export let disc_title = new Dictionary();
disc_title.setText(english, "Discord Community Forum");
export let disc_body = new Dictionary();
disc_body.setText(english, "Join our local community on Discord! Click the Join Discord button. Our local \
                                community consists of NGOs and volunteers dedicated to helping refugees who \
                                are coming to Germany.");
disc_body.setText(german, "German description of Website");
export let disc_lang = new Dictionary();
disc_lang.setText(english, german + ", " + english + ", " + arabic);




