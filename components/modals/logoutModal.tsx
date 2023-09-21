import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
export default function LogoutModal() {
    return (
        <>
            <AlertDialogTrigger className="flex w-full" ><LogOut className="h-4 mr-2" />Log out</AlertDialogTrigger>
            <AlertDialogContent className="max-w-xs" >
                <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => signOut({ callbackUrl: "/login" })}>Logout</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
      </>
    );
}
  