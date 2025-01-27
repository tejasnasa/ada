// src/lib/monaco/theme.ts

// First, declare the monaco type on the window object
declare global {
  interface Window {
    monaco: typeof import("monaco-editor");
  }
}

import { editor } from "monaco-editor";

export const customDarkTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#0A0A0A",
    "editor.foreground": "#D4D4D4",
    "editor.lineHighlightBackground": "#2D2D2D",
    "editor.selectionBackground": "#264F78",
    "editor.inactiveSelectionBackground": "#3A3D41",
    "editorCursor.foreground": "#FFFFFF",
    "editorWhitespace.foreground": "#404040",
    "editorLineNumber.foreground": "#858585",
    "editor.selectionHighlightBackground": "#ADD6FF26",
  },
};

// Function to initialize theme
export function initializeMonacoTheme() {
  if (typeof window !== "undefined" && window.monaco) {
    window.monaco.editor.defineTheme("customDarkTheme", customDarkTheme);
  }
}
