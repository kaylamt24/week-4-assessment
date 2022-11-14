const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, updateFortune, deleteFortune } = require('./controller')



app.get("/api/compliment", getCompliment);

app.get('/api/fortunes', getFortune)

app.delete('/api/fortunes/:index', deleteFortune)
app.post('/api/fortunes', addFortune)
app.put('/api/fortunes/:index', updateFortune)

//We need to be able to delete something, add something and update something (post = add, put = update, delete = delete)

app.listen(4000, () => console.log("Server running on 4000"));
