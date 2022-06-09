import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "./filter-reducer";
const FilterContext = createContext(null);
const intialObj = { sortByPriority: "", sortByTime: "" };
const FilterProvider = ({ children }) => {
  const [filter, filterDispatch] = useReducer(FilterReducer, {
    ...intialObj,
  });
  return (
    <FilterContext.Provider value={{ filter, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
