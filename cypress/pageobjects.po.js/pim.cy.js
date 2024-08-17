class pimPage{


pim(){

    return "a[href='/web/index.php/pim/viewPimModule']"
}
AddEmployee(){

    return "Add Employee"
}
fristName(){

    return 'input[name="firstName"]'
}
middleName(){

return 'input[name="middleName"]'

}
lastName(){
    return 'input[name="lastName"]'
}
empID(){
    return 'input[class="oxd-input oxd-input--active"]'
}
loginCheckBox(){


    return 'input[type="checkbox"]'
}
saveButton(){
    return 'button[type="submit"]'
}
}
const PIM=new pimPage()
export default pimPage