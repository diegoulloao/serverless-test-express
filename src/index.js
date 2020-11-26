const express = require( "express" )
const app = express()

app.get( "/", (req, res) => {
    res.send( "Response from /" )
})

app.get( "/test", (req, res) => {
    res.send( "Response from /test" )
})

app.listen( "3000", () => {
    console.log( "Serving on http:/localhost:3000" )
})
