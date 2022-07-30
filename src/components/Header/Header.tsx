import React from 'react'
import styles from './Header.module.scss'
import { authLinks, links } from './links'
import {useNavigate} from 'react-router-dom'

const Header = () => {
    const isAuth = true

    const navigate = useNavigate()

  return (
    <div className={styles.header}>
        <div className={styles.header__logo}>
            Online Cinema
        </div>
        <div className={styles.header__menu}>
            <div className={styles.header__menu_title}>
                Menu
            </div>
            {links.map(link => 
                <div>
                    <div className={styles.header__menu_item} onClick={() => navigate(link.navigate)}>
                        {link.icon}
                        <div className={styles.header__menu_item_title}>
                            {link.name}
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.header__menu_title}>
                General
            </div>
            {isAuth ?
                <div>
                    {authLinks.map(link => 
                        <div>
                            {link.auth && 
                                <div className={styles.header__menu_item} onClick={() => navigate(link.navigate)}>
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
                        <div>
                            {!link.auth && 
                                <div className={styles.header__menu_item} onClick={() => navigate(link.navigate)}>
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