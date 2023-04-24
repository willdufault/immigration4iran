import {Dictionary} from "../dictionary.js";

let langs = Dictionary.languages;

let english = langs.English;
let german = langs.German;
let persian = langs.Persian;

let french = "Français";
let turkish = "Türkçe";
let arabic = "عربي";
let russian = "русский";
let ukrainian = "українська";
let italian = "Italiano";

export let about_title = new Dictionary();
about_title.setText(english, "About Us");
export let about_body = new Dictionary();
about_body.setText(english, "Created by students from Worcester Polytechnic Institute as part of an Interactive Qualifying Project. \
                                To learn more about projects done by WPI students, please visit the institution website: ");
export let about_link = new Dictionary();
about_link.setText(english, "digital.wpi.edu.");

/*

This website was created by the group, Immigration4Iran, which is made up of four undergraduate 
students from Worcester Polytechnic Institute (WPI). As part of their Interactive Qualifying 
Project (IQP) at WPI, Immigration4Iran spent eight weeks researching the Germany asylum-seeking
process through interviews and analysis of previous research, and building this website 
in collaboration with Felix Hoffman.

*/