import ContactSupportComponent from 'components/ContactSupportComponent'
import FooterComponent from 'components/Layout/FooterComponent'
import HeaderComponent from 'components/Layout/HeaderComponent'
import React from 'react'

const ContactSupportPage = () => {
    return (
        <div className="page-wrapper">
            <div className="machine-container">
                <HeaderComponent />
                <div className="request-wrapper">
                    <ContactSupportComponent />
                </div>
                <FooterComponent />
            </div>
        </div>
    )
}

export default ContactSupportPage