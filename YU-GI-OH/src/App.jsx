import "./App.css";
import "./conponents/Header";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import Should_you_buy from "./conponents/Should_you_buy";
import Description_Page from "./conponents/Description_Page"

function App() {
  return (
    <>
      <Header />
      <Description_Page />
      <Should_you_buy />
      <Footer />      
    </>
  );
}

export default App;
