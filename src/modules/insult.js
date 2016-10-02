const replyInsult = () => {
  const answers = [
    'Why are you sad',
    'Bitch please',
    'Typical cancer!!',
    'Calm down...',
    'ABYDOCOMIST',
    'BEDSWERVER',
    'BESPAWLER',
    'BOBOLYNE',
    'CUMBERWORLD',
    'DEW-BEATER',
    'DRIGGLE-DRAGGLE',
    'FUSTILARIAN',
    'GILLIE-WET-FOOT',
    'GOBERMOUCH',
    'LEASING-MONGER',
    'MUCK-SPOUT',
    'SADDLE-GOOSE',
    'SCOBBERLOTCHER',
    'Are you serious dude?',
    'I am a simple bot, but I have a heart...',
    ':poop:'
  ]

  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve(answers[Math.floor(Math.random() * 21)])
  })
}

module.exports = replyInsult
