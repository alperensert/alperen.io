import React, { FC, useState } from "react"

interface PortfolioItemProps {
    image: string
    alt?: string
}

export const PortfolioItem: FC<PortfolioItemProps> = ({ image, alt }) => {
    const [isShowing, setShow] = useState(false)
    const title = "My awesome project"
    return (
        <div
            className="portfolio-item"
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <img src={image} alt={alt} className="pointer-events-none" />
            <span
                className={`portfolio-item-detail backdrop-blur-md${
                    isShowing ? " opacity-100" : " opacity-0"
                }`}
            >
                <h4 className="p-12 text-2xl font-black">{title}</h4>
            </span>
        </div>
    )
}
