import './App.css';

//components
import CoverBanner from './components/CoverBanner';
import GridBox from './components/GridBox';

//images
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuLogo from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div>
      <div class="background-dark">
        <nav class="menu">
          <img class="image-menu-logo" src={ironhackLogo} alt="ironhack logo" />
          <img class="image-menu-hamburguer" src={menuLogo} alt="menu logo" />
        </nav>
        <CoverBanner />
      </div>
      <div className="boxes-colum">
        <GridBox textTitle="Declarative" textDescription="React makes it painless to create interactive UIs." src={icon1} />
        <GridBox textTitle="Components" textDescription="Build encapsulated components that manage their state." src={icon2} />
        <GridBox textTitle="Single-Way" textDescription="A set of inmutable values are passed to the component´s." src={icon3} />
        <GridBox textTitle="JSX" textDescription="Statically-typed designed to run on modern browsers." src={icon4} />
      </div>
    </div>
  );
}
export default App;