import { cn } from "@/lib/utils";

const HeaderPage = () => {
  return (
    <header className={cn("p-4 bg-blue-700 shadow-md")}>
      <div
        className={cn("container mx-auto flex justify-between items-center")}
      >
        <div className={cn("flex-grow")}></div>
        <div className={cn("flex items-center space-x-2")}>
          <img
            src="/src/assets/NeoLotex.png"
            alt="Neolotex Logo"
            className={cn("w-10 h-10 rounded-full bg-white p-1")}
          />
          <span className={cn("text-white text-2xl font-bold")}>Neolotex</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
