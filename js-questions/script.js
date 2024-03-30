// 1 function to reverse every word of a string..

// function reverseString(str){
//  var ans=  str.split(' ').map(function(word){
//       return  word.split('').reverse().join('')
//    })
//    return ans.join(' ')
// }
// console.log(reverseString("hello how are you"))


//2 check wheather an object is an array or not..

// function checkArray(obj){
// //    return  Array.isArray(obj)
//    return obj instanceof Array 
// }

// console.log(checkArray([]))


// 3 empty an array in javascript

// var arr=[1,2,3,4,5,6]
// arr.length=0
// console.log(arr)

// 4 check wheather a number is integer

// function checkInteger(num){
// //    return  Number.isInteger(num)
// return num%1===0?true:false
// }

// console.log(checkInteger(12.5))

//5 make an array duplicate and put inside it after the previous

// function duplicate(arr){
//   return arr.concat(arr)
// }
// console.log(duplicate([1,2,3,4,5]))

// 6 js function to revere a number

// function reverse(num){
//   return Number(num.toString().split('').reverse().join(''))
// }
// console.log(reverse(122))

//7 check a string is palindrom or not

// function pali(str){
//    var dummystr=str
//    var revstr=dummystr.split('').reverse().join('')
//    return revstr===str
// }

// console.log(pali("popu"))

// 8  takes an string and return a string which maintain its alphabetical order...

// function alphaSort(str){
//   return str.split('').sort().join('')
// }

// console.log(alphaSort("apurba"))

// 9 takes an string and makes every strings first letter capital

// function makeCapitalize(str){
// var ans= str.split(' ').map(function(word){
//   return word.charAt(0).toUpperCase() +word.substring(1)
// })
// return ans.join(' ')
// }
// console.log(makeCapitalize("hello hi how are you")) 

// 10 takes an data and returns its type...
 
// function type(data){
//      return typeof data
// }
// console.log(type(()=>{}))


// 11 takes an array and returns the sum of all the elements...

// function sum (arr){
//   var ans= arr.reduce(function(acc,item){
//         return acc+item     
//    },0)

//    return ans
// }
// console.log(sum([1,3,5,7]))



// 12 takes an string and returns an object with number of occurence of each letter...
// function occurencce(str){
//       var obj={}
//       str.split('').forEach(function(elem){
//           if (obj.hasOwnProperty(elem)){
//             obj[elem]+=1
//           }
//           else{
//             obj[elem]=1
//           }
          
//       })
//       return obj
// }
// console.log(occurencce("apurba"))


// 13 takes an array and return the element which is present most..

// function findMost(arr){
//     var obj={}
//     arr.forEach((elem)=>{
//          if(obj.hasOwnProperty(elem))
//          {
//              obj[elem]+=1
//          }
//          else{
//             obj[elem]=1
//          }
//     })
//     console.log(obj)
//     console.log(Object.keys(obj))
//   var ans=  Object.keys(obj).reduce((acc,elem)=>{
//         return obj[acc]>obj[elem]?acc:elem
//     })
//     return ans
// }
// console.log(findMost([1,2,3,4,5,2,3,4,2,2,2,3,4]))


//14 takes an array where elements are numbers and dtringds also but add only the numbers..

// function add(arr){
//     var sum=0
//      arr.forEach((elem)=>{
//          if (typeof elem==='number')
//          {
//             sum+=elem
//          }
//      })
//      return sum
// }
// console.log(add([3,5,"hi",8,"yar"]))

// 15 takes an array of object and remove all the objects which gender is not male...

// function removeUngender(arr){
//    var ans=arr.filter((elem)=>{
//         return elem.gender==='male'
//    })
//    return ans
// }
// console.log(removeUngender(
//     [
//         {name:"apurba",gender:"male"},
//         {name:"ankush",gender:"male"},
//         {name:"ishika",gender:"female"},
//         {name:"sormistha",gender:"female"},
//         {name:"kutu",gender:"male"}
//     ]
// ))

// another way without using filter


// function removeUngender(arr){
//     var count=0
//     arr.forEach((elem)=>{
//         elem.gender!='male' && count++;
//     })
//     console.log(count)

// for (var i=1;i<=count;i++){
//     for (var j=0;j<arr.length;j++){
//         if (arr[j].gender!='male'){
//             arr.splice(j,1);
//             break;
            
//     }
// }

// }
// return arr
// }
// console.log(removeUngender(
//         [
//             {name:"apurba",gender:"male"},
//             {name:"ankush",gender:"male"},
//             {name:"ishika",gender:"female"},
//             {name:"sormistha",gender:"female"},
//             {name:"kutu",gender:"male"}
//         ]
//     ))


// 16 takes an array of object and return the object which has the highest salary..

// function highSalary(arr){
//    var hsal=0
//    arr.forEach((elem)=>{
//         if(elem.salary>hsal){
//             hsal=elem.salary
//         }
//    })

//    return hsal
// }
// console.log(highSalary(

//     [
//         {name:"apurba",salary:20000},
//         {name:"ankush",salary:30000},
//         {name:"sayan",salary:40000},
        
//     ]
// ))


// using reduce
// function highSalary(arr){
//   var ans= arr.reduce((acc,elem)=>{
//        return elem.salary>acc && elem.salary
//    },0)
//    return ans
// }
// console.log(highSalary(

//     [
//         {name:"apurba",salary:20000},
//         {name:"ankush",salary:30000},
//         {name:"sayan",salary:40000},
        
//     ]
// ))

//17 function to clone an array


// function clone(arr){
//     return [...arr]
// }

// function clone(arr){
//     var newarr=[]
//     arr.forEach((elem)=>{
//       newarr.push(elem)
//     })
//     return newarr
// }

// console.log(clone([1,2,3,4,5]))


// 17 pass an array to a function and return the first element from the array default and if the value of n pass to the function then return up to the nth position of the value..

// function rval(arr,n=1){
//     var newarr=[]
//     if(n<=arr.length){
//        for(var i=0;i<n;i++){ 
//           newarr.push(arr[i]) 
    
//     }
// }
//     else{
//         console.log("itna to valuei nahi hai")
//     }
//     return newarr
// }
// console.log(rval([1,2,3,4,5,6],2))

//  18 pass an array to a function and return the last element from the array default and if the value of n pass to the function then return up to the last nth position of the value from the end of an array..


// function rval(arr,n=1){
    
//     if(n>arr.length){
//         console.log("itna to valuei nahi hai")
//     }
//     else{
//         var newarr=[]
//         for (var i=arr.length-n;i<arr.length;i++){
//             newarr.push(arr[i])
//         }

//     }
//     return newarr
// }
// console.log(rval([1,2,3,4,5,6,7,8],3))


// 19 union of two array

// function union(arr1,arr2){
//    var concatedarray=arr1.concat(arr2)
//   return [... new Set(concatedarray)]
// }console.log(union([1,2,3],[2,3,5]))

// console.log([1,2].concat([2,3]))

// 20  js program to shuffle an array

// function shuffle (arr){
//      domainrange=arr.length
//      while(domainrange>0){
//      var ran=Math.floor(Math.random()*domainrange)
//      var temp=arr[ran]
//      arr[ran]=arr[domainrange-1]
//      arr[domainrange-1]=temp
//      domainrange--
//      }
//      return arr
// }
// console.log(shuffle([1,2,3,4,5]))