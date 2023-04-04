import Link from 'next/link';
import * as React from 'react';

function Logo() {
  return (
    <Link href='/'>
      <img width={180} height={50} src="/logo-dark-transparent.png" alt="Spit-it logo" />
    </Link>
  );
}

export default Logo;
