import React from 'react'
import { useNavigate } from 'react-router-dom';
import downloadIcon from 'assets/icons/download.svg';
import serviceIcon from 'assets/icons/service.svg';
import maintenanceIcon from 'assets/icons/maintenance.svg';
import supportIcon from 'assets/icons/support.svg';

const QuickActionsComponent = () => {
    const navigate = useNavigate();
    return (
        <div className="card">
            <h2 className="section-title">QUICK ACTIONS</h2>

            <div className="action-grid">
                <div
                    className="action-card"
                    onClick={() => navigate('/documents')}
                >
                    <div className="icon-box blue-box">
                        <img src={downloadIcon} alt="" />
                    </div>

                    <p className="action-title">Download Documents</p>
                </div>

                <div
                    className="action-card"
                    onClick={() => navigate('/request-service')}
                >
                    <div className="icon-box green-box">
                        <img src={serviceIcon} alt="" />
                    </div>

                    <p className="action-title">Request Service</p>
                </div>

                <div
                    className="action-card"
                    onClick={() => navigate('/service-history')}
                >
                    <div className="icon-box orange-box">
                        <img src={maintenanceIcon} alt="" />
                    </div>

                    <p className="action-title">Service History</p>
                </div>

                <div
                    className="action-card"
                    onClick={() => navigate('/contact-support')}
                >
                    <div className="icon-box purple-box">
                        <img src={supportIcon} alt="" />
                    </div>

                    <p className="action-title">Contact Support</p>
                </div>
            </div>
        </div>
    );
}

export default QuickActionsComponent