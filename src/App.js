import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store";
import Auth from "./components/Auth";
import Header from "./components/Header";

function App() {
  return (
    <Provider store ={store}>
<Header/>
      <Counter />
      <Auth/>
    </Provider>
  );
}

export default App;
