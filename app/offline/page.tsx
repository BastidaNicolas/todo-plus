import Logo from "@/components/SVGs/logo";
import GoBack from "@/components/buttons/goBackBtn";

export default function Page() {

    return (
      <div className="max-w-sm m-auto flex flex-col justify-center items-center min-h-screen">
        <Logo className="w-16 h-16" />
        <div className="py-10"></div>
        <h1 className="font-bold text-base text-center">You are offline and this page isn’t cached</h1>
        <div className="py-9"></div>
        <GoBack/>
      </div>
    );
  }
  