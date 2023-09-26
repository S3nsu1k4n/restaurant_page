import './style.css'
import { Home } from './home.js'
import { Menu } from './menu.js'
import { Contact } from './contact.js'
import { Nav } from './nav.js'
import { reset_content } from './html_elements.js'


const nav = () => {
  const nav_bar = Nav();
  nav_bar.home.click_event(() => { reset_content(); nav(); Home();})
  nav_bar.menu.click_event(() => { reset_content(); nav(); Menu();})
  nav_bar.contact.click_event(() => { reset_content(); nav(); Contact();})
}
nav();