import AboutCard from "./AboutCard";
import { FaLaptopCode, FaMobileScreen, FaPenNib } from "react-icons/fa6";

export default function About() {
  return (
    <div className='text-center mt-14 md:w-full'>
      <div className="mt-8 md:mx-auto md:max-w-sm">
        <h1 className="text-2xl font-bold ">Our best service for you</h1>
        <small className='block'>We are dedicated to delivering top-notch solutions through our experienced team and premium services tailored to diverse needs</small>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-4 mt-5">        
        <AboutCard element={{
          title: "Website Developer", 
          icon: 
          <FaLaptopCode className='text-2xl'/>,
          desc: "Our web development team brings forth creative and responsive digital solutions. From crafting captivating websites to optimizing user experiences, we are dedicated to meeting your unique needs. With a focus on modern design and robust functionality, we're ready to help you build an impressive online presence. Explore how our web development services can elevate your digital projects to the next level."
        }} />
        <AboutCard element={{
          title: "Android Developer", 
          icon: 
          <FaMobileScreen className='text-2xl'/>,
          desc: "Our skilled team is dedicated to creating innovative and customized mobile applications tailored to your specific needs. From concept to execution, we specialize in crafting user-friendly and feature-rich Android apps. Whether you're looking to launch a new app or enhance an existing one, our Android development service ensures cutting-edge solutions for a seamless and engaging mobile experience. Discover how our expertise can transform your ideas into successful Android applications on our Service Page."
        }} />
        <AboutCard element={{
          title: "Copywriting", 
          icon: 
          <FaPenNib className='text-2xl'/>,
          desc: "Unleash the power of words with our expert copywriting team. We specialize in crafting compelling and persuasive content that captivates your audience. From website copy to marketing materials, we ensure every word resonates with your brand's voice and message. Let us enhance your communication strategy with engaging and impactful copy that drives results. Explore our Copywriting Service to discover how we can elevate your brand through the art of words."
        }} />
       
      </div>
    </div>
  )
}
