import { H1, H2, Img, P, Div, content_div } from './html_elements.js'

export const Contact = () => {
  const add_element = element => content_div.appendChild(element.element);

  add_element(H1('Contact'));
  add_element(P('Contact us!'));
  add_element(P('Shinagawa'));
  add_element(P('Tel.: 070-1234-8765'));
  add_element(P('Email: restaurant@email.jp'));

  return {
  }
}