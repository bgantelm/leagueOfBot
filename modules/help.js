const replyHelp = () => {
  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve('\nI see you need some help. Relax.\n\nHere are the questions you can ask me:\n-When is the next match coming?\n-What can you tell me about TSM?\n-Tell me when SKT is playing their next match?\n-Who won the match between C9 and CLG?\n\n If you need to know what the World Championship 2016 competing teams are, just ask me:\n-List me all teams competing.\n\nDon\'t worry about formating when talking to me, I understand natural language and not only commands, since I\'m powered by Recast.AI.\n\nSo if you have any questions, don\'t hesitate to send an email to:\nhello@recast.ai\n\nHave fun :hearts:')
  })
}

module.exports = replyHelp
