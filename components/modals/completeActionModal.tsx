"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "../ui/button";
export default function CompleteActionModal({btnText, formIsValid, onSubmit}:{btnText:string, formIsValid:any, onSubmit?:any}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild className="flex" disabled={!formIsValid}><Button variant={"default"} >{btnText}</Button></AlertDialogTrigger>
                <AlertDialogContent className="max-w-xs">
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction type="submit" onClick={onSubmit}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
      </AlertDialog>
    );
}
  