 //this are the elements we are working with
 const passwordBox = document.querySelector('#password');
 const btn = document.querySelector('#btn');
 const copy = document.querySelector('.fa-copy');
 const eye = document.querySelector('.fa-eye');
 

 //these are what we want the generated password value to contain
 const length = 12;
 const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowercase = "abcdefghijklmnopqrstuvwxyz";
 const symbol = "!£#&*@";
 const number = "1234567890";
 const allChars = uppercase + lowercase + symbol + number;


 //creating a function to generate a random password
 //as you can see we us the Math.random() function to generate a random password

 function createPassword(){
     let password = "";
     password += uppercase[Math.floor(Math.random() * uppercase.length)];
     password += lowercase[Math.floor(Math.random() * lowercase.length)];
     password += symbol[Math.floor(Math.random() * symbol.length)];
     password += number[Math.floor(Math.random() * number.length)];

     while(length > password.length){
         password += allChars[Math.floor(Math.random() * allChars.length)];

     }

     passwordBox.value = password;

 };

 //creating a function to enable the eye slash icon to be working properly
  function eyeSlash(){
    passwordBox.type = passwordBox.type === 'password'? 'text' : 'password';
   eye.className = `fa-solid fa-eye${passwordBox.type === 'password'? "" : "-slash"}`;


  }


//creating a function to enable user to copy the generated password
 function copyPassword(){
     passwordBox.select();
     document.execCommand('copy');
    };



 btn.addEventListener('click', createPassword);
 copy.addEventListener('click', copyPassword);
 eye.addEventListener('click', eyeSlash);