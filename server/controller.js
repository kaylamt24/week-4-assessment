let fortunes = ['If you eat something and nobody sees you eat it, it has no calories', 'Error 404: No fortune found', "You don't have to be faster than the Bear. You just have to be faster than your slowest friend", 'To truly find yourself, you should play hide and seek alone', 'This fortune is never going to give you up, never gonna let you down' ];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

   addFortune: (req, res) => {
    let {fortune} = req.body
    fortunes.push(fortune)

    res.status(200).send('Ohhh, I loved that fortune!')
   },

   updateFortune: (req, res) => {
    let {index} = req.params
    let {fortune} = req.body

    fortunes.splice(index, 1, fortune)

    res.status(200).send('The fortune was changed')
   },
 


deleteFortune: (req, res) => {
    let {index} = req.params

    fortunes.splice(index, 1)

    res.status(200).send('Your fortune was removed.')
    }
}