

//+ Create an object literal (salon) and display the information on the index.html.

//+ Create an object constructor (Pet class/constructor), create three pets using the constructor.

//+ Register pets using the HTML form (using the Pet constructor).

//+ Clear the form.

//** use a good CSS for the index.html and the register.html.

//Submit a ZIP file and a GitHub link.

//first we are learning object literal

//object literal notation:
let petSalon = {
    //properties
    name:"The Fashion Pet",
    address:{
        street: "University",
        number: "262",
        zipcode: "22400"
    },
    pets:[]
}
function displayInfo(){
    document.getElementById("info").innerHTML=`
    Welcome to ${petSalon.name} 
    <p>We are located at ${petSalon.address.street}</p>
    <p>${petSalon.address.number}</p>
    <p>${petSalon.address.zipcode}</p>
    `
    }

//create the constructor
//<-----parameters(local vars)------->
function Pet(name,age,gender,breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner; // **this will cause probs**
    this.contactPhone=phone; //***this will cause probs  */

}

//create pets
let pet1 = new Pet("scooby",60,"Male","Dane","Grooming","Shaggy","555-5555-555");
let pet2 = new Pet("Deefer",11,"Male","mutt","vaccine","Katie","703-780-3616");
let pet3 = new Pet("Princess",2,"female","golden retriever", "vaccine", "Edwin", "703-780-5217");
petSalon.pets.push(pet1,pet2,pet3);
//register function
//getting the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("selService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function register(){
    //get teh values
  
    //create teh object
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    //display the obj
    console.log(thePet);
    //push the object into the array
    petSalon.pets.push(thePet);
    //display    the petSalon.pets array
    console.log(petSalon.pets);
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("selService").value="";
    document.getElementById("txtOwner").value="";
    document.getElementById("txtPhone").value="";

}

displayInfo();
