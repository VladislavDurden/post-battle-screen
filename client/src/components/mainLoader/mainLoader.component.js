import './mainLoader.styles.scss';

const MainLoader = () =>
  <div className="MainLoader">
    <div className="MainLoader__scene">
      <div className="MainLoader__shadow"/>
      <div className="MainLoader__jumper">
        <div className="MainLoader__spinner">
          <div className="MainLoader__scaler">
            <div className="MainLoader__loader">
              <div className="MainLoader__cuboid">
                <div className="MainLoader__cuboid-side"/>
                <div className="MainLoader__cuboid-side"/>
                <div className="MainLoader__cuboid-side"/>
                <div className="MainLoader__cuboid-side"/>
                <div className="MainLoader__cuboid-side"/>
                <div className="MainLoader__cuboid-side"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

  export default MainLoader;