"use client"
import NavBtn from "@/components/buttons/navBtn";
import StateBtn from "@/components/buttons/stateBtn";
import { useState } from "react";

export default function Page() {
  const [tempState, setTempState] = useState("")

    const handleFailure = () => {
      setTempState("Failed");
    }
    const handleSuccess = () => {
      setTempState("Completed")
    }

    return (
      <main className="max-w-sm m-auto flex flex-col px-2 pt-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-3xl" >To-Do title</h2>
          <small className="font-medium text-sm">14:00, May 23 2030 <span className={`${tempState === "Failed" ? "text-red-600":"text-green-600"}`} >{tempState}</span></small>
          <p className="text-base whitespace-pre-line">
            {`The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.\n\nPine apples.`}
          </p>
        </div>
        <div className={`flex justify-end pt-6 gap-4`}>
          <NavBtn variant="link" text="Edit" route="/to-do/1/edit"/>
          {!tempState ?
            <>
              <StateBtn onClick={handleFailure} text="I Failed :(" variant="destructive" />
              <StateBtn onClick={handleSuccess} text="Completed" variant="default" />
            </>
            :
            <></>
          }
        </div>
      </main>
    );
}
  