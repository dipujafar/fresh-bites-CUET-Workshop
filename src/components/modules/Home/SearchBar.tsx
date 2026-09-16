import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="py-3.5 px-2 bg-white rounded-xl shadow-2xl shadow-black/10 flex items-center w-[95%]">
      <Search size={16} color="#907067" className="ml-3" />
      <Input
        placeholder="Search for sushi, burgers, poke bowls..."
        className="border-none focus-visible:ring-0 text-base placeholder:text-[#907067] text-[#907067] "
      />
    </div>
  );
}
