import React from 'react';
import machineImage from 'assets/images/machine.png';

const MDetailsComponent = () => {
    return (
        <div className="card machine-details-card">
            <div>
                <img
                    src={machineImage}
                    alt="Aquatec Plus"
                    className="machine-image"
                />
            </div>

            <div className="machine-info">
                <div className="badge-wrapper">
                    <span className="badge green-badge">
                        1 Year Warranty
                    </span>

                    <span className="badge blue-badge">
                        12L Storage
                    </span>
                </div>

                <h1 className="machine-title">
                    Aquatec Plus Smart Pure RO Water Purifier
                </h1>

                <div className="details-grid">
                    <div className="details-item">
                        <label className="details-label">
                            Brand
                        </label>
                        <span className="details-value">
                            Aquatec Plus
                        </span>
                    </div>

                    <div className="details-item">
                        <label className="details-label">
                            Model
                        </label>
                        <span className="details-value">
                            Smart Pure
                        </span>
                    </div>

                    <div className="details-item">
                        <label className="details-label">
                            Purification
                        </label>
                        <span className="details-value">
                            RO + UV + UF + TDS
                        </span>
                    </div>

                    <div className="details-item">
                        <label className="details-label">
                            Installation Type
                        </label>
                        <span className="details-value">
                            Under Sink
                        </span>
                    </div>

                    <div className="details-item">
                        <label className="details-label">
                            Capacity
                        </label>
                        <span className="details-value">
                            12 Litres
                        </span>
                    </div>

                    <div className="details-item">
                        <label className="details-label">
                            Max Water Flow
                        </label>
                        <span className="details-value">
                            15 Litres / Hour
                        </span>
                    </div>

                    <div className="details-item">
                        <label className="details-label">
                            Max TDS Support
                        </label>
                        <span className="details-value">
                            3500 PPM
                        </span>
                    </div>

                    <div className="details-item">
                        <label className="details-label">
                            Warranty
                        </label>
                        <span className="details-value">
                            1 Year
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MDetailsComponent;