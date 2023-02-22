import React, { useEffect, useRef } from "react"
import { IoArrowUpOutline } from "react-icons/io5"
export const ScrollToTop = () => {
    const scrollTopRef = useRef<HTMLDivElement>(null)
    const handleScroll = () => {
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            scrollTopRef.current?.classList.remove("hidden")
            scrollTopRef.current?.classList.add("fixed")
        } else {
            scrollTopRef.current?.classList.add("hidden")
            scrollTopRef.current?.classList.remove("fixed")
        }
    }
    useEffect(() => {
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    const scrollTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
    return (
        <div className="bottom-0 right-0" ref={scrollTopRef}>
            <div className="m-6 cursor-pointer p-3" onClick={scrollTop}>
                <IoArrowUpOutline className="text-xl text-black dark:text-white" />
            </div>
        </div>
    )
}
