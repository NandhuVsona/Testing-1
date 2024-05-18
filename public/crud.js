// let form = document.querySelector("form");
// let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// let monday = {};
// let tuesday = {};
// let wednesday = {};
// let thursday = {};
// let friday = {};
// let saturday = {};

// form.addEventListener("submit", async (e) => {
//  //e.preventDefault();
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let department = document.getElementById("department").value;
//   let location = document.getElementById("location").value;
//   let position = document.getElementById("position").value;

//   days.forEach((day) => {
//     let currentDay = document.querySelectorAll(`.${day}-shedule`);
//     currentDay.forEach((d, idx) => {
//       fillData(day, d, idx);
//     });
//   });

//   let data = {
//     name,
//     email,
//     password,
//     department,
//     location,
//     position,
//     monday,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//   };
//   console.table(data);
//   const requestOptions = {
//     method: "post",
//     Headers: {
//       " Content-Type": "application/json",
//     },
//     body: {hi:JSON.stringify(data)},
//   };
  
//   let req = await fetch("/api", requestOptions);
//   let res = await req.json();
// });

// function fillData(day, data, index) {
//   switch (day) {
//     case "monday":
//       monday[`period_${index + 1}`] = data.value;
//       break;
//     case "tuesday":
//       tuesday[`period_${index + 1}`] = data.value;
//       break;
//     case "wednesday":
//       wednesday[`period_${index + 1}`] = data.value;
//       break;
//     case "thursday":
//       thursday[`period_${index + 1}`] = data.value;
//       break;
//     case "friday":
//       friday[`period_${index + 1}`] = data.value;
//       break;
//     case "saturday":
//       saturday[`period_${index + 1}`] = data.value;
//       break;
//   }
// }