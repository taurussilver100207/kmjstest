const sumOfArr = arr => {
    let sum = 0
    for (let i of arr) {
        sum += i;
    }
    return sum
}

const alternatingSums = a => {
    const team1 = []
    const team2 = []
    for (i in a) {
        if (i % 2 == 0) {
            team1.push(a[i])
        } else {
            team2.push(a[i])
        }
    }
    return [sumOfArr(team1), sumOfArr(team2)]
}

console.log(alternatingSums([60, 40, 55, 75, 64]))