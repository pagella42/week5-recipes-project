const express = require('express')
const path = require('path')
const app = express()
const request = require('request')




app.get('/sanity', function(req, res){
    res.send("OK")
})

app.get('/recipes/:ingredient', function(req, res){
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, response, body){
        let result = JSON.parse(body).results.map(r => {return {title: r.title, ingredients: r.ingredients, href: r.href, thumbnail: r.thumbnail}})
        
        res.send(result)
        
        
    })
})




app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 8080

app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})