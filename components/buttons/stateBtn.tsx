"use client"
import { Button } from "@/components/ui/button";

export default function StateBtn({text, onClick, variant}:{text:string, onClick?:any, variant:"default"|"destructive"|"ghost"|"link"|"outline"|"secondary"}) {

    return (
        <Button onClick={onClick} variant={variant} >{text}</Button>
    );
  }