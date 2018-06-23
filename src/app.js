$(document).ready(() => {
  console.log('document is ready, starting the game...');
  const $parentElement = $('.container');
  createGrid($parentElement);
});

const createGrid = ($parentElement, maxCols = 7, maxRows = 6) => {
  for (let row = 0; row < maxRows; row++) {
    const $newRow = $('<div>').addClass('row');
    $parentElement.append($newRow);
    for (let col = 0; col < maxCols; col++) {
      const $newCell = $('<div>').addClass('cell');
      $newRow.append($newCell);
    }
  }
};
