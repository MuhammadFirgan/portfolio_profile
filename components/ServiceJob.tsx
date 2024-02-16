
import { ElementCardProps } from "@/types";

interface ServiceJobProps {
  element: ElementCardProps
}

const ServiceJob = ({ element }: ServiceJobProps) => {
  const { title, icon } = element
  return (
    <div className="flex items-center gap-5 my-3">
        <div className="p-2 bg-gray-900 text-gray-100 w-13 h-13 ">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold">{title}</h4>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit distinctio debitis praesentium rem, fugiat quos</small>
        </div>
    </div>
  )
}

export default ServiceJob