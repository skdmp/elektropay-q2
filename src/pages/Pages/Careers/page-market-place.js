import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row, Col,Form, Input, FormGroup, Label, Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';

import StarRatings from 'react-star-ratings';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";

class PageMarketPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "CAREERS", link : "#" },
                { id : 4, name : "Jobs" },
            ],
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
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

        const mystyle = {
        padding:"0  0" ,
        color: "#425466",
        width:"100 px"
    };
        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb
                    title="One platform to cover your payments needs"
                    pathItems = {this.state.pathItems}
                />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <section className="section">
                    <Container>
                        <Row>
                            <section className="Copy variant--Section">
                                <header className="Copy__header">
                                    <h1 className="Copy__title">Accept payments</h1>
                                    </header>
                            
                                    <div className="ColumnLayout" data-columns="3,1">
                                        <br/><br/> <br/>
                                        <div>
                                            <header className="Copy__header">
                                                <h2 className="Copy__title"style =  {{color: "#96f"}}>Customer interfaces</h2>
                                            </header>
                                                <div className="Copy__body" style={{mystyle}}>
                                                    Create the perfect checkout experience that works across browsers and devices of 
                                                    all sizes. Choose from a range of options to find the integration that’s right for you.
                                                </div>
                                                <div ><br/>
                                                    <Table >
                                                        <col width="25%" />
                                                        <col width="40%" />
                                                        <col width="25%" />
                                                        <tr>
                                                            <td>Hosted payment page</td>
                                                            <td>Get started quickly and easily with Checkout, our prebuilt, hosted payments page that you can customize to match your brand. To increase conversion, Checkout dynamically adapts language and payment methods 
                                                                based on your customer’s location, and comes with mobile wallets, coupons, tax rate support, and more.
                                                                <a class="Link" href="" >Learn more&#65279;<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                                    <g fill-rule="evenodd">
                                                                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                                                                        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                                                                        </g>
                                                                        </svg>
                                                                        </a>
                                                                </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Embeddable UI components</td>
                                                            <td>Use Stripe Elements, a set of rich, prebuilt UI components, to design your own custom payment form for your site. Elements are built with the collective experience of Stripe’s front-end,
                                                                 design, and analytics teams to help minimize user error and increase the number of successful payments.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>API-only</td>
                                                            <td>Build a fully API-based integration or only use our javascript library 
                                                                to tokenize your customers’ payment details—all while designing your custom checkout UI.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>In-person payments</td>
                                                            <td>Accept payments in person using Stripe Terminal. Developer-friendly SDKs let you create
                                                                 a custom checkout that brings Stripe’s payments platform to your in-person transactions.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Invoicing</td>
                                                            <td>If you need to bill businesses in your country, use Stripe to send invoices and request payments from your customers.
                                                                 Customize invoices to match your company branding, add payment terms, and accept both cards or bank transfers.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Third-party integrations</td>
                                                            <td>Jumpstart your integration with prebuilt ecommerce plug-ins that allow you to efficiently
                                                                 integrate payments into your store with a simple and easy setup.</td>
                                                            <td></td>
                                                        </tr>
                                                        </Table>
                                                </div>
                                        </div>
                                        <div>
                                            <header className="Copy__header">
                                                <h2 className="Copy__title"style =  {{color: "#96f"}}>Payment options</h2>
                                            </header>
                                                <div className="Copy__body" style={{mystyle}}>
                                                Grow your business, go global, and boost conversions in other countries by giving your customers their preferred payment 
                                                options through a unified integration. Discover and select the right payment methods to reach a broader audience by
                                                <a href=""> reading our guide.</a>
                                                    </div>
                                                    <div ><br/>
                                                    <Table >
                                                        <col width="25%" />
                                                        <col width="40%" />
                                                        <col width="25%" />
                                                        <tr>
                                                            <td>Cards</td>
                                                            <td>Accept all major debit and credit cards from customers in every country.
                                                                
                                                                </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wallets</td>
                                                            <td>Enable your customers to check out faster with wallet payment methods that digitally store credit and debit cards. Wallets eliminate the need for customers to manually 
                                                                enter their card and billing information, offering a quick and convenient way to pay.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bank debits and transfers</td>
                                                            <td>Minimize involuntary churn by accepting direct debits for subscription or recurring
                                                                 charges. For large transactions, Stripe makes it possible to accept credit transfers or wires with automated reconciliation, lowering the chance of payment failure without adding operational complexity.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Authenticated bank debits</td>
                                                            <td>Increase conversion by offering customers a more convenient and secure way to pay from their bank account.
                                                                 By authorizing payment using the customer’s online banking credentials, authenticated bank debits are the
                                                                  preferred method of paying online in many countries.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Buy now, pay later</td>
                                                            <td>Offer flexible payment options that increase your customers’ purchasing power, leading to higher conversion and order value.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Currencies</td>
                                                            <td>Process charges and display prices in a customer’s preferred currency to improve sales and help customers 
                                                                avoid conversion costs.
                                                                <a class="Link" href="">Full list of 135+ currencies﻿&#65279;<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                                    <g fill-rule="evenodd">
                                                                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                                                                        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                                                                        </g>
                                                                        </svg>
                                                                        </a></td>
                                                            <td></td>
                                                        </tr>

                                                        <tr>
                                                            <td>Subsidiary support</td>
                                                            <td>Set up local Stripe accounts to take advantage of our local optimized acquiring that gets you maximized acceptance rates, the lowest costs, and no FX/cross-border fees for customers. New countries
                                                                 leverage the exact same API infrastructure and can be turned on with no incremental engineering work.
                                                                <a class="Link" href="">Full list of 30+ currencies﻿&#65279;<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                                    <g fill-rule="evenodd">
                                                                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                                                                        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                                                                        </g>
                                                                        </svg>
                                                                        </a></td>
                                                            <td></td>
                                                        </tr>
                                                    </Table>
                                                </div>
                                            </div>
                                            <div>
                                            <header className="Copy__header">
                                                <h2 className="Copy__title"style =  {{color: "#96f"}}>Mobile</h2>
                                            </header>
                                                <div className="Copy__body" style={{mystyle}}>Accept payments from your iOS app, Android app, or mobile website. 
                                                Our mobile SDKs let you get started with a few lines of code and require no backend changes.
                                                </div>
                                                <div ><br/>
                                                    <Table >
                                                        <col width="25%" />
                                                        <col width="40%" />
                                                        <col width="25%" />
                                                        <tr>
                                                            <td>iOS and Android SDK</td>
                                                            <td>Use our native libraries to collect card information without sensitive PCI data ever hitting your servers.
                                                                 The libraries include a set of tools to help you accept all Stripe supported payment methods, from Alipay to iDEAL.
                                                                <a class="Link" href="" >Learn more&#65279;<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                                    <g fill-rule="evenodd">
                                                                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                                                                        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                                                                        </g>
                                                                        </svg>
                                                                        </a>
                                                                </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mobile customer interfaces</td>
                                                            <td>As part of our SDKs, quickly build a complete checkout flow with our prebuilt UI components—from form fields
                                                                 for card details to full flows for collecting shipping information—and customize the colors and fonts to perfectly 
                                                                 match your brand. Or use our core APIs to create your own secure checkout flow from scratch.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mobile web</td>
                                                            <td>Use Checkout and Elements to make your mobile checkout flows web-friendly. They also support popular browser 
                                                                payment methods to speed up checkout time on mobile web.</td>
                                                            <td></td>
                                                        </tr>
                                                </Table>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </section>
                                <section className="Copy variant--Section">
                                <header className="Copy__header">
                                    <h1 className="Copy__title">Process payments</h1>
                                    </header>
                            
                                    <div className="ColumnLayout" data-columns="3,1">
                                        <br/><br/> <br/>
                                        <div>
                                            <header className="Copy__header">
                                                <h2 className="Copy__title"style =  {{color: "#96f"}}>Use cases</h2>
                                            </header>
                                                <div className="Copy__body" style={{mystyle}}>Whether you’re looking to accept one-off payments, 
                                                set up subscriptions, or power payments for a platform or marketplace, Stripe provides a complete tech-stack to support any business model.
                                                </div>
                                                <div ><br/>
                                                    <Table >
                                                        <col width="25%" />
                                                        <col width="40%" />
                                                        <col width="25%" />
                                                        <tr>
                                                            <td>Online payments</td>
                                                            <td>Create an account online and start accepting payments in minutes—no contracts or banking details required. Our flexible APIs, libraries, and SDKs let you design a secure and customized payment flow.
                                                                <a class="Link" href="" >See the docs &#65279;<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                                    <g fill-rule="evenodd">
                                                                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                                                                        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                                                                        </g>
                                                                        </svg>
                                                                        </a>
                                                                </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Omni-channel</td>
                                                            <td>Break down barriers between online and offline data. Our developer tools, pre-certified card readers, and cloud-based 
                                                                hardware management make it easy to extend your online presence into the physical world.
                                                                <a class="Link" href="" >Learn More &#65279;
                                                                <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                                    <g fill-rule="evenodd">
                                                                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                                                                        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                                                                    </g>
                                                                </svg>
                                                                </a>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Recurring payments</td>
                                                            <td>Use Stripe’s composable API to create flat-rate plans, per seat, tiered and usage-based subscriptions, or bill your customers using flexible invoices. With built-in solutions to automatically update expired cards, retry failed payments, and let customers manage their payment information,
                                                                 Stripe makes it easy for businesses to set up and manage recurring payments.
                                                                <a class="Link" href="" >Learn More &#65279;
                                                                <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                                    <g fill-rule="evenodd">
                                                                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                                                                        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                                                                    </g>
                                                                </svg>
                                                                </a></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Platform and marketplace payments</td>
                                                            <td>Stripe provides a set of programmable APIs and tools to let you facilitate payments and pay out sellers globally. From verifying your sellers’ identities to routing payments, 
                                                                Stripe makes it easy for platforms and marketplaces to manage their payments while staying compliant.
                                                                <a class="Link" href="" >Learn More &#65279;
                                                                <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                                    <g fill-rule="evenodd">
                                                                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                                                                        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                                                                    </g>
                                                                </svg>
                                                                </a></td>
                                                            <td></td>
                                                        </tr>
                                                        </Table>
                                                </div>
                                        </div>
                                        <div>
                                            <header className="Copy__header">
                                                <h2 className="Copy__title"style =  {{color: "#96f"}}>Revenue optimization</h2>
                                            </header>
                                                <div className="Copy__body" style={{mystyle}}>Do away with legacy payment systems, which often rely on inefficient routing paths that cause a meaningful number of needlessly declined transactions.
                                               
                                                    </div>
                                                    <div ><br/>
                                                    <Table >
                                                        <col width="25%" />
                                                        <col width="40%" />
                                                        <col width="25%" />
                                                        <tr>
                                                            <td>Authentication</td>
                                                            <td>Our dynamic payments API lets you apply smarter authentication logic to maximize conversion while minimizing the disruption to user experience. Where customer authentication is required by rules like SCA, our platform applies all relevant exemptions before requiring users to provide additional information.
                                                                
                                                                </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Authorization</td>
                                                            <td>Stripe’s pre-processing layer helps every business get closer to the bare metal through multi-regional direct connections to the major card networks, including Visa, Mastercard, and American Express. This lets Stripe optimize routing paths, provide the most granular data, and reduce transaction latency.

Stripe’s entire platform is designed to minimize declines and maximize revenue, from tools that update stored card details and identify the best time to retry failed recurring payments, to machine learning models that can recapture declines in real-time.</td>
                                                            <td></td>
                                                        </tr>
                                                        
                                                    </Table>
                                                </div>
                                            </div>
                                            <div>
                                            <header className="Copy__header">
                                                <h2 className="Copy__title"style =  {{color: "#96f"}}>Fraud and disputes</h2>
                                            </header>
                                                <div className="Copy__body" style={{mystyle}}>Manage risk and be more confident about fighting fraud with our fully integrated solution. Even if a card is new to your business, there’s an 89% chance it’s been seen before on the Stripe network.
                                                </div>
                                                <div ><br/>
                                                    <Table >
                                                        <col width="25%" />
                                                        <col width="40%" />
                                                        <col width="25%" />
                                                        <tr>
                                                            <td>Stripe Radar</td>
                                                            <td>Identify and prevent fraud with Stripe Radar—a machine learning fraud system that’s fully integrated with your payments. Radar combines adaptive algorithms that learn from Stripe’s global network of millions of users.
                                                                <a class="Link" href="" >Learn more&#65279;<svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                                                                    <g fill-rule="evenodd">
                                                                        <path class="HoverArrow__linePath" d="M0 5h7"></path>
                                                                        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                                                                        </g>
                                                                        </svg>
                                                                        </a>
                                                                </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dynamic 3D Secure</td>
                                                            <td>
Reduce your risk of fraud and chargebacks by adding an additional layer of authentication that protects you from liability for fraudulent card payments. Dynamic 3D Secure lets you protect conversion by selectively applying authentication to only high-risk transactions or payments that require authentication due to regulation.</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dispute handling</td>
                                                            <td>Eliminate manual work related to handling disputes with our end-to-end automated process that works directly with the card networks. Based on the type of dispute and associated network rules, we help submit evidence that’s most likely to see you win.</td>
                                                            <td></td>
                                                        </tr>
                                                </Table>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </section>
                                
                                </Row>
                            </Container>
                    </section>
            </React.Fragment>
        );
    }
}

export default PageMarketPlace;