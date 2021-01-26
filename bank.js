 // log in button event handler
const loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";
            const nextArea = document.getElementById("next-area");
            nextArea.style.display = "block";
})

// Deposit button event handler
// const depositBtn = document.getElementById("deposit");
//     depositBtn.addEventListener("click", function(){
//             console.log("hi");
// })


// withdraw button event handler
// const withdrawBtn = document.getElementById("withdraw");
//     withdrawBtn.addEventListener("click", function(){
//                 console.log("hello");
// })