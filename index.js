// let newname = "Pablo";
// console.log("hola");
const express = require('express')
const { request } = require('http')
const app = express()
app.use(express.json())
// const http = require('http') 
let notes = [  
    {
        "id": 1,    
        "content": "Hola manu test",
        "date": "2005-03-18",
        "important": true
    },
    {
        "id": 2,
        "content": "Hola manu test2",
        "date": "2005-03-19",
        "important": false
    },
    {
        "id": 3,
        "content": "Hola manu test",
        "date": "2005-03-18",
        "important": true
    },
    {
        "id": 4,
        "content": "Hola manu test2",
        "date": "2005-03-19",
        "important": false
    }
]
// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     response.end(JSON.stringify(notes))
// })
app.get('/',(request, response) => {
    response.send('<h1>hello</h1>')
})
app.get('/api/notes', (request, response)=> {
    response.json(notes)
})
app.get('/api/notes/:id', (request, response)=> {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note){
    response.json(note)
    } else {
        response.status(404).end()
    }
})
app.delete('/api/notes/:id',(request, response)=>{
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id === id)
    response.status(204).end()
})
app.post('/api/notes',(request, response)=> {
    const note = request.body
    console.log(note)
    response.json(note)
})
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
// console.log(`Server running on port ${PORT}`)
 