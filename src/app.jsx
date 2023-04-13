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
          contactUs="Learn More"
          rightLink=""
        />
        <ProductJumbo
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-jumbo.png"
          title={
            <>
              Air Traffic data <br /> you can rely on.
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
          ctaLink=""
          width="100%"
        />

        <div className="container">
          <div className="arc-iata-bar">
            <div className="row">
              <div className="col">
                <img
                  src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-arc-iata.png"
                  alt="arc-iata logo"
                />
              </div>
              <div className="col">
                <div>
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
              <hr />
              <div className="row">
                <div className="col-lg-12" style={{ textAlign: "center" }}>
                  AirportIS
                </div>{" "}
                <div className="col-lg-12">
                  <img
                    src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-screenshot.png"
                    alt="airportis-screenshot"
                  />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12" style={{ textAlign: "center" }}>
                    Use the platform to access:
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
                    <img
                      className="access-item-icon"
                      src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-1.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <img
                      className="access-item-icon"
                      src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-2.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <img
                      className="access-item-icon"
                      src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-3.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <img
                      className="access-item-icon"
                      src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-4.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <img
                      className="access-item-icon"
                      src="https://www2.arccorp.com/globalassets/products--participation/airportis/airportis-overview-icon-5.png"
                      alt=""
                    />
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
                      Historical passenger data and future schedules
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-header">
                      Historical passenger data and future schedules
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-header">
                      Historical passenger data and future schedules
                    </div>
                  </div>
                  <div className="col-lg-2 mx-auto">
                    <div className="access-item-header">
                      Historical passenger data and future schedules
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
          titleClass=""
        />
      </div>
    );
  }
}

export default App;
