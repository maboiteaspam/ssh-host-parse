var hParse = require('./index');          // your code here,
                                          // your doc here.

console.log(
  hParse('some@where')
)

console.log(
  hParse('some@where:15251')
)

console.log(
  hParse('where:15251')
)

console.log(
  hParse('else')
)
