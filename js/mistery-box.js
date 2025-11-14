const boxesList=['b1-content','b2-content','b3-content']
var rdmIndex = Math.floor(Math.random() * boxesList.length);
var rightBox = boxesList[rdmIndex];
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
var aciertos = 0;
const pointsSpan = document.getElementById('pointsSpan');
window.onload = function() {
  console.log("The entire page and all its resources have fully loaded.");
  shuffleRightBox();
  pointsSpan.innerHTML = aciertos;
};
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        this.disabled = true;
        evaluateSelection(this.id,this);
        // console.log(`Checkbox with ID "${this.id}" is now checked.`);
      } else {
        // console.log(`Checkbox with ID "${this.id}" is now unchecked.`);
      }
    });
});
function shuffleRightBox() {  
  uncheckAllCheckboxes();
  renableCheckboxes();
  rdmIndex = Math.floor(Math.random() * boxesList.length);
  rightBox = boxesList[rdmIndex];
  loadBoxes();
}

function resetGame() {
  aciertos = 0;
  pointsSpan.innerHTML = aciertos;
  shuffleRightBox();
}
function loadBoxes() {
  var allBoxes = document.getElementsByClassName('box-content');
  for (const box of allBoxes) {
    box.innerHTML = '💩';
  }
  document.getElementById(rightBox).innerHTML = '💎';
}
function uncheckAllCheckboxes() {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}
function evaluateSelection(boxSelected,box) {
  if (boxSelected.split('-')[0] === rightBox.split('-')[0]) {
    setTimeout(() => {
      aciertos += 1;
      pointsSpan.innerHTML = aciertos;
      alert('ganasteeee')
      shuffleRightBox()
    }, 500);
  }
}
function renableCheckboxes() {
  checkboxes.forEach(checkbox => {checkbox.disabled = false;})
}