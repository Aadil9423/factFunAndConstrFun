/** @format */

// function parson(LastName) {
//   return {
//     firstName: "Aadil",
//     lastName: LastName,
//     getFullName(){
//         return `First Name:${}`
//     }
//   };
// }

// function getPersonDetails(fname, lname, city) {
//   this.firstName = fname;
//   this.lastName = lname;
//   this.city = city;
//   this.getPersonInfo = function () {
//     return `First Name:${this.firstName} | Last Name:${this.lastName} | City ${this.city}`;
//   };
// }
// console.log(new getPersonDetails("Aadil", "Raza", "Nanded"));

// function Person(fName, lName, mName, mNumbar) {
//   this.fistName = fName;
//   this.lastName = lName;
//   this.midalNmae = mName;
//   this.Numbar = mNumbar;
//   this.getParsnainfo = function () {
//     return `First Name${fName} | Last Name${lName} | Midal Nmae${mName} | Mobil Numbar${mNumbar}`;
//   };
// }
// console.log(new Person("Aadil", "Devla", "Ashfaq", 9763055188));

function Parsan(fName, mName, lName, city) {
  this.fullName = fName;
  this.MidalName = mName;
  this.lastName = lName;
  this.city = city;
  this.getParsn = function () {
    return `Full Name $(this.fullName) | Midal Name $(this.midalNmae) | Last Name $(this.lastName) | City Name $(this.city)`;
  };
}

console.log(new Parsan("Aadil", "ashfaq", "devla", "Nanded"));
