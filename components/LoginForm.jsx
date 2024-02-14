import React, {useCallback, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './LoginForm.module.css';


const LoginForm = ({onSubmit}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPW, setUserPW] = useState('');

    const handleBtnClick = useCallback(() => {
        onSubmit(userEmail, userPW);
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
                <Button variant="primary" onClick={handleBtnClick}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default LoginForm;