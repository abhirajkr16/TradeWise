import React from "react";

function Hero() {
    return (
        <section id="supportHero">
            <div className="container">
                <div
                    id="supportWrapper"
                    className="d-flex justify-content-between align-items-center"
                >
                    <h2>Support Portal</h2>

                    <a href="">Track Tickets</a>
                </div>

                <div className="row align-items-start">
                    <div className="col-lg-7 mr-5">

                        <h1>
                            Search for an answer or browse help topics to create a ticket
                        </h1>

                        <input
                            type="text"
                            placeholder="Eg. how do I activate F&O"
                        />

                        <div className="supportLinks">
                            <a href="">Track account opening</a>
                            <a href="">Track segment activation</a>
                            <a href="">Intraday margins</a>
                            <a href="">Kite user manual</a>
                        </div>

                    </div>


                    <div className="col-lg-5 ">

                        <h2 className="featuredHeading">
                            Featured
                        </h2>

                        <ol>
                            <li>
                                <a href="">
                                    Current Takeovers and Delisting - January 2024
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Latest Intraday leverages - MIS & CO
                                </a>
                            </li>
                        </ol>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;