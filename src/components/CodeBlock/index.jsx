import { useState, useContext } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { ThemeContext } from "../../utils/context/ThemeProvider"
import { IconsRenderer } from "../IconsRenderer"
import classNames from "classnames"

export const CodeBlock = ({
    blockTitle,
    text,
    index,
    description,
    customClassnames,
    reference,
}) => {

    const { theme } = useContext(ThemeContext)

    const [copyToClipboard, setCopyToClipboard] = useState("clipboard")

    const terminalTheme = theme === "light" ? docco : atomOneDark

    if (text?.trim() === "") return null

    if (typeof text !== "string") {
        throw new TypeError("Text must be string")
    }

    const copyText = () => {
        const codeElement = document.querySelector(`#${reference} pre`)
        let block = ""
        if (codeElement) {
            const tempElement = document.createElement("div")
            tempElement.innerHTML = codeElement.innerHTML

            tempElement.querySelectorAll(".react-syntax-highlighter-line-number").forEach((lineNumber) => {
                lineNumber.remove()
            })

            block = tempElement.textContent
        }

        navigator.clipboard
            .writeText(block)
            .then(() => {
                console.log(`Text copied!\n\n${block}`)
                setCopyToClipboard("checkmark")
                setTimeout(() => setCopyToClipboard("clipboard"), 2000)
            })
            .catch(err => console.error("Failed to copy text"))

    }

    return (
        <div
            id={reference}
            className={classNames({
                "my-4 p-6 flex flex-col gap-4 shadow-xl rounded-lg bg-foregroundLight dark:bg-foregroundDark": true,
                [customClassnames]: !!customClassnames,
                'w-full': !customClassnames,
            })}
        >
            <div className="w-full">
                <span className="flex justify-between items-center p-1">
                    <label className="text-textLight dark:text-white">
                        {blockTitle || "Code Block"}
                    </label>
                    <button
                        className="p-1 rounded-md bg-elementLight dark:bg-elementDark"
                        onClick={copyText}
                        title="Copy"
                    >
                        <IconsRenderer
                            type={copyToClipboard}
                            styles="w-6 text-iconLight hover:text-textLight dark:text-textDark dark:hover:text-spanDark cursor-pointer"
                        />
                    </button>
                </span>
                <span className="flex justify-between items-center p-1">
                    <article className="text-sm text-spanLight dark:text-textDark">
                        {description}
                    </article>
                </span>
            </div>
            <div>
                <SyntaxHighlighter
                    language="javascript"
                    style={terminalTheme}
                    codeTagProps={{
                        style: {
                            fontFamily: "JetBrains Mono",
                            fontSize: "0.8rem",
                        }
                    }}
                    showLineNumbers
                    wrapLines
                >
                    {text}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}