import React from 'react'

const maintenanceData = [
    {
        machine: 'IMCR-001 - Auto Corner Sealer Machine',
        company: 'ABC Pharma',
        date: '20 May 2026'
    },
    {
        machine: 'PRM-007 - Bottle Filling Machine',
        company: 'XYZ Industries',
        date: '22 May 2026'
    },
    {
        machine: 'PRM-012 - Labeling Machine',
        company: 'Sunrise Pharma',
        date: '25 May 2026'
    }
];

const UMaintenanceComponent = () => {
    return (
        <div className="maintenance-card">
            <div className="table-title">
                Upcoming Maintenance
            </div>

            {maintenanceData.map((item, index) => (
                <div className="maintenance-item" key={index}>
                    <div>
                        <h4>{item.machine}</h4>

                        <p>{item.company}</p>
                    </div>

                    <span>{item.date}</span>
                </div>
            ))}
        </div>
    );
};

export default UMaintenanceComponent