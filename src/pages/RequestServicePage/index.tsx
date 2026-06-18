import FooterComponent from 'components/Layout/FooterComponent';
import HeaderComponent from 'components/Layout/HeaderComponent';
import RequestServiceComponent from 'components/RequestServiceComponent';
import 'styles/request-service.css';

const RequestServicePage = () => {
    return (
        <div className="page-wrapper">
            <div className="machine-container">
                <HeaderComponent />
                <div className="request-wrapper">
                    <RequestServiceComponent />
                </div>
                <FooterComponent />
            </div>
        </div>
    );
};

export default RequestServicePage;