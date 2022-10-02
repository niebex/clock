import Clock from "./components/Clock";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid App">
      <div className={"row"}>
        <CustomNavbar />
      </div>
      <div className={"row my-4"}>
        <div className={"col-xs-12 col-sm-12 col-md-4 col-lg-3 mx-auto"}>
          <Clock />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
