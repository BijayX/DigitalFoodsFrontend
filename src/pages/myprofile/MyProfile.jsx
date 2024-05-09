import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../store/authSlice';

const MyProfile = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.data);
    const [greeting, setGreeting] = useState('');


    useEffect(() => {
        // Fetch user profile data when the component mounts
        dispatch(fetchProfile());
    }, []);

    useEffect(() => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        let greetingMessage = '';

        if (currentHour >= 4 && currentHour < 12) {
            greetingMessage = 'Good Morning';
        } else if (currentHour >= 12 && currentHour < 18) {
            greetingMessage = 'Good Afternoon';
        } else {
            greetingMessage = 'Good Evening';
        }

        setGreeting(`${greetingMessage}, ${userData.userName}`);
    }, [userData]);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center pt-20">
            <div className="m-10 max-w-sm">
                <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
                    <div className="relative mx-auto w-36 rounded-full">
                        <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                        <img className="mx-auto h-auto w-full rounded-full" src="/public/imgo.png" alt="" />
                    </div>
                    <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">{userData.userName}</h1> {/* Display user name */}
                    <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">{userData.role}</h3>
                    <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600"> {greeting}.  We're here to make your shopping experience delightful! Don't hesitate to reach out to our friendly customer support team if you need any assistance.</p>
                    <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                        <li className="flex items-center py-3 text-sm">
                            <span>Status</span>
                            <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Active</span></span>
                        </li>
                        <li className="flex items-center py-3 text-sm">
                            <span>Joined On</span>
                            <span className="ml-auto">{formatDate(userData.createdAt)}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
