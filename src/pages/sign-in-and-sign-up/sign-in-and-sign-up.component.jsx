import React, { Component } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.scss';

class SignInAndSignUpPage extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className="sign-in-and-sign-up">
				<SignIn />
				<SignUp />
			</div>
		);
	}
}

export default SignInAndSignUpPage;
