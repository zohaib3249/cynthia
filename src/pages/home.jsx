
import * as React from "react";

import NavBar from "./nav";

function Home() {


    return (
        <div className="">
            <NavBar />


            <div className="login-page container  d-flex flex-column  align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="mb-5"></div>

                    <span className="cynthia text-center ">Roadmap</span>
                    <div className="mb-4"></div>

                    <a href=""><h3> <span className="text-center ">Welcome on Cynthia</span></h3></a>
                    <span className="slogan text-center ">

        <br />
                        Your custom roadmap will be displayed here. <br />
                        <br />
                        Before working on your roadmap, please add features you plan to <br /> develop in the “Features” tab and information about team <br /> members that will work on these features in the “Team” tab.

                    </span>

                </div>




            </div>



        </div>



    )
}

export default Home;