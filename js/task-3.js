function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);
  return contentWidth + paddingWidth + borderWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
// Оголошення функції getElementWidth(content, padding, border)
function getElementWidth(content, padding, border) {
  // парсимо значення в числовий тип
  const contentWidth = parseInt(content);
  const paddingWidth = parseInt(padding);
  const borderWidth = parseInt(border);
  
  // повертаємо суму всіх значень
  return contentWidth + paddingWidth + borderWidth;
}

// Виклики функції з різними аргументами
getElementWidth("50px", "8px", "4px"); // повертає 74
getElementWidth("60px", "12px", "8.5px"); // повертає 101
getElementWidth("200px", "0px", "0px"); // повертає 200