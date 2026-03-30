let str = "masai";

for (let i = 0; i < str.length; i++) {
  let sub = "";
  for (let j = i; j < str.length; j++) {
    sub += str[j];
    console.log(sub);
  }
}
/* 
m
ma
mas
masa
masai
a
as
asa
s
sa
a
ai
i
*/
