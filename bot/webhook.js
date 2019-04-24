app.post('/api/webhooks/botlist', (req, res) => {

let user = req.body.user
console.log(user)

if(bot.users.get(user)){
//Do your stuff
};

});
