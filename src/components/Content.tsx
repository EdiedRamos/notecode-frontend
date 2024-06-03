import { NoteCodeLogo } from "@/assets";

export const Content = () => {
  return (
    <div className="flex flex-col items-center">
      <NoteCodeLogo />
      <p className="mt-3 md:mt-9 text-cs-200 font-bold">Create & Share</p>
      <p className="mt-1 md:mt-3 text-cs-300 font-bold">Your Code easily</p>
    </div>
  );
};
