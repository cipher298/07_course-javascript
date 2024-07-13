function highlight([first, ...strings], ...value) {
    return value
      .reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
      )
      .join("");
  }
  
  var brand = "F8";
  var course = "Js";
  
  highlight`Học lập trình ${course} tại ${brand}!`;
  console.log(highlight`Học lập trình ${course} tại ${brand}!`);
  