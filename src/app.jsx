import React, { Component } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
  ProductLinks,
} from "arccorp-vars";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="arc-airportis-page">
        <Stickynav
          title="AirportIS"
          links={[
            { title: "Overview", url: "#overview" },
            { title: "How It Works", url: "#how-it-works" },
            { title: "Resources", url: "#resources" },
          ]}
          stickyCTA="Contact Us"
          stickyCTALink="https://www2.arccorp.com/support-training/product-sales-request?Product=AirportIS"
        />

        <ProductJumbo
          className="airportis-jumbo"
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-jumbo.png"
          title={
            <>
              Air traffic data <br /> you can rely on.
            </>
          }
          subtitle={
            <>
              Grow passenger numbers, increase revenue and expand your market by
              accessing{" "}
              <span>
                the most comprehensive and reliable traffic data available on
                the market.
              </span>
            </>
          }
          ctaLink="#overview"
          width="100%"
        />

        <div className="container">
          <div className="arc-iata-bar">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <img
                  className="arc-iata-bar-logo"
                  src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-arc-iata.png"
                  alt="arc-iata logo"
                />
              </div>
              <div className="col-lg-8">
                <div className="arc-iata-bar-text">
                  ARC and IATA have partnered to offer AirportIS so our
                  customers have the tools needed to devise an effective air
                  service development strategy.
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductText
          body={
            <>
              <hr className="airportis-overview-hr" />
              <div className="row">
                <div className="col-lg-12" style={{ textAlign: "center" }}>
                  <div className="airportis-overview-body-header">
                    AirportIS
                  </div>
                </div>{" "}
                <div className="col-lg-12">
                  <img
                    src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-screenshot.png"
                    alt="airportis-screenshot"
                    className="airportis-screenshot"
                  />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12" style={{ textAlign: "center" }}>
                    <div className="airportis-overview-secondary-header">
                      Use the platform to access:
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg">
                    <div class="airportis-overview-item">
                      <div className="access-item-icon-outer">
                        <img
                          className="access-item-icon"
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-1.png"
                          alt=""
                        />
                      </div>
                      <div className="access-item-header">
                        Historical passenger data including forward bookings
                      </div>
                    </div>
                  </div>
                  <div className="col-lg">
                    <div class="airportis-overview-item">
                      <div className="access-item-icon-outer">
                        <img
                          className="access-item-icon"
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-2.png"
                          alt=""
                        />
                      </div>
                      <div
                        className="access-item-header"
                        style={{ maxWidth: "180px" }}
                      >
                        Schedules and capacity information, updated weekly
                      </div>
                    </div>
                  </div>
                  <div className="col-lg">
                    <div class="airportis-overview-item">
                      <div className="access-item-icon-outer">
                        <img
                          className="access-item-icon"
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-3.png"
                          alt=""
                        />
                      </div>
                      <div className="access-item-header">
                        Global monthly passenger traffic flows including
                        complete Origin & Destination itineraries
                      </div>
                    </div>
                  </div>
                  <div className="col-lg">
                    <div class="airportis-overview-item">
                      <div className="access-item-icon-outer">
                        <img
                          className="access-item-icon"
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-4.png"
                          alt=""
                        />
                      </div>
                      <div className="access-item-header">
                        Airline details and point-of-sale information
                      </div>
                    </div>
                  </div>
                  <div className="col-lg">
                    <div class="airportis-overview-item">
                      <div className="access-item-icon-outer">
                        <img
                          className="access-item-icon"
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="access-item-header">
                        Class-of-service and average industry fares
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          className=""
          eyebrow="Overview"
          id="overview"
          subTitleClass=""
          subtitle="AirportIS is a user-friendly business intelligence tool, where comprehensive total market demand data can be bundled with OAG Analyzer's extensive supply data, for a complete picture across all geographic regions."
          title="Enhance Your Market Research with AirportIS and OAG Analyzer"
          titleClass="arc-airportis-header"
        />
        <ProductText
          body={
            <>
              <div className="row">
                <div className="col-lg-12" style={{ textAlign: "center" }}>
                  <div className="airportis-secondary-pt-header">
                    With access to AirportIS data, you will be able to:
                  </div>
                </div>{" "}
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="airportis-outer-icon">
                      <div className="airportis-inner-icon">
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-works-icon-1.png"
                          alt=""
                        />
                        <div className="airportis-inner-text">
                          Build credible <br /> business cases
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="airportis-outer-icon">
                      <div className="airportis-inner-icon">
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-works-icon-2.png"
                          alt=""
                        />
                        <div className="airportis-inner-text">
                          Evaluate new routes with <br /> key point-of-sale data
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="airportis-outer-icon">
                      <div className="airportis-inner-icon">
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-works-icon-3.png"
                          alt=""
                        />
                        <div className="airportis-inner-text">
                          Validate true market <br /> size dynamics
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="airportis-outer-icon">
                      <div className="airportis-inner-icon">
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-works-icon-4.png"
                          alt=""
                        />
                        <div className="airportis-inner-text">
                          Improve your in-house <br /> demand forecast
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="airportis-outer-icon">
                      <div className="airportis-inner-icon">
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-works-icon-5.png"
                          alt=""
                          height="135px"
                          width="135px"
                        />
                        <div className="airportis-inner-text">
                          Understand and target true <br /> high-yield traffic
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="airportis-outer-icon">
                      <div className="airportis-inner-icon">
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-works-icon-6.png"
                          alt=""
                        />
                        <div className="airportis-inner-text">
                          Determine <br />
                          market potential
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          className="airportis-bg"
          eyebrow="How It Works"
          id="how-it-works"
          subTitleClass=""
          subtitle="Access the industry’s most complete market coverage, including global travel agency sales, direct airline sales (including via the airlines’ own websites, airport ticket offices and reservation centers) and unique LCC data sources. Data from over 490 airlines is aggregated using advanced algorithms to allow you to analyze market potential and evaluate the performance of your existing air service."
          title={
            <>
              Build relationships <br /> with complete data.
            </>
          }
          titleClass="white arc-airportis-header"
        />
        <div id="resources" style={{ paddingTop: "60px;" }}>
          &nbsp;
        </div>
        <ProductLinks
          colClass="col-lg-4"
          prodLink={[
            {
              icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/ndc-icon-1.png",
              alt: "AirportIS Product Sheet",
              header: (
                <>
                  AirportIS <br />
                  Product Sheet
                </>
              ),
              copy: "",
              link: "https://www2.arccorp.com/globalassets/datasheets/AirportIS-ProductSheet.pdf",
              cta: "Download",
              direction: "down",
            },
            {
              icon: "https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-icon-2.png",
              alt: "AirportIS User Tutorials",
              header: (
                <>
                  AirportIS <br />
                  User Tutorials
                </>
              ),
              copy: "",
              link: "https://www.youtube.com/playlist?list=PLM2XOQXtRLMeMsvM1J2qr7BGyf2DjdoCa",
              cta: "Start Exploring",
              direction: "right",
            },
            {
              icon: "https://www2.arccorp.com/globalassets/support-icon-231x170.png",
              alt: "Contact Us",
              header: (
                <>
                    Contact Us
                    <br />
                    <br />
                  </>
              ),
              copy: "",
              link: "https://www2.arccorp.com/support-training/product-sales-request?Product=AirportIS",
              cta: "Learn More",
              direction: "right",
            },
          ]}
        />
        <ProductCallout
          cta="Get Started"
          ctaLink="https://www2.arccorp.com/support-training/product-sales-request?Product=AirportIS"
          subtitle=""
          title={
            <>
              <img
                style={{ paddingBottom: "30px" }}
                src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-arc-logo.png"
                alt="arc logo"
              />{" "}
              <br />
              Let’s bring the best airline <br />
              service to your community
            </>
          }
        />
      </div>
    );
  }
}

export default App;
