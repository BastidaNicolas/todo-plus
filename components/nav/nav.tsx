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
import LogoutModal from "../modals/logoutModal";
import { AlertDialog } from "../ui/alert-dialog";

export default function Nav({session}:{session?:{name?:string | null | undefined, email?:string | null | undefined, image?:string | null | undefined}}) {

    const router = useRouter();

    return (
      <AlertDialog>
          <DropdownMenu modal={false}>
          <DropdownMenuTrigger><Avatar>
                <AvatarImage src={session?.image || "/manifest/icon-192x192.png"} />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar></DropdownMenuTrigger>
          <DropdownMenuContent  align="end" className="w-56">
            <DropdownMenuLabel>{session?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/")} ><CalendarDays className="h-4 mr-2"/>To-Do</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/history")} ><CalendarClock className="h-4 mr-2"/>History</DropdownMenuItem>
            <DropdownMenuItem ><Settings className="h-4 mr-2"/>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}><LogoutModal/></DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
    </AlertDialog>
    );
}
  