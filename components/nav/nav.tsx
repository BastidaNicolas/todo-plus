"use client"
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
import { useRouter } from "next/navigation";

export default function Nav() {

    const router = useRouter();

    return (
        <DropdownMenu>
        <DropdownMenuTrigger><Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
              </Avatar></DropdownMenuTrigger>
        <DropdownMenuContent  align="end" className="w-56">
          <DropdownMenuLabel>myemail@gmail.com</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/to-do")} ><CalendarDays className="h-4 mr-2"/>To-Do</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/to-do/history")} ><CalendarClock className="h-4 mr-2"/>History</DropdownMenuItem>
          <DropdownMenuItem ><Settings className="h-4 mr-2"/>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/")} ><LogOut className="h-4 mr-2" />Log out</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    );
}
  