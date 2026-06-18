import React from 'react'
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Request ID',
        dataIndex: 'ticket'
    },
    {
        title: 'RO ID',
        dataIndex: 'machine'
    },
    {
        title: 'Customer',
        dataIndex: 'customer'
    },
    {
        title: 'Service Type',
        dataIndex: 'service'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status: string) => {
            const color =
                status === 'Completed'
                    ? 'green'
                    : status === 'In Progress'
                        ? 'processing'
                        : 'orange';

            return <Tag color={color}>{status}</Tag>;
        }
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
        machine: 'RO-001',
        customer: 'Dhaval Vyas',
        service: 'RO Membrane Replacement',
        status: 'Completed',
        date: '12 Jun 2026'
    },
    {
        key: 2,
        ticket: 'SRV-2026-002',
        machine: 'RO-008',
        customer: 'Neha Patel',
        service: 'Sediment Filter Replacement',
        status: 'Pending',
        date: '15 Jun 2026'
    },
    {
        key: 3,
        ticket: 'SRV-2026-003',
        machine: 'RO-015',
        customer: 'Rahul Shah',
        service: 'TDS & pH Calibration',
        status: 'In Progress',
        date: '17 Jun 2026'
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