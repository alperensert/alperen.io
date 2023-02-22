import React, { FC } from "react"

interface SectionTitleProps {
    beforeText: string
    afterText: string
}

export const SectionTitle: FC<SectionTitleProps> = ({
    beforeText,
    afterText,
}) => {
    const afterTextNode = () => {
        const t = afterText.split(" ")
        if (t.length === 1) {
            return <span className="text-primary">{afterText}</span>
        }
        const last = t.pop()
        return (
            <>
                {t.join(" ")}
                <span className="text-primary"> {last}</span>
            </>
        )
    }
    return (
        <div className="relative flex select-none items-center justify-center">
            <span className="text-center text-6xl font-black uppercase text-gray-400 text-opacity-25 lg:text-8xl">
                {beforeText}
            </span>
            <h1 className="z-1 absolute my-auto text-center text-4xl font-black uppercase lg:text-5xl">
                <div>{afterTextNode()}</div>
            </h1>
        </div>
    )
}
