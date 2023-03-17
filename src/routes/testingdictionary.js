import {Dictionary} from "./dictionary.js";

//this document is a reference for how to use the dictionaries for different components

let component1 = new Dictionary();
let langs = component1.languages;

component1.setText(langs.English, "Hello");
component1.setText(langs.German, "Hallo");
component1.setText(langs.Persian, "What is persian hello?");



let component2 = new Dictionary();
component2.setText(langs.English, "Good bye");
component2.setText(langs.German, "Tchuss");
component2.setText(langs.Persian, "What is persian goodbye?");

console.log(component1.getText(langs.English));
console.log(component1.getText(langs.German));
console.log(component1.getText(langs.Persian));

console.log(component2.getText(langs.English));
console.log(component2.getText(langs.German));
console.log(component2.getText(langs.Persian));