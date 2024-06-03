import { HeroBackground } from "@/assets";

interface Props {
  children?: React.ReactNode;
}

export const MainBackground = ({ children }: Props) => {
  return (
    <div className="relative bg-violet-500 min-h-[100vh]">
      <div className="select-none h-[700px]">
        <img
          className="bg-violet-500 object-cover object-bottom w-full h-full"
          src={HeroBackground}
        />
      </div>
      {children && (
        <div className="absolute left-[50%] -translate-x-[50%] top-10 w-full">
          {children}
        </div>
      )}
    </div>
  );
};
