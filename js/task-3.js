
  function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content) * 2;
  const paddingWidth = parseFloat(padding) * 2;
  const borderWidth = parseFloat(border);
  
  return contentWidth + paddingWidth + borderWidth;
}

getElementWidth("50px", "8px", "4px"); // повертає 62
getElementWidth("60px", "12px", "8.5px"); // повертає 80.5
getElementWidth("200px", "0px", "0px"); // повертає 200