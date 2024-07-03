import { useRef, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { CodeBlock } from "../../components/CodeBlock";
import { Pill } from "../../components/Pill";
import { variableExample, conditionalsExample } from "../../data/codeblockdata";
import css from "./Javascript.module.scss";

const Javascript = ({
    pageName,
    pageDescription,
    variableDeclaration,
    extraProps,
}) => {
    let dummyText =
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.";

    const tagIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
        </svg>
    );

    const topicLists = [
        { id: "variables", label: "variables" },
        { id: "data-types", label: "data types" },
        { id: "arrays", label: "arrays" },
        { id: "strings", label: "strings" },
        { id: "conditionals", label: "conditionals" },
        { id: "dates", label: "dates" },
        { id: "alerts & prompts", label: "alerts & prompts" },
        { id: "events", label: "events" },
        { id: "iterations", label: "iterations" },
        { id: "debugging", label: "debugging" },
        { id: "if-else", label: "if-else" },
        { id: "selectors", label: "selectors" },
        { id: "ajax", label: "ajax" },
        { id: "apis", label: "apis" },
        { id: "element manipulation", label: "element manipulation" },
        { id: "functions", label: "functions" },
    ];

    return (
        <Layout customClassnames="flex-col">
            <div className="flex flex-col md:flex-col">
                <div className="w-full">
                    <h1 className="text-4xl uppercase text-textLight dark:text-textDark">
                        ALL-IN-ONE{" "}
                        <span className="text-spanLight dark:text-spanDark">
                            {pageName} CHEAT-SHEET
                        </span>{" "}
                        FOR DEV
                    </h1>
                    <div className={css.descriptionWrapper}>
                        <p className="text-textLight dark:text-textDark">{pageDescription}</p>
                    </div>
                    <div className={css.descriptionWrapper}>
                        <p className="text-textLight dark:text-textDark flex items-center gap-4">
                            {tagIcon} Code with React Js, Tailwind Css, Sass, and React
                            Syntax Highlighter
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="my-4 rounded-2xl bg-foregroundLight dark:bg-foregroundDark px-10 py-1">
                        <ul className="p-1 flex flex-wrap gap-4 justify-center items-center">
                            {Array.isArray(topicLists) &&
                                topicLists.map((x) => (
                                    <a key={x.id} href={`#${x.id}`}>
                                        <Pill label={x.label} />
                                    </a>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className={css.layoutLeft}>
                    {Array.isArray(variableDeclaration) &&
                        variableDeclaration.map((obj, idx) => (
                            <CodeBlock
                                blockTitle={obj.title}
                                key={idx}
                                reference={obj.id}
                                index={obj.title + "-" + idx}
                                text={obj.content}
                                description={dummyText}
                                customClassnames="w-full"
                            />
                        ))}
                </div>
                <div className={css.layoutRight}>
                    {Array.isArray(variableExample) &&
                        variableExample.map((obj, i) => (
                            <CodeBlock
                                key={i}
                                reference={obj.id}
                                index={obj.title + "-" + i}
                                blockTitle={obj.title}
                                text={obj.content}
                                description={obj.description}
                                customClassnames="w-full"
                            />
                        ))}
                    {Array.isArray(conditionalsExample) &&
                        conditionalsExample.map((obj, i) => (
                            <CodeBlock
                                key={i}
                                reference={obj.id}
                                index={obj.title + "-" + i}
                                blockTitle={obj.title}
                                text={obj.content}
                                description={dummyText}
                                customClassnames="w-full"
                            />
                        ))}
                    <CodeBlock
                        reference="debugging"
                        index={"Console-" + 0}
                        blockTitle="Debugging"
                        text={`console.table("🍟")`}
                        description={dummyText}
                        customClassnames="w-full"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Javascript;
