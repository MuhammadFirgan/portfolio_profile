import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-around">
      <div className='md:max-w-xl'>  
        <h1 className="text-3xl font-bold md:text-5xl">We are the brand <br/> builders for better <br /> tomorrow</h1>
        <p className="text-xs my-4">We dedicated to shaping the future through brand development. It communicates a sense of responsibility in constructing brands that contribute positively to tomorrow. The emphasis is on being more than just brand builders; it implies a commitment to creating brands with a purpose, aligned with values that foster a better and more sustainable future.</p>
      
        <div>
          <input type="text" className="px-4 py-2 max-w-[250px] border border-gray-900 text-sm" />
          <button className="px-4 py-2.5 text-sm bg-gray-900 text-gray-100">Join Now</button>
        </div>
        <small className="mt-2 mb-3 block">More than 100+ companies trusted us</small>
        <div className="flex gap-4 items-center grayscale">
          <Image src='/assets/google.png' alt='google' width={80} height={80} />
          <Image src='/assets/meta.png' alt='meta' width={80} height={80} />
          <Image src='/assets/microsoft.png' alt='microsoft' width={80} height={80} />
          <Image src='/assets/pepsi.png' alt='pepsi' width={80} height={80} />
        </div>
      </div>
      <Image src='/assets/hero.svg' alt="hero image" width={400} height={400} className="md:w-[500px] md:h-[500px]" />
    </div>
  )
}
