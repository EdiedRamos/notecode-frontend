import { Editor } from "@monaco-editor/react";
import { EditorLanguages } from "./EditorLanguages";
import { EditorTheme } from "./EditorTheme";
import { Language, type Theme } from "@/types";
import { useState } from "react";

const DEVAULT_CONTENT = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible"content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visitdevChallengs.io for moreprojects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`;

export const MonacoEditor = () => {
  const [theme, setTheme] = useState<Theme>("vs-dark");
  const [language, setLanguage] = useState<Language>("html");

  const handleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const handleLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div
      className={`w-[90vw] lg:w-[880px] p-4 rounded-xl ${
        theme === "light" ? "bg-white" : "bg-[#1e1e1e]"
      }`}
    >
      <Editor
        theme={theme}
        height={"720px"}
        width={"100%"}
        language={language}
        defaultValue={DEVAULT_CONTENT}
      />
      <div className="mt-3 flex gap-3">
        <EditorLanguages handleLanguage={handleLanguage} />
        <EditorTheme handleTheme={handleTheme} />
      </div>
    </div>
  );
};
