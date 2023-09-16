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
export default function CompleteActionModal({btnText, formIsValid, onSubmit, variant}:{btnText:string, formIsValid:any, onSubmit?:any, variant?:"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild className="flex" disabled={!formIsValid}><Button variant={variant} >{btnText}</Button></AlertDialogTrigger>
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
  