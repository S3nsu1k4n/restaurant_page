const Img = (src, width=64, height=64) => {
  const element = document.createElement('img');
  element.src = src
  element.width = width
  element.height = height
  return {
    element,
  }
}

const P = text => {
  const element = document.createElement('p');
  element.innerHTML = text;
  return {
    element
  }
}

const H1 = text => {
  const element = document.createElement('h1');
  element.innerHTML = text;
  return {
    element
  }
}

const InitialPageLoad = (() => {
  const content_div = document.querySelector('#content');

  const add_element = element => content_div.appendChild(element.element);

  add_element(H1('Good Restaurant'));
  add_element(Img(src='https://www.foodiesfeed.com/wp-content/uploads/2023/06/vegan-curry-with-fresh-herbs.jpg', width=200, height=100));
  add_element(P('This is a very good and very delicious restaurant'));
  

  console.log(content_div);
return {

}

})();
