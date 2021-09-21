import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import PlayerPage from "./pages/PlayerPage";
import BalancePage from "./pages/BalancePage";

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Link to='/'>Balance</Link>
      </div>
      <div>
        <Link to='/players'>Player Page</Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <Switch>
          <Route path='/players' component={PlayerPage} />
          <Route path='/' component={BalancePage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
