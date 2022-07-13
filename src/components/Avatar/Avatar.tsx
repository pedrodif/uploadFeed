// Package
import { ImgHTMLAttributes } from 'react';

// Styles
import styles from './avatar.module.css';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;

}

export function Avatar({hasBorder = true, ...props} : IAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
