import { writable } from "svelte/store";

export const layoutConfig = writable({
    sidebarShow: true,
    chatbarShow: true,
});

;
