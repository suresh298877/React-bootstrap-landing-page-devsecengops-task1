import { Link } from "react-router-dom";
import "./Demos.css"


const Demos = () => {
    return (
        <div id="demos" className="cnt-fluid" style={{ position: "relative", zIndex: 1 }}>
            <div className=" demos">
                <h3 className="demosTitle">Demos</h3>
                <div className="row">
                    <div className="col-12 mt-3 col-md-4 shadow">
                        <h4 className="text-center mt-2">01</h4>
                        <h5 className="text-center opacity-50 mb-5">VERSION</h5>
                        <Link to="/index01">
                            <img src="images/preview-01.png" style={{ width: "80%", display: "block", marginRight: "auto", marginLeft: "auto" }}></img>
                        </Link>
                    </div>
                    <div className="col-12 mt-3 col-md-4 shadow">
                        <h4 className="text-center mt-2">02</h4>
                        <h5 className="text-center opacity-50 mb-5">VERSION</h5>
                        <a>
                            <img src="images/preview-02.png" style={{ width: "80%", display: "block", marginRight: "auto", marginLeft: "auto" }}></img>
                        </a>
                    </div>
                    <div className="col-12 mt-3 col-md-4 shadow">
                        <h4 className="text-center mt-2">03</h4>
                        <h5 className="text-center opacity-50 mb-5">VERSION</h5>
                        <a>
                            <img src="images/preview-03.png" style={{ width: "80%", display: "block", marginRight: "auto", marginLeft: "auto" }}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demos;