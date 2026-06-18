import React from 'react';
import {
    AppstoreOutlined,
    ToolOutlined,
    TeamOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons';

const cards = [
    {
        title: 'Installed RO Units',
        value: 128,
        icon: <AppstoreOutlined />
    },
    {
        title: 'Open Service Requests',
        value: 14,
        icon: <ToolOutlined />
    },
    {
        title: 'Registered Customers',
        value: 96,
        icon: <TeamOutlined />
    },
    {
        title: 'Active Warranties',
        value: 102,
        icon: <SafetyCertificateOutlined />
    }
];

const DCardsComponent = () => {
    return (
        <div className="dashboard-cards">
            {cards.map((item, index) => (
                <div className="dashboard-card" key={index}>
                    <div>
                        <p>{item.title}</p>
                        <h2>{item.value}</h2>
                    </div>

                    <div className="dashboard-icon">
                        {item.icon}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DCardsComponent;