var fs = require('fs');

var text = fs.readFile(process.argv[2], 'utf8', function(err, data) {
    
    if (err) {
        console.log(err)
    
    } else {
        console.log(data.split('\n').length - 1);
        
    }});

