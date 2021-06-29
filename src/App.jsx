import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Home } from "./module/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
