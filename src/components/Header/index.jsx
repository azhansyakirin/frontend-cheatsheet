import { Link } from "react-router-dom"
import { IconsRenderer } from "../IconsRenderer"
import classNames from "classnames"
import css from "./Header.module.scss"

export const Header = (props) => {

    const { uiTheme, themeToggle } = props

    const isLightTheme = uiTheme === "light"

    return (
        <header className={css.Header}>
            <ul className="flex flex-row flex-end">
                <figure onClick={themeToggle}>
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
            </ul>
        </header>
    )
}