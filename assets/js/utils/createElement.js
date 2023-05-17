
/**
 * Функція для зручного створення елементів
 * @param {string} tag тег для елементу який створюємо
 * @param {object} options об'єкт з додатковими налаштуваннями
 * @param {string[]} options.classNames масив з рядками назв класів для елемента
 * @param {(Node | string)[]} children масив дитячих DOM-вузлів для створюємого елемента
 * @returns {HTMLElement}
 */
function createElement(tag, options, ...children) {
  const { classNames } = options;

  const element = document.createElement(tag);
  element.classList.add(...classNames);

  element.append(...children);

  return element;
}

