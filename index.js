const express = require ("express") ; 
const app = express () ;


players = require("./joeurs.json")
app.use(express.json()) ; 


app.get("/players" , (req,res) => {
        res.status(200).json(players)
})


app.post ("/add-player" , (req , res)=> {
        const body = req.body ;
        players.push(body) ; 
        res.status(200).json(players) ; 
})

app.listen(8080 , () => {
        console.log("serveur est demarée !!") ; 
})



app.put("/modify-player/:id" , (req , res)=> {
        const id = parseInt(req.params.id) ;
        const player = players.find((pla) => pla.id === id) ;
        player.idEquipe= req.body.idEquipe;
        player.nom= req.body.nom;
        player.numero= req.body.numero;
        player.post= req.body.post;
        res.status(200).json(player) ; 
})

app.delete('/delete-player/:id' , (req,res) => {
        const id = parseInt(req.params.id) ;
        const player = players.find((pla) => pla.id === id) ;
        players.splice(players.indexOf(player) , 1) ;
        res.status(200).json(players) ; 
})

app.get("/players/:id" , (req,res) => {
        const id = req.params.id ; 
        const player = players.find((pla) => pla.idEquipe ===id) ;
        res.status(200).json(player) ; 
})

app.get("/team/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const team = players.find((pla) => pla.id === id);
    
        if (team && team.idEquipe !== undefined) {
            res.status(200).json(team.idEquipe);
        } else {
            res.status(404).json({ error: "Team not found" });
        }
    });
    app.get("/player/:name", (req, res) => {
        const nom = req.params.name;
        const player = players.find((pla) => pla.nom === nom); 
    
        if (player) {
            res.status(200).json(player);
        } else {
            res.status(404).json({ error: "Player not found" });
        }
    
        console.log(player);
    });
    
    



