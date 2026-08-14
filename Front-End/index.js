let users=[
    {
        name:"John Doe",
        gender:"Male",
        image:"eh.jfif",
    },
     {
        name:"Jane Doe",
        gender:"Female",
        image:"girl.jfif",
    }
]
let curr=0;
function toggleuser(){
  curr=(curr+1)%2;
    let username=document.getElementById("user-name");
    let usergender=document.getElementById("user-gender");
    let userimage=document.getElementById("user-image");

    username.innerHTML=users[curr].name;
    usergender.innerHTML=users[curr].gender;
    userimage.src=users[curr].image;
}
function randomuser(){
fetch("https://randomuser.me/api/")
.then((response)=>response.json())
.then((data)=>{
    let username=document.getElementById("user-name");
    let usergender=document.getElementById("user-gender");
    let userimage=document.getElementById("user-image");
    username.innerHTML=data.results[0].name.first+" "+data.results[0].name.last;
    usergender.innerHTML=data.results[0].gender;
    userimage.src=data.results[0].picture.large;
})
.catch((error)=>{
    console.log("Error fetching random user:", error);
})
}
function myrandomuser(){

fetch("/api/random-user")
.then((response)=>response.json())
.then((data)=>{
    let username=document.getElementById("user-name");
    let usergender=document.getElementById("user-gender");
    let userimage=document.getElementById("user-image");
    username.innerHTML=data.name;
    usergender.innerHTML=data.gender;
    userimage.src=data.image;
})
.catch((error)=>{
    console.log("Error fetching random user:", error);
})



}