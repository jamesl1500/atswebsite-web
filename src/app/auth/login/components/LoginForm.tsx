"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { TextInput } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            console.error("Login failed:", result.error);
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <TextInput name="email" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextInput name="password" type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit">Login</Button>
        </form>
    )
}