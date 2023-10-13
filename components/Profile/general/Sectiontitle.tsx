import React from 'react'

interface SectiontitleProps {
    title: string,
}


const Sectiontitle: React.FC<SectiontitleProps> = (props) =>  {
  return (
    <h1 className="text-[27px] font-outfit font-bold text-black text-center lg:text-3xl">
        {props.title}
  </h1>
  )
}

export default Sectiontitle