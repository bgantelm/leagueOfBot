import restify from 'restify'
import config from './config.js'
import recast from 'recastai'
import Discord from 'discord.js'
const client = new Discord.Client();

// IMPORTintents

import getGreetings from './modules/greetings.js'
import getGoodbyes from './modules/goodbyes.js'
import getWhoHaveWin from './modules/whohavewin.js'
import getNextmatch from './modules/nextMatch.js'
import getInfoTeam from './modules/information.js'
import getInsult from './modules/insult.js'
import getListTeam from './modules/listTeam.js'
import getHelp from './modules/help.js'


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
