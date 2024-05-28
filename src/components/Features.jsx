import "./Features.css"
const Features = () => {
    return (
        <div className="features-section" style={{ zIndex: 1 }}>
            <div className="">
                <h3 className="features-title text-center">Features</h3>
                <div className="row">
                    <div className="col-12 col-md-4 shadow mt-3">
                        <img src="images/icon-preview-03.png" className="mb-5" style={{ width: "68px", height: "96px", display: "block", marginRight: "auto", marginLeft: "auto" }}></img>
                        <h4 className="mb-3 text-center" style={{ fontSize: "20px", fontWeight: 700 }}>Mobile First</h4>
                        <p className="mb-3 text-center">We have developed this template with mobile first approach</p>
                    </div>
                    <div className="col-12 col-md-4 shadow mt-3">
                        <img src="images/icon-preview-02.png" className="mb-5" style={{ width: "68px", height: "96px", display: "block", marginRight: "auto", marginLeft: "auto" }}></img>
                        <h4 className="mb-3 text-center" style={{ fontSize: "20px", fontWeight: 700 }}>Extensive Documentation</h4>
                        <p className="mb-3 text-center">
                            Documentation will help you with template editing
                        </p>
                    </div>
                    <div className="col-12 col-md-4 shadow mt-3">
                        <img src="images/icon-preview-01.png" className="mb-5" style={{ width: "68px", height: "96px", display: "block", marginRight: "auto", marginLeft: "auto" }}></img>
                        <h4 className="mb-3 text-center" style={{ fontSize: "20px", fontWeight: 700 }}>Responsive</h4>
                        <p className="mb-3 text-center">
                            Template looks beautiful on every device
                        </p>
                    </div>
                    {/* <div className="col-12 col-md-4 shadow">
                        <img src="images/preview-02.png" style={{ width: "100%" }}></img>
                    </div>
                    <div className="col-12 col-md-4 shadow">
                        <img src="images/preview-03.png" style={{ width: "100%" }}></img>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Features;