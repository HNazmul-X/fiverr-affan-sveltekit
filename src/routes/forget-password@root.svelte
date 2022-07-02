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
				label="Enter Your Account Email"
			/>
			<button class="btn primary-btn">Submit</button>
		</form>
		<div class="forget-password">
			<p>Forgot your password? <a href="/auth/forget-password">Reset Now</a></p>
		</div>
	</div>
</div>
