
// let name = "kshitiz";
// let age = 19;
// let isstudent =true;  



// document.getElementById("p1").textContent = name;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = isstudent;


// let username;
// username = window.prompt("what is your name ?");
// console.log (username);



let username;
document.getElementById("haha").onclick = function(){
    username = document.getElementById("name").value ;


    console.log (username);
    document.getElementById("head").textContent = `hi ${username} `
}

