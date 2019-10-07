import React, { Component } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.scss';

class SignInAndSignUpPage extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className="sign-in-and-sign-out">
				<SignIn />
			</div>
		);
	}
}

export default SignInAndSignUpPage;
