import LoginForm from "./components/LoginForm";
import { Metadata } from "next";

// Define metadata for the login page
export const metadata: Metadata = {
    title: "Login - ATS Website",
    description: "Login to your ATS account",
    keywords: "ATS, login, authentication, applicant tracking system",
    authors: [{ name: "ATS Team", url: "https://atswebsite.com" }],
};

export default function LoginPage()
{
    return (
        <div className="login-page page">
            <h3>Login</h3>
            <LoginForm />
        </div>
    )
}