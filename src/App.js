import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

const App = () => (
  <div className="App">
    <Dashboard />
    <About />
  </div>
);

export default App;
