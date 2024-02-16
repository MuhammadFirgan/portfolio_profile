import Image from "next/image";

export default function Project() {
  return (
    <div className='mt-14'>
        <div className="text-center md:mt-8 md:mx-auto md:max-w-sm">
            <h1 className="text-2xl font-bold ">Our Recent Work</h1>
            <small className='block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla similique,magnam illo dicta ratione iusto consectetur voluptatem dolorum quo.</small>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">

            <Image src='/assets/1.jpg' width={380} height={400}  alt="first project"  />
            <Image src='/assets/2.jpg' width={380} height={400}  alt="secont project"  />
            <Image src='/assets/3.jpg' width={380} height={400}  alt="third project"  />
            <Image src='/assets/4.jpg' width={380} height={400}  alt="fourth project"  />
            <Image src='/assets/5.jpg' width={380} height={400}  alt="fifth project"  />
            <Image src='/assets/6.jpg' width={380} height={400}  alt="sixth project"  />
        </div>
    </div>
  )
}
