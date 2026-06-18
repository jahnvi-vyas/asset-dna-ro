import React from 'react';

interface Props {
    label: string;
    name: string;
    value: string;
    rows?: number;
    required?: boolean;
    error?: string;
    placeholder?: string;
    onChange: (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}

const TextAreaComponent = ({
    label,
    name,
    value,
    rows = 5,
    required,
    error,
    placeholder,
    onChange
}: Props) => {

    const handleChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
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
            target: newTarget as EventTarget & HTMLTextAreaElement
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

            <textarea
                rows={rows}
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

export default TextAreaComponent;