import { H1, H2, Img, P, Div, content_div } from './html_elements.js'

export const Menu = () => {
  const add_element = element => content_div.appendChild(element.element);
  add_element(H1('Menu'));

  let card = Div();
  card.add(H2('Food1'));
  card.add(P('Very delicious'));
  card.add(Img('https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1600'));
  add_element(card);
  
  card = Div();
  card.add(H2('Food2'));
  card.add(P('Very delicious'));
  card.add(Img('https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'));
  add_element(card);
  
  card = Div();
  card.add(H2('Food3'));
  card.add(P('Very delicious'));
  card.add(Img('https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'));
  add_element(card);
  
  card = Div();
  card.add(H2('Food4'));
  card.add(P('Very delicious'));
  card.add(Img('https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'));
  add_element(card);

  return {

  }
}