// import content
import { createElement, useEffect,useState } from "react";
import  content  from "../utils/content";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
// import About from "./About";


const Home = () => {
  const { hero } = content;
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;

    setCount(1);
  }, [count]);

  return (
    <>
    <section id="home" className="overflow-hidden max-w-full bg-slate-200">
      <div className="pt-10 relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">

        <div className="pb-16 px-6 pt-5 md:w-[50%]" data-aos="fade-down">
        <h1 className="name text-teal-600 font-bold md:my-10">
            {hero.firstName}{" "}
            {/* <span className="text-dark_primary flex-wrap">{hero.LastName}</span> */}
          </h1>
          <h6 className="text-dark_primary name  text-3xl font-Inria flex-wrap">{hero.LastName}</h6>
          <br />

          <div className="flex flex-row flex-wrap justify-center mt-24">
          <button className='border-4 rounded-lg text-white bg-teal-600 p-2 ' ><h4 className='text-2xl font-Inria text-white'>
          <Link to="/prediction" >Our Solutions</Link>
          </h4></button>
         
          </div>
          
        </div>

        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="object-cover h-96 w-80 rounded-full"
          />
        </div>

      </div>
    </section>
    {/* <About /> */}
    </>
  );
};

export default Home;
