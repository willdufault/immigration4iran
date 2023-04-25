/*

HOW TO EDIT THE WEBSITE THEME:
NOTE: anything in square brackets should be substituted for an actual value

add variables here with this format: 
	
	export let [variable name] = [value];

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
export let color1 = "#212529";
export let color2 = "#dee2e6";
export let color3 = "#ced4da";
export let color4 = "#64b5f6";
export let color5 = "#90caf9";
export let color6 = "#cccccc";
export let color7 = "#001d3d";
export let color8 = "#eeeeee";
export let color9 = "#363a3e";
// fonts
export let font1 = "Fira Sans";
export let font2 = "Open Sans";
export let font3 = "ABeeZee";
export let font4 = "Nunito Sans";