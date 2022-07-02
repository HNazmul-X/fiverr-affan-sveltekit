<script>
	import FormInput from '../shared/Inputs/FormInput.svelte';
	let data = { email: '', password: '' };

</script>

<div class="page-content">
	<div class="login-screen">
		<div class="logo">
			<img src="/favicon.png" alt="" /><img src="assets/images/logo.png" alt="" />
		</div>
		<form class="form-area" on:submit|preventDefault>
			<FormInput
				bind:value={data.email}
				type="email"
				required={true}
				label="Enter A New Password"
			/>
			<FormInput
				bind:value={data.email}
				type="email"
				required={true}
				label="Retype Your New Password"
			/>
			<button class="btn primary-btn">Change Password</button>
		</form>
	</div>
</div>
