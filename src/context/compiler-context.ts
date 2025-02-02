import codeTypeArray from "@/lib/data";
import Axios from "axios";
import { create } from "zustand";

type ThemeType =
  | "vs"
  | "customDarkTheme"
  | "hc-black"
  | "monokai"
  | "dracula"
  | "cobalt"
  | "kuroir"
  | "nightOwl"
  | "solarDark"
  | "solarLight";

interface CompilerState {
  userCode: string;
  userInput: string;
  userOutput: {
    code: string;
    isError: boolean;
  };
  theme: ThemeType;
  loading: boolean;
  font: number;
  codingType: number;
  setUserCode: (code: string) => void;
  setUserInput: (input: string) => void;
  setUserOutput: (output: { code: string; isError: boolean }) => void;
  setLoading: (loading: boolean) => void;
  compileCode: (value: number) => Promise<void>;
  setTheme: (theme: ThemeType) => void;
  setFont: (value: number) => void;
  setCodingType: (value: number) => void;
}

export const useCompilerStore = create<CompilerState>((set, get) => ({
  userCode: codeTypeArray[0].defaultCode,
  userInput: "",
  userOutput: {
    code: "",
    isError: false,
  },
  loading: false,
  theme: "customDarkTheme",
  font: 20,
  codingType: 0,

  setUserCode: (code) => set({ userCode: code }),
  setUserInput: (input) => set({ userInput: input }),
  setUserOutput: (output) => set({ userOutput: output }),
  setLoading: (loading) => set({ loading }),
  setTheme: (theme) => set({ theme }),
  setFont: (value) => set({ font: value }),
  setCodingType: (value) => set({ codingType: value }),

  compileCode: async (codingType: number) => {
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
          files: [
            {
              name: "main",
              content:
                codeTypeArray[codingType].preCode +
                userCode +
                codeTypeArray[codingType].postCode,
            },
          ],
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  },
}));
