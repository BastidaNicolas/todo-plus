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
                <AlertDialogAction>Logout</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
      </>
    );
}
  