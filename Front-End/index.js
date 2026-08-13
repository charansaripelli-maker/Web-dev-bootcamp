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
