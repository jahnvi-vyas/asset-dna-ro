import React from 'react'
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Ticket ID',
        dataIndex: 'ticket'
    },
    {
        title: 'Machine ID',
        dataIndex: 'machine'
    },
    {
        title: 'Customer',
        dataIndex: 'customer'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status: string) => (
            <Tag color="green">{status}</Tag>
        )
    },
    {
        title: 'Priority',
        dataIndex: 'priority'
    },
    {
        title: 'Date',
        dataIndex: 'date'
    }
];

const data = [
    {
        key: 1,
        ticket: 'SRV-2026-001',
        machine: 'IMCR-001',
        customer: 'ABC Pharma',
        status: 'Open',
        priority: 'High',
        date: '12 May 2026'
    },
    {
        key: 2,
        ticket: 'SRV-2026-002',
        machine: 'PRM-007',
        customer: 'XYZ Industries',
        status: 'Assigned',
        priority: 'Medium',
        date: '11 May 2026'
    }
];

const RTableComponent = () => {
    return (
        <div className="table-card">
            <div className="table-title">
                Recent Service Requests
            </div>

            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </div>
    );
};

export default RTableComponent