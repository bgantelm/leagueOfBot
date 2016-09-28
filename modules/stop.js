const replyStop = () => {
  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve('If you want to stop the bot, just make:\n!lolbot!\nAnd for call him again:\n!lolbot\n\nI hope you have appreciate me, see you soon!')
  })
}

module.exports = replyStop
