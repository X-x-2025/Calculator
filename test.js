const str = '9*12+4-6/3*5'

console.log('计算：', 9*12/3*5)

const nums = []
const syms = []
const arr = str.split('')

let numIdx = 0
arr.forEach((a) => {
    if (['*', '/'].includes(a)) {
        numIdx += 1
        return syms.push(a)
    }
    nums[numIdx] = (nums[numIdx] ?? '') + a
})

const _nums = nums.map(n => Number(n))

console.log('_nums', _nums)
console.log('syms', syms)

const [first, ...rest] = _nums
const sum = rest.reduce((prev, curr, index) => {
    const sym = syms[index]
    if (sym === '*') {
        return prev * curr
    } 
    return prev / curr
}, first)

console.log(sum)

// const arr1 = str.split('*')
// // ['1', '2-3-4', '5']

// const sum = arr1.reduce((prev, curr) => {
//     const arr2 = curr.split('/').map(s => Number(s))
//     console.log(arr2)
//     let resultOfArr2 = arr2[0]
//     if (arr2.length > 1) {
//         const [first, ...restArr2] = arr2
//         resultOfArr2 = restArr2.reduce((prev1, curr1) => prev1 / curr1, first)
//     }
//     // console.log('resultOfArr2', resultOfArr2)
//     return prev + resultOfArr2
// }, 0)



// console.log(sum)