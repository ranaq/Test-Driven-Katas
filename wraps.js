// wrap is a function that take two arguments: a string and a column number
// it returns the string, w/ the line breaks inserted at the right places to make sure no line is longer than the col number

// add line breaks at word boundaries

const wrap=(line,maxLen)=>{
  let testChar=line[maxLen]
  let lineArray=line.split('')
  // check whether is a space. if space, line break
  // if not - set var = maxLen and make it smaller until we get to a space
  let i=maxLen;
  if (line.length < maxLen) return line;
  
  while(lineArray[i] !== ' ') {
    i--;
  }
  lineArray.splice(i,1,'\n');

  return lineArray.join('')
}



module.exports=wrap
