import Jugadores from "./components/Jugadores";
import Team from "./components/Team";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Manager</h1>
      <Jugadores />
      <Team />
    </main>
  </Provider>
);

export default App;
