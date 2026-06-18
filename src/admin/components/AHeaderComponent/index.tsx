import React from 'react'
import {
    CalendarOutlined,
    UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const AHeaderComponent = () => {
    const navigate = useNavigate();
    return (
        <div className="admin-header">
            <div />
            <div className="admin-header-right">
                <div className="header-info">
                    <CalendarOutlined />
                    <span>12 May 2026</span>
                </div>
                <div className="header-info">
                    <UserOutlined />
                    <span
                        onClick={() => navigate('/')}
                    >
                        Logout
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AHeaderComponent