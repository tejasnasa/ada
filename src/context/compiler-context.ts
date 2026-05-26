import codeTypeArray, { pythonDefaultCode } from "@/lib/data";
import Axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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

type LanguageType = "cpp" | "python";

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
  language: LanguageType;
  languageCodes: Record<LanguageType, string>;
  setUserCode: (code: string) => void;
  setUserInput: (input: string) => void;
  setUserOutput: (output: { code: string; isError: boolean }) => void;
  setLoading: (loading: boolean) => void;
  compileCode: (value: number) => Promise<void>;
  setTheme: (theme: ThemeType) => void;
  setFont: (value: number) => void;
  setCodingType: (value: number) => void;
  setLanguage: (value: LanguageType) => void;
}

export const useCompilerStore = create<CompilerState>()(
  persist(
    (set, get) => ({
      language: "cpp",
      userCode: codeTypeArray[0].defaultCode,
      languageCodes: {
        cpp: codeTypeArray[0].defaultCode,
        python: pythonDefaultCode,
      },
      userInput: "",
      userOutput: {
        code: "",
        isError: false,
      },
      loading: false,
      theme: "customDarkTheme",
      font: 20,
      codingType: 0,

      setUserCode: (code) => {
        const { language, languageCodes } = get();
        set({
          userCode: code,
          languageCodes: { ...languageCodes, [language]: code },
        });
      },
      setUserInput: (input) => set({ userInput: input }),
      setUserOutput: (output) => set({ userOutput: output }),
      setLoading: (loading) => set({ loading }),
      setTheme: (theme) => set({ theme }),
      setFont: (value) => set({ font: value }),
      setCodingType: (value) => set({ codingType: value }),
      setLanguage: (value) => {
        const { languageCodes } = get();
        const nextCode =
          languageCodes[value] ??
          (value === "cpp" ? codeTypeArray[0].defaultCode : pythonDefaultCode);
        set({ language: value, userCode: nextCode });
      },

      compileCode: async (codingType: number) => {
        const { userCode, userInput, setUserOutput, setLoading, language } =
          get();

        setLoading(true);
        try {
          const isCpp = language === "cpp";
          const codeContent = isCpp
            ? codeTypeArray[codingType].preCode +
              userCode +
              codeTypeArray[codingType].postCode
            : userCode;
          const config = {
            method: "post",
            url: "https://emkc.org/api/v2/piston/execute",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              language: isCpp ? "c++" : "python",
              version: isCpp ? "10.2.0" : "3.10.0",
              files: [
                {
                  name: isCpp ? "main.cpp" : "main.py",
                  content: codeContent,
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
    }),
    {
      name: "compiler-state",
    }
  )
);
