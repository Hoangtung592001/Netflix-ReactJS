import React, { useState, useContext } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { useNavigate  } from 'react-router-dom';
export default function SignUp() {
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const isInvalid = firstName === '' || password === '' || emailAddress === '';
    const handleSignup = function(e) {
        e.preventDefault();
        return firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        navigate(ROUTES.BROWSE);
                    })
            })
            .catch(err => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(err.message);
            })
    }
    return (
    <>
        <HeaderContainer>
            <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit={handleSignup} method="POST">
                <Form.Input
                placeholder="First name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
                />
                <Form.Input
                placeholder="Email address"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Form.Input
                type="password"
                value={password}
                autoComplete="off"
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
                />
                <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
                Sign Up
                </Form.Submit>
            </Form.Base>

            <Form.Text>
                Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
    </>
    )
}