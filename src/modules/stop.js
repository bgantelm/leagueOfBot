const replyStop = () => {
  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve('If you want to stop the bot, type \n!lolbot!\nAnd to call him again, type:\n!lolbot')
  })
}

module.exports = replyStop
