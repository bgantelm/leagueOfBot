const replyJoke = () => {
  const answers = [
    'Q: Why is Twisted Fate an illegal immigrant?\n\nA: Because he doesn\’t have a green card!',
    'Lee Sin walks into a bar… and a table… and a chair.',
    'Q: What do you call Kennen when he is stunned in Lightning Rush?\n\nA: Static Electricity.',
    'Q: Why can’t Sivir win the spelling bee?\n\nA: She can only spell shield!',
    'Q: Why did Fizz fall off his pole?\n\nA: Because he’s so unbalanced.',
    'I heard Yorick has a crush on a certain ADC. He really digs graves.',
    'Yorick walks into a bar. There’s no counter.',
    'Q: How many bronze players does it take to screw in a light bulb?\n\nA: Who knows – They can’t climb the ladder.',
    'A Korean boy killed his best friend after losing three games in a row in League of Legends. The media are currently blaming the Jungler.',
    'Q: Why is Yasuo never locked out of his house?\n\nA: Because he always Hasaki!',
    'Q: Who beats Orianna mid lane?\n\nA: Ochrisbrown.',
    'Q: Why can’t Olaf find a handicapped parking spot?\n\nA: He can’t be disabled.',
    'Q: What do you call Annie after first blood?\n\nA: A woman.',
    'Q: Why was Caitlyn pulled over on the highway?\n\nA: She was going AD miles per hour.',
    'Q: Why was Lucian pulled over on the highway?\n\nA: Because the racial issues in the United States have reached a fever pitch.',
    'Yo momma is so fat, Cho’gath feasted on her and gained full stacks.',
    'Q: What is Vaynes favourite website?\n\nA: Tumblr',
    'Q: Why does Viktor make a great support?\n\nA: Because he always has a spare helping hand!',
    'Q: Why does Viktor always win his lane?\n\nA: Because he always has the upper hand!',
    'Q: Why couldn’t the potato play ADC?\n\nA: Because no one would peel for him.',
    'Q: What do you call a Malphite getting a double kill against Azir and Anivia?\n\nA: Killing two birds with one stone.',
    'Q: Why did Fiddlesticks the Scarecrow get promoted?\n\nA: Because he was outstanding in his field.',
    'Q: Why does a chef love cooking for Ekko?\n\nA: Because he always goes back 4 seconds.',
    'Q: What do you call a fizz that builds Zonyas?\n\nA: A Goldfish',
    'Q: Why does Teemo live in a small house?\n\nA: Because he doesn’t need mushroom.',
  ]

  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve(answers[Math.floor(Math.random() * 25)])
  })
}

module.exports = replyJoke
