import request from 'request-promise'
import getName from '../utils.js'
import Teams from '../teamjson.js'

const getNextmatch = (recast) => {
  const teamObject = recast.all('team')
  const promises = []

  return new Promise((resolv, rejec) => {
    if (!teamObject[0]) {
      getNextMatch()
      .then((res) => {
        return resolv ('\n' + res.name1 + ' Vs ' + res.name2 + '\nat ' + new Date(res.date))
      })
    } else {
      if (!teamObject[0].raw) {
        return rejec('Sorry, I have not understand about what team you need information')
      }
      const teamName = getName(teamObject[0].raw)
      if (!teamName) { return rejec ('Need a valid team for purchase')}

      Teams[teamName].forEach((team) => promises.push(getPromise(team, teamName)))
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
    }
  })
}

const getNextMatch = () => {
  return new Promise((resolve, reject) => {
    request.get('http://api.lolesports.com/api/v1/scheduleItems?leagueId=9', function (error, response, res) {
      if (!error && response.statusCode == 200) {
        var date = JSON.parse(res).scheduleItems
        var now = new Date()
        var j = 0
        for (var i = 0; date[i]; i++) {
          if (date[i].scheduledTime.indexOf('2016') > -1 && date[i].tags.blockLabel !== 'Finals' && date[i].tags.blockLabel !== 'Quarterfinals' && date[i].tags.blockLabel !== 'Semifinals' && date[i].tags.subBlockLabel !== 'Rebroadcast' && date[i].tags.subBlockLabel !== 'PTL' && date[i].id !== 'AVcfjjkbQMQFcjhwbQmB') {
            if (j == 0) {
              var tmp = new Date(date[i].scheduledTime)
              var tmp2 = date[i].scheduledTime
              j = 1
            } else if (new Date(date[i].scheduledTime) > now && new Date(date[i].scheduledTime) < tmp) {
              tmp = new Date(date[i].scheduledTime)
              tmp2 = date[i].scheduledTime
            }
          }
        }
      }
      const resu = Array.findIndex(date, (o) => {
        return o.scheduledTime == tmp2
      })
      var tournament = '3c5fa267-237e-4b16-8e86-20378a47bf1c'
      var url = `http://api.lolesports.com/api/v2/highlanderMatchDetails?tournamentId=${tournament}&matchId=${date[resu].match}`
      request.get(url, (error, response, res) => {
        var name1 = JSON.parse(res).teams[0].name
        var name2 = JSON.parse(res).teams[1].name
        var date = JSON.parse(res).scheduleItems[0].scheduledTime
        let obj = {
          name1: name1,
          name2: name2,
          date: date
        }
        resolve (obj)
      })
    })
  })
}

const getPromise = (team, teamName) => {
  return new Promise((resolve, reject) => {
    var tournament = '3c5fa267-237e-4b16-8e86-20378a47bf1c'
    var url = `http://api.lolesports.com/api/v2/highlanderMatchDetails?tournamentId=${tournament}&matchId=${team}`
    request.get(url, (error, response, res) => {
      if (!error && response.statusCode == 200) {
        var date = JSON.parse(res).scheduleItems[0].scheduledTime
        var name1 = JSON.parse(res).teams[0].name
        var name2 = JSON.parse(res).teams[1].name
        if ((name1 == teamName || name2 == teamName)) {
          var now = new Date(date)
          let obj = {
            name1: name1,
            name2: name2,
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
