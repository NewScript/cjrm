const temp = []

const likes = (names = []) => {
    switch( names.length){
        case 0:
            return 'Nínguém curtiu'
        case 1:
            return '1 curtiu'
        case 2:
            return '2 curtiu'
        default:
            return 'bugou'
    }
}

console.log(likes())

temp.push('a')
console.log(temp)

console.log(likes(temp))

temp.push('b')
console.log(temp)

console.log(likes(temp))

temp.push('c')
console.log(temp)

console.log(likes(temp))
console.log(temp)