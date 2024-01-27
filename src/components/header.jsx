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
                <div className="">首頁</div>
                <div className="">關於我</div>
                <div className="">聯絡我</div>
                <div className="">校內成績與作品</div>
                <div className="">友情連結</div>

            </div>
        </header>
    );
}
export default Header;