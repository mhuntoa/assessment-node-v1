
export default asynchronousDelay(/*delay, callback*/) {
  const request = require('request')
  let request;
  request('https://randomuser.me/api/?results=500', (err, res, body){
    if(err) {
      // handle error
    } else {
      result = body;
      console.log(result)
    }
  })
  // setTimeout(callback, delay)
}


asynchronousDelay()