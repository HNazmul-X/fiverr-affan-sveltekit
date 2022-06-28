<script>
    import { layoutConfig } from "./../store/layout_config.js";
    import Sidebar from "./../components/Sidebar.svelte";
    import Chatbar from "./../components/Chatbar.svelte";
    import Navbar from "./../components/Navbar.svelte";

    let selectedClass = "";
    let count = 1;
    const { sidebarShow, chatbarShow } = $layoutConfig;

    $: {
        if (!$layoutConfig.sidebarShow && $layoutConfig.chatbarShow) {
            selectedClass = "sidebar-notexpended";
        } else if (!$layoutConfig.chatbarShow && $layoutConfig.sidebarShow) {
            selectedClass = "chat-notexpended";
        } else if (!$layoutConfig.sidebarShow && !$layoutConfig.chatbarShow) {
            selectedClass = "sidebar-n-chat-notexpended";
        } else {
            selectedClass = "a";
        }
    }



</script>

<div class=" {selectedClass} ">
    <button on:click={() => count++}>count : {count}</button>
    <Navbar />
    <Sidebar />
    <Chatbar />
    <div class="main-content">
        <slot />
    </div>
</div>
