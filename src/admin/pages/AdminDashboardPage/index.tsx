import AHeaderComponent from 'admin/components/AHeaderComponent';
import ASidebarComponent from 'admin/components/ASidebarComponent';
import DCardsComponent from 'admin/components/DCardsComponent';
import RTableComponent from 'admin/components/RTableComponent';
import UMaintenanceComponent from 'admin/components/UMaintenanceComponent';
import 'admin/styles/admin.css';

const AdminDashboardPage = () => {
    return (
        <div className="admin-layout">
            <ASidebarComponent />
            <div className="admin-main">
                <AHeaderComponent />
                <DCardsComponent />
                <RTableComponent />
                <UMaintenanceComponent />
            </div>
        </div>
    );
};

export default AdminDashboardPage;