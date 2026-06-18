import React from 'react'

const maintenanceData = [
    {
        machine: 'RO-001 - Aquatec Plus Smart Pure',
        customer: 'Dhaval Jagdishbhai Vyas',
        service: 'Filter Replacement',
        date: '20 Jun 2026'
    },
    {
        machine: 'RO-008 - Aquatec Plus Smart Pure',
        customer: 'Neha Patel',
        service: 'RO Membrane Replacement',
        date: '22 Jun 2026'
    },
    {
        machine: 'RO-015 - Aquatec Plus Smart Pure',
        customer: 'Rahul Shah',
        service: 'Preventive Maintenance',
        date: '25 Jun 2026'
    }
];

const UMaintenanceComponent = () => {
    return (
        <div className="maintenance-card">
            <div className="table-title">
                Upcoming Service Schedule
            </div>

            {maintenanceData.map((item, index) => (
                <div className="maintenance-item" key={index}>
                    <div>
                        <h4>{item.machine}</h4>

                        <p>{item.customer}</p>

                        <small>{item.service}</small>
                    </div>

                    <span>{item.date}</span>
                </div>
            ))}
        </div>
    );
};

export default UMaintenanceComponent