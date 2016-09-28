const replyName = () => {
  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve('Sorry man, I\'m not a human, I don\'t have a name, or any feels...')
  })
}

module.exports = replyName
