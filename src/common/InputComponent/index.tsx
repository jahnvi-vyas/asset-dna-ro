import React from 'react';

interface Props {
    label: string;
    name: string;
    value: string;
    type?: string;
    placeholder?: string;
    error?: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({
    label,
    name,
    value,
    type = 'text',
    placeholder,
    error,
    required,
    onChange
}: Props) => {

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { target } = event;
        const { value, name, ...otherAttributes } = target;

        const sanitizedValue = value.replace(
            /[\\{}=<>$#"]+/g,
            ''
        );

        const newTarget = {
            ...otherAttributes,
            value: sanitizedValue,
            name
        };

        onChange({
            ...event,
            target: newTarget as EventTarget & HTMLInputElement
        });
    };

    return (
        <div className="form-field">
            <label>
                {label}
                {required && (
                    <span className="required">*</span>
                )}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />

            {error && (
                <span className="error-text">
                    {error}
                </span>
            )}
        </div>
    );
};

export default InputComponent;