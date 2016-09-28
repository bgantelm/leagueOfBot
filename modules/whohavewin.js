import request from 'request-promise'
import getName from '../utils.js'
import Teams from '../teamjson.js'

const getWhoHaveWin = (recast) => {
  console.log(recast.sentences[0]);
  const team = recast.all('team')
  if (!team[0] || !team[1] || !team[0].raw || !team[1].raw) { return new Promise((resolve, reject) => { reject ('Sorry, I don\'t understand which team you\'re asking about') }) }

  return new Promise((resolve, reject) => {
    team[0] = getName(team[0].raw)
    team[1] = getName(team[1].raw)

    if (!team[0] || !team[1]) { return reject ('Need a valid team for purchase')}
    if (getBracket(team[0]) != getBracket(team[1])) {
      return reject ('There is no match planned between those team, sorry dude, they\'re not in the same bracket')
    }
    var count = 0
    var matchId = []
    for(var i = 0; i < 6; i++) {
      j = 0
      for (var j = 0; j < 6; j++)
        if (Teams[team[0]][i] == Teams[team[1]][j]) {
          matchId[count] = Teams[team[1]][j]
          count++
        }
    }
     console.log(matchId);
    request.get('http://api.lolesports.com/api/v1/leagues?slug=worlds', (error, response, res) => {
      var score = JSON.parse(res).highlanderTournaments[1].brackets[getBracket(team[0])].matches[matchId[0]].scores[team[0]]
      var score2 = JSON.parse(res).highlanderTournaments[1].brackets[getBracket(team[0])].matches[matchId[1]].scores[team[0]]

      if (!score && !score2) {
        return reject ('Those teams didn\'t compete yet. If you want to check the next match, just ask "When is YOUR_TEAM playing?"')
      } else if (!score) {
        resolve (score2)
      } else if (!score2) {
        resolve (score)
      } else {
        resolve (score, score2)
      }
    })
  })
}


const getBracket = (name) => {
  if (name == 'TSM' || name == 'Splyce' || name == 'Royal Never Give Up' || name == 'Samsung Galaxy') {
    return ("4e593494-40f1-42de-8ffd-982c93cfe083")
  } else if (name == 'H2K' || name == 'Edward Gaming' || name == 'ahq e-Sports Club' || name == 'INTZ e-Sports') {
    return ("0fa0a851-3a91-44d4-9add-95780b0c10f7")
  } else if (name == 'Counter Logic Gaming' || name == 'ROX Tigers' || name == 'G2 Esports' || name == 'Albus NoX Luna') {
    return ("3eeecb03-0a62-4589-9281-481ded97424f")
  } else if (name == 'SK Telecom T1' || name == 'Cloud9 ' || name == 'Flash Wolves' || name == 'I May') {
    return ("746ec9a5-8ac4-4c8e-ad93-70e10028b790")
  }
}

module.exports = getWhoHaveWin
