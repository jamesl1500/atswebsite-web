"use client";

import React, { useState } from 'react';

// Import inputs & buttons
import { TextInput } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try{

        }catch (error: any) {
            console.error("Registration failed:", error);
            // Handle error (e.g., show a notification)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <TextInput label="Username" type="text" placeholder='Username' required onChange={(e) => setUsername(e.target.value)} />
            <TextInput label="Email" type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
            <TextInput label="Password" type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit">Register</Button>
        </form>
    );
}