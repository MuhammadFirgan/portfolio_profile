import Link from "next/link";
import { FaArrowRight  } from "react-icons/fa6";
import { ElementCardProps } from '../types'

interface AboutCardProps {
  element: ElementCardProps;
}

const AboutCard = ({ element } : AboutCardProps) => {
  const { title, icon, desc } = element
  return (
    <div className="text-left max-w-[380px] border border-gray-900 p-5 group hover:bg-gray-900 hover:text-gray-100 cursor-pointer">
      <div className="p-2 bg-gray-900 text-gray-100 w-10 group-hover:bg-gray-100 group-hover:text-gray-900">
        {icon}
      </div>
      <h3 className="text-lg mt-5 font-semibold">{title}</h3>
      <span className="block text-xs mt-3 mb-6">{desc}</span>
      <Link href=''>
        <span className="flex items-center text-xs font-bold gap-8">Read More <FaArrowRight /></span>
      </Link>
    </div>
  )
}

export default AboutCard
