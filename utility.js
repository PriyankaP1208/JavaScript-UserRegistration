const readline=require('readline-sync');
class UserRegistration{
    validFirstName=()=>
    {
        let firstName;
        firstName=readline.question("Enter First Name:");
        console.log(firstName);
        let regFirstName=/^[A-Z][a-z]{3,}$/;
        if(firstName.match(regFirstName))
        {
            console.log("Valid");
        }
        else
        {
            console.log("Invalid");
        }
    }
    validLastName=()=>
    {
        let lastName;
        lastName=readline.question("Enter Last Name:");
        console.log(lastName);
        let regLastName=/^[A-Z][a-z]{3,}$/;
        if(lastName.match(regLastName))
        {
            console.log("Valid");
        }
        else
        {
            console.log("Invalid");
        }
    }
}
module.exports=new UserRegistration();