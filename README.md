# ssh-host-parse

parse ssh host like `user@host:port`

## Install

    npm i @maboiteaspam/ssh-host-parse --save-dev

## Usage

```js
var module = require('@maboiteaspam/ssh-host-parse');

console.log( module('some@where') )         // { host: 'where', port: 22, username: 'some' }

console.log( module('some@where:15251') )   // { host: 'where', port: 15251, username: 'some' }

console.log( module('where:15251') )        // { host: 'where', port: 15251, username: 'root' }

console.log( module('else') )               // { host: 'else', port: 22, username: 'root' }


```

## Notes

I have only pulled out the code from `sequest`,
https://github.com/mikeal/sequest/blob/master/index.js#L9

## More

- https://github.com/mikeal/sequest
- https://github.com/maboiteaspam/ssh2-utils
