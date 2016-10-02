const replyGreetings = () => {
  const answers = [
    'Hello',
    'Heyy!',
    'Welcome!',
  ]

  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve(answers[Math.floor(Math.random() * 3)])
  })
}

module.exports = replyGreetings
