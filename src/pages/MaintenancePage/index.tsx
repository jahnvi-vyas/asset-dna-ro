import FooterComponent from 'components/Layout/FooterComponent';
import HeaderComponent from 'components/Layout/HeaderComponent';
import MaintenanceComponent from 'components/MaintenanceComponent';
import 'styles/maintenance-history.css';

const MaintenancePage = () => {
    return (
        <div className="page-wrapper">
            <div className="machine-container">
                <HeaderComponent />
                <div className="history-wrapper">
                    <MaintenanceComponent />
                </div>
                <FooterComponent />
            </div>
        </div>
    );
}

export default MaintenancePage