<script>
    import Sidebar from "./../components/Sidebar.svelte";
    import Chatbar from "./../components/Chatbar.svelte";
    import Navbar from "./../components/Navbar.svelte";
</script>

<Navbar />
<Sidebar />
<Chatbar />
<div class="main-content">
    <slot />
</div>
<h1>footer</h1>
