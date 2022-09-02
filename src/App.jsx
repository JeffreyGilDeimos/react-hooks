import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const inputRef = useRef(null);
  const prevName = useRef("");

  useEffect(() => {
    console.log("TESTING");
    inputRef.current.focus();
  });

  useEffect(() => {
    prevName.current = input;
  }, [input]);

  useEffect(() => {
    prevName.current = input;
  }, [name]);

  return (
    <div className="App" style={{ padding: "100px" }}>
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        style={{ height: "100px", width: "500px", fontSize: "50px" }}
        ref={inputRef}
      />
      <div style={{ fontSize: "50px" }}>
        My name is <span style={{ color: "blue" }}>{input}</span> and it used to
        be <span style={{ color: "red" }}>{prevName.current}</span>
      </div>
      <div>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          style={{ height: "100px", width: "500px", fontSize: "50px" }}
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default App;
