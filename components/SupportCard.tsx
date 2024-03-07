
// import { ElementCardProps } from './types'

import { ElementCardProps } from "@/types";

interface SupportCardProps {
    element: ElementCardProps
}

const SupportCard = ({ element }: SupportCardProps) => {
    const { title, icon } = element
  return (
    <div className="p-6 w-48 h-40 border border-gray-800 flex flex-col items-center gap-2 md:w-56 md:h-48 cursor-pointer">
        
        {icon}
        <h3 className="text-xl">{title}</h3>
        <small>Lorem ipsum dolor sit amet, consectetur </small>
    </div>
  )
}

export default SupportCard;