import React from "react";

export type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: "button" | "submit" | "reset";
};

const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
        backgroundColor: "#2563eb",
        color: "#fff",
        border: "none",
    },
    secondary: {
        backgroundColor: "#f3f4f6",
        color: "#111827",
        border: "none",
    },
    outline: {
        backgroundColor: "#fff",
        color: "#111827",
        border: "1px solid #d1d5db",
    },
};

const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "4px 12px", fontSize: "0.875rem" },
    md: { padding: "8px 16px", fontSize: "1rem" },
    lg: { padding: "12px 24px", fontSize: "1.125rem" },
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    onClick,
    className = "",
    type = "button",
}) => {
    const style: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 500,
        borderRadius: 4,
        transition: "background 0.2s",
        outline: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...variantStyles[variant],
        ...sizeStyles[size],
    };

    return (
        <button
            type={type}
            style={style}
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;