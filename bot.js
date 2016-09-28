import restify from 'restify'
import config from './config/index.js'
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
import getName from './modules/nameBot.js'
import getThanks from './modules/thanks.js'
import getStop from './modules/stop.js'
import getSeeWorld from './modules/seeWorld.js'
import getJoke from './modules/joke.js'

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
  namebot: getName,
  thanks: getThanks,
  stopbot: getStop,
  seeworld: getSeeWorld,
  joke: getJoke,
}
let i = 0

const recastClient = new recast.Client(config.recast.requestToken)

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) => {

if (message.content == '!lolbot' || i == 1) {
  i = 1
  if (message.author.username !== 'testBot') {
    if (message.content == '!lolbot') {
      message.reply('\nHello,\nThanks to add me on your channel, I am a League of Legend bot, in beta for this World Championship 2016, but i hope you will train me for my real version for back to LCS with lot of options!\nI hope we will be a nice conversations, and if you are dont knowing what can i make, dont hesitate to ask some help, it is always a pleasure for me to help you :)\nIf you want i leave the channel after, you just need to make !lolbot!\n and again !lolbot and i will come back :wink:')
    } else if (message.content == '!lolbot!') {
      i = 0
    } else {
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
  }
}



})
client.login(config.discord);

// Setup Restify Server
const server = restify.createServer()
server.listen(process.env.port || 3002, () => {
  console.log('%s listening to %s', server.name, server.url)
})
