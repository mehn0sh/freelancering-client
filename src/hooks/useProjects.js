import { useQuery } from "@tanstack/react-query";
import { getProjectsAPI } from "../services/projectService";
import {useLocation} from 'react-router-dom'
import queryString from 'query-string';

export default function useProjects() {
  const {search}=useLocation()
  const queryOBJ = queryString.parse(location.search)
  const { data, isLoading } = useQuery({
    queryKey:['projects',queryOBJ],
    queryFn:()=> getProjectsAPI(search),
  });
  const { projects } = data || {};
  return { projects, isLoading };
}
