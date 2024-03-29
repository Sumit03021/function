// // Get the element you want to save
// const elementToSave = document.getElementById('myElement');

// // Create a new document object
// const newDocument = document.implementation.createDocument('', '', null);

// // Import the element you want to save
// const importedNode = newDocument.importNode(elementToSave, true);

// // Add the imported node to the new document's body
// newDocument.documentElement.append(importedNode);

// // Now you can save the newDocument's innerHTML to a new file
// const newHtml = newDocument.documentElement.innerHTML;
// console.log(newHtml);

const element = document.getElementById('myElement');
const htmlContent = element.outerHTML;
const computedStyle = window.getComputedStyle(element);
const inlineStyle = element.style
const newDoc = document.implementation.createHTMLDocument('New Document');
const head = newDoc.head;

const styleSheet = document.styleSheets[0]; // Assuming the style is defined in the first stylesheet
const rules = styleSheet.cssRules;

// use for the css stylesheet but from the style tag in html only
// does not hovering effects etc
const style = document.createElement('style')

for (const rule of rules) {
  if (rule instanceof CSSStyleRule && (rule.selectorText == '#myElement' || rule.selectorText == '#element:hover')) {
    rule.style.backgroundColor = 'yellow'
    style.innerHTML = `${rule.style.parentRule.cssText}`
  }
}




// const style = document.createElement('style');
// style.innerHTML = `
//   ${element.localName} {
//     ${Object.entries(computedStyle).filter(([prop, value]) => {
//       // Filter out invalid or inherited values
//       return value !== '' && value !== 'initial' && value !== 'inherit';
//     })
//     .reduce((style, [prop, value]) => {
//       // Combine the filtered styles into a string
//       style += `${prop}: ${value};`;
//       return style;
//     }, '')}
//   }
// `;
// const filteredStyle = {};
//    for(let key in inlineStyle){
//     filteredStyle[key ] = inlineStyle[key];
//    }


  // // Filter out invalid or inherited values
  // Object.keys(computedStyle).forEach(prop => {
  //   if (computedStyle[prop] !== '' && computedStyle[prop] !== 'initial' && computedStyle[prop] !== 'inherit') {
  //     filteredStyle[prop] = computedStyle[prop];
  //   }
  // });


//   const styleElement = document.createElement('style');
//   styleElement.innerHTML = `
//     ${element.localName} {
//       ${Object.entries(filteredStyle).map(([prop, value]) => `${prop}: ${value};`).join('')}
//     }
//   `;
//   head.appendChild(styleElement)


// // console.log(element.computedStyle.cssText)
head.appendChild(style);
newDoc.body.innerHTML = htmlContent;
console.log(style.innerHTML)
console.log(newDoc)

// Save the new document to a file
// You can use the FileSaver.js library to save the new document as a file