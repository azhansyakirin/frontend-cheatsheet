export const IconsRenderer = ({ type, styles }) => {
    if (!type) return null;

    const iconLists = {
        "github": "",
        "linkedin": "",
        "u-turn": "",
        "whatsapp": "",
    }

    return <div className={styles}>{iconLists[type || "image"]}</div>
}