module.exports = (req, res, next) => {

  // method
  let method = req.method

  // url
  let url = req.url

  // dateTime
  let today = new Date()
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  let dateTime = date + ' ' + time
  let reqTime = today.getMilliseconds()
  // console.log(reqTime)

  // finish event :Emitted when the response has been sent
  res.on('finish', () => {
    let finishToday = new Date()
    let resTime = finishToday.getMilliseconds()
    // console.log(resTime)
    let totalTime = resTime - reqTime

    console.log(`${dateTime} | ${method} from ${url} | total time: ${totalTime}ms`)
  })

  next()
}