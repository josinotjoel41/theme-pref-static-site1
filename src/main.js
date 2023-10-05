function changeColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('selectedColor', color);
  }
  
  function resetColor() {
    document.body.style.backgroundColor = '';
   
  