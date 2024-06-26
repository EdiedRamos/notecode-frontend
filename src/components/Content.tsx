import { MonacoEditor } from "@/components";
import { NoteCodeLogo } from "@/assets";

export const Content = () => {
  return (
    <div className="flex flex-col items-center">
      <NoteCodeLogo />
      <p className="mt-3 md:mt-8 text-cs-200 font-medium text-cc-black">
        Create & Share
      </p>
      <p className="mt-1 text-cs-300 font-medium text-cc-black">
        Your Code easily
      </p>
      <div className="mt-3 md:mt-8 mb-20">
        <MonacoEditor />
      </div>
    </div>
  );
};
