# Aquatec Plus RO Water Purifier Dashboard

A modern React + TypeScript dashboard for managing and monitoring Aquatec Plus
RO Water Purifiers. The application provides customers with product details,
service history, support information, and product documents in one place.

---

## Features

- Product Details
  - Product information
  - Installation details
  - Warranty status
  - Technical specifications

- Service History
  - Filter replacement history
  - RO membrane replacement
  - UV lamp replacement
  - TDS & pH calibration
  - Preventive maintenance records

- Support Contact
  - Supplier details
  - Contact number
  - Address
  - Support hours

- Document Center
  - Product Images
  - Product Overview
  - Product Specifications
  - Product Dimensions
  - View PDF documents
  - Download PDF documents

---

## Customer Information

| Field             | Value                                                                   |
| ----------------- | ----------------------------------------------------------------------- |
| Customer          | Dhaval Jagdishbhai Vyas                                                 |
| Product           | Aquatec Plus - Smart Pure - UTS Under Sink Storage Pressure Tank (12 L) |
| Installation Date | 01 December 2025                                                        |
| Warranty          | Active (12 Months)                                                      |
| Location          | Radhe Sky, Jasodanagar                                                  |

---

## Supplier Information

| Field          | Value                                 |
| -------------- | ------------------------------------- |
| Supplier       | Raj RO                                |
| Contact Number | +91 XXXXX XXXXX                       |
| Address        | Maninagar, Ahmedabad                  |
| Support Hours  | Monday - Saturday (9:00 AM - 6:00 PM) |

---

## Tech Stack

- React
- TypeScript
- Ant Design
- CSS
- React Router

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

or

```bash
yarn
```

Run the project

```bash
npm start
```

or

```bash
yarn start
```

---

## Build

```bash
npm run build
```

or

```bash
yarn build
```

---

## Document Support

The application supports viewing and downloading PDF documents.

To add new documents:

1. Place the PDF inside

```
src/assets/documents
```

2. Import the document

```tsx
import manualPdf from "assets/documents/manual.pdf";
```

3. Add it to the documents array

```tsx
{
    title: 'User Manual',
    type: 'PDF',
    file: manualPdf
}
```

---

## TypeScript Configuration

To import PDF files, create:

```
src/custom.d.ts
```

Add:

```ts
declare module "*.pdf" {
  const src: string;
  export default src;
}
```

Restart the development server after creating the file.

---

## Main Modules

- Dashboard
- Product Details
- Product Specifications
- Service History
- Support Contact
- Document Center

---

## Future Enhancements

- Customer Login
- Service Request Booking
- AMC Management
- QR Code Product Registration
- Push Notifications
- Water Quality Monitoring
- Warranty Renewal
- Online Complaint Tracking

---

## License

This project is developed for Aquatec Plus RO Water Purifier management and
customer support.
