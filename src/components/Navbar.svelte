<script>
    // @ts-nocheck

    import { layoutConfig } from "./../store/layout_config.js";
    import light_theme_css from "../data/theme-css.json";

    let profileActive = false;

    const minimizeAll = () => {
        if ($layoutConfig.chatbarShow !== $layoutConfig.sidebarShow) {
            return layoutConfig.update((prev) => ({ ...prev, chatbarShow: false, sidebarShow: false }));
        }
        layoutConfig.update((prev) => ({ ...prev, chatbarShow: !prev.chatbarShow, sidebarShow: !prev.sidebarShow }));
    };

    const toggleTheme = () => {
        const styleTag = document.getElementById("theme-toggle");
        console.log(styleTag.innerText);
        if (styleTag?.innerText !== light_theme_css.text) {
            styleTag.innerText = light_theme_css.text;
        } else {
            styleTag.innerText = "";
        }
    };
</script>

<header class="page-header">
    <div class="left-side" on:click={() => layoutConfig.update((prev) => ({ ...prev, sidebarShow: !prev.sidebarShow }))}>
        <div class="menu-icon">
            <i class="icofont-navigation-menu" id="sideBarMbl" />
        </div>
        <div class="branding">
            <img src="assets/images/logo.png" alt="BigShort" />
        </div>
    </div>
    <div class="right-side">
        <div class="icon-nav">
            <div class="nav">
                <i class="icofont-exchange" on:click={minimizeAll} />
            </div>
            <div class="nav">
                <i class="icofont-light-bulb" id="changeTheme" on:click={toggleTheme} />
            </div>
            <div class="nav">
                <i class="icofont-comment" on:click={() => layoutConfig.update((prev) => ({ ...prev, chatbarShow: !prev.chatbarShow }))} />
            </div>
        </div>
        <div class="profile-detail">
            <div class="headshot" on:click={() => (profileActive = !profileActive)}><img src="assets/images/profile-headshot.png" alt="profile-headshot" /></div>
            <div class="profile-name">Alesia K.</div>
            <div class="dropdown-profile" class:active={profileActive} id="dropdown-profile">
                <div class="list">
                    <a href="#"><i class="icofont-user-alt-7" /> Profile</a>
                    <a href="#"><i class="icofont-gear" /> Settings</a>
                    <a href="#"><i class="icofont-logout" /> Logout</a>
                </div>
            </div>
        </div>
    </div>
</header>
