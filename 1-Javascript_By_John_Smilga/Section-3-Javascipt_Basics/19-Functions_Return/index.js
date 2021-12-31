// return
// default undefined, shortcuts, ignores after;
// 1 inch 2.54cm

const CM = 2.54;

const wallHeight = 80;

const width = inchesToCentimeter(100);
const height = inchesToCentimeter(wallHeight);

function inchesToCentimeter(inch) {
  const value = CM * inch;
  console.log("The value in cm is : " + value + " cm");
  return value;
}

const dimensions = [width, height];
console.log(dimensions);
