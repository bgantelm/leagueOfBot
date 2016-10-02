import request from 'request-promise'
import getName from '../utils.js'
import Teams from '../teamjson.js'
import getTeam from '../teamId.js'

const getRanking = (recast) => {
  const bracket = recast.all('bracket')

  if (!bracket[0]) { return new Promise((resolve, reject) => { reject ('Please specify the Group (A, B, C or D)') }) }

  return new Promise((resolve, reject) => {

    if (!bracket[0].raw) {
      return reject('Sorry, I don\'t understand what group you\'re talking about')
    }
    const bracketId = getBracket(bracket[0].raw)
    if (!bracketId) { return reject ('Sorry, I need a valid Group to continue')}

  request.get('http://api.lolesports.com/api/v1/leagues?slug=worlds', (error, response, res) => {
    var result = JSON.parse(res).highlanderRecords.filter(function(o) {
      return (o.tournament == '3c5fa267-237e-4b16-8e86-20378a47bf1c' && o.bracket == bracketId)
    })
    result.sort(function(a, b) {
    return b.wins - a.wins;
});

var id0 = result[0].id.split(":");
var id1 = result[1].id.split(":");
var id2 = result[2].id.split(":");
var id3 = result[3].id.split(":");
console.log(id0);


resolve ('\nRANKING GROUP ' + bracket[0].raw + '\n1:   ' + getTeam(id0[1]) + '  Win: ' + result[0].wins + '   Losses: ' + result[0].losses + '\n2:   ' + getTeam(id1[1]) + '  Win: ' + result[1].wins + '   Losses: ' + result[1].losses + '\n3:   ' + getTeam(id2[1]) + '  Win: ' + result[2].wins + '   Losses: ' + result[2].losses + '\n4:   ' + getTeam(id3[1]) + '  Win: ' + result[3].wins + '   Losses: ' + result[3].losses)


  })
})
}


const getBracket = (name) => {
  if (name == 'D' || name == 'd') {
    return ("4e593494-40f1-42de-8ffd-982c93cfe083")
  } else if (name == 'C' || name == 'c') {
    return ("0fa0a851-3a91-44d4-9add-95780b0c10f7")
  } else if (name == 'A' || name == 'a') {
    return ("3eeecb03-0a62-4589-9281-481ded97424f")
  } else if (name == 'B' || name == 'b') {
    return ("746ec9a5-8ac4-4c8e-ad93-70e10028b790")
  }
}

module.exports = getRanking
