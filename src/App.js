import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Router>
				<Navbar></Navbar>
				<div className="my-container">
					<Switch>
						<Route exact path="/" component={Movies} />
						<Route exact path="/movies" component={Movies} />
						<Route exact path="/movies/:id" component={Details} />
						<Route exact path="/favorites" component={Favorites} />
						<Route exact path="*" component={NotFound} />
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
