
const objectBubbleSort = obj => {
    const entries = Object.entries(obj)
    const length = entries.length
    const sortedObj = {}
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (entries[j][1] > entries[j + 1][1]) {
                const temp = entries[j]
                entries[j] = entries[j + 1]
                entries[j+1] = temp
            }
        }
    }

    for (let entry of entries.reverse()) {
        sortedObj[entry[0]] = entry[1]
    }

    return sortedObj
}

const allLongestStrings = inputArray => {
    const obj = {}
    const longestLen = []
    const arrayLength = inputArray.length
    for (i in inputArray) {
        obj[inputArray[i]] = inputArray[i].length
    }
    const sortedArray = Object.keys(objectBubbleSort(obj))
    const longestString = sortedArray[0]
    for (i in sortedArray) {
        if (sortedArray[i].length == longestString.length) {
            longestLen.push(sortedArray[i])
        }
    }
    // for (let string of sortedObj) {

    // }


    return longestLen
}

console.log(allLongestStrings(['KHANH', 'PHUOC', 'HUNG', 'BINH', 'CAO']))