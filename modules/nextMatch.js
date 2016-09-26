import request from 'request-promise'
import config from '../config.js'
import getName from '../utils.js'
import Teams from '../teamjson.js'

const getNextmatch = (recast) => {
  const teamObject = recast.all('team')
  const team = teamObject
  const promises = []

console.log(team);
  if (!team) { return new Promise((resolve, reject) => { reject ('Sorry, technical problem. I need some more training..') }) }
  return new Promise((resolv, rejec) => {
    if (!teamObject[0].raw) {
      rejec('Sorry, I have not understand about what team you need information')
    }
    const teame = getName(teamObject[0].raw)
    if (!teame) { return rejec ('Need a valid team for purchase')}

    console.log(teame);
    for (var i = 0; i < 6; i++) {
      promises.push(getPromise(Teams[teame], i, teame))
    }
    Promise.all(promises)
    .then((res) => {
      for(var i = 0; i < 6; i++) {
        if (i == 0) {
          var save = res[i]
        }
        if (res[i].date < save.date) {
          save = res[i]
        }
      }
      resolv ('\n' + save.name1 + ' Vs ' + save.name2 + '\nat ' + save.date)
    })
    .catch(() => {
      console.log('error');
    })
  })
}

const getPromise = (teams, i, team) => {
  return new Promise((resolve, reject) => {
    var tournament = '3c5fa267-237e-4b16-8e86-20378a47bf1c'
    var url = `http://api.lolesports.com/api/v2/highlanderMatchDetails?tournamentId=${tournament}&matchId=${teams[i]}`
    request.get(url, (error, response, res) => {
      if (!error && response.statusCode == 200) {
        var mdr3 = JSON.parse(res).scheduleItems[0].scheduledTime
        var mdr = JSON.parse(res).teams[0].name
        var mdr2 = JSON.parse(res).teams[1].name
        if ((mdr == team || mdr2 == team)) {
          var now = new Date(mdr3)
          let obj = {
            name1: mdr,
            name2: mdr2,
            date: now
          }
          resolve (obj)
        } else {
          resolve (null)

        }
      }
    })
  })
}

module.exports = getNextmatch
