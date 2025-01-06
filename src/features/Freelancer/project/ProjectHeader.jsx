import React from 'react'
import useCategories from '../../../hooks/useCategories'
import Filter from '../../../ui/Filter'
import FilterDropDown from '../../../ui/FilterDropDown'

const ProjectsHeader = () => {
 const {transformCategories}= useCategories()
 const sortOptions = [
  { label: "مرتب سازی (جدید ترین)", value: "latest" },
  { label: " مرتب سازی (قدیمی ترین)", value: "earliest" },
];
const StatusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8 max-sm:flex-col max-sm:items-start gap-y-2">
    <h1 className="text-lg font-bold">لیست پروژه ها</h1>
    <div className="flex items-center gap-x-8 max-sm:flex-col max-sm:items-start gap-y-3">
      <Filter options={StatusOptions} filterField="status"/>
        <FilterDropDown filterField={'category'} options={[{value:"ALL",label:"همه"},...transformCategories]}/>
        <FilterDropDown filterField={'sort'} options={sortOptions}/>
    </div>
    </div>
  )
}

export default ProjectsHeader