import React, { Component } from "react"
import { Link } from "gatsby"

import headerStyles from "./Header.module.scss"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false,
    }
  }

  toggleMenu = () => {
    const currentState = this.state.showMenu
    console.log(this.state.showMenu)
    this.setState({ showMenu: !currentState })
  }

  render() {
    return (
      <header>
        <div
          className={
            this.state.showMenu
              ? `${headerStyles.menuBtn} ${headerStyles.close}`
              : headerStyles.menuBtn
          }
          onClick={this.toggleMenu}
        >
          <div className={headerStyles.btnLine}></div>
          <div className={headerStyles.btnLine}></div>
          <div className={headerStyles.btnLine}></div>
        </div>

        <nav
          className={
            this.state.showMenu
              ? `${headerStyles.menu} ${headerStyles.show}`
              : headerStyles.menu
          }
        >
          <div
            className={
              this.state.showMenu
                ? `${headerStyles.menuBranding} ${headerStyles.show}`
                : headerStyles.menuBranding
            }
          >
            <div className={headerStyles.portrait}></div>
          </div>

          <ul
            className={
              this.state.showMenu
                ? `${headerStyles.menuNav} ${headerStyles.show}`
                : headerStyles.menuNav
            }
          >
            <li
              className={
                this.state.showMenu
                  ? `${headerStyles.navItem} ${headerStyles.show}`
                  : headerStyles.navItem
              }
            >
              <Link
                to="/"
                className={headerStyles.navLink}
                activeClassName={headerStyles.active}
              >
                Home
              </Link>
            </li>

            <li
              className={
                this.state.showMenu
                  ? `${headerStyles.navItem} ${headerStyles.show}`
                  : headerStyles.navItem
              }
            >
              <Link
                to="/about"
                className={headerStyles.navLink}
                activeClassName={headerStyles.active}
              >
                About Me
              </Link>
            </li>

            <li
              className={
                this.state.showMenu
                  ? `${headerStyles.navItem} ${headerStyles.show}`
                  : headerStyles.navItem
              }
            >
              <Link
                to="/projects"
                className={headerStyles.navLink}
                activeClassName={headerStyles.active}
              >
                Projects
              </Link>
            </li>

            <li
              className={
                this.state.showMenu
                  ? `${headerStyles.navItem} ${headerStyles.show}`
                  : headerStyles.navItem
              }
            >
              <Link
                to="/contact"
                className={headerStyles.navLink}
                activeClassName={headerStyles.active}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
