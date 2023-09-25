export const content_div = document.querySelector('#content');

const TextElement = (tag, text) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  return {
    element
  }
}

export const Img = (src, width=64, height=64) => {
  const element = document.createElement('img');
  element.src = src
  element.width = width
  element.height = height
  return {
    element,
  }
}

export const P = text => {
  const element = TextElement('p', text).element;
  element.innerHTML = text;
  return {
    element
  }
}

export const H1 = text => {
  const element = TextElement('h1', text).element;
  return {
    element
  }
}
export const H2 = text => {
  const element = TextElement('h1', text).element;
  return {
    element
  }
}

export const Div = () => {
  const element = document.createElement('div');
  const add = node => element.appendChild(node.element);
  return {
    element,
    add
  }
}