const userRouter=require('./UserRouter')
function routes(app) {
    app.use("/user",userRouter)
}
module.exports = routes