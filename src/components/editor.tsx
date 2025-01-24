"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import Axios from "axios";
import "./editor.css"
import spinner from "./spinner.svg";

function Eeditor() {
  const [userCode, setUserCode] = useState<string | undefined>(``);
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  function compile() {
    setLoading(true);
    if (userCode === ``) {
      return;
    }

    Axios.post(`http://localhost:8000/compile`, {
      code: userCode,
      language: "c++",
      input: userInput,
    })
      .then((res) => {
        setUserOutput(res.data.stdout || res.data.stderr);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setUserOutput(
          "Error: " + (err.response ? err.response.data.error : err.message)
        );
        setLoading(false);
      });
  }

  function clearOutput() {
    setUserOutput("");
  }

  return (
    <div className="App">
      <div className="main">
        <div className="left-container">
          <Editor
            options={options}
            height="calc(100vh - 50px)"
            width="100%"
            theme="vs-dark"
            language="cpp"
            defaultLanguage="cpp"
            defaultValue="# Enter your code here"
            onChange={(value) => {
              setUserCode(value);
            }}
          />
          <button className="run-btn" onClick={() => compile()}>
            Run
          </button>
        </div>
        <div className="right-container">
          <h4>Input:</h4>
          <div className="input-box">
            <textarea
              id="code-inp"
              onChange={(e) => setUserInput(e.target.value)}
            ></textarea>
          </div>
          <h4>Output:</h4>
          {loading ? (
            <div className="spinner-box">
              <img src={spinner} alt="Loading..." />
            </div>
          ) : (
            <div className="output-box">
              <pre>{userOutput}</pre>
              <button
                onClick={() => {
                  clearOutput();
                }}
                className="clear-btn"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Eeditor;
