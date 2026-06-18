import React, { useState } from 'react';
import { message } from 'antd';
import { initialFormState, priorityOptions } from './constant';
import {
    IRequestServiceError,
    IRequestServiceForm
} from './types';
import TextAreaComponent from 'common/TextAreaComponent';
import InputComponent from 'common/InputComponent';
import ButtonComponent from 'common/ButtonComponent';
import SelectComponent from 'common/SelectComponent';

const RequestServiceComponent = () => {
    const [form, setForm] = useState<IRequestServiceForm>(initialFormState);
    const [errors, setErrors] = useState<IRequestServiceError>({});

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const tempErrors: IRequestServiceError = {};
        if (!form.issueTitle.trim()) {
            tempErrors.issueTitle = 'Issue title is required';
        }

        if (!form.priority) {
            tempErrors.priority = 'Priority is required';
        }

        if (!form.issueDescription.trim()) {
            tempErrors.issueDescription = 'Description is required';
        }

        if (!form.preferredVisitDate) {
            tempErrors.preferredVisitDate = 'Preferred visit date is required';
        } else {
            const selectedDate = new Date(form.preferredVisitDate);
            selectedDate.setHours(0, 0, 0, 0);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                tempErrors.preferredVisitDate = 'Past dates are not allowed';
            }
        }

        if (!form.contactPerson.trim()) {
            tempErrors.contactPerson = 'Contact person is required';
        }

        if (!form.mobileNumber.trim()) {
            tempErrors.mobileNumber = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(form.mobileNumber)) {
            tempErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
        }

        if (!form.email.trim()) {
            tempErrors.email = 'Email is required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
        ) {
            tempErrors.email = 'Enter a valid email address';
        }
        setErrors(tempErrors);
        return (
            Object.keys(tempErrors).length === 0
        );
    };

    const handleSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault();
        if (!validate()) return;
        console.log(form);
        message.success('Service request submitted successfully');
        setForm(initialFormState);
    };

    return (
        <>
            <div className="request-page-top">
                <h1>
                    Request Machine Service
                </h1>
                <p>
                    Submit a service request for
                    maintenance or technical
                    support.
                </p>
            </div>

            <div className="request-machine-card">
                <div className="request-machine-info">
                    <p>
                        <strong>Machine ID:</strong> RO-001
                    </p>

                    <p>
                        <strong>Product:</strong> Aquatec Plus Smart Pure
                    </p>

                    <p>
                        <strong>Purification:</strong> RO + UV + UF + TDS
                    </p>

                    <p>
                        <strong>Customer:</strong> ABC Pharma Pvt. Ltd.
                    </p>
                </div>
            </div>

            <form
                className="request-form"
                onSubmit={handleSubmit}
            >
                <div className="form-grid">
                    <InputComponent
                        required
                        label="Issue Title"
                        name="issueTitle"
                        value={form.issueTitle}
                        error={errors.issueTitle}
                        placeholder="Enter issue title"
                        onChange={handleChange}
                    />
                    <div className="form-field">
                        <SelectComponent
                            required
                            label="Priority"
                            name="priority"
                            value={form.priority}
                            options={priorityOptions}
                            placeholder="Select Priority"
                            error={errors.priority}
                            onChange={(e) =>
                                setForm(prev => ({
                                    ...prev,
                                    priority: e.target.value
                                }))
                            }
                        />
                    </div>
                    <div className="full-width">
                        <TextAreaComponent
                            required
                            label="Issue Description"
                            name="issueDescription"
                            value={form.issueDescription}
                            error={errors.issueDescription}
                            placeholder="Describe issue..."
                            onChange={handleChange}
                        />
                    </div>
                    <InputComponent
                        required
                        label="Preferred Visit Date"
                        type="date"
                        name="preferredVisitDate"
                        value={form.preferredVisitDate}
                        error={errors.preferredVisitDate}
                        onChange={handleChange}
                    />
                    <InputComponent
                        required
                        label="Contact Person"
                        name="contactPerson"
                        value={form.contactPerson}
                        error={errors.contactPerson}
                        onChange={handleChange}
                    />
                    <InputComponent
                        required
                        type="tel"
                        label="Mobile Number"
                        name="mobileNumber"
                        value={form.mobileNumber}
                        error={errors.mobileNumber}
                        placeholder="Enter 10-digit mobile number"
                        onChange={handleChange}
                    />
                    <InputComponent
                        required
                        type="email"
                        label="Email ID"
                        name="email"
                        value={form.email}
                        error={errors.email}
                        onChange={handleChange}
                    />
                </div>
                <ButtonComponent
                    type="submit"
                    title="SUBMIT SERVICE REQUEST"
                />
            </form>
        </>
    );
};

export default RequestServiceComponent;