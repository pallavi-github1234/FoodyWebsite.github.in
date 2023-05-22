
// ---------------------------- LOGIN FORM USING DOM --------------------------------


let button =document.getElementById("submit")
console.log(button);
button.addEventListener('click' , (e) => 
{
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let PasswordData = window.localStorage.getItem("Password")
    let UserNameData = window.localStorage.getItem("Username")
    
    if (username=="" && password=="")
    {  
      alert("UserName and Password is BLANK !!!!!");  
      return false;  
    }
    else if (username=="" )
    {
        alert("UserName cannot be blank");  
        return false;
    }
    else if (password=="" )
    {
        alert("Password cannot be blank"); ;  
        return false;
    }
    else if(password.length<4)
    {  
      alert("Password must be at least 4 characters long.");  
      return false;  
    } 
    
    else if 

    (username == UserNameData && password == PasswordData)
    { 
           console.log("right pass");
           window.open("index.html" , target="_self" )
    }
    else
    {
      alert("WRONG PASS")
    }
})













