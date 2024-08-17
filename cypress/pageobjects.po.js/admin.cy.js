

import LoginPage from "./loginpage.cy"
class adminpage extends LoginPage {
    dropdown(){

        return 'div[class="oxd-select-text--after"]'
    }
    admin(){
    
        return 'Admin'
    }
    jobOption(){
    
        return 'Job '
    }
    JobTitles(){
        return 'Job Titles'
    }
    PayGrades(){
        return 'PayGrades'
    }
    empstatus(){
        return 'Employment Status'
    }
    JobCategories(){
    
        return 'Job Categories'
    }
    WorkShifts(){
    return 'Work Shifts'
    }
    
    
    submitbuttton(){
        return 'button[type="button"]'
    }
    jobTittleinpuField(){
    
    return 'input[class="oxd-input oxd-input--active"]'
    }
    jodDescription(){
    
    return 'textarea[placeholder="Type description here"]'
    
    }
    browseFile(){
    
        return 'div[class="oxd-file-div oxd-file-div--active"]'
    }
    
    addNote(){
    
        return 'textarea[placeholder="Add note"]'
    }
    
    saveButton(){
        return 'button[type="submit"]'
    }
    

    dashboard(){
        return 'a[href="/web/index.php/dashboard/index"]'
    }
    }
    const adminP=new adminpage()
    
export default adminP