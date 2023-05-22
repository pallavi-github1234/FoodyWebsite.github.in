



let signup = document.getElementById("submit1")

signup.addEventListener("click", (e)=>
{

    e.preventDefault();

    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    let phonenumber = document.getElementById("phonenumber").value
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    console.log(password);


    window.localStorage.setItem("FirstName", firstname );
    window.localStorage.setItem("LastName", lastname );
    window.localStorage.setItem("PhoneNumber", phonenumber );
    window.localStorage.setItem("Username", username );
    window.localStorage.setItem("Password", password );
    
    window.open("login.htm", ()=>{target="_self"})
    

})






// console.log(userStorage);