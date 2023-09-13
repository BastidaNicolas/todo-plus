"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function NavBtn({route, variant, text, className}:{route:string, variant:"default"|"destructive"|"ghost"|"link"|"outline"|"secondary", text:string, className?:string}) {

    const router = useRouter();

    return (
        <Button onClick={() => router.push(route)} variant={variant} className={className}>{text}</Button>
    );
  }