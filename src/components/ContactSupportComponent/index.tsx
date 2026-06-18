import engineerIcon from 'assets/icons/engineer.svg';
import mobileIcon from 'assets/icons/mobile.svg';
import locationIcon from 'assets/icons/location.svg';
import clockIcon from 'assets/icons/clock.svg';
import 'styles/contact-support.css';

const ContactSupportComponent = () => {
    return (
        <>
            <div className="contact-page-top">
                <h1>Support Contact</h1>

                <p>
                    Contact your authorized RO supplier for installation,
                    maintenance, filter replacement, warranty support, and
                    service assistance.
                </p>
            </div>

            <div className="contact-support-card">
                <div className="contact-item">
                    <div className="contact-icon">
                        <img
                            src={engineerIcon}
                            alt="supplier"
                        />
                    </div>

                    <div>
                        <span className="contact-label">
                            Supplier
                        </span>

                        <h3>Raj RO</h3>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="contact-icon">
                        <img
                            src={mobileIcon}
                            alt="mobile"
                        />
                    </div>

                    <div>
                        <span className="contact-label">
                            Contact Number
                        </span>

                        <h3>+91 XXXXX XXXXX</h3>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="contact-icon">
                        <img
                            src={locationIcon}
                            alt="location"
                        />
                    </div>

                    <div>
                        <span className="contact-label">
                            Address
                        </span>

                        <h3>Maninagar, Ahmedabad</h3>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="contact-icon">
                        <img
                            src={clockIcon}
                            alt="clock"
                        />
                    </div>

                    <div>
                        <span className="contact-label">
                            Support Hours
                        </span>

                        <h3>
                            Mon - Sat (9:00 AM - 6:00 PM)
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactSupportComponent;