"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import api from "@/lib/api";
import { getUser, getCSRFCookie } from '@/lib/auth';

export default function WelcomePage()
{
    const router = useRouter();
    const searchParams = useSearchParams();

    const token = searchParams.get('token');

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrConsume = async() => {
            try{
                if(token)
                {
                    // Step 1: Consume the token to verify the user
                    await api.post('/auth/consume-token', { token })
                        .then(response => {
                            if (response.status === 200) {
                                // Token consumed successfully, redirect to onboarding
                                router.push('/onboarding/welcome');
                            }
                        })
                        .catch(error => {
                            console.error("Error consuming token:", error);
                            // Handle error (e.g., show a notification)
                        });

                }else{
                    // Step 2: Fetch the user details
                    const cookie = await getCSRFCookie();
                    const res = await getUser();
                    setUser(res);
                }
            } catch (err){
                console.error("Error during onboarding:", err);
                // Handle error (e.g., show a notification)
                alert("An error occurred during onboarding. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrConsume();
    }, [token]);

    return (
        <div>
            <h1>Welcome to the Onboarding Process</h1>
            <p>Verifying your email and logging you in...</p>
        </div>
    );
}