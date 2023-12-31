'use client'
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import Searchbar from "../searchbar/searchbar";
import Nav from "../nav/nav";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
  
export default function Header() {

    const pathName = usePathname();
    const param = useParams();
    const router = useRouter();
    const session = useSession();

    const handleBackButton = () => {
      if(pathName === "/subscription") return signOut({callbackUrl:"/login"});
      return router.back();
    }

    console.log("HEADER CLIENT SIDE SESSION" ,session)

    if(pathName === "/login"){
      return (
        <></>
      );
    }

    if(pathName === "/" || pathName === "/history"){
      return (
        <div className="max-w-sm m-auto py-2 flex items-center justify-between gap-3 px-2">
          <Searchbar/>
          <Nav session={session.data?.user}/>
        </div>
      );
    }

return (
    <div className="max-w-sm m-auto min-h-[56px] py-2 flex items-center relative">
      <Button size={"icon"} variant={"link"} className="absolute" onClick={handleBackButton}><ChevronLeft className="h-6 w-6" /></Button>
      {pathName === "/subscription" && <h1 className="text-xl font-bold w-full text-center">Subscription</h1>}
      {pathName === `/subscription/${param.productCode}/buy-todos` && <h1 className="text-xl font-bold w-full text-center">To-do Qty</h1>}
      {pathName === "/create" && <h1 className="text-xl font-bold w-full text-center">Create To-do</h1>}
      {pathName === `/${param.id}` && <h1 className="text-xl font-bold w-full text-center">To-do</h1>}
      {pathName === `/${param.id}/edit` && <h1 className="text-xl font-bold w-full text-center">Edit To-do</h1>}
    </div>
  );
}
  