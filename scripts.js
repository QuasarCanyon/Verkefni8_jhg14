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
    const data = e.target[0].value;
    e.target[0].value = '';
    add(data);
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    const tick = e.srcElement.parentElement;
    tick.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    const source = e.srcElement.innerText;
    const parent = e.srcElement.parentElement;
    e.srcElement.remove();
    const tempInput = el('input', 'item__edit', commit);
    tempInput.setAttribute('value', source);
    const last = parent.querySelector('button');
    parent.insertBefore(tempInput, last);
    tempInput.focus();
    tempInput.setSelectionRange(source.length, source.length);
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    if (e.keyCode === ENTER_KEYCODE) {
      const source = e.target.value;
      const parent = e.srcElement.parentElement;
      e.srcElement.remove();
      const newText = el('span', 'item__text', edit);
      newText.appendChild(document.createTextNode(source));
      const last = parent.querySelector('button');
      parent.insertBefore(newText, last);
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    const li = el('li', 'item');
    const checkbox = el('checkbox', 'item__checkbox', finish);
    const span = el('span', 'item__text', edit);
    const button = el('button', 'item__button', deleteItem);
    const ul = document.querySelector('.items');

    span.appendChild(document.createTextNode(value));
    button.appendChild(document.createTextNode('Eyða'));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);

    ul.appendChild(li);
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    const del = e.srcElement.parentElement;
    del.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    let newEl = null;
    if (type === 'checkbox') {
      newEl = document.createElement('input');
      newEl.setAttribute('type', type);
    } else {
      newEl = document.createElement(type);
    }
    
    newEl.setAttribute('class', className);

    if (clickHandler === commit) {
      newEl.addEventListener('keydown', clickHandler);
    } else {
      newEl.addEventListener('click', clickHandler);
    }

    return newEl;
  }

  return {
    init: init
  }
})();
