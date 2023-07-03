const { createContext, useState  } = require("react");

export const ValueContext = createContext()

const ValueProvider = ({children}) => {
    const [isLoading,setIsLoading] = useState(false)
    const value = {
     isLoading,
     setIsLoading
    }
 
    return(
        <ValueContext.Provider value={value}>
             {children}
        </ValueContext.Provider>
    )
}

export default  ValueProvider