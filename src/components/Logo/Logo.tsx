import { LogoProps } from '@/interfaces';
import Link from 'next/link';
import * as React from 'react';

function Logo({ className='' }: LogoProps) {
  return (
    <Link className={`inline-block ${className}`} href='/'>
      <img width={180} height={50} src="/logo-dark-transparent.png" alt="Spit-it logo" />
    </Link>
  );
}

export default Logo;
