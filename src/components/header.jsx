import  { useState, useEffect } from "react"

const Header = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [navbarHidden, setNavbarHidden] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY

            if (prevScrollPos > currentScrollPos) {
                setNavbarHidden(false) // 往上滾動，顯示導覽列
            } else {
                setNavbarHidden(true) // 往下滾動，隱藏導覽列
            }

            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [prevScrollPos])

    return (
        <header id="header" className={navbarHidden ? "hidden" : ""}>

            <div className="wabpage">
                <img src="/img/logo.png" alt="logo" />
                <h1>Yun's Website</h1>
            </div>

            <div className="hea1">
                <a href="#home">首頁</a>
                <a href="#about">關於我</a>
                <a href="#contact">聯絡我</a>
                <a href="#portfolio">校內成績與作品</a>
                <a href="#friend">友情連結</a>
                <a href="#cc">CC授權條款</a>

            </div>
        </header>
    );
}
export default Header;