import Axios from "axios";
import { create } from "zustand";

const defaultValue = `#include <iostream>
using namespace std;

int main(){

}`

interface CompilerState {
  userCode: string;
  userInput: string;
  userOutput: {
    code: string;
    isError: boolean;
  };
  loading: boolean;
  setUserCode: (code: string) => void;
  setUserInput: (input: string) => void;
  setUserOutput: (output: { code: string; isError: boolean }) => void;
  setLoading: (loading: boolean) => void;
  compileCode: () => Promise<void>;
}

export const useCompilerStore = create<CompilerState>((set, get) => ({
  userCode: defaultValue,
  userInput: "",
  userOutput: {
    code: "",
    isError: false,
  },
  loading: false,

  setUserCode: (code) => set({ userCode: code }),
  setUserInput: (input) => set({ userInput: input }),
  setUserOutput: (output) => set({ userOutput: output }),
  setLoading: (loading) => set({ loading }),

  compileCode: async () => {
    const { userCode, userInput, setUserOutput, setLoading } = get();

    setLoading(true);
    try {
      const config = {
        method: "post",
        url: "https://emkc.org/api/v2/piston/execute",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          language: "c++",
          version: "10.2.0",
          files: [{ name: "main", content: userCode }],
          stdin: userInput,
        },
      };

      const res = await Axios(config);

      const data = {
        code: res.data.run.stdout || res.data.run.stderr,
        isError: res.data.run.stderr ? true : false,
      };

      setUserOutput(data);
    } catch (error) {
      const data = {
        code: `Error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        isError: true,
      };
      setUserOutput(data);
    } finally {
      setLoading(false);
    }
  },
}));
