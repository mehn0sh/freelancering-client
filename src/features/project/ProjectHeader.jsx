import React from 'react'
import useMoveBack from '../../hooks/useMoveBack';
import { HiArrowRight}from 'react-icons/hi'
const ProjectHeader = ({project}) => {
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center gap-x-4 mb-6">
      <button onClick={moveBack} className="flex items-center gap-x-2">
        <HiArrowRight className="w-5 h-5 text-secondary-500" />
      </button>
      <h1 className="font-black text-secondary-700 text-xl max-sm:text-[12px]">
        لیست درخواست های {project.title}
      </h1>
    </div>  )
}

export default ProjectHeader