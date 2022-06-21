import "./App.scss";
import Form from "./components/Form";
import Context from "./components/Context";

const App = () => {
  return (
    <Context>
      <div className="App">
        <h1>TODO LIST</h1>
        <Form />
      </div>
    </Context>
  );
};

export default App;
