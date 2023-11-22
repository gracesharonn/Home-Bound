const fs = require('fs');
const json = require('./login.json');
console.log('hello')
console.log(
    json,
    fs.readFileSync('./login.json').toString()
)
writeJSONfile()
function loadJSON(filename = ''){
    return JSON.parse(
        fs.existsSync(filename)
            ?fs.readFileSync(filename).toString()
            :'null'
    )
}
function saveJSON(filename = '', json = '"'){
    return fs.writeFileSync(filename,JSON.stringify(json, null, 2))
}
function writeJSONfile(){
    const input = loadJSON('./login.json')
    fetch('./Registration.html')
    var login = {'email_address' : "edricksok101@gmail.com",
    'password' : "password",
    'first_name': "Edrick",
    'last_name' : "Sok",
    'age' : "20",
    'sex' : "Male"
    }
    
    ;[
        {login}
        
].forEach(string => input.Volunteers.push(string))
    
    //input.Users.push(user)
    saveJSON('./login.json',input)
}
/*function writeJsonfile(){
    console.log("Running.");
    var jsfile = require('login.json');
    var user = { "emailAddress" : document.getElementById("contact_info").value,
    "password" : document.getElementById("password").value,
    "first_name" : document.getElementById("first_name").value,
    "last_name" : document.getElementById("last_name").value,
    "age" : document.getElementById("age").value,
    "sex" : document.getElementById("sex").value
    }
    var userstring = JSON.stringify(user);
   
    jsfile.writeFile("login.json",userstring, function(err, result) {
        if(err) console.log('error',err);
    });
}
*/
