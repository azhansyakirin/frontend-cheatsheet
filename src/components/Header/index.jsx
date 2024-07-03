import { Link } from "react-router-dom"
import { IconsRenderer } from "../IconsRenderer"
import css from "./Header.module.scss"
import classNames from "classnames"

export const Header = (props) => {

    const { uiTheme, themeToggler } = props

    const isLightTheme = uiTheme === "light"

    return (
        <header className={css.Header}>
            <ul>
                <li>
                    <figure onClick={themeToggler}>
                        <IconsRenderer
                            type={isLightTheme ? "sun" : "moon"}
                            styles={classNames({
                                "w-6 cursor-pointer": true,
                                "text-iconLight dark:text-textDark ": true,
                                "hover:text-textLight dark:hover:text-spanDark": true,
                                "transition-transform duration-200 ease-in-out transform": true,
                                "scale-x": isLightTheme,
                                "scale-x-[-1]": !isLightTheme,
                            })}
                        />
                    </figure>
                    <Link to="/" title="Back to Home">
                        <figure>
                            <IconsRenderer
                                type="house"
                                styles={classNames({
                                    "w-6 cursor-pointer": true,
                                    "text-iconLight dark:text-textDark ": true,
                                    "hover:text-textLight dark:hover:text-spanDark": true,
                                })}
                            />
                        </figure>
                    </Link>
                </li>
            </ul>
        </header>
    )
}