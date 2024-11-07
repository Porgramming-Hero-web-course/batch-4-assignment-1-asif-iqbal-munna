type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (obj: Shape): number | undefined => {
  if (obj.shape === "circle") {
    return parseFloat((Math.PI * obj.radius * obj.radius).toFixed(2));
  } else if (obj.shape === "rectangle") {
    return obj.width * obj.height;
  }
};

console.log(calculateShapeArea({ shape: "circle", radius: 5 }));

console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }));
