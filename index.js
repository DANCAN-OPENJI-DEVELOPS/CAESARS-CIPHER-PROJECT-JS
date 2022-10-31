function rot13(str) {
  const myArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
  const myStr = str.split("");
  for (let i = 0; i < myStr.length; i++) {
    for (let j = myArr.length; j >= 0; j--) {
       if (myStr[i] == myArr[j]) {
         if(myArr[j-13] ) {
          j -= 13 
        myStr[i] = myArr[j]
         }else {
           for(let k = 0; k < myArr.length; k++) {
             if(myStr[i] == myArr[k]) {
               k += 13;
               myStr[i] = myArr[k];
             }
           }
         } 
       } else {
         myStr[i] = myStr[i]
       }
    }
  }
  return myStr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
