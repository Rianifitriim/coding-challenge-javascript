function truncateString(str, num) {
    if (num > str.length){
      return str;
    } else{
      str = str.substring(0,num);
      return str+"...";
    }
  
  }
  
  res = truncateString("David Winalda",7);
  console.log(res)