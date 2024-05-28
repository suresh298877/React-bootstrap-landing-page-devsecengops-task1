import "./App.css";
import Demos from "./components/Demos";
import Features from "./components/Features";
import Header from "./components/Header";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div style={{ zIndex: 2, position: "relative" }}>

        <Demos />
        <Features />
        <div className="container-fluid">
          <div className=" text-center">
            <a className="btn btn-primary btn-lg m-5 ts-width__300px" style={{ borderRadius: "50px", width: "240px", height: "60px", backgroundColor: "#f26d7d", border: 0 }}>
              <h3 style={{ marginTop: "8px" }} className="mb-0">Buy Now</h3>
            </a>
          </div>
        </div>
        <div className="container-fluid">
          <div className=" text-center p-4">
            <small>© 2018 ThemeStarz, All Rights Reserved</small>

          </div>
        </div>
      </div>

    </div>
  )
}

export default App;