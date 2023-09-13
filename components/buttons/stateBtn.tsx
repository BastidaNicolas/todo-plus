"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function StateBtn({text, onClick, variant}:{text:string, onClick?:string, variant:"default"|"destructive"|"ghost"|"link"|"outline"|"secondary"}) {

    const router = useRouter();

    return (
        <Button onClick={() => onClick} variant={variant} >{text}</Button>
    );
  }