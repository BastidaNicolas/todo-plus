"use client"
import NavBtn from "@/components/buttons/navBtn";
import CompleteActionModal from "@/components/modals/completeActionModal";
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
          <NavBtn variant="link" text="Edit" route="/1/edit"/>
          {!tempState ?
            <>
              <CompleteActionModal btnText="I Failed :(" onSubmit={handleFailure} formIsValid={true} variant="destructive"/>
              <CompleteActionModal btnText="Completed" onSubmit={handleSuccess} formIsValid={true}/>
            </>
            :
            <></>
          }
        </div>
      </main>
    );
}
  