import React, { useState } from 'react'
import styles from './Header.module.scss'
import { authLinks, links } from './links'
import {useLocation, useNavigate} from 'react-router-dom'
import { SiKinopoisk } from "react-icons/si";

const Header = () => {
    const isAuth = true
    const [active, setActive] = useState('')
    const location = useLocation()

    const navigate = useNavigate()

    const handleLink = (link: string):void => {
        navigate(link)
        setActive(link)
    }

  return (
    <div className={styles.header}>
        <div className={styles.header__logo}>
            <SiKinopoisk />
            Online Cinema
        </div>
        <div className={styles.header__menu}>
            <div className={styles.header__menu_title}>
                Menu
            </div>
            {links.map(link => 
                <div key={link.name} className={`${styles.header__menu_item} ${active === link.navigate && styles.active} ${location.pathname === link.navigate && styles.active}`} onClick={() => handleLink(link.navigate)}>
                    {link.icon}
                    <div className={styles.header__menu_item_title}>
                        {link.name}
                    </div>
                </div>
            )}
            <div className={styles.header__menu_title}>
                General
            </div>
            {isAuth ?
                <div>
                    {authLinks.map(link => 
                        <div key={link.name} >
                            {link.auth && 
                                <div className={`${styles.header__menu_item} ${active === link.navigate && link.name !== 'Logout' && styles.active} ${location.pathname === link.navigate && link.name !== 'Logout' && styles.active}`} onClick={() => handleLink(link.navigate)}>
                                    {link.icon}
                                    <div className={styles.header__menu_item_title}>
                                        {link.name}
                                    </div>
                                </div>
                            }
                        </div>
                    )}
                </div>
                :
                <div>
                    {authLinks.map(link => 
                        <div key={link.name} >
                            {!link.auth && 
                                <div className={`${styles.header__menu_item} ${active === link.navigate && styles.active} ${location.pathname === link.navigate && styles.active}`} onClick={() => handleLink(link.navigate)}>
                                    {link.icon}
                                    <div className={styles.header__menu_item_title}>
                                        {link.name}
                                    </div>
                                </div>
                            }
                        </div>
                    )}
                </div>
            }
        </div>
    </div>
  )
}

export default Header