import SupportCard from './SupportCard'
import { FaBookAtlas, FaRocketchat, FaPeopleGroup } from "react-icons/fa6";

export default function Support() {
  return (
    <div className='text-center mt-16'>
        <h1 className='text-2xl font-bold'>How Can We Help you?</h1>
        <input className="w-full px-4 py-2 border border-gray-900 text-sm my-8 md:max-w-xl block mx-auto" placeholder="Enter your email..."/>
        <span>Or choose an options</span>
        <div className="flex flex-wrap justify-center gap-5 mt-10 md:gap-8">

            <SupportCard element={{ title: "Guide", icon: <FaBookAtlas className='text-5xl' /> }} />
            <SupportCard element={{ title: "Faq", icon: <FaRocketchat className='text-5xl' /> }} />
            <SupportCard element={{ title: "Community", icon: <FaPeopleGroup className='text-5xl' /> }} />
        </div>
    </div>
  )
}
