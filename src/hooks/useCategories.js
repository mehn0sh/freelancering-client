import { useQuery } from "@tanstack/react-query";
import { getCategoryAPI } from "../services/categoryService";

export default function useCategories() {
  const {data,isLoading}= useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryAPI,
    retry:false,
  });
 
  const { categories = [] } = data || {};

  const newCategories = categories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const transformCategories = categories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));
  return { isLoading, newCategories, transformCategories };
}
