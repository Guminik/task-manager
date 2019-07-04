require('../src/db/mongoose')
const User = require('../src/models/user')

// 5d10d0a4f1cb4f3d7096d3da

// User.findByIdAndUpdate('5d10dfcd57260b237cf95acc', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d10dfcd57260b237cf95acc', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})