import request from 'request-promise'
import getName from '../utils.js'


const getInfoTeam = (recast) => {
  const teamObject = recast.all('team')
  if (!teamObject[0]) { return new Promise((resolve, reject) => { reject ('Precise what team you want to know please..') }) }

  return new Promise((resolv, rejec) => {
    if (!teamObject[0].raw) {
      return rejec('Sorry, I have not understand about what team you need information')
    }

    const team = getName(teamObject[0].raw)
    if (!team) { return rejec ('Need a valid team for purchase')}

    request.get('http://api.lolesports.com/api/v1/teams?slug=team-solomid&tournament=3c5fa267-237e-4b16-8e86-20378a47bf1c', (error, response, res) => {
      const teamTab = JSON.parse(res).teams
      const resu = Array.findIndex(teamTab, (o) => {
        return o.name == team
      })

      const bios = (teamTab[resu].bios.en_US)
      const suString = bios.replace(/<p>/g, "")
      const subString = suString.replace(/<\/p>/g, "")

      resolv(subString);
    })
  })
}

module.exports = getInfoTeam
