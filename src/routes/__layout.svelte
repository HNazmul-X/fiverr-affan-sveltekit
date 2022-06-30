<script>
    import { layoutConfig } from "./../store/layout_config.js";
    import Sidebar from "./../components/Sidebar.svelte";
    import Chatbar from "./../components/Chatbar.svelte";
    import Navbar from "./../components/Navbar.svelte";

    let selectedClass = "";
    let count = 1;

    $: console.log($layoutConfig);

    $: {
        if (!$layoutConfig.sidebarShow && $layoutConfig.chatbarShow) {
            selectedClass = isMobile() ? "sidebar-open" : "sidebar-notexpended";
        } else if (!$layoutConfig.chatbarShow && $layoutConfig.sidebarShow) {
            selectedClass = "chat-notexpended chat-open";
        } else if (!$layoutConfig.sidebarShow && !$layoutConfig.chatbarShow) {
            selectedClass = isMobile() ? "" : "sidebar-n-chat-notexpended";
        } else {
            selectedClass = "a";
        }
    }

    const isMobile = () => {
        return window.innerWidth <= 992;
    };
</script>

<!-- Svelte Header -->
<svelte:head>
    <title>Bigshort Dashboard</title>
</svelte:head>

<div class=" {selectedClass} ">
    <button on:click={() => count++}>count : {count}</button>
    <Navbar />
    <Sidebar />
    <Chatbar />
    <div class="main-content">
        <slot />
    </div>
</div>
