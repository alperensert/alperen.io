import React, { createContext, FC, PropsWithChildren, useEffect } from "react"
import { useLocalStorage } from "../hooks"

interface ThemeContextInstance {
    currentMode?: alperen.ThemeMode
    setMode: React.Dispatch<React.SetStateAction<alperen.ThemeMode | undefined>>
}

export const ThemeContext = createContext<ThemeContextInstance>({
    currentMode: "dark",
    setMode: () => {
        return
    },
})

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [currentMode, setMode] = useLocalStorage<alperen.ThemeMode>(
        "theme_mode",
        "dark",
        true
    )

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-q-theme",
            currentMode ?? "dark"
        )
    }, [currentMode])

    return (
        <ThemeContext.Provider value={{ currentMode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
