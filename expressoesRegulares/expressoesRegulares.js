const username = '111rogerm123'
const pattern = /[a-z]{6}/
// const result  = pattern.test(username)



const result = username.search(pattern)

console.log(result)

