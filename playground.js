var module = require('./index');          // your code here,
                                          // your doc here.

console.log(
  module('some@where')
)

console.log(
  module('some@where:15251')
)

console.log(
  module('where:15251')
)

console.log(
  module('else')
)
