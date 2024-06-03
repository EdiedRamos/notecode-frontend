import { MonacoEditor } from "@/components";
import { NoteCodeLogo } from "@/assets";

export const Content = () => {
  return (
    <div className="flex flex-col items-center">
      <NoteCodeLogo />
      <p className="mt-3 md:mt-8 text-cs-200 font-bold">Create & Share</p>
      <p className="mt-1 md:mt-3 text-cs-300 font-bold">Your Code easily</p>
      <div className="mt-3 md:mt-9 mb-20">
        <MonacoEditor />
      </div>
    </div>
  );
};
