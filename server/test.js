var a = [1, 2, 3];

a.forEach(function (e, i, ar) {
  if(e == 2) {
    console.log(e);
    a.splice(i, i);
    console.log(a);
  }
});
console.log(a);
