import { useContext } from "react"
import classNames from "classnames"
import { Header } from "../Header"
import { Quickmenu } from "../Quickmenu"
import { ThemeContext } from "../../utils/context/ThemeProvider"
import css from "./Layout.module.scss"

export const Layout = ({ children, ...props }) => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    const customClassnames = props

    let headerProps = {
        uiTheme: theme,
        themeToggle: toggleTheme,
    }

    return (
        <main className={css.Layout}>
            <Header {...headerProps} />
            <div className={customClassnames || css.childLayout}>
                {children}
            </div>
            <Quickmenu />
            <div className={classNames("text-textLight dark:text-textDark", css.footnote)}><p>All rights reserved | Made with ❤️ by <a className="hover:text-iconLight dark:hover:text-spanDark" href="https://azhansyakirin.dev/" target="_blank"> Azhan Syakirin</a></p></div>
        </main>
    )
}