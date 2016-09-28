const replySeeWorld = () => {
  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve('You can see all matches live on:\nhttps://www.youtube.com/watch?v=2lshhH1x1Ko\nAnd all replays on:\nhttps://www.youtube.com/user/LoLChampSeries')
  })
}

module.exports = replySeeWorld
