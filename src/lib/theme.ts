declare global {
  interface Window {
    monaco: typeof import("monaco-editor");
  }
}

import { editor } from "monaco-editor";
import cobaltTheme from "@/lib/themes/Cobalt.json";
import draculaTheme from "@/lib/themes/Dracula.json";
import kuroirTheme from "@/lib/themes/Kuroir Theme.json";
import monokaiTheme from "@/lib/themes/Monokai.json";
import nightOwlTheme from "@/lib/themes/Night Owl.json";
import solarLightTheme from "@/lib/themes/Solarized-light.json";
import solarDarkTheme from "@/lib/themes/Solarized-dark.json";

const monokai = monokaiTheme as editor.IStandaloneThemeData;
const cobalt = cobaltTheme as editor.IStandaloneThemeData;
const dracula = draculaTheme as editor.IStandaloneThemeData;
const kuroir = kuroirTheme as editor.IStandaloneThemeData;
const nightOwl = nightOwlTheme as editor.IStandaloneThemeData;
const solarLight = solarLightTheme as editor.IStandaloneThemeData;
const solarDark = solarDarkTheme as editor.IStandaloneThemeData;

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

export const initializeTheme = (
  monaco: typeof import("c:/Projects/ada/node_modules/monaco-editor/esm/vs/editor/editor.api")
) => {
  monaco.editor.defineTheme("customDarkTheme", customDarkTheme);
  monaco.editor.defineTheme("monokai", monokai);
  monaco.editor.defineTheme("cobalt", cobalt);
  monaco.editor.defineTheme("dracula", dracula);
  monaco.editor.defineTheme("kuroir", kuroir);
  monaco.editor.defineTheme("nightOwl", nightOwl);
  monaco.editor.defineTheme("solarLight", solarLight);
  monaco.editor.defineTheme("solarDark", solarDark);
};
