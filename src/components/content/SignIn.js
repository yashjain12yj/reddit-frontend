import React from 'react'
import './SignIn.css'

const SignIn = () => (
	<div class="spacer">
		<form method="post" id="login_login-main" class="login-form login-form-side">
			<input name="user" placeholder="username" type="text" maxlength="20" tabindex="1" />
			<input name="password" placeholder="password" type="password" tabindex="1" />
			<div id="remember-me">
				<input type="checkbox" id="rem-login-main" tabindex="1" />
				<label for="rem-login-main">remember me</label>
				<a class="recover-password" href="/password">reset password</a>
			</div>
			<div class="submit">
				<button type="submit" tabindex="1">login</button>
			</div>
		</form>
	</div>
);

export default SignIn