import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import light from '../assets/light.png';
import { Gradient } from "./design/Services";
import bg from "../components/CoordiCard/CO-ORDINATOR _bg.png";

const Benefits = () => {
  return (
    <Section id="committee">
      <div className="container relative z-2">
        <h1 className="text-5xl sm:text-6xl font-black uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-neonGraffiti mb-12">
  Organizing Committee
</h1>

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {benefits.map((item) => (
             <a href={item.link} key={item.id}>
           <div
           className="block border rounded-[64px] border-[#ffed26] relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] w-full sm:w-96"
           style={{
            //  backgroundImage: `url(${item.backgroundUrl})`,
           }}
           
         >
           <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
             <h5 className="h5 mb-5 font-medium">{item.title}</h5>
             <p className="body-2 mb-6 text-n-3">{item.text}</p>
             <div className="flex items-center mt-auto ">
               <img
                 src={item.iconUrl}
                 width={48}
                 height={48}
                 alt={item.title}
               />
               <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                 Explore more 
               </p>
               <Arrow />
             </div>
           </div>
         
           {item.light && <GradientLight />}
         
           <div
             className="absolute inset-0.5 z-10"
             style={{ clipPath: "url(#benefits)" }}
           >
             <div className="absolute inset-0 opacity-40 transition-opacity z-0 ">
               {item.imageUrl && (
                 <img
                   src={bg}
                   width={380}
                   height={362}
                   alt={item.title}
                   className="w-full h-full object-cover border-r-50 rounded-[64px]"
                 />
               )}
             </div>
           </div>
         
           {/* <ClipPath /> */}
         </div>
         </a>
          ))}
          
        </div>

      </div>
              <Gradient/>
    </Section>
  );
};

export default Benefits;
