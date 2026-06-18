import React from 'react'
import MDetailsComponent from 'components/Machine/MDetailsComponent';
import QuickActionsComponent from 'components/Machine/QuickActionsComponent';
import SContactComponent from 'components/Machine/SContactComponent';
import SpecificationComponent from 'components/Machine/SpecificationComponent';
import FooterComponent from 'components/Layout/FooterComponent';
import HeaderComponent from 'components/Layout/HeaderComponent';
import 'styles/machine-profile.css';

const MachinePage = () => {
    return (
        <div className="page-wrapper">
            <div className="machine-container">
                <HeaderComponent />
                <div className="content-wrapper">
                    <MDetailsComponent />
                    <SpecificationComponent />
                    <QuickActionsComponent />
                    <SContactComponent />
                </div>
                <FooterComponent />
            </div>
        </div>
    );
}

export default MachinePage