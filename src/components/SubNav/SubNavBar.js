import React from "react"
import styles from "./subNav.module.scss"
//import VisibilitySensor from "react-visibility-sensor"

function StickyNavBar({ navItemList, navSticky }) {
  // const [navSticky, setNavSticky] = useState(false)
  // const ref = useRef(null)
  // const handleScroll = () => {
  //   if (ref.current) {
  //     if(ref.current.getBoundingClientRect().top <= 62){
  //        setNavSticky()
  //     }

  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", () => handleScroll)
  //   }
  // }, [])

  return (
    //<VisibilitySensor
    // onChange={isVisible => {
    //   console.log(isVisible)
    //   setNavSticky(isVisible)
    // }}
    //>
    <ul
      className={`${styles.subNavBar} ${navSticky ? styles.subNavSticky : ""} `}
    >
      {navItemList &&
        navItemList.map((item, index) => {
          return (
            <li key={index} className={`${styles.subNavItem} `}>
              <a href={item.linkUrl}>{item.linkText}</a>
            </li>
          )
        })}
    </ul>
    //</VisibilitySensor>
  )
}

export default StickyNavBar
