import React from 'react'
import {
    AppstoreOutlined,
    ToolOutlined,
    TeamOutlined,
    CalendarOutlined
} from '@ant-design/icons';

const cards = [
    {
        title: 'Total Machines',
        value: 128,
        icon: <AppstoreOutlined />
    },
    {
        title: 'Open Tickets',
        value: 14,
        icon: <ToolOutlined />
    },
    {
        title: 'Total Customers',
        value: 42,
        icon: <TeamOutlined />
    },
    {
        title: 'Expiring AMC',
        value: 8,
        icon: <CalendarOutlined />
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

export default DCardsComponent