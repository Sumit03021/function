const element = document.getElementById('element');
const styleSheet = document.styleSheets[0]; // Assuming the style is defined in the first stylesheet
const rules = styleSheet.cssRules;

// use for the css stylesheet but from the style tag in html only
// does not hovering effects etc
for (const rule of rules) {
  if (rule instanceof CSSStyleRule && (rule.selectorText == '#element' || rule.selectorText == '#element:hover')) {
    rule.style.backgroundColor = 'yellow'
    console.log('Style for #element:', rule.style.parentRule.cssText);
    console.log(typeof(rule.style))
  }
}

element.style.padding = '10px'
element.style.backgroundColor = 'yellow'
const jsStyle = {
  backgroundColor:element.style.backgroundColor,
  padding:element.style.padding
}

console.log("js style: ", jsStyle)

console.log(element.getRootNode())