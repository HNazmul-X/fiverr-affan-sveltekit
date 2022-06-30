import { writable } from "svelte/store";

export const layoutConfig = writable({
    sidebarShow: true,
    chatbarShow: true,
    navbarId: "Website__navbar_xdLt49Qt",
    sidebarId: "Website__sidebar_xdLt49Qt",
    chatbarId: "Website__chatbar_xdLt49Qt"

});


export const togglingLayout = (content = "") => {
    try {
        const unSubscribe = layoutConfig.subscribe((value) => {
            const navbar = document.getElementById(value.navbarId)
            const body = document.body;
            const toggleBodyClass = (_classes = "") => _classes.split(" ").forEach((c) => body.classList.toggle(c))
            const bodyHasClass = _class => body.classList.contains(_class)

            if (content === value.sidebarId) {
                toggleBodyClass("sidebar-notexpended")
            } else if (content === value.chatbarId) {
                toggleBodyClass('chat-notexpended')
            } else if (content === "minimize-all") {
                if (!bodyHasClass('chat-notexpended') || !bodyHasClass("sidebar-notexpended")) {
                    body.classList.add("chat-notexpended", "sidebar-notexpended", "sidebar-open")
                } else {
                    toggleBodyClass("chat-notexpended sidebar-notexpended")
                }
            }
        })
        unSubscribe()

    } catch (e) {
        console.error(e)
    }
} 