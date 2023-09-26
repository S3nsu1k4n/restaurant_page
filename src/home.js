import { H1, Img, P, content_div } from './html_elements.js'

export const Home = () => {
  const add_element = element => content_div.appendChild(element.element);

  add_element(H1('Good Restaurant'));
  add_element(Img('https://www.foodiesfeed.com/wp-content/uploads/2023/06/vegan-curry-with-fresh-herbs.jpg', 200, 100));
  add_element(P('This is a very good and very delicious restaurant'));
  
  return {
  }
}
