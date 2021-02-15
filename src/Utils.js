
// getMapOfAnswers returns the object of answers as key, value (currency, count)
function getMapOfAnswers(answers) {
    let obj = {}
    
    answers.forEach(c => {
        if (!obj[c]) {
            obj[c] = 1
        } else {
            obj[c] = obj[c] + 1
        }
    })
    obj["length"] = answers.length
    
    return obj
}

// // GREEDY APPROACH
// // Exchanges the target value by using the coins from the given currency list
function findExchanged(Target, currencyList) {
    currencyList.sort((a, b) => (a - b))

    let answers = []
    let n = currencyList.length

    let i = n - 1
    while (i >= 0) {
        while (Target >= currencyList[i]) {
            Target = Target - currencyList[i]
            answers.push(currencyList[i])
        }
        i--
    }

    if (Target != 0) {
        return -1 // means that this is not possible to change coins with the given coin set
    } else {
        return answers
    }
}

// Greedy returns an array of objects that are containing i:{object of exchangingCoins}
function Greedy(UpperLimit, currencylist) {
    let arr = []
    for (let i = 1; i <= UpperLimit; i++) {
        let answer = findExchanged(i, currencylist)
        //console.log(`${i} --> ${ans===-1 ? -1 : ans.length}`)
        arr.push(answer)
    }
    return arr
}
//let cList = [2,3,5]
//main(6, cList)

// returns the smallest set of coins
function smallestCoinsList(coins, target) {
    const memory = Array(target + 1);
    memory.fill(target + 1);
    memory[0] = 0;

    let exchangingCoins = {}
    for (let i = 0; i < memory.length; i++) {
        exchangingCoins[i] = [] // fill all of the cells with an empty array
    }

    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                if (memory[i - coins[j]] + 1 < memory[i]) {
                    let newSub = []
                    newSub.push(coins[j])
                    exchangingCoins[i] = newSub

                    exchangingCoins[i] = exchangingCoins[i - coins[j]].concat(exchangingCoins[i])

                }
                memory[i] = Math.min(memory[i], memory[i - coins[j]] + 1);
            }
        }
    }

    return exchangingCoins[memory.length-1]
}

function DP(UpperLimit, currencylist) {
    let arr = []
    for (let i = 1; i <= UpperLimit; i++) {
        let answer = smallestCoinsList(currencylist, i)
        //console.log(`${i} --> ${ans===-1 ? -1 : ans.length}`)
        arr.push(answer)
    }
    return arr
}

function totalOfArray(arr) {
    let count = 0
    arr.forEach(element => {
        count += element
    });

    return count
}

function deleteSmallest(arr) {
    let count = Infinity
    arr.forEach(e => {
        if (e < count) {
            count = e
        }
    });
    let index = arr.indexOf(count)
    if (index > -1) {
        arr.splice(index, 1)
    }
}

export {
    Greedy, DP
}
