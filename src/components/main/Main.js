import Footer from "../footer/Footer";
import Landing from "../landing/Landing";
import AboutUs from "../aboutUs/AboutUs";

function Main(){
  return (
    <main className="margin-control ">
      <Landing />
      <AboutUs />
      <Footer />
    </main>
  );
}

export default Main;