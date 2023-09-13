"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function CreateBtn() {

    const router = useRouter();

    return (
        <Button onClick={() => router.push("/to-do/create")} className="fixed bottom-4 right-2" >Create To-Do</Button>
    );
  }