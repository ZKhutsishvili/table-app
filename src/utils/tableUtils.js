export function getColumnWidth(columns, column) {
    if (columns) {
        const sum = columns.reduce((sum, b) => sum + (b.width || 100), 0)
        return Math.floor((column.width || 100) / sum * 100)
    }
    return 0
}
function numberContains(numberValue, value) {
    return numberValue?.toString().includes(value)
}
function stringContains(stringValue, value) {
    return stringValue?.toLowerCase().includes(value.toLowerCase())
}
function listContains(listValue, value) {
    return listValue?.filter(elem => elem.toLowerCase().includes(value.toLowerCase()))?.length > 0
}
const filterMapper = {
    "object": listContains,
    "number": numberContains,
    "string": stringContains
}

export function rowContains(row, value) {
    if (value === "") {
        return true
    }
    const tmp = {...row}
    delete tmp["subRows"]
    const values = Object.values(tmp)
    for (let i = 0; i < values.length; i++) {
        const elem = values[i]
        const type = typeof elem
        if (filterMapper[type] && filterMapper[type](elem, value)) {
            return true
        }
    }
    return false
}