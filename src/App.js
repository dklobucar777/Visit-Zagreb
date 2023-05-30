import './App.css';
import Navbar_ from './components/Navbar/Navbar.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import { Routes, Route} from "react-router-dom";
import PlaceToVisit from './pages/PlacesToVisit/PlacesToVisit.tsx';
import PlacesToEat from './pages/PlacesToEat/PlacesToEat.tsx';
import PlacesToStay from './pages/PlacesToStay/PlacesToStay.tsx';
import PublicTransport from './pages/PublicTransport/PublicTransport.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';
import SignIn from './pages/SignIn/SignIn.tsx';

function App() {
  return (
    <div className="App">
      <Navbar_ />
      <Routes>
        <Route exact path = "/" element = {<HomePage></HomePage>}></Route>
        <Route exact path = "/placetovisit" element = {<PlaceToVisit></PlaceToVisit>}></Route>
        <Route exact path = "/placestoeat" element = {<PlacesToEat></PlacesToEat>}></Route>
        <Route exact path = "/placestostay" element = {<PlacesToStay></PlacesToStay>}></Route>
        <Route exact path = "/publictransport" element = {<PublicTransport></PublicTransport>}></Route>
        <Route exact path = "/signup" element = {<SignUp></SignUp>}></Route>
        <Route exact path = "/signin" element = {<SignIn></SignIn>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
