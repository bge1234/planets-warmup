var corr = {
  monday: "moon",
  tuesday: "mars",
  wednesday: "mercury",
  thursday: "jupiter",
  friday: "venus",
  saturday: "saturn",
  sunday: "sun"
};

function planets(day) {
  if(corr[day])
    return corr[day];
  else
    return "Please enter a valid day";
}

console.log('planets("monday") = ' + planets("monday"));
console.log('planets("thursday") = ' + planets("thursday"));
console.log('planets("tuesday") = ' + planets("tuesday"));
console.log('planets("sunday") = ' + planets("sunday"));
console.log('planets("stuff") = ' + planets("stuff"));
