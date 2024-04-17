/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode } from "react";
import { DataSchema } from "../constants/";
import useData from "../hooks/useData";
import useMessage from "antd/es/message/useMessage";

interface ContextProvider{
    children:ReactNode
}

export const DataContext = createContext(DataSchema)

export default function DataContextProvider(props:ContextProvider){
    const [a,context] = useMessage()
    const dataInfo = useData()
    return (
        <DataContext.Provider value={dataInfo}>
            {context}
            {props.children}
        </DataContext.Provider>
    )
};