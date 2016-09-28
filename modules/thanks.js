const replyThanks = () => {
  const answers = [
    'It is always a pleasure to help you :blush:',
    'If I can do something else for you dont hesitate :)',
    'My pleasure',
  ]

  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve(answers[Math.floor(Math.random() * 3)])
  })
}

module.exports = replyThanks
