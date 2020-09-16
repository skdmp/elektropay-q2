// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";
import SectionTitle from "../../../components/Shared/section-title";
import KeyFeatureBox from "../../../components/Shared/key-feature-box";
import TeamBox from "../../../components/Shared/team-box";

// import images
import about from '../../../images/payments/payment/discover.jpg';
import team1 from '../../../images/team/1.jpg';
import team2 from '../../../images/team/2.jpg';
import team3 from '../../../images/team/3.jpg';
import team4 from '../../../images/team/4.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';

class CardProcessing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "About Us" },
            ],
            keyfeatures : [
                { icon : "mdi-responsive", title : "Fully Responsive" },
                { icon : "mdi-internet-explorer", title : "Browser Compatibility" },
                { icon : "mdi-cryengine", title : "Retina Ready" },
                { icon : "mdi-bootstrap", title : "Based On Bootstrap 4" },
                { icon : "mdi-cube-outline", title : "Material Design Icon" },
                { icon : "mdi-sass", title : "Built With SASS" },
                { icon : "mdi-check-decagram", title : "W3c Valid Code" },
                { icon : "mdi-vector-bezier", title : "Flaticon Icon" },
                { icon : "mdi-settings-outline", title : "Easy to customize" },
            ],
            candidates : [
                { id : 1, image : team1, name : "Ronny Jofra", designation : "Organizer", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 2, image : team2, name : "Micheal Carlo", designation : "Event Manager", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 3, image : team3, name : "Aliana Rosy", designation : "Motivator", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 4, image : team4, name : "Sofia Razaq", designation : "Speaker", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
            ],
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);

        var teambox = document.getElementsByName("team");
        for ( var i=0; i<teambox.length; i++){
            teambox[i].classList.remove("rounded");
            teambox[i].classList.remove("bg-white");
            teambox[i].classList.remove("pt-3");
        }
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }
     
    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb
                    title="Card Processing"
                    pathItems = {this.state.pathItems}
                />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                

                {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} /> */}
                                    
                <section className="section">
                <Container>
                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Accept credit and debit card payments</h4>
                                    <p className="text-muted">Process any U.S. or international card without a separate merchant account and gateway.</p>
                                </div>
                </Container>
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                
                                {/* <div className="position-relative">
                                    <img src={about} className="rounded img-fluid mx-auto d-block" alt="" />
                                    <div className="play-icon">
                                        <Link onClick={this.openModal}  to="#" className="play-btn video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </Link>
                                    </div>
                                </div> */}
                                <div className="position-relative">
                                    <img src={about} className="rounded img-fluid mx-auto d-block" alt="" />
                                    
                                </div>
                            </Col>

                            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">How it works</h4>
                                    {/* <p className="text-muted">Start working with <span className="text-primary font-weight-bold">Elektropay</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                                    <Link to="#" className="btn btn-primary mt-3">Buy Now <i className="mdi mdi-chevron-right"></i></Link> */}
                                    <p className="text-muted">Balanced supports all major card brands from Visa and MasterCard to Discover and American Express. Funds are captured in U.S. currency and available for immediate access in your escrow balance.</p>
                                </div>
                                {/* <div className="position-relative">
                                    <img src={about} className="rounded img-fluid mx-auto d-block" alt="" />
                                    <div className="play-icon">
                                    Once a card is charged, funds are placed in your <a href='https://docs.balancedpayments.com/1.1/guides/escrow/'>escrow account</a> (held by Balanced). You may then pay out to your own bank account or use Balanced’s <a href='/payouts'>Payouts solution</a> to pay your U.S. sellers.
                                    </div>
                                </div> */}
                            </Col>
                            <div className="section-title ml-lg-4">
                                    Once a card is charged, funds are placed in your <a href='https://docs.balancedpayments.com/1.1/guides/escrow/'>escrow account</a> (held by Balanced). You may then pay out to your own bank account or use Balanced’s <a href='/payouts'>Payouts solution</a> to pay your U.S. sellers.
                            </div> {' '} {' '}
                            <div className="section-title ml-lg-4"><ul><b>step1:</b> Charge your customer’s debit or credit card</ul>
                            <ul><b>step2:</b> Funds are available immediately in your escrow balance</ul>
                            <ul><b>step3:</b> Collect your funds by paying out to your bank account</ul>
                            <ul><b>step4:</b> Pay your sellers using Balanced’s <a href='/payouts'>Payouts solution</a></ul>
                            </div>
                        </Row>
                    </Container>
                    <Container>
                    <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Collecting card info</h4></div>
                    <Row className="align-items-center">
                    
                
                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p className="text-muted">Charge a card by collecting the card number and expiration date. Information is securely passed through <a href='https://docs.balancedpayments.com/1.1/guides/balanced-js/'>balanced.js</a>, bypassing your servers and removing your need to become <a href='http://support.balancedpayments.com/hc/en-us/articles/200173030-Do-I-need-to-be-PCI-compliant-'>PCI compliant</a>.</p>
                                    </Col>
                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><a href='https://support.balancedpayments.com/hc/en-us/articles/201035880-Verifications-Authorizations-and-Captures-Best-practices'>View card processing best practices</a>
                                </Col>
                                    
                    </Row>
                </Container>
                <Container>
                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Recurring billing</h4></div>
                                    <Row className="align-items-center">
                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"> <p className="text-muted">Process any U.S. or international card without a separate merchant account and gateway.</p>
                                </Col>
                                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><a href='http://balancedbilly.readthedocs.org/en/latest/index.html'>Learn more about Billy</a>
                                </Col>
                                </Row>
                </Container>
                <Container>
                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Card authorizations</h4></div>
                                    <Row className="align-items-center">
                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"> <p className="text-muted">Reserve funds on a credit card for up to seven days by issuing a card authorization.</p>
                                </Col>
                                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><a href='https://docs.balancedpayments.com/1.1/guides/cardholds/'>Learn more about authorization use cases such as crowdfunding</a>
                                </Col>
                                </Row>
                </Container>

                <Container>
                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Card statement descriptor</h4></div>
                                    <Row className="align-items-center">
                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"> <p className="text-muted">Modify the card statement soft descriptor on a per-transaction basis. Each descriptor begins with BAL* followed by your 18-character-long description.</p>
                                </Col>
                                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><a href='https://docs.balancedpayments.com/1.1/guides/credits/#bank-statement-descriptor'>Learn more about setting the soft descriptor</a>
                                </Col>
                                </Row>
                </Container>
                <Container>
                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Chargebacks & Disputes</h4></div>
                                    <Row className="align-items-center">
                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"> <p className="text-muted">In the event of a chargeback, Balanced will notify you to help gather the documents necessary to fight the chargeback.</p>
                                </Col>
                                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><a href='https://support.balancedpayments.com/hc/en-us/articles/200135910-How-are-credit-card-chargebacks-and-disputes-handled-'>Learn more about the chargeback process</a>
                                </Col>
                                </Row>
                </Container>
                <Container>
                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Pricing</h4></div>
                                    <Row className="align-items-center">
                                    
                                    <Col lg={3} md={3} className="mt-4 pt-2 mt-sm-0 pt-sm-0"> <p className="text-muted">Foreign currency conversion</p>
                                </Col>
                                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p>2% fee on top of card processing rate</p>
                                </Col>
                                <Col lg={2} md={2} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p>2%</p>
                                </Col>
                                </Row>
                                <Row className="align-items-center">
                                    
                                    <Col lg={3} md={3} className="mt-4 pt-2 mt-sm-0 pt-sm-0"> <p className="text-muted">Authorization hold</p>
                                </Col>
                                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p></p>
                                </Col>
                                <Col lg={2} md={2} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p>$0</p>
                                </Col>
                                </Row>
                                <Row className="align-items-center">
                                    
                                    <Col lg={3} md={3} className="mt-4 pt-2 mt-sm-0 pt-sm-0"> <p className="text-muted">Refund</p>
                                </Col>
                                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p>processing fee of 2.9% is returned, but the 30&cent; is non-refundable</p>
                                </Col>
                                <Col lg={2} md={2} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p>$0</p>
                                </Col>
                                </Row>
                                <Row className="align-items-center">
                                    
                                    <Col lg={3} md={3} className="mt-4 pt-2 mt-sm-0 pt-sm-0"> <p className="text-muted">Failure</p>
                                </Col>
                                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p></p>
                                </Col>
                                <Col lg={2} md={2} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p>$0</p>
                                </Col>
                                </Row>
                                <Row className="align-items-center">
                                    
                                    <Col lg={3} md={3} className="mt-4 pt-2 mt-sm-0 pt-sm-0"> <p className="text-muted">Chargeback</p>
                                </Col>
                                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p></p>
                                </Col>
                                <Col lg={2} md={2} className="mt-4 pt-2 mt-sm-0 pt-sm-0"><p>$15</p>
                                </Col>
                                </Row>
                </Container>
                </section>

                </React.Fragment>
        );
    }
}
export default CardProcessing;
