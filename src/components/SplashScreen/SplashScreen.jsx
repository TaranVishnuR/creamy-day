import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="brand-wrapper">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>

        <div className="content">
          <h1>Creamy Day</h1>
          <div className="divider"></div>
          <p>Melt The Moment</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;