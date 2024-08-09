import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopeContext = createContext(null)

const ShopeContextProvider = (props) => {
    const contextValue = { all_product };
    return (
        <ShopeContext.Provider value={contextValue}>
            {props.children}
        </ShopeContext.Provider>
    )
}

export default ShopeContextProvider;