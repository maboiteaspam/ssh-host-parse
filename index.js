
function parseConnection (str) {
  var user = 'root'
    , port = 22
    , host
    ;

  if (str.indexOf('@') !== -1) {
    user = str.slice(0, str.indexOf('@'))
    str = str.slice(str.indexOf('@')+1)
  }
  if (str.indexOf(':') !== -1) {
    port = str.slice(str.indexOf(':')+1)
    port = parseInt(port)
    str = str.slice(0, str.indexOf(':'))
  }
  host = str

  return {
    host: host,
    port: port,
    username: user
  }
}

module.exports = parseConnection;
