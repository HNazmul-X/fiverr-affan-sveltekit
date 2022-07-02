<script>
	// @ts-nocheck

	import { layoutConfig, togglingLayout } from './../store/layout_config.js';
	import light_theme_css from '../data/theme-css.json';

	let profileActive = false;

	const toggleTheme = () => {
		const styleTag = document.getElementById('theme-toggle');
		if (styleTag?.innerText !== light_theme_css.text) {
			styleTag.innerText = light_theme_css.text;
		} else {
			styleTag.innerText = '';
		}
	};
</script>

<header class="page-header" id={$layoutConfig.navbarId}>
	<div class="left-side">
		<div class="menu-icon" on:click={() => togglingLayout($layoutConfig.sidebarId)}>
			<i class="icofont-navigation-menu" id="sideBarMbl" />
		</div>
		<div class="branding">
			<img src="assets/images/logo.png" alt="BigShort" />
		</div>
	</div>
	<div class="right-side">
		<div class="icon-nav">
			<div class="nav" on:click={() => togglingLayout('minimize-all')}>
				<!-- <i class="icofont-exchange" on:click={minimizeAll} /> -->
				<i class="icofont-exchange" />
			</div>
			<div class="nav">
				<i class="icofont-light-bulb" id="changeTheme" on:click={toggleTheme} />
			</div>
			<div class="nav">
				<i class="icofont-comment" on:click={() => togglingLayout($layoutConfig.chatbarId)} />
				<!-- <i class="icofont-comment" on:click={() => layoutConfig.update((prev) => ({ ...prev, chatbarShow: !prev.chatbarShow }))} /> -->
			</div>
		</div>
		<div class="profile-detail" on:click|self={() => (profileActive = !profileActive)}>
			<div class="headshot" on:click={() => (profileActive = !profileActive)}>
				<img src="assets/images/profile-headshot.png" alt="profile-headshot" />
			</div>
			<div class="profile-name">Alesia K.</div>
			<div class="dropdown-profile" class:active={profileActive} id="dropdown-profile">
				<div class="list" on:click|stopPropagation={() => (profileActive = false)}>
					<a href="#"><i class="icofont-user-alt-7" /> Profile</a>
					<a href="#"><i class="icofont-gear" /> Settings</a>
					<a href="#"><i class="icofont-logout" /> Logout</a>
				</div>
			</div>
		</div>
	</div>
</header>
