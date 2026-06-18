export interface IRequestServiceForm {
    issueTitle: string;
    priority: string;
    issueDescription: string;
    preferredVisitDate: string;
    contactPerson: string;
    mobileNumber: string;
    email: string;
    attachment: File | null;
}

export interface IRequestServiceError {
    issueTitle?: string;
    priority?: string;
    issueDescription?: string;
    preferredVisitDate?: string;
    contactPerson?: string;
    mobileNumber?: string;
    email?: string;
}