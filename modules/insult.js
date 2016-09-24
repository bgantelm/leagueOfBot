function replyInsult() {
  const answers = [
    'Why are you sad',
    'Bitch please',
    'Typical cancer !!',
    'stfu noob'
  ]

  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve(answers[Math.floor(Math.random() * 4)])
  })
}

module.exports = replyInsult
