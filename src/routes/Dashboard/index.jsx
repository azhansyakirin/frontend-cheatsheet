import { useContext } from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/Layout"
import { ConfigContext } from "../../utils/context/ConfigProvider"
import { IconsRenderer } from "../../components/IconsRenderer"

export const Dashboard = () => {

    const { config = {} } = useContext(ConfigContext)

    const { showJavascript, showReact, showCss, showHtml } = config

    const pathRouteMap = [
        ...(showJavascript ? [{ to: "/javascript", label: "Javascript" }] : []),
        ...(showHtml ? [{ to: "/html", label: "HTML" }] : []),
        ...(showCss ? [{ to: "/css", label: "CSS" }] : []),
        ...(showReact ? [{ to: "/react-js", label: "React Js" }] : []),
    ]

    return (
        <Layout>
            <main className="m-auto relative md:p-12 w-full">
                <div className="my-8">
                    <p className="text-2xl font-poorstory text-spanLight dark:text-spanDark">Holla Dev!</p>
                    <h1 className="text-4xl md:text-6xl text-textLight dark:text-textDark">MINI <span className="text-spanLight dark:text-spanDark">FRONT-END</span> CHEAT-SHEET</h1>
                </div>
                <div className="my-8">
                    <p className="text-right font-lora text-lg md:text-2xl text-textLight dark:text-textDark">
                        "It's not a bug; it's an undocumented feature."
                    </p>
                    <p className="text-right italic font-lora text-lg md:text-2xl text-textLight dark:text-textDark">
                        -developer
                    </p>
                </div>
                <div className="my-8 flex items-center">
                    <p className="text-left font-jetbrains text-textLight dark:text-textDark">
                        <span className="text-textLight dark:text-textDark flex items-center gap-4">
                            <IconsRenderer type="terminal" styles="w-16 md:w-6" />
                            Code with React Js, Tailwind Css, Sass, React-Syntax-Highlighter
                        </span>
                    </p>
                </div>
                <div className="my-4 rounded-2xl bg-foregroundLight dark:bg-foregroundDark py-3">
                    <ul className="p-1 flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
                        {Array.isArray(pathRouteMap) &&
                            pathRouteMap.map((obj, i) => (
                                <Link
                                    key={i}
                                    to={obj.to}
                                    className="px-10 py-2 rounded-2xl text-center bg-elementLight hover:bg-backgroundLight dark:bg-elementDark text-textLight dark:text-textDark dark:hover:text-spanDark cursor-pointer"
                                >
                                    {obj.label}
                                </Link>
                            ))

                        }
                    </ul>

                </div>
            </main>
        </Layout>
    )
}