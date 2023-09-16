const accountId = 1122334455
let accountEmail = "abc@gmail.com"
var accountPassword = "123qwe"
accountCity = "Lahore"
var accountStatus

//const
//let accountId //no redeclaration
//accountId = 5 //no reassigining

//let
//var accountEmail //no redecleration
//accountEmail = "def@gmail.com" //only reassigning

//var
var accountPassword //can be redecleare
 accountPassword = "321ewq" /*can be reassigned (this will also change previous accountPassword
                            accutally it will override previous accountPassword)*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus])