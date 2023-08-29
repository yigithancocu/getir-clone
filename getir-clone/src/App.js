import Adv from "./components/Adv";
import Category from "./components/Category";
import Footerr from "./components/Footerr";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mobile from "./components/Mobile";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Hero />
      <Category />
      <Mobile />
      <Adv />
      <Footerr />
    </div>
  );
}

export default App;
