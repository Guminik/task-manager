require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d10e435e5fada3be0410dc8').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d10cb52acc7912d6c827d28').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
