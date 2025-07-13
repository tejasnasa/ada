import { editor, KeyMod, KeyCode } from "monaco-editor";

export const initializeShortcutKeys = (
  editorInstance: editor.IStandaloneCodeEditor,
  compile: (value: number) => Promise<void>,
  val: number
) => {
  editorInstance.addCommand(KeyMod.CtrlCmd | KeyCode.Enter, () => {
    compile(val);
  });
};
