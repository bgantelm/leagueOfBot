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
      message.reply('\nHello,\nThanks for adding me on your channel! I\'m a League of Legend bot, your guide through the World Championships and LCSs. You can ask for the upcoming matches, the teams bio and the match results\'. I\'m currently in beta, so stay tuned for further improvement!\nTo call me on a channel, type !lolbot and to make me leave type !lolbot!\nIf you\'re confused, don\'t worry, you can always ask for help! So go on, ask me "when is the next match"! :wink: \n ')
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
        } else { message.reply('I don\'t know how to help you on this :disappointed_relieved: ') }
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
