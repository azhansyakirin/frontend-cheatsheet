import { useState, useEffect, createContext } from "react"

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState();

    useEffect(() => {
        fetch("/api/config/index.json")
            .then(res => res.json())
            .then(data => { setConfig(data) })
            .catch(err => console.error(err))
    }, [])

    return (
        <ConfigContext.Provider value={{ config }}>
            {children}
        </ConfigContext.Provider>
    )
}