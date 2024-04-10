'use client'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { PinContainer } from "@/components/ui/3d-pin";
import projectData from "@/data/aim_project.json";
import Image from 'next/image';
function page() {
    return (
      <div className="min-h-screen bg-black py-12 pt-36">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All Projects ({projectData.projects.length})</h1>  
          <div className="flex flex-wrap justify-center">
          <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="AIM Club Robot Project"
        href=""
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          AIM Club Robot Project
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            An innovative project demonstrating the creation of dynamic AI Bot.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
  <Image
    src="https://i.pinimg.com/564x/d0/fd/68/d0fd686d9f97f4c8ee97e6f722f06ccc.jpg" // replace with your image path
    alt="Description of Image" // replace with your image description
    width={500} // replace with your image width
    height={300} // replace with your image height
  />
</div>
        </div>
      </PinContainer>
    </div>
              {projectData.projects.map((project, index) => (
                  <CardContainer key={index} className="inter-var m-4">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={project.title}
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    <a href={project.linkOnline ?? ''} target="_blank" rel="noopener noreferrer">
  <CardItem
    translateZ={20}
    as="button"
    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
  >
    Try now →
  </CardItem>
</a>
<a href={project.linkGithub} target="_blank" rel="noopener noreferrer">
    <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
    >
        code
    </CardItem>
</a>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
          </div>  
      </div>
    )
  }
  
  export default page