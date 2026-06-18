import React from 'react'
import 'styles/footer.css';

const FooterComponent = () => {
    return (
        <footer>
            <div className="footer-top">
                {/* <img src={shield} alt="shield" /> */}
                <p>
                    This is an official machine profile. All information is verified and
                    secured.
                </p>
            </div>
            <div className="footer-bottom">
                © 2026 Support Fusion LLP. All Rights Reserved.
            </div>
        </footer>
    )
}

export default FooterComponent