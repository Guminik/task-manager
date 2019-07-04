// CURD create read update delete

// const mongodb = require('mongodb')       //const { MongoClient, ObjectID } = require('mongodb') usntructured
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

})




















    // //delete challenge
    // db.collection('new tasks').deleteOne({
    //     description: 'clean house'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // // delete
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //  //update chalenge
    // db.collection('new tasks').updateMany({
    //     completed: false
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }).then((result) => {
    //         console.log(result.modifiedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // // update v2
    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("5d0ba20f3e92d62d78d6299e")
    // }, {
    //     $inc: {
    //         age: 1 //or -1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch ((error) => {
    //     console.log(error)
    // })

    // // update v1
    // const updatePromise = db.collection('users').updateOne({ 
    //     _id: new ObjectID("5d0ba20f3e92d62d78d6299e")
    // }, {
    //     $set: {
    //         name: 'Mikey'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch ((error) => {
    //     console.log(error)
    // })


    // db.collection('new tasks').findOne({ _id: new ObjectID("5d109b75eb95760738ac6fcd") }, (error, user) => {       
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('new tasks').find({ completed: false }).toArray((error, users) =>{
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(users)
    // })

    // search
    // db.collection('users').findOne({ _id: new ObjectID("5d109fa586fa663e309a44a0") }, (error, user) => {       
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({ age: 28 }).toArray((error, users) =>{
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 28 }).count((error, users) =>{
    //     console.log(users)
    // })

    // db.collection('users' ).insertOne({
    //     //_id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'jen',
    //         age: 29
    //     }, {
    //         name: 'Gunter',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('new tasks').insertMany([
    //     {
    //         description: 'clean house',
    //         completed: true
    //     }, {
    //         description: 'do the dishes',
    //         completed: false
    //     }, {
    //         description: 'take bins out',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })