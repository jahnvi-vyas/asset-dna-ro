import DocumentComponent from 'components/DocumentComponent'
import FooterComponent from 'components/Layout/FooterComponent'
import HeaderComponent from 'components/Layout/HeaderComponent'
import 'styles/document.css';

const DocumentPage = () => {
    return (
        <div className="page-wrapper">
            <div className="machine-container">
                <HeaderComponent />
                <div className="document-wrapper">
                    <DocumentComponent />
                </div>
                <FooterComponent />
            </div>
        </div>
    )
}

export default DocumentPage