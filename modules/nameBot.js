const replyName = () => {
  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve('Sorry dude, I am not a human, I have no name, no feels...')
  })
}

module.exports = replyName
