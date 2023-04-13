import React, { Component } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
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
            { title: "How It Works", url: "#" },
          ]}
          contactUs="Contact Us"
          rightLink=""
        />
        <div className="">
          <ProductJumbo
            backgroundImage="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-jumbo.png"
            title={
              <>
                Air Traffic data <br /> you can rely on.
              </>
            }
            subtitle={
              <>
                Grow passenger numbers, increase revenue and expand your market
                by accessing
                <span>
                  the most comprehensive and reliable traffic data available on
                  the market.
                </span>
              </>
            }
            ctaLink=""
            width="100%"
          />
        </div>

        <div className="container">
          <div className="arc-iata-bar">
            <div className="row">
              <div className="col">
                <img
                  className="arc-iata-bar-logo"
                  src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-arc-iata.png"
                  alt="arc-iata logo"
                />
              </div>
              <div className="col my-auto">
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
                  />
                </div>
              </div>
              <div className="secondary-container">
                <div className="row">
                  <div className="col-lg-12" style={{ textAlign: "center" }}>
                    <div className="airportis-overview-secondary-header">
                      Use the platform to access:
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 mx-auto">
                    <hr className="access-item-hr" />
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <hr className="access-item-hr" />
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <hr className="access-item-hr" />
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <hr className="access-item-hr" />
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <hr className="access-item-hr" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-icon-outer">
                      <img
                        className="access-item-icon"
                        src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-icon-outer">
                      <img
                        className="access-item-icon"
                        src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-icon-outer">
                      <img
                        className="access-item-icon"
                        src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-icon-outer">
                      <img
                        className="access-item-icon"
                        src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-4.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 my-auto mx-auto">
                    <div className="access-item-icon-outer">
                      <img
                        className="access-item-icon"
                        src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-5.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-header">
                      Historical passenger data and future schedules
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-header">
                      Schedules and capacity information, <br /> updated weekly
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-header">
                      Global monthly passenger traffic flows, including complete
                      itineraries
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-header">
                      Airline details and <br /> point-of-sale information
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-header">
                      Class-of-service and average industry fares
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          className=""
          eyebrow="Overview"
          id="#overview"
          subTitleClass=""
          subtitle="AirportIS is a user-friendly business intelligence tool, where comprehensive total market demand data can be bundled with OAG Analyzer's extensive supply data, for a complete pictur across all geographic regions."
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
                        <div className="airportis-inner-text">Build credible <br/> business cases</div>
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
                        <div className="airportis-inner-text">Evaluate new routes with <br /> key point-of-sale data</div>
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
                        <div className="airportis-inner-text">Validate true market <br /> size dynamics</div>
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
                        <div className="airportis-inner-text">Improve your in-house <br /> demand forecast</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="airportis-outer-icon">
                      <div className="airportis-inner-icon">
                        <img
                          src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-works-icon-5.png"
                          alt=""
                        />
                        <div className="airportis-inner-text">Understand and target true <br /> high-yeild traffic</div>
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
                        <div className="airportis-inner-text">Benchmark your airport and <br /> determine market share</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          className="bg-color-black airportis-bg"
          eyebrow="How It Works"
          id="#"
          subTitleClass=""
          subtitle="AirportIS empowers you with the credibility to build trusted partnerships to grow your  business. Access the industry’s most complete market coverage, including global  indirect travel agency sales, direct airline sales (via the airlines’ own websites, airport  ticket offices and reservation centers), and unique LCC data sources. Data from over  490 airlines is aggregated using advanced algorithms to allow you to analyze market  potential and evaluate the performance of your existing air service."
          title={
            <>
              Build Relationships <br /> with complete data.
            </>
          }
          titleClass="white arc-airportis-header"
        />
        <ProductCallout
          cta="Let's Get Started"
          ctaLink="https://arccorp.com/"
          subtitle="Build the very best growth strategies and business cases for your airport."
          title={
            <>
              <img
              style={{paddingBottom:"30px"}}
                src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-arc-logo.png"
                alt="arc logo"
              />{" "}
              <br /> Get Started
            </>
          }
        />
      </div>
    );
  }
}

export default App;
