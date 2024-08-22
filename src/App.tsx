import "./App.css";
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button
          className=""
          color="red"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Click me!
        </Button>
      </header>
    </div>
  );
}

export default App;
