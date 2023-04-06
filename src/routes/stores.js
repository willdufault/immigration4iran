import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const lang = writable(browser && localStorage.getItem("lang") || "en");

lang.subscribe(val =>
{
	if(browser)
	{
		localStorage.setItem("theme", val);
	}
});