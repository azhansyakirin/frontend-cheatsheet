export const Pill = (props) => {

    const { id, label } = props

    return (
        <div key={id} className="px-2 py-1 rounded-lg text-center bg-elementLight dark:bg-elementDark text-textLight hover:text-spanLight dark:text-textDark hover:bg-foregroundLight dark:hover:text-spanDark cursor-pointer">
            <span className="capitalize">{label}</span>
        </div>
    )
}