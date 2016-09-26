const replyInsult = () => {
  const answers = [
    'Why are you sad',
    'Bitch please',
    'Typical cancer !!',
    'stfu noob',
    'Calm down ...',
    'Are you serious dude?',
    'I am a simple bot, but i have a heart...',
    ':poop:'
  ]

  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve(answers[Math.floor(Math.random() * 8)])
  })
}

module.exports = replyInsult
