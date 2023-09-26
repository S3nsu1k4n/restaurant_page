export const content_div = document.querySelector('#content');

export const reset_content = () => {
  content_div.innerHTML = '';
}

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
  const add = nodes => {
    if(Array.isArray(nodes)){
      for (const node of nodes) {element.appendChild(node.element)};
    }
    else{
      element.appendChild(nodes.element);
    }
  }
  return {
    element,
    add
  }
}

export const Button = name => {
  const element = document.createElement('button');
  element.innerHTML = name;
  
  const click_event = func => element.addEventListener('click', func);
  return {
    element,
    click_event
  }
}