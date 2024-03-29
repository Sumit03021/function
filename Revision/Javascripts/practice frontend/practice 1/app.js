const ele = document.getElementById("element");

// inline style attribute give but does give it value 
const style = ele.style.cssText
console.log("style: ", style)
const html = ele.innerHTML
console.log("html: ",html)
const outerhtml = ele.outerHTML;
console.log("outerHtml: ",outerhtml)
const span = document.createElement('span');
span.innerHTML = 'this is a span'
ele.append(span)
const appendHtml = ele.outerHTML;
console.log("appendhtml: ",appendHtml)

// gives stylesheet value into it with all inheritance and overrides into it
//to get exact value of stylesheets use dot for that values you needed.
const style1 = window.getComputedStyle(ele).height
const style2 = window.getComputedStyle(ele).width
const style3 = window.getComputedStyle(ele).fontSize
const style4 = window.getComputedStyle(ele).backgroundColor
const style5 = window.getComputedStyle(ele).color
console.log(style1 , style2 , style3 , style4 , style5)

// const style1 = window.getComputedStyle(ele)
// console.log(style1)




