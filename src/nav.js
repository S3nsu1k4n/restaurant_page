import { H1, H2, Img, P, Div, content_div, Button } from './html_elements.js'

export const Nav = () => {
  const add_element = element => content_div.appendChild(element.element);
  const div = Div();
  const home = Button('Home');
  const menu = Button('Menu');
  const contact = Button('Contact');
  div.add([home, menu, contact]);
  add_element(div);

  return {
    home,
    menu,
    contact
  }
}