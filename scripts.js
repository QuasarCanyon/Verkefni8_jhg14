const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);
    
    // TODO láta hluti í _items virka
    const itemTick = items.querySelectorAll('.item__checkbox');
    const itemButton = items.querySelectorAll('.item__button');
    const itemText = items.querySelectorAll('.item__text');

    for (let i = 0; i < itemTick.length; i++) {
      itemTick[i].addEventListener('change', finish);
    }

    for (let i = 0; i < itemButton.length; i++) {
      itemButton[i].addEventListener('push', deleteItem);
    }

    for (let i = 0; i < itemText.length; i++) {
      itemText[i].addEventListener('click', edit);
    }
  }

  function formHandler(e) {
    e.preventDefault();
    
    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    const tick = e.srcElement.parentElement;
    tick.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
