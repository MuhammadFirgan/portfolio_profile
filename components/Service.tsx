import Image from "next/image";
import ServiceJob from "./ServiceJob";
import { FaNetworkWired, FaGaugeHigh, FaHeadset } from "react-icons/fa6";

export default function Service() {
  return (
    <div className="flex flex-col items-center mt-10 md:justify-around md:flex-row">
        <Image src='/assets/service.svg' alt="hero image" width={400} height={400} className="md:w-[500px] md:h-[500px]" />
        <div className="md:max-w-md">
            <h1 className="text-2xl font-bold">Why you should work <br /> with us</h1>
            <ServiceJob element={{ 
              title: "Unique Work Style", 
              icon: <FaNetworkWired className='text-4xl' />,
              desc: 'desc' 
            }} />
            <ServiceJob element={{ 
              title: "Speed and Flexibility", 
              icon: <FaGaugeHigh className='text-4xl' />, 
              desc: 'desc' 
            }} />
            <ServiceJob element={{ 
              title: "24/7 Service", 
              icon: <FaHeadset className='text-4xl' />, 
              desc: 'desc' 
            }} />
            
        </div>
    </div>
  )
}
