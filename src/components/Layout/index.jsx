import { useContext } from "react"
import { Header } from "../Header"
import { Quickmenu } from "../Quickmenu"
import css from "./Layout.module.scss"
import { ThemeContext } from "../../utils/context/ThemeProvider"

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
        </main>
    )
}