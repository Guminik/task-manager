const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.status === '503') {
//         res.send('maintnace')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5d1c6dcc075e1d19847ded43')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    
    const user = await User.findById('5d1c6c74fa1e1e0e409f1774')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)    
}

main()