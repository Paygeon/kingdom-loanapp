import { createContext, ReactNode } from "react";
import { DataSchema } from "../constants/";
import useData from "../hooks/useData";

interface ContextProvider{
    children:ReactNode
}

export const DataContext = createContext(DataSchema)

export default function DataContextProvider(props:ContextProvider){
    const dataInfo = useData()
    return (
        <DataContext.Provider value={dataInfo}>
            {props.children}
        </DataContext.Provider>
    )
};