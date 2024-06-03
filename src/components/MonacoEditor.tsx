import { Editor } from "@monaco-editor/react";
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
  const [theme, setTheme] = useState<"light" | "vs-dark">("vs-dark");

  return (
    <div
      className={`w-[90vw] lg:w-[880px] p-4 rounded-xl ${
        theme === "light" ? "bg-white" : "bg-[#1e1e1e]"
      }`}
    >
      <Editor
        theme={theme}
        height={"100vh"}
        width={"100%"}
        defaultLanguage="html"
        defaultValue={DEVAULT_CONTENT}
      />
      <div className="mt-3">
        <select
          className="p-2 outline-none focus:ring-2 focus:ring-blue-500 bg-slate-500 text-white rounded-lg"
          name="theme"
          onChange={(info) => {
            setTheme(info.target.value === "light" ? "light" : "vs-dark");
          }}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </div>
  );
};
