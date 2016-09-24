function replyHelp() {
  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve('\nHello, I see you need some help.\n\nFor start to use me, you can ask me some basic questions like:\n-What can you tell me about TSM?\n-Tell me when SKT is playing this next match?\n-Who have win between C9 and CLG?\n\n If you need to knowing what are the teams for this World Championship 2016, just ask me:\n-List me all team.\n\nObviously I am created by Recast.ai, so you can tell me your questions like you want, not a specified typo.\n\n I hope you will have utily and fun with me, because I am just in beta, my real version will be for the next LCS NA & EU. For more questions, do not hesitate to send me a mail at: -leagueofbot@recast.ai\n\nHave fun')
  })
}

module.exports = replyHelp
