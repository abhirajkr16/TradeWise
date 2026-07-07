import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p className="text-muted">
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/smallcaseLogo.png"
                        alt="Smallcase"
                        style={{ width: "55%", height: "60px", objectFit: "contain" }}
                    />
                    <p className="small text-muted mt-3">
                        Thematic investment platform
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/streakLogo.png"
                        alt="Streak"
                        style={{ width: "75%", height: "60px", objectFit: "contain" }}
                    />
                    <p className="small text-muted mt-3">
                        Algo & strategy platform
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/sensibullLogo.svg"
                        alt="Sensibull"
                        style={{ width: "55%", height: "60px", objectFit: "contain" }}
                    />
                    <p className="small text-muted mt-3">
                        Options trading platform
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/zerodhaFundhouse.png"
                        alt="Fund House"
                        style={{ width: "55%", height: "60px", objectFit: "contain" }}
                    />
                    <p className="small text-muted mt-3">
                        Asset management
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/goldenpiLogo.png"
                        alt="GoldenPi"
                        style={{ width: "55%", height: "60px", objectFit: "contain" }}
                    />
                    <p className="small text-muted mt-3">
                        Bonds investment platform
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img
                        src="media/images/dittoLogo.png"
                        alt="Ditto"
                        style={{ width: "65%", height: "60px", objectFit: "contain" }}
                    />
                    <p className="small text-muted mt-3">
                        Insurance platform
                    </p>
                </div>

                <button
                    className="btn btn-primary fs-5 mt-4 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;