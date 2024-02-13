import React, {useCallback, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './LoginForm.module.css';


const LoginForm = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPW, setUserPW] = useState('');

const handleSubmit = useCallback(async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/login`
    // const payload = JSON.stringify({
    //     email: userEmail,
    //     password: userPW
    // });
    const payload = {
        email: userEmail,
        password: userPW
    };

    console.log('axios gonna use payload:',url, payload);

    const response = await axios.post(url, payload);

    if (response) {
        console.log(response);
    }
});

const handleEmailInput = (e) => {
    setUserEmail(e.target.value);
}
const handlePasswordInput = (e) => {
    setUserPW(e.target.value);
}

    return(
        <div className={styles.LoginForm}>
            <Form>
                <h1 className="mb-3">Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={userEmail} onChange={handleEmailInput} />
                    <Form.Text className="text-muted">
                        We'll always share your email with any marketers. jk.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={userPW} onChange={handlePasswordInput} />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default LoginForm;