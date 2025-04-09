import { BlueAddIcon } from "@/icons"
import PopOver from "../../popover"

type Props = {
  label: string
  children: React.ReactNode
}

const TriggerButton = ({ label,children }: Props) => {
    return (
     <PopOver className='w-[400px]' trigger={
      <div>
         <BlueAddIcon />
         <p className='text-[#768bdd] font-bold'>{label}</p>
      </div>
     }>
      {children}
     </PopOver>
    )
}

export default TriggerButton