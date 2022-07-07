import React, { useState } from 'react'
import './Header.css'

let lastScroll = 0
const defaultOffset = 300

window.onscroll = function headerChanger() {
    const scrollPosition = () =>
        window.pageYOffset || document.documentElement.scrollTop
    const containHide = () => header.classList.contains('hide')
    const header = document.querySelector('.header')
    const scrolledDown = document.querySelector('.scrolledDown')
    const headerMenu1 = document.querySelector('.headerMenu')
    const burgerActive = () => headerMenu1.classList.contains('active')
    if (
        scrollPosition() > lastScroll &&
        !containHide() &&
        scrollPosition() > defaultOffset &&
        !burgerActive()
    ) {
        header.classList.add('hide')
    } else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide')
    }

    lastScroll = scrollPosition()
    if (scrollPosition() > defaultOffset) {
        header.classList.add('scrolledDown')
    } else if (scrollPosition() < defaultOffset) {
        header.classList.remove('scrolledDown')
    }
}

export const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="headerPosition">
                        <div className="headerLogo">
                            <span className="logo">
                                <a className="ab">AВТОНОМ</a>
                            </span>
                        </div>
                        <div className="trafficButtons">
                            <div
                                className={
                                    menuActive
                                        ? 'headerMenu active'
                                        : 'headerMenu'
                                }
                            >
                                <ul className="menu">
                                    <li>
                                        <a href="">Технологія</a>
                                    </li>
                                    <li>
                                        <a href="">Про нас</a>
                                    </li>
                                    <li>
                                        <a href="">Кар'єра</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="subscribeButton">
                                <button>Підписатися</button>
                            </div>
                            <div
                                className="headerBurger"
                                onClick={() => setMenuActive(!menuActive)}
                            >
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
