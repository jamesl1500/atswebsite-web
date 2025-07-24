"use client";

import React, { useState } from 'react';

// Import API
import api from "@/lib/api";

// Import inputs & buttons
import { TextInput } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Error state
    const [error, setError] = useState("");

    // Router for navigation
    const router = useRouter();

    // Function to handle resend verification email
    const handleResendVerification = async () => {
        try {
            const response = await api.post("/auth/resend-verification-email", { email });

            if (response.status === 200) {
                // Verification email resent successfully
                console.log("Verification email resent:", response.data);
            } else {
                setError("Failed to resend verification email: " + response.data.message);
                console.error("Resend verification email error:", response.data);
            }
        } catch (error: any) {
            console.error("Resend verification email failed:", error);
            // Handle error (e.g., show a notification)
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try{
            const response = await api.post("/auth/register", {
                name,
                username,
                email,
                password,
                password_confirmation: confirmPassword,
            });

            if(response.status === 201) {
                // Registration successful, redirect or show success message
                console.log("Registration successful:", response.data);
            }else{
                setError("Registration failed: " + response.data.message);
                console.error("Registration error:", response.data);
            }

        }catch (error: any) {
            console.error("Registration failed:", error);
            // Handle error (e.g., show a notification)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <TextInput label="Name" type="text" placeholder='Full Name' required onChange={(e) => setName(e.target.value)} />
            <TextInput label="Username" type="text" placeholder='Username' required onChange={(e) => setUsername(e.target.value)} />
            <TextInput label="Email" type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
            <TextInput label="Password" type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
            <TextInput label="Confirm Password" type="password" placeholder='Confirm Password' required onChange={(e) => setConfirmPassword(e.target.value)} />
            <div className="resend-verification">
                <p>Didn't receive a verification email?</p>
                <Button type="button" onClick={handleResendVerification}>Resend Verification Email</Button>
            </div>

            <Button type="submit">Register</Button>
        </form>
    );
}