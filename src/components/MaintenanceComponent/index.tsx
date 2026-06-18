import { Table, Tag } from 'antd';
import { data } from './constant';

const columns = [
    {
        title: 'Service Date',
        dataIndex: 'date',
        width: 120
    },
    {
        title: 'Service ID',
        dataIndex: 'ticketId',
        width: 140
    },
    {
        title: 'Service Type',
        dataIndex: 'serviceType'
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        render: (priority: string) => {
            const colors: Record<string, string> = {
                High: 'red',
                Medium: 'orange',
                Low: 'green'
            };

            return (
                <Tag color={colors[priority]}>
                    {priority}
                </Tag>
            );
        }
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (status: string) => {
            const colors: Record<string, string> = {
                Completed: 'green',
                Scheduled: 'blue',
                Pending: 'orange',
                Cancelled: 'red'
            };

            return (
                <Tag color={colors[status]}>
                    {status}
                </Tag>
            );
        }
    },
    {
        title: 'Service Details',
        dataIndex: 'description',
        width: 420
    },
    {
        title: 'Technician',
        dataIndex: 'attendedBy'
    },
    {
        title: 'Completed On',
        dataIndex: 'attendDate'
    }
];

const MaintenanceComponent = () => {
    return (
        <>
            <div className="maintenance-page-top">
                <h1>Service History</h1>
                <p>
                    View the complete service and maintenance history of your RO water purifier,
                    including filter replacements, membrane changes, sanitization, and routine servicing.
                </p>
            </div>
            <div className="maintenance-machine-card">
                <div className="maintenance-machine-info">
                    <p>
                        <strong>Machine ID:</strong> RO-001
                    </p>

                    <p>
                        <strong>Product:</strong> Aquatec Plus Smart Pure
                    </p>

                    <p>
                        <strong>Purification:</strong> RO + UV + UF + TDS
                    </p>

                    <p>
                        <strong>Customer:</strong> ABC Pharma Pvt. Ltd.
                    </p>
                </div>
            </div>
            <div className='maintenance-table-wrapper'>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    scroll={{ x: 1400 }}
                />
            </div>
        </>
    );
};

export default MaintenanceComponent;

