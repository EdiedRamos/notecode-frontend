import type { Theme } from "@/types";

interface Props {
  handleTheme: (theme: Theme) => void;
  theme: string;
}

interface Options {
  value: string;
  content: string;
}

const options: Options[] = [
  { value: "vs-dark", content: "Dark" },
  { value: "light", content: "Light" },
];

export const EditorTheme = ({ handleTheme, theme }: Props) => {
  return (
    <select
      className="p-2 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-500 text-white rounded-lg"
      name="theme"
      onChange={(info) => {
        handleTheme(info.target.value === "light" ? "light" : "vs-dark");
      }}
    >
      {options.map(({ value, content }) => (
        <option selected={value === theme} key={value} value={value}>
          {content}
        </option>
      ))}
    </select>
  );
};
