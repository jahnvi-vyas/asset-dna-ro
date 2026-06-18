import React from 'react';

interface IOption {
    label: string;
    value: string;
}

interface Props {
    label: string;
    name: string;
    value: string;
    options: IOption[];
    placeholder?: string;
    required?: boolean;
    error?: string;
    onChange: (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => void;
}

const SelectComponent = ({
    label,
    name,
    value,
    options,
    placeholder = 'Select Option',
    required,
    error,
    onChange
}: Props) => {

    const handleChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const sanitizedValue =
            event.target.value.replace(
                /[\\{}=<>$#"]+/g,
                ''
            );

        onChange({
            ...event,
            target: {
                ...event.target,
                value: sanitizedValue
            }
        } as React.ChangeEvent<HTMLSelectElement>);
    };

    return (
        <div className="form-field">
            <label>
                {label}

                {required && (
                    <span className="required">*</span>
                )}
            </label>

            <select
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option value="">
                    {placeholder}
                </option>

                {options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            {error && (
                <span className="error-text">
                    {error}
                </span>
            )}
        </div>
    );
};

export default SelectComponent;