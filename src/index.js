/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) 
{
           var length = preferences.length;
            var count = 0;
         for(var i=0;i<length;i++)
         {
        if(preferences[i]!=i+1&&preferences[i]!=0)
        {
        for(var j=0;j<length;j++)
        {
       if(preferences[i]===j+1)
        {     
       var item=preferences[j];
       for(var k=0;k<length;k++)
       {
        if(item===k+1&&preferences[k]===i+1) 
        count++;
           else continue;
           break;
        }break;
      }
       else continue;
       
   }
  }
 }
  var g=count/3;
  return Math.trunc(g);

}
