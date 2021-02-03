//Création du Serveur et importation de Express
const express = require('express')

//Création d'un objets (serveur)
const app = express()

//Appelle au fichier meteo.json
const meteo = require('./meteo.json')

//Pour assurer l'échange de données, on instaure Middleware 
app.use(express.json())

app.get('/meteo', (req,res) => {
    res.status(200).json(meteo)
})

//ParseInt() renvoi un entier
app.get('/meteo/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const condition = meteo.find(condition => condition.id === id)
    res.status(200).json(condition)
})

//Méthode POST pour insérer ou ajouter un nouvel objet dans l'array
app.post('/meteo', (req,res) => {
    meteo.push(req.body)
    res.status(200).json(meteo)
})

//Méthode PUT pour modifier 
app.put('/meteo/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let condition = meteo.find(condition => condition.id === id)
    condition.ville =req.body.ville, 
    condition.celcius =req.body.celcius, 
    condition.kelvin =req.body.kelvin, 
    condition.humidite =req.body.humidite, 
    res.status(200).json(condition)
})

//Méthode Delete qui gère la suppression des éléments

app.delete('/meteo/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let condition = meteo.find(condition => condition.id === id)
    meteo.splice(meteo.indexOf(condition),1)
    res.status(200).json(meteo)
})



////////////////////////////

//Permet de démmarer le serveur
app.listen(8080, ()=> {
    console.log(
        
        '\nCompilation réussie !' 
        + '\n\n'
        + 'Vous pouvez maintenant voir l\'index.js dans le navigateur.' 
        + '\n\n'
        + '     Local: http://localhost:8080'
        + '\n\n'
        + 'Pour éteindre le serveur : Ctrl + c.' 
        
    )
})

