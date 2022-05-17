let data = [

    {
        name: "Amos Sam",
        age: "43",
        phone: "08033419018",
        email: "amos@yahoo.com",
        gender: "male",
    },

    {
        name: "Amadi Okey",
        age: "50",
        phone: "09122349087",
        email: "okeyamadi@hotmail.com",
        gender: "male",
    },

    {
        name: "Jamila Audu",
        age: "33",
        phone: "07099876543",
        email: "auduJ@hotmail.com",
        gender: "female",
    },

    {
        name: "Obado Alumu",
        age: "43",
        phone: "09067543213",
        email: "obado@gmail.com",
        gender: "female",
    },

    {
        name: "Hassan Musa",
        age: "63",
        phone: "08022877909",
        email: "hasan_m@yahoo.com",
        gender: "male",
    },

    {
        name: "Ude Chinedu",
        age: "23",
        phone: "07089671234",
        email: "udec@yahoo.com",
        gender: "male",
    },

    {
        name: "Adeola Kola",
        age: "43",
        phone: "08142568092",
        email: "kola@ymail.com",
        gender: "male",
    },

    {
        name: "Bisi Ojo",
        age: "35",
        phone: "08033954904",
        email: "ojobisi@yahoo.com",
        gender: "female",
    },

    {
        name: "Okeke Sammuel",
        age: "53",
        phone: "09108795209",
        email: "okesam@yahoo.com",
        gender: "male",
    },

    {
        name: "Rose Gold",
        age: "31",
        phone: "08023874802",
        email: "rosaG@gmail.com",
        gender: "female",
    },

    {
        name: "Anold Pam",
        age: "40",
        phone: "09034087915",
        email: "pam_a@yahoo.com",
        gender: "male",
    },

    {
        name: "John Moses",
        age: "33",
        phone: "08670873807",
        email: "moses@yahoo.com",
        gender: "male",
    },

    {
        name: "Clarine Sumer",
        age: "29",
        phone: "08027989905",
        email: "sumer@ygmail.com",
        gender: "female",
    },

    {
        name: "Anya Kamsi",
        age: "41",
        phone: "07084984942",
        email: "anya@ymail.com",
        gender: "male",
    },

    {
        name: "Amoo Naomm",
        age: "32",
        phone: "09083983279",
        email: "amo@yahoo.com",
        gender: "female",
    },

];

$(document).ready(function() {
let output;
for(let i=0; i< data.length; i++){
  output =` <div class="con">
  <p>Name:</p>
  <p class="cbody-p">${data[i].name}</p>
  <p class="cbody-p">${data[i].age}</p>
  <p class="cbody-p">${data[i].phone}</p>
  <p class="cbody-p">${data[i].email}</p>
  <p class="cbody-p">${data[i].gender}</p>
</div> 
`;
$(".cbody").append(output);
}
});

