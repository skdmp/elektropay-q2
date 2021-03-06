import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

//Import Components
import SectionTitleLeft from "../../components/Shared/section-title-left";

// Import images
import busi01 from '../../images/busi01.jpg';

class WebsiteDescription extends Component {
    state = {
        features : [
            { title : "Scalable digital payment solutions for tomorrow." },
            { title : "Reach more buyers and drive higher conversions." },
            { title : "Leverage our networks to access new markets." },
        ],
    }

    componentDidMount(){
        var featurelines=document.getElementsByName("featurelines");
        featurelines[0].classList.add("mb-0");
    }

    render() {
        return (
            <React.Fragment>
                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="5" md="6">
                                <img src={busi01} className="img-fluid" alt=""/>
                            </Col>

                            <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                <SectionTitleLeft
                                    title = "Maximize Revenue Channels"
                                    desc = "Connect with more customers and increase your bottom line with Elektropay's Open Commerce Platform, customizable to easily connect payment processors, card issuers, alternative payment methods, digital wallets, all through a single seamless integration."
                                    features = {this.state.features}
                                    class = "mdi-18px h5 mr-2"
                                />
                                </div>
                                <div className="ml-lg-5 mt-5">
                                   <Link to="/omnichannel-payments" className="btn btn-dark text-sm-left mb-2 mr-2">Find out how</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default WebsiteDescription;
