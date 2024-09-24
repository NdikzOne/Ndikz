const fs = require('fs')

global.creator = 'NdikzOne' 
global.apikey = ["NdikzOne", "Ndikz", "NdikzApi"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
