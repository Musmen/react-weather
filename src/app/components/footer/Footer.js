import './Footer.scss';

import React from 'react';

const SOCIALS = [
  {
    id: 'github',
    href: 'https://github.com/Musmen',
    iconClass: 'social__icon-github',
  },
  {
    id: 'telegram',
    href: 'https://t.me/IgorMusmen',
    iconClass: 'social__icon-telegram',
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="author__description">
          <h2 className="author__title title visually-hidden">Author</h2>
          by @Musmen
        </p>
        <ul className="social__list list">
          {SOCIALS.map((social) => (
            <li className="social__item" key={social.id}>
              <a className="social__link link" href={social.href} target="_blank" rel="noreferrer">
                <span className={`social__icon ${social.iconClass}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
