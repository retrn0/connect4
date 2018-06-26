var currentPlayer = 'red';
$(document).ready(() => {
  console.log('document is ready, starting the game...');
  const $parentElement = $('.container');
  createGrid($parentElement);

  $('.container').on('click', handleClick);
});

const createGrid = ($parentElement, maxCols = 7, maxRows = 6) => {
  for (let col = 0; col < maxCols; col++) {
    // let rowClassName = `row${row} row`;
    const $newCol = $('<div>').addClass('col');
    $parentElement.append($newCol);
    for (let row = 0; row < maxRows; row++) {
      const $newCell = $('<div>').addClass('cell');
      $newCol.append($newCell);
    }
  }
};

const handleClick = e => {
  let $currentCol = $(e.target).parent();
  let $reversedElements = $(
    $(e.target)
      .parent()
      .children()
      .get()
      .reverse()
  );

  $reversedElements.each(function(index) {
    if (!$(this).hasClass('move-red') && !$(this).hasClass('move-black')) {
      let className = currentPlayer === 'red' ? 'move-red' : 'move-black';
      $(this).addClass(className);
      currentPlayer = currentPlayer === 'red' ? 'black' : 'red';
      return false;
    }
  });

  // console.log('current player ---', currentPlayer);
};
