import RegisterForm from "./components/RegisterForm";

// Define metadata for the register page
export const metadata = {
    title: "Register - ATS Website",
    description: "Create a new ATS account",
    keywords: "ATS, register, sign up, applicant tracking system",
    authors: [{ name: "ATS Team", url: "https://atswebsite.com" }],
};

export default function RegisterPage(){
    return (
        <div className="register-page page">
            <h3>Register</h3>
            <RegisterForm />
        </div>
    );
}