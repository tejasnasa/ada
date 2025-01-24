import Axios from "axios";
import { create } from "zustand";

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
  userCode: "// Enter your code here",
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
      const res = await Axios.post(`http://localhost:8000/compile`, {
        code: userCode,
        language: "c++",
        input: userInput,
      });

      const data = {
        code: res.data.stdout || res.data.stderr,
        isError: res.data.stderr ? true : false,
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
