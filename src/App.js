import './App.css';

import { Navbar } from './components/exports';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container/exports';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs /> 
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
