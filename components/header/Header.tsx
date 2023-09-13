'use client'
import { usePathname } from "next/navigation";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { CalendarClock, CalendarDays, LogOut, Settings } from "lucide-react";
  
export default function Header() {

    const lol = usePathname();

    // console.log(lol)

    return (
      <div className="max-w-sm m-auto py-2 flex items-center justify-between">
        <Command className="rounded-lg border transition-all duration-300 focus-within:shadow-sm max-w-xs">
      <CommandInput className="h-10" placeholder="Search..." />
      {/* <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
      </CommandList> */}
        </Command>
        <DropdownMenu>
  <DropdownMenuTrigger><Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar></DropdownMenuTrigger>
  <DropdownMenuContent  align="end" className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><CalendarDays className="h-4 mr-2"/>List</DropdownMenuItem>
    <DropdownMenuItem><CalendarClock className="h-4 mr-2"/>History</DropdownMenuItem>
    <DropdownMenuItem><Settings className="h-4 mr-2"/>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem><LogOut className="h-4 mr-2" />Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      </div>
    );

}
  