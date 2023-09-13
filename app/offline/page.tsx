import Logo from "@/components/SVGs/logo";
import GoBack from "@/components/buttons/goBackBtn";

export default function Page() {

    return (
      <main className="max-w-sm m-auto flex flex-col justify-center items-center min-h-screen">
        <Logo className="w-16 h-16" />
        <div className="pb-10"></div>
        <h1 className="font-bold text-base text-center">You are offline. You can only access cached data.</h1>
        <div className="pb-8"></div>
        <GoBack/>
      </main>
    );
  }
  