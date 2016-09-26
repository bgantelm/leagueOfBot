const restify = require('restify')
const config = require('./config.js')
const recast = require('recastai')
const Discord = require('discord.js');
const client = new Discord.Client();

// IMPORTintents

const getGreetings = require('./modules/greetings.js')
const getGoodbyes = require('./modules/goodbyes.js')
const getWhoHaveWin = require('./modules/whohavewin.js')
const getNextmatch = require('./modules/nextMatch.js')
const getInfoTeam = require('./modules/information.js')
const getInsult = require('./modules/insult.js')
const getListTeam = require('./modules/listTeam.js')
const getHelp = require('./modules/help.js')


// functions intents
const INTENTS = {
  goodbyes: getGoodbyes,
  greetings: getGreetings,
  whohavewin: getWhoHaveWin,
  nextmatch: getNextmatch,
  information: getInfoTeam,
  insults: getInsult,
  listteam: getListTeam,
  help: getHelp,
}

const recastClient = new recast.Client(config.recast)

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) => {

  console.log(message.author.username)
  if (message.author.username !== 'testBot') {
  recastClient.textRequest(message.content, (res, err) => {
    if (err) { message.reply("I'm getting tired, let's talk later") } else {
      const intent = res.intent()
      console.log(intent);
      if (intent && INTENTS[intent]) {
        INTENTS[intent](res)
        .then((reply) => { message.reply(reply) } )
        .catch((reply) => { message.reply(reply) })
        return
      } else { message.reply('I cannot help you on this point :disappointed_relieved: ') }
    }
  })
}
})

client.login(config.discord);

// Setup Restify Server
const server = restify.createServer()
server.listen(process.env.port || 3002, () => {
  console.log('%s listening to %s', server.name, server.url)
})
