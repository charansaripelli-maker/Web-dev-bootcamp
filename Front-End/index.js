let users=[
    {
        name:"John Doe",
        gender:"Male",
        image:"john.png",
    },
     {
        name:"Jane Doe",
        gender:"Female",
        image:"jane.png",
    }
]
let curr=0;
function toggleuser(){
    if(curr==0){
        curr=1;
    }else{
        curr=0;
    }
    let username=document.getElementById("user-name");
    let usergender=document.getElementById("user-gender");
    let userimage=document.getElementById("user-image");

    username.innerHTML=users[curr].name;
    usergender.innerHTML=users[curr].gender;
    userimage.src=users[curr].image;
}
function toggleuser2(){
  curr=(curr+1)%2;
}