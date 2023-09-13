"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function EditBtn() {

    const router = useRouter();

    return (
        <Button onClick={() => router.push("/to-do/1/edit")} variant={"link"} >Edit</Button>
    );
  }