import "./App.css";
// import CitySearch from "./Components/CitySearch";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import VacationBooking from "./Components/VacationBooking";

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <VacationBooking/>
      {/* <CitySearch/> */}
      <Footer/>
    </>
  );
}

export default App;
