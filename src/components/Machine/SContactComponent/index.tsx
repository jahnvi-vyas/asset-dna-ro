import React from 'react';
import engineerIcon from 'assets/icons/engineer.svg';
import mobileIcon from 'assets/icons/mobile.svg';
import clockIcon from 'assets/icons/clock.svg';
import locationIcon from 'assets/icons/location.svg'; // Optional

const SContactComponent = () => {
    return (
        <div className="card section-card">
            <h3 className="section-title">SUPPORT CONTACT</h3>

            <div className="support-grid">
                <div className="support-item">
                    <img src={engineerIcon} alt="supplier" />

                    <div>
                        <label>Supplier</label>
                        <span>Raj RO</span>
                    </div>
                </div>

                <div className="support-item">
                    <img src={mobileIcon} alt="mobile" />

                    <div>
                        <label>Contact Number</label>
                        <span>+91 XXXXX XXXXX</span>
                    </div>
                </div>

                <div className="support-item">
                    <img src={locationIcon} alt="address" />

                    <div>
                        <label>Address</label>
                        <span>Maninagar, Ahmedabad</span>
                    </div>
                </div>

                <div className="support-item">
                    <img src={clockIcon} alt="clock" />

                    <div>
                        <label>Support Hours</label>
                        <span>Mon - Sat (9:00 AM - 6:00 PM)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SContactComponent;