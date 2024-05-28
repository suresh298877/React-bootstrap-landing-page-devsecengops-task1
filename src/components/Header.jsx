import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <img src="images/bg-girl-01.jpg" className="background" />
            <div className="foreground">
                <h3 className="title h3 pb-0">AppStorm</h3>
                <div className="contentbtns">
                    <h1
                        className="h1 text-center text-white mb-0"
                        style={{ fontSize: "5vw", fontWeight: 700, marginBottom: "38px" }}
                    >
                        Creative App Landing Page
                    </h1>
                    <div className="btnGroup text-center row justify-content-center">
                        <div className="col-12 col-md-4 text-center text-md-end">
                            <button className="btn btn-lg btn1 text-white">Buy Now</button>
                        </div>
                        <div className="col-12 col-md-4 text-center text-md-start">
                            <a href="#demos">

                                <button className="btn btn-lg btn2 text-black">Demos</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Demos /> */}
            <div>
                <img src="images/wave-static-02.svg" alt="wave-violet" className="wave-violet" style={{ height: "30vh" }} />
                <img src="images/wave-static-01.svg" alt="wave-white" className="wave-white" style={{ height: "30vh" }} />
            </div>
        </div>
    );
};

export default Header;
