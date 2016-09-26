const replyGreetings = () => {
  const answers = [
    'Hello',
    'Heyy!',
    'Welcome there!',
  ]

  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve(answers[Math.floor(Math.random() * 3)])
  })
}

module.exports = replyGreetings
