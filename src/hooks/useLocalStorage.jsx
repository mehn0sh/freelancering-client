import { useEffect, useState } from "react";

export default function useLocalStorage( key, initial ) {
  const [value, setvalue] = useState(() => {
    const storedValue = localStorage.getItem(key) || null;
    return storedValue ? JSON.parse(storedValue) : true;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setvalue];
}

