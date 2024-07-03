import classNames from "classnames"
import { IconsRenderer } from "../IconsRenderer"

export const Quickmenu = () => {

    const menuItems = [
        { icon: "whatsapp", route: "https://whatsapp.azhansyakirin.dev/", title: "Whatsapp Me!" },
        { icon: "github", route: "https://github.azhansyakirin.dev/", title: "Follow me on Github" },
        { icon: "linkedin", route: "https://linkedin.azhansyakirin.dev/", title: "Connect with me in LinkedIn" },
    ]

    return (
        <footer className={classNames({
            "fixed right-1 top-1/2 z-50": true,
            "rounded-lg shadow-lg": true,
            "bg-foregroundLight dark:bg-foregroundDark": true,
        })} >
            <ol className="flex flex-col items-center justify-center p-4 gap-4">
                {Array.isArray(menuItems) &&
                    menuItems.map((obj, i) => (
                        <li key={i}>
                            <a
                                href={obj.route}
                                target="_blank"
                                className="cursor-pointer"
                                title={obj.title}
                            >
                                <IconsRenderer
                                    type={obj.icon}
                                    styles="size-6 text-iconLight hover:text-textLight dark:text-textDark dark:hover:text-spanDark"
                                />
                            </a>
                        </li>
                    ))
                }
            </ol>
        </footer>
    )
}