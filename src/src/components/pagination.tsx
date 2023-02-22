import { Link } from "gatsby"
import React, { FC } from "react"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"

export const Pagination: FC<alperen.PaginationContext> = ({
    numPages,
    currentPage,
}) => {
    if (!currentPage || !numPages) return <></>
    return (
        <div>
            <ul className="my-10 flex items-center justify-end space-x-2 text-sm font-light">
                {currentPage === 1 ? null : (
                    <li aria-disabled={currentPage === 1}>
                        <Link
                            to={
                                currentPage - 1 === 1
                                    ? "/blog"
                                    : `/blog/page/${currentPage - 1}`
                            }
                        >
                            <IoChevronBackOutline size={22} />
                        </Link>
                    </li>
                )}
                <li className="italic text-gray-400">
                    {currentPage} of {numPages} pages
                </li>
                {currentPage === numPages ? null : (
                    <li aria-disabled={currentPage === numPages}>
                        <Link to={`/blog/page/${currentPage + 1}`}>
                            <IoChevronForwardOutline size={22} />
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
