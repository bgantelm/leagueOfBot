import request from 'request-promise'
import config from '../config.js'
import getName from '../utils.js'


const getInfoTeam = (recast) => {
  const teamObject = recast.all('team')
  const team = teamObject

  if (!team) { return new Promise((resolve, reject) => { reject ('Sorry, technical problem. I need some more training..') }) }

  return new Promise((resolv, rejec) => {
    if (!teamObject[0].raw) {
      rejec('Sorry, I have not understand about what team you need information')
    }

    const team = getName(teamObject[0].raw)
    if (!team) { return rejec ('Need a valid team for purchase')}

    request.get('http://api.lolesports.com/api/v1/teams?slug=team-solomid&tournament=3c5fa267-237e-4b16-8e86-20378a47bf1c', (error, response, res) => {
      const teamTab = JSON.parse(res).teams

      for (var i = 0; teamTab[i].name !== team; i++) {
      }

      const bios = (teamTab[i].bios.en_US)
      const suString = bios.replace(/<p>/g, "")
      const subString = suString.replace(/<\/p>/g, "")

      resolv(subString);
    })
  })
}

module.exports = getInfoTeam
