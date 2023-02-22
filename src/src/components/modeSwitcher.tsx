import React from "react"
import { IoMoon, IoSunny } from "react-icons/io5"
import { useTheme } from "../hooks"

export const ModeSwitcher = () => {
    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))
    const { currentMode, setMode } = useTheme()
    const toggle = async () => {
        document.body.classList.add("transition-colors")
        setMode(currentMode === "dark" ? "light" : "dark")
        delay(300).finally(() =>
            document.body.classList.remove("transition-colors")
        )
    }
    return (
        <>
            <IoMoon
                onClick={toggle}
                className="hidden h-5 cursor-pointer text-2xl transition-colors hover:text-primary dark:block"
            />
            <IoSunny
                onClick={toggle}
                className="block h-5 cursor-pointer text-2xl transition-colors hover:text-primary dark:hidden"
            />
        </>
    )
}
