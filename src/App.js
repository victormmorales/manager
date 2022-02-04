import Jugadores from "./components/Jugadores";
import Team from "./components/Team";
import "./styles/styles.scss";
import logoJuventus from "./assets/juve.png";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

// json-server db.json --port 4000

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Manager</h1>

      <img src={logoJuventus} alt="logo juventus" />
      <div className="logo"></div>
      <Jugadores />
      <Team />
    </main>
  </Provider>
);

export default App;
