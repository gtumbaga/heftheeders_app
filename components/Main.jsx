import React, {useCallback, useState, useEffect} from "react";
import axios from 'axios';
import Theme from "./theme";
import Header from "./header";
import Footer from "./footer";
import LoginForm from "./LoginForm";
import LoadingWidget from "./common/LoadingWidget";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // check if we have a token stored in LS
        const tmpToken = localStorage.getItem('token');

        if (tmpToken) {
            setIsLoading(true);
            const url = `${process.env.NEXT_PUBLIC_API_URL}/api/user`

            const config = {
                headers: { Authorization: `Bearer ${tmpToken}` }
            };

            axios.get(url, config)
            .then((response) => {
                if (response && response.data.id)
                console.log('auth verification response', response.data);
                setIsLoggedIn(true);
                setIsLoading(false);
            });

        } else {
            setIsLoading(false);
        }
    }, []);


    const handleSubmit = useCallback(async (userEmail, userPW) => {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/login`
        // const payload = JSON.stringify({
        //     email: userEmail,
        //     password: userPW
        // });
        const payload = {
            email: userEmail,
            password: userPW
        };

        console.log('axios gonna use payload:', url, payload);

        const response = await axios.post(url, payload);

        if (response && response.data.success == true) {
            localStorage.setItem("token", response.data.data.token);
            setIsLoggedIn(true);
        } else {
            console.log('response is:', response);
        }
    });


    return(
        <>
            <Header />
                <Theme>
                    { isLoading &&
                        <LoadingWidget />
                    }
                    { !isLoading && !isLoggedIn &&
                        <LoginForm onSubmit={handleSubmit} />
                    }
                    { !isLoading && isLoggedIn &&
                        <div>welcome</div>
                    }
                </Theme>
            <Footer />
        </>
    );
}

export default Main;