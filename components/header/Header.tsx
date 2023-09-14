'use client'
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import Searchbar from "../searchbar/searchbar";
import Nav from "../nav/nav";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
  
export default function Header() {

    const pathName = usePathname();
    const param = useParams();
    const router = useRouter();

    if(pathName === "/to-do" || pathName === "/to-do/history"){
    return (
      <div className="max-w-sm m-auto py-2 flex items-center justify-between gap-3 px-2">
        <Searchbar/>
        <Nav/>
      </div>
    );
}

return (
    <div className="max-w-sm m-auto min-h-[56px] py-2 flex items-center relative">
      <Button size={"icon"} variant={"link"} className="absolute" onClick={() => router.back()}><ChevronLeft className="h-6 w-6" /></Button>
      {pathName === "/subscription" && <h1 className="text-xl font-bold w-full text-center">Subscription</h1>}
      {pathName === `/subscription/${param.productCode}/buy-todos` && <h1 className="text-xl font-bold w-full text-center">To-do Qty</h1>}
      {pathName === "/to-do/create" && <h1 className="text-xl font-bold w-full text-center">Create To-do</h1>}
      {pathName === `/to-do/${param.id}` && <h1 className="text-xl font-bold w-full text-center">To-do</h1>}
      {pathName === `/to-do/${param.id}/edit` && <h1 className="text-xl font-bold w-full text-center">Edit To-do</h1>}
    </div>
  );
}
  