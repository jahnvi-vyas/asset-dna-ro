import React, { useState } from 'react';
import {
    DashboardOutlined,
    AppstoreOutlined,
    TeamOutlined,
    FileTextOutlined,
    ToolOutlined,
    UserOutlined,
    BarChartOutlined,
    SettingOutlined,
    MenuOutlined,
    CloseOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const menuItems = [
    {
        icon: <DashboardOutlined />,
        title: 'Dashboard'
    },
    {
        icon: <AppstoreOutlined />,
        title: 'Machines'
    },
    {
        icon: <TeamOutlined />,
        title: 'Customers'
    },
    {
        icon: <ToolOutlined />,
        title: 'Service Requests'
    },
    {
        icon: <FileTextOutlined />,
        title: 'Documents'
    },
    {
        icon: <UserOutlined />,
        title: 'Engineers'
    },
    {
        icon: <TeamOutlined />,
        title: 'Users'
    },
    {
        icon: <BarChartOutlined />,
        title: 'Reports'
    },
    {
        icon: <SettingOutlined />,
        title: 'Settings'
    }
];

const ASidebarComponent = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className="mobile-menu-btn"
                onClick={() => setOpen(!open)}
            >
                {open ? <CloseOutlined /> : <MenuOutlined />}
            </div>

            <aside
                className={`admin-sidebar ${open ? 'sidebar-open' : ''}`}
            >
                {!open && (
                    <div
                        className="sidebar-logo"
                        onClick={() => navigate('/')}
                    >
                        <h2>SUPPORT FUSION</h2>
                        <p>Admin Panel</p>
                    </div>
                )}
                <div className="sidebar-menu">
                    {menuItems.map((item, index) => (
                        <div className="sidebar-item" key={index}>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default ASidebarComponent