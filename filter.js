const fs = require('fs')
const pars = []
process.argv.slice(2).forEach(function (parameter) {
    pars.push(parameter)
});
const file = pars[0]
const Output = pars[1]

const List = []
const buf=fs.readFileSync(file)
buf.toString().split(/\r\n/).forEach(function(line){
    List.indexOf(line) === -1 ?
    List.push(line) : console.log(line, ' already listed')
});
console.log(List)

List.forEach(function(line){
    fs.appendFileSync(Output, (line + '\r\n'))
})




