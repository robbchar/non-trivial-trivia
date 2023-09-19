import styles from './NavHeader.module.css';
import React from 'react';

export default function NavHeader({ children }) {
  if (!children) return null;
  const buttons = !Array.isArray(children)
    ? React.cloneElement(children, {
        className: `${
          children.props.className ? children.props.className + ' ' : ''
        } nav-button`,
      })
    : children.map((button, index) => {
        return React.cloneElement(button, {
          key: index,
          className: `${
            button.props.className ? button.props.className + ' ' : ''
          } nav-button`,
        });
      });

  return <nav className={styles.nav}>{buttons}</nav>;
  // return <span>hi</span>;
}
