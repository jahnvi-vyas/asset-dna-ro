import { IRequestServiceForm } from './types';

export const initialFormState: IRequestServiceForm = {
    issueTitle: '',
    priority: '',
    issueDescription: '',
    preferredVisitDate: '',
    contactPerson: '',
    mobileNumber: '',
    email: '',
    attachment: null
};

export const priorityOptions = [
    {
        label: 'Low',
        value: 'Low'
    },
    {
        label: 'Medium',
        value: 'Medium'
    },
    {
        label: 'High',
        value: 'High'
    }
];