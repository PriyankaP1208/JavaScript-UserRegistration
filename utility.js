const readline=require('readline-sync');
class UserRegistration{
    validFirstName=(First_Name)=>
    {
        let regName=/^[A-Z]{1,}[a-z]{3,}$/;
        let firstName=First_Name;
        let result=firstName.match(regName);
        return result;
        /*do
        {
            firstName=readline.question("Enter valid first name:");
        }while(!firstName.match(regName))*/
        //console.log("valid:");
    }
    validLastName=(Last_Name)=>
    {
        let regName=/^[A-Z]{1,}[a-z]{3,}$/;
        let lastName=Last_Name;
        let result=lastName.match(regName);
        return result;
        /*do
        {
            lastName=readline.question("Enter valid last name:");
        }while(!lastName.match(regName))
        console.log("valid:");*/
    }
    validEmail=(Email_Id)=>
    {
        let emailId;
        let regEmailId=/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
        emailId=Email_Id;
        let result=emailId.match(regEmailId);
        return result;
        /*do{
            emailId=readline.question("Enter valid Email id:");
        }
        while(!emailId.match(regEmailId));
        console.log("Valid");*/
    }
    validMobileFormat=(mob_No)=>
    {
        let regMobNo=/^[0-9]{2}[ ]{1}[1-9]{1}[0-9]{9}/;
        let mobNo=mob_No;
        let result;
        result=mobNo.match(regMobNo);
        /*do
        {
            mobNo=readline.question("Enter valid Mobile no:");
        }
        while(!mobNo.match(regMobNo));*/
        //console.log("Valid");
        return result;
    }
    Password=(Password)=>
    {
        let password;
        let regPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}/;
        password=Password;
        let result=password.match(regPassword);
        return result;
        /*do{
            password=readline.question("Enter valid Password:");
        }
        while(!password.match(regPassword));
        console.log("Valid");*/
    }
}
        
module.exports=new UserRegistration();