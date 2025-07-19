import React, { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const TextInput: React.FC<InputProps> = (props) => (
    <div className="form-group">
        <input {...props} />
    </div>
);

export const Textarea: React.FC<TextareaProps> = (props) => (
    <div className="form-group">
        <textarea {...props} />
    </div>
);

export const Select: React.FC<SelectProps> = (props) => (
    <div className="form-group">
        <select {...props} />
    </div>
);