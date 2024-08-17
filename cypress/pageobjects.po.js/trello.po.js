class trellopages{


loginbutton(){
    return 'a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]'
}

usernameinputfield(){
    return "input[autocomplete='username']"
}
passwordinputfield(){
    return "#password"
}
login_Continue(){
    return "#login-submit"
}
trelloheader(){
    return "//h3[text()='Trello Workspace']"
}

trelloAppicon(){

return 'a[href="https://trello.com/appSwitcherLogin?login_hint=girigirish419@gmail.com"]'
}

createButton(){
    return 'button[data-testid="create-board-submit-button"]'
}

}



//const trelloPo=new trellopages()
export default trellopages