const SpecificationComponent = () => {
    const specifications = [
        {
            label: 'Purification Technology',
            value: 'RO + UV + UF + TDS'
        },
        {
            label: 'Storage Capacity',
            value: '12 Litres'
        },
        {
            label: 'Maximum Flow Rate',
            value: '15 Litres / Hour'
        },
        {
            label: 'Maximum Supported TDS',
            value: '3500 PPM'
        },
        {
            label: 'Installation Type',
            value: 'Under Sink'
        },
        {
            label: 'Container Type',
            value: 'Dispenser'
        },
        {
            label: 'Power Source',
            value: 'Corded Electric'
        },
        {
            label: 'Dimensions (L × W × H)',
            value: '37.7 × 26 × 43.8 cm'
        },
        {
            label: 'Weight',
            value: '8.5 Kg'
        },
        {
            label: 'Smart Home Support',
            value: 'Not Supported'
        },
        {
            label: 'Country of Origin',
            value: 'India'
        },
        {
            label: 'Warranty',
            value: '1 Year on Electronic Parts & Membrane'
        }
    ];

    return (
        <div className="card section-card">
            <h3 className="section-title">
                MACHINE SPECIFICATIONS
            </h3>

            <div className="spec-grid">
                {specifications.map((item) => (
                    <div
                        className="spec-item"
                        key={item.label}
                    >
                        <div className="spec-label">
                            {item.label}
                        </div>

                        <div className="spec-value">
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecificationComponent;