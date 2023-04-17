/*

HOW TO EDIT THE WEBSITE THEME:
NOTE: anything in square brackets should be substituted for an actual value

1) add variables here with this format: 
	
	export let [variable name] = [value];

2) in pageWrapper.svelte, import the variables at the bottom in the script tag using this format:
	
	import { [variable name 1], [variable name 2], ... , color1 } from "../theme.js";

3) in pageWrapper.svelte, add each variable to the <main> tag under the style option with using this format:
   NOTE: the value on the right is in curly braces
	
   <main style="
	--[variable name 1]: {[value1]};
	--[variable name 2]: {[value2]};
	...
	--color1: "#ff0000"
	--font1: "Arial";
	">

FOR FONTS ONLY:

in pageWrapper.svelte, add the @import url(...) tag for the font you want in the <style> tag inside 
the <svelte:head> tag. this can be found by going to google fonts and adding a font to your selected
family, then clicking on the top right icon with the three squares and selecting the "@import" bubble
and coping everything inside the <style> tag. it should look like this example (Open Sans):

	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

NOTE: if you really want to just replace one font with another, you could overwrite one font's name
and import with a new font and all instances of the old font will be replaced with the new font

*/

// colors
export let color1 = "#ff0000";
export let color2 = "#0000ff";
export let color3 = "#ffffff";
export let color4 = "#dddddd";
// fonts
export let font1 = "Fira Sans";
export let font2 = "Open Sans";
export let font3 = "Kalam";