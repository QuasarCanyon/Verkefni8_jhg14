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
      itemButton[i].addEventListener('click', deleteItem);
    }

    for (let i = 0; i < itemText.length; i++) {
      itemText[i].addEventListener('click', edit);
    }
  }

  function formHandler(e) {
    e.preventDefault();
    
    // console.log('halló heimur');
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
    const li = el('li', 'item');
    const checkbox = el('checkbox', 'item__checkbox', finish);
    const span = el('span', 'item__text', edit);
    const button = el('button', 'item__button', deleteItem);

    span.appendChild(document.createTextNode(value));
    button.appendChild(document.createTextNode('Eyða'));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    const del = e.srcElement.parentElement;
    del.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    const newEl = document.createElement(type);

    newEl.setAttribute('class', className);
    newEl.addEventListener('click', clickHandler);

    return newEl;
  }

  return {
    init: init
  }
})();
