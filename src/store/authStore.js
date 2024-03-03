import { Writable } from "svelte/store";

export const isAuthenticated = writable(false);
export const userToken = writable(null);