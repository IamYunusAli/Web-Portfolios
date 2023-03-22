import React from 'react'
import natasha from '../assets/natasha.png'
import project1 from '../assets/p1.png'
import project2 from '../assets/p2.png'
import project3 from '../assets/p3.png'

const Hero = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between md:m-10 m-5 py-10">
            <div className='md:w-[50%] flex justify-center'>
                <h1 className='font-bold text-9xl transform -rotate-90 h-9 relative left-[-195px] top-[50%] z-10 '>Natasha</h1>
                <img className='max-h-[80%] flex self-center absolute' src={natasha} alt="" />
            </div>
            <div className='md:w-[50%]  flex flex-col gap-8 md:p-5 max-h-full'>
                <h1 className="text-4xl font-bold">Why Me</h1>
                <p className="">
                Whether article spirits new her covered hastily sitting her.
                 Money witty books nor son add. Chicken age had evening
                 believe but proceed pretend mrs.
                <br></br>
                <br></br>
                 At missed advice my it no sister. Miss told ham dull knew see she spot near can.
                  Spirit her entire her called. Detract yet delight written farther his general.
                </p>
                <button className="p-3 rounded-sm w-40 border-2 border-stone-900">schedule a call</button>
                <p className='text-2xl font-bold'>
                    Latest work
                </p>
                <div className='flex md:flex-row flex-col gap-5 overflow-scroll scrollbar-hide'>
                    <img className='' src={project1} alt="" />
                    <img className='' src={project2} alt="" />
                    <img className='' src={project3} alt="" />
                    </div>
            </div>
        </div>
    )
}


export default Hero
