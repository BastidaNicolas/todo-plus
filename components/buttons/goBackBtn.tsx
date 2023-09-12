"use client"
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function GoBack() {

    const router = useRouter();

    return (
        <Button onClick={() => router.back()} ><ChevronLeft className="h-4 w-4 mr-2" /> Go Back</Button>
    );
  }