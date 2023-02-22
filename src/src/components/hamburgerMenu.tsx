import React, { createRef, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import "animate.css"
import { Link } from "gatsby"
import { ModeSwitcher } from "./index"
import { delay } from "../utils"

export const HamburgerMenu = () => {
    const hamburgerRef = createRef<HTMLDivElement>()
    const menuRef = createRef<HTMLDivElement>()
    const [isActive, setActivity] = useState(false)
    const toggle = async () => {
        if (!isActive) setActivity(!isActive)
        else {
            menuRef.current?.classList.add("animate__fadeOutLeftBig")
            await delay(300)
            menuRef.current?.classList.remove("animate__fadeOutLeftBig")
            setActivity(!isActive)
        }
    }
    useEffect(() => {
        if (isActive) {
            hamburgerRef.current?.classList.add("active")
            document.body.classList.add("overflow-y-hidden")
        } else {
            delay(300).then(() => {
                hamburgerRef.current?.classList.remove("active")
                document.body.classList.remove("overflow-y-hidden")
            })
        }
    }, [isActive])
    return (
        <>
            <div
                ref={hamburgerRef}
                className="hamburger-lines z-50 cursor-pointer"
                onClick={toggle}
            >
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            {isActive
                ? createPortal(
                      <div
                          ref={menuRef}
                          className="animate__animated animate__fadeInLeftBig fixed top-0 z-40 h-screen w-screen bg-white dark:bg-black lg:overflow-x-hidden"
                      >
                          <div className="absolute p-12">
                              <ModeSwitcher />
                          </div>
                          <nav className="hamburger-menu">
                              <Link
                                  to="/"
                                  activeClassName="active"
                                  onClick={toggle}
                              >
                                  Home
                              </Link>
                              <Link
                                  to="/about"
                                  activeClassName="active"
                                  onClick={toggle}
                              >
                                  About
                              </Link>
                              <Link
                                  to="/blog"
                                  partiallyActive
                                  activeClassName="active"
                                  onClick={toggle}
                              >
                                  Blog
                              </Link>
                              <Link
                                  to="/contact"
                                  activeClassName="active"
                                  onClick={toggle}
                              >
                                  Contact
                              </Link>
                          </nav>
                      </div>,
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      document.getElementById("portal")!
                  )
                : null}
        </>
    )
}
