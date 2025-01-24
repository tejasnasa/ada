"use client";

import EditorBlock from "@/components/main/editor";
import InputOutput from "@/components/main/input-output";
import Axios from "axios";
import { useState } from "react";

export default function page() {
  const [userCode, setUserCode] = useState<string | undefined>(``);
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [loading, setLoading] = useState(false);
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
    <main className="p-4 h-dvh flex">
      <EditorBlock compile={compile} setUserCode={setUserCode} />
      <InputOutput
        setUserInput={setUserInput}
        userOutput={userOutput}
        loading={loading}
      />
    </main>
  );
}
