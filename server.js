const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "Front-End")));

const PORT = process.env.PORT || 8080;
const users = [
    {
        "id": 1,
        "name": "john",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
        "id": 2,
        "name": "amber",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
        "id": 3,
        "name": "lily",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
        "id": 4,
        "name": "juan",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/88.jpg"
    },
    {
        "id": 5,
        "name": "valtteri rantala",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        "id": 6,
        "name": "sophia",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        "id": 7,
        "name": "liam",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/34.jpg"
    },
    {
        "id": 8,
        "name": "chloe",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        "id": 9,
        "name": "mateo",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        "id": 10,
        "name": "zara",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/81.jpg"
    }
];
function findIndexById(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return i;
        }
    }
    return -1;  
}
app.get("/api/users", (req, res) => {
    res.json(users);
});
app.get("/api/users/:id", (req, res) =>     {

    const index=findIndexById(Number((req.params.id)));
    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(users[index]);
}); 
app.get("/api/random-user", (req, res) => {
    if(users.length === 0) {
        return res.status(404).json({ error: "No users available" });
    }
    const randomIndex = Math.floor(Math.random() * users.length);
    
    res.json(users[randomIndex]);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});