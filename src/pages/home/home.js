import { Link } from "react-router-dom";
import hero from "../../assets/images/business-360.png";
export const Home = () => {
  return (
    <div>
      <div className="flex-row flex-wrap justify-center flex-center mg-sm">
        <div className="padding-md flex-col width-xl">
          <h2 className="padding-md">The Pomodoro Technique</h2>
          <p className="width-sm">
            Beat procrastination and improve your focus one pomodoro at a time.
          </p>
          <Link to="/tasks">
            <button className="primary-btn mg-sm cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
        <div className="hero-img">
          <img className="img-responsive" src={hero} alt="banner" />
        </div>
      </div>
    </div>
  );
};
