import hero from "../../assets/images/business-360.png";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
export const Home = () => {
  return (
  <div>
    <Navbar/>
    <div className="flex-row flex-wrap justify-center flex-center mg-sm">
      <div className="padding-md flex-col width-xl">
        <h2 className="padding-md">The Pomodoro Technique</h2>
        <p className="width-sm">
          Beat procrastination and improve your focus one pomodoro at a time.
        </p>
        <button className="primary-btn mg-sm text-center">Get started</button>
      </div>
      <div className="hero-img">
        <img className="img-responsive" src={hero} alt="banner" />
      </div>
    </div>
    <Footer/>
  </div>
  );
};