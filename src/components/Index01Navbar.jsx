import "./Index01Navbar.css"
const Index01Navbar = () => {
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="images/logo-w.png"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "rgba(255,255,255,0.5), fontWeight: 500" }} href="#">How It Looks</a>
                            </li>
                            <li>
                                <a href="#" style={{ color: "rgba(255,255,255,0.5), fontWeight: 500" }} className="nav-link">About</a>
                            </li>
                            <li>
                                <a href="#" style={{ color: "rgba(255,255,255,0.5), fontWeight: 500" }} className="nav-link">Pricing</a>
                            </li>
                            <li>
                                <a href="#" style={{ color: "rgba(255,255,255,0.5), fontWeight: 500" }} className="nav-link">Out Clients</a>
                            </li>
                            <li>
                                <a href="#" style={{ color: "rgba(255,255,255,0.5), fontWeight: 500" }} className="nav-link">Gallery</a>
                            </li>
                            <li>
                                <a href="#" style={{ color: "rgba(255,255,255,0.5), fontWeight: 500" }} className="nav-link">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="nav-item nav-link ts-scroll btn btn-primary btn-sm text-white ms-3 px-3 ts-width__auto rounded-pill" style={{ background: "#f26d7d" }}>Download</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Index01Navbar;