"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { AUTOMATION_TRIGGERS } from "@/constants/automations"
import { useTrigger } from "@/hooks/use-automations"
import { useQueryAutomation } from "@/hooks/user-queries"
import { cn } from "@/lib/utils"
import TriggerButton from "../trigger-button"
import ActiveTrigger from "./active"
import Loader from "../../loader"
import Keywords from "./keywords"
import ThenAction from "../then/then-action"

type Props={
    id:string
}

const Trigger = ({id}:Props) => {
  
    const {data}=useQueryAutomation(id)
const{isPending,onSaveTrigger,onSetTrigger,types}=useTrigger(id)

if(data?.data && data?.data?.trigger.length > 0){
return(
    <div className="flex flex-col gap-y-6 items-center">
        <ActiveTrigger 
        type={data.data.trigger[0].type}
        keywords={data.data.keywords}
        />
        {data.data.trigger.length>1 &&(
            <>
            <div>
                <p>or</p>
                <Separator
                                orientation='horizontal'
                                className='border-muted border-[1px]'
                            />
            </div>
            <ActiveTrigger
                            type={data.data.trigger[1].type}
                            keywords={data.data.keywords}
                        />
            </>
        )

        }
{!data.data.listener && <ThenAction id={id} />}

    </div>
)
}

    return (
    
        <TriggerButton label="Add Trigger">
  <div className="flex flex-col gap-5 text-white">
  {AUTOMATION_TRIGGERS.map((trigger)=>(
    <div 
    onClick={()=>onSetTrigger(trigger.type)}
    className={cn("rounded-lg p-2 cursor-pointer",
        types?.find((t)=>t===trigger.type)?'bg-blue-600':''
    )}
    key={trigger.id}>
        <div className="flex items-center gap-2">
        <p>{trigger.icon}</p>
        <p>{trigger.type}</p>
        </div>
        <p className="text-sm">{trigger.label}</p>
        <p className="text-sm">{trigger.description}</p>

    </div>
   ))

   } 

   <Keywords id={id}/>
   <Button 
   onClick={onSaveTrigger}
   disabled={types?.length === 0}
   className="bg-gradient-to-br from-[#3352cc] font-medium text-white to-[#1c2d70]"
   >
    <Loader state={isPending}>Create Trigger</Loader>
   </Button>
  </div>
        </TriggerButton>
    
  );
}

export default Trigger;
