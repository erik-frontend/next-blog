export function truncateText(text, maxLength){
    if(typeof text !== "string") return ""
    if(text.length > maxLength){
        return text.slice(0, maxLength) + "..."
    }
    return text
}