import { isLanguage, type Language } from "@/types";

interface Props {
  handleLanguage: (newLanguage: Language) => void;
  language: string;
}

interface Options {
  value: string;
  content: string;
}

const options: Options[] = [
  { value: "html", content: "HTML" },
  { value: "css", content: "CSS" },
  { value: "javascript", content: "Javascript" },
  { value: "typescript", content: "Typescript" },
  { value: "json", content: "Json" },
];

export const EditorLanguages = ({ handleLanguage, language }: Props) => {
  return (
    <select
      className="p-2 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-500 text-white rounded-lg"
      name="theme"
      value={language}
      onChange={(info) => {
        const { value } = info.target;
        if (!isLanguage(value)) return;
        handleLanguage(value);
      }}
    >
      {options.map(({ value, content }) => (
        <option key={value} value={value}>
          {content}
        </option>
      ))}
    </select>
  );
};
