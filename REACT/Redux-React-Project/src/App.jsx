import "./App.css";
import Todo from "./Component/Todo";
import {Provider} from "react-redux";
import { Store } from "./App/Store";


function App() {
  return (
    <>
    <Provider store={Store}>
      <Todo/>
    </Provider>
    </>
  )
}

export default App;
