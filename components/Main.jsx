import React, {useCallback, useState, useEffect} from "react";
import axios from 'axios';
import Theme from "./theme";
import Header from "./header";
import Footer from "./footer";
import LoginForm from "./LoginForm";
import LoadingWidget from "./common/LoadingWidget";
import Bubbles from "./Bubbles";
import Stats from "./Stats";
import DayBreakout from "./DayBreakout";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authToken, setAuthToken] = useState(null);
    const [dateStrings, setDateStrings] = useState(null);
    const [weekData, setWeekData] = useState({});
    const [currentChosenDate, setCurrentChosenDate] = useState(null);
    const [currentChosenDateIndex, setCurrentChosenDateIndex] = useState(null);

    useEffect(() => {
        // check if we have a token stored in LS
        const tmpToken = localStorage.getItem('token');

        if (tmpToken) {
            setAuthToken(tmpToken);
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

    useEffect(() => {
        if ((isLoggedIn === true) && (authToken)) {
            // user is logged in, so lets get the initial week
            setIsLoading(true);
            let currentDate = new Date();
            console.log('current date, unmodified', currentDate.valueOf());
            const newDate = new Date();
            newDate.setTime(parseInt(currentDate.valueOf()) + (-10 * 24 * 60 * 60 * 1000));
            console.log('current date, setdate', (newDate));
            // currentDate = new Date(new Date().setDate(new Date().getDate() + 4)); //this is the 23rd

            // derive 1st day of current week (monday)
            // 1: mon, 2: tue, 3: wed, 4: thu, 5: fri, 6: sat, 0: sun
            const day = currentDate.getDay();
            let dayAdjustment = 0;
            if (day < 1) {
                dayAdjustment = -6;
            } else {
                dayAdjustment = (day - 1) * -1;
            }
            const startDate = new Date(new Date().setTime(parseInt(currentDate.valueOf()) + (dayAdjustment * 24 * 60 * 60 * 1000)));
            // console.log('labels start date', startDate);
            const day2_Date = new Date(new Date().setTime(parseInt(startDate.valueOf()) + (1 * 24 * 60 * 60 * 1000)));
            // console.log('labels day 2', day2_Date);
            const day3_Date = new Date(new Date().setTime(parseInt(startDate.valueOf()) + (2 * 24 * 60 * 60 * 1000)));
            // console.log('labels day 3', day3_Date);
            const day4_Date = new Date(new Date().setTime(parseInt(startDate.valueOf()) + (3 * 24 * 60 * 60 * 1000)));
            // console.log('labels day 4', day4_Date);
            const day5_Date = new Date(new Date().setTime(parseInt(startDate.valueOf()) + (4 * 24 * 60 * 60 * 1000)));
            // console.log('labels day 5', day5_Date);
            const day6_Date = new Date(new Date().setTime(parseInt(startDate.valueOf()) + (5 * 24 * 60 * 60 * 1000)));
            // console.log('labels day 6', day6_Date);
            const day7_Date = new Date(new Date().setTime(parseInt(startDate.valueOf()) + (6 * 24 * 60 * 60 * 1000)));
            // console.log('labels day 7', day7_Date);

            const dateLabels = [
                `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`,
                `${day2_Date.getFullYear()}-${day2_Date.getMonth()+1}-${day2_Date.getDate()}`,
                `${day3_Date.getFullYear()}-${day3_Date.getMonth()+1}-${day3_Date.getDate()}`,
                `${day4_Date.getFullYear()}-${day4_Date.getMonth()+1}-${day4_Date.getDate()}`,
                `${day5_Date.getFullYear()}-${day5_Date.getMonth()+1}-${day5_Date.getDate()}`,
                `${day6_Date.getFullYear()}-${day6_Date.getMonth()+1}-${day6_Date.getDate()}`,
                `${day7_Date.getFullYear()}-${day7_Date.getMonth()+1}-${day7_Date.getDate()}`,
            ];

            console.log('labels full', dateLabels);

            const currentDayLabel = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;

            const currentDayIdx = dateLabels.indexOf(currentDayLabel);
            setCurrentChosenDateIndex(currentDayIdx);
            setCurrentChosenDate(currentDayLabel);
            setDateStrings([...dateLabels]);

            let tmpWeekData = {};

            dateLabels.forEach((lab) => {
                tmpWeekData[lab] = {
                    items_breakfast: [],
                    items_lunch: [],
                    items_dinner: [],
                    items_snacks: [],
                    items_activity: [],
                }
            });

            console.log('date data:', dateLabels);
            console.log('day of week:', day);
            console.log('dayadjust', dayAdjustment);

            const url = `${process.env.NEXT_PUBLIC_API_URL}/api/week/${dateLabels[0]}`
            console.log('getting week data from: ', url);

            const config = {
                headers: { Authorization: `Bearer ${authToken}` }
            };

            axios.get(url, config)
            .then((response) => {
                if (response && response.data.success == true)
                console.log('got week data', response.data);

                //assemble full week data
                response.data.days.forEach((dayData) => {
                    console.log('iteration of dayData', dayData);
                    tmpWeekData[dayData.this_day] = {
                        items_breakfast: JSON.parse(dayData.items_breakfast),
                        items_lunch: JSON.parse(dayData.items_lunch),
                        items_dinner: JSON.parse(dayData.items_dinner),
                        items_snacks: JSON.parse(dayData.items_snacks),
                        items_activity: JSON.parse(dayData.items_activity),
                    };
                });

                console.log('tmpWeekData', tmpWeekData);

                setWeekData({...tmpWeekData});
                setIsLoading(false);
            });
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (weekData) {
            console.log('week data has beenset', weekData);
        }
    }, [weekData]);

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
            console.log('successful response is:', response);
            localStorage.setItem("token", response.data.data.token);
            setIsLoggedIn(true);
        } else {
            console.log('response is:', response);
        }
    });

    const handleDateChoose = useCallback((idx) => {
        setCurrentChosenDateIndex(idx);
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
                    { !isLoading && isLoggedIn && weekData &&
                        <>
                            <Bubbles
                                weekData={weekData}
                                currentDay={currentChosenDateIndex}
                                onClickDay={handleDateChoose}
                            />
                            <Stats />
                            <DayBreakout />
                        </>
                    }
                </Theme>
            <Footer />
        </>
    );
}

export default Main;