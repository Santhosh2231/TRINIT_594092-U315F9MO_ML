import React from 'react'
import content from '../utils/content';

const About = () => {
    const {aboutus} = content;
  return (
    <section id="about">
      <div className="md:container px-5 py-14">
        <h2 className="title md:text-4xl" data-aos="fade-down">About AgroVision</h2>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
        
            <div
              data-aos="fade-up"
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none">

              <h6 className="my-4">{aboutus.content1}</h6>
              <h6 className="my-4">{aboutus.content2}</h6>
              <h6 className="my-4">{aboutus.content3}</h6>
              <h6 className="my-4">{aboutus.content4}</h6>
            </div>
       
        </div>
      </div>
    </section>
  )
}

export default About