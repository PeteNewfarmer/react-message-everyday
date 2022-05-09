import React from "react"
import { ButtonProps } from "./interface"

export const Button: React.FunctionComponent<ButtonProps> = ({ children, onClick, type, className }) => {
    const type_ = type || "default"
    
    return(
        <button className={`btn btn-${type_} ${className || ""}`} onClick={onClick}>{ children }</button>
    )
}
