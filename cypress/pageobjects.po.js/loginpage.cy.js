import pimPage from "./pim.cy"



class LoginPage extends pimPage{

    Username() {
        return 'input[name="username"]'
    }
    password() {
        return 'input[name="password"]'
    }
    loginbutton() {
        return "button[type='submit']"
    }

profileOptn(){

    return "li[class='oxd-userdropdown']"
}

logoutoption(){


    return 'a[href="/web/index.php/auth/logout"]'
}
pim(){

    return "a[href='/web/index.php/pim/viewPimModule']"
}
}




export default LoginPage