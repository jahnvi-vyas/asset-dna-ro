import pdfIcon from 'assets/icons/pdf.svg';
import productImagePdf from 'assets/documents/product-image.pdf';
import aboutProductPdf from 'assets/documents/about-product.pdf';
import productSpecificationPdf from 'assets/documents/product-specification.pdf';
import productDimensionPdf from 'assets/documents/product-dimension.pdf';

const documents = [
    {
        title: 'Product Image',
        type: 'PDF',
        size: '1.2 MB',
        icon: pdfIcon,
        file: productImagePdf
    },
    {
        title: 'About Product',
        type: 'PDF',
        size: '2.5 MB',
        icon: pdfIcon,
        file: aboutProductPdf
    },
    {
        title: 'Product Specification',
        type: 'PDF',
        size: '3.1 MB',
        icon: pdfIcon,
        file: productSpecificationPdf
    },
    {
        title: 'Product Dimension',
        type: 'PDF',
        size: '950 KB',
        icon: pdfIcon,
        file: productDimensionPdf
    }
];

const DocumentComponent = () => {

    const handleView = (file: string) => {
        window.open(file, '_blank');
    };

    const handleDownload = (file: string, title: string) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = `${title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="document-page-top">
                <h1>Document Center</h1>

                <p>
                    Access product brochures, specifications,
                    installation guides, and technical documents
                    for your RO Water Purifier.
                </p>
            </div>

            <div className="document-machine-card">
                <div className="document-machine-info">
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

            <div className="document-list">
                {documents.map((doc) => (
                    <div
                        className="document-card"
                        key={doc.title}
                    >
                        <div className="document-left">
                            <img
                                src={doc.icon}
                                alt={doc.type}
                            />

                            <div>
                                <h3>{doc.title}</h3>

                                <p>
                                    {doc.type} • {doc.size}
                                </p>
                            </div>
                        </div>

                        <div className="document-actions">
                            <button
                                className="view-btn"
                                onClick={() =>
                                    handleView(doc.file)
                                }
                            >
                                View
                            </button>

                            <button
                                className="download-btn"
                                onClick={() =>
                                    handleDownload(
                                        doc.file,
                                        doc.title
                                    )
                                }
                            >
                                Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DocumentComponent;