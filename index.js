function numberOfWords(input){
  var count = 1;
  for(var i = 0; i <input.length; i++){
       if(input[i]>='A'&&input[i]<='Z'){
           count++;
       }
   }document.write(count);
  
}
numberOfWords("myNameIsFaizal");