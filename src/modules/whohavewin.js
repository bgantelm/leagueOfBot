import request from 'request-promise'
import getName from '../utils.js'
import getId from '../idTeam.js'
import Teams from '../teamjson.js'

const getWhoHaveWin = (recast) => {
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
      const idTeam = []
      idTeam[0] = getId(team[0])
      idTeam[1] = getId(team[1])

      var score1 = JSON.parse(res).highlanderTournaments[1].brackets[getBracket(team[0])].matches[matchId[0]].scores[idTeam[0]]
      var score2 = JSON.parse(res).highlanderTournaments[1].brackets[getBracket(team[0])].matches[matchId[0]].scores[idTeam[1]]

      var score3 = JSON.parse(res).highlanderTournaments[1].brackets[getBracket(team[0])].matches[matchId[1]].scores[idTeam[0]]
      var score4 = JSON.parse(res).highlanderTournaments[1].brackets[getBracket(team[0])].matches[matchId[1]].scores[idTeam[1]]

      console.log('score 1:  ' + score1);
      console.log('score 2:  ' + score2);
      console.log('score 3:  ' + score3)
      console.log('score 4:  ' + score4);
      if (score1 === null && score3 === null) {
        return reject ('Those teams didn\'t compete yet. If you want to check the next match, just ask\n"When is ' + team[0] + ' playing?"\nor\n"When is ' + team[1] + ' playing?"')
      } else if (!score3 && !score4) {
        resolve (team[0] + ':  ' + score1 + '  /\/  ' + score2 + '  :' + team[1])
      } else if(!score1 && !score2) {
        resolve (team[0] + ':  ' + score3 + '  /\/  ' + score4 + '  :' + team[1])
      } else {
        resolve (team[0] + ':  ' + score1 + '  /\/  ' + score2 + '  :' + team[1] + '\n\n' + team[0] + ':  ' + score3 + '  /\/  ' + score4 + '  :' + team[1])
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
