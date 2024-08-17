class rediffp{

inputName(){

    return "input[name^='name']"
}
inputlogin(){


    return "input[name^='login']"
}

inputpassword(){


    return "input[name^='passwd']"
}
retypePasswd(){
    return "input[name^='confirm_passwd']"
}
DOBday(){
    return "select[name^='DOB_Day']"
}

DOBMon(){
    return "select[name^='DOB_Month']"
    
}DOBYear(){
   
    return "select[name^='DOB_Year']"
}

female(){

    return 'input[value="f"]'
}
male(){

    return 'input[value="m"]'
}
checkbox(){

    return 'input[type="checkbox"]'
}
createbutton(){
    return "#Register"
}
monthsoptions(){


return "//select[contains(@name, 'DOB_Month')]/option"

}
}

const red=new rediffp()
export default red