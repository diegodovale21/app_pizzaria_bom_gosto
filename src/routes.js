import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import Menu from "./pages/Menu";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

const Rotas = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
};
export default Rotas;
