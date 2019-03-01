import React from 'react';
import Radium from 'radium';
import { styles } from '../styles/styles';

const Footer = () => (
  <footer style={ styles.footer }>
    <div>
      <a href='https://www.linkedin.com/in/jacob-butler-a2ab7093'
        style={ styles.hover }
        key='link1'>
        LinkedIn
      </a>
    </div>

    <div>
      <a href='https://dramaze.github.io/personal_site/'
        style={ styles.hover }
        key='link2'>
        Portfolio
      </a>
    </div>

    <div>
      <a href='https://github.com/DrAmaze'
        style={ styles.hover }
        key='link3'>
        GitHub
      </a>
    </div>
  </footer>
);

export default Radium(Footer);