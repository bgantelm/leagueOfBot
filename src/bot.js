import restify from 'restify'
import config from '../config/index.js'
import recast from 'recastai'
import Discord from 'discordie'
const client = new Discord
var Events = Discord.Events;

client.connect({ token: config.discord})
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
import getRanking from './modules/ranking.js'

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
  ranking: getRanking,
}
let i = 0

const recastClient = new recast.Client(config.recast.requestToken)

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
if (e.message.content == '!lolbot' || i == 1) {
  i = 1
  if (e.message.author.username !== 'BotOfLegends') {
    if (e.message.content == '!lolbot') {
      e.message.reply('\nHello,\nThanks for adding me on your channel! I\'m a League of Legends bot, your guide through the World Championships and LCS.For instance, you can ask me:\n- to play the live\n- information about the upcoming matches\n- info about the teams bio or the results of a game\n\nI\'m currently in beta, so stay tuned for further improvement!\nTo call me on a channel, type !lolbot and to make me leave type !lolbot!\nIf you\'re confused, don\'t worry, you can always ask for help! So go on, ask me "when is the next match"! :wink: \n ')
    } else if (e.message.content == '!lolbot!') {
      i = 0
    } else {
    recastClient.textRequest(e.message.content, (res, err) => {
      if (err) { e.message.reply("I'm getting tired, let's talk later") } else {
        const intent = res.intent()
        console.log(intent);
        if (intent && INTENTS[intent]) {
          INTENTS[intent](res)
          .then((reply) => { e.message.reply(reply) })
          .catch((reply) => { e.message.reply(reply) })
          return
        } else { e.message.reply('I don\'t know how to help you on this  :disappointed_relieved: ') }
      }
    })
  }
  }
}



})

// Setup Restify Server
const server = restify.createServer()
server.listen(process.env.port || config.port || 3002, () => {
  console.log('%s listening to %s', server.name, server.url)
})
