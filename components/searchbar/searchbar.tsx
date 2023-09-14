import { Command, CommandInput } from "../ui/command";

export default function Searchbar() {
    return (
    <Command className="rounded-lg border transition-all duration-300 focus-within:shadow-md">
        <CommandInput className="h-10" placeholder="Search..." />
    </Command>
    );
}
  