import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
'group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-smooth active:translate-y-px whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary: 'bg-accent px-5 py-3 text-[#03211d] hover:bg-[#5ce1d1] shadow-[0_10px_30px_-14px_rgba(45,212,191,0.7)]',
  secondary: 'border border-line-strong bg-raised/60 px-5 py-3 text-fg hover:border-accent/60 hover:bg-raised',
  ghost: 'px-1 py-1 text-sm font-medium text-fg hover:text-accent'
};

export function DirArrow({ className = '' }: {className?: string;}) {
  const { dir } = useLanguage();
  const Icon = dir === 'rtl' ? ArrowLeftIcon : ArrowRightIcon;
  return (
    <Icon
      aria-hidden
      className={`h-4 w-4 transition-transform duration-200 ease-smooth ${
      dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} ${
      className}`} />);


}

interface ActionProps {
  children: React.ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  arrow?: boolean;
  className?: string;
  external?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function Action({
  children,
  variant = 'primary',
  to,
  href,
  arrow = false,
  className = '',
  external = false,
  icon,
  onClick
}: ActionProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const inner =
  <>
      {icon}
      <span>{children}</span>
      {arrow ? <DirArrow /> : null}
    </>;


  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {inner}
      </Link>);

  }

  return (
    <a
      href={href}
      className={classes}
      onClick={onClick}
      {...external ? { target: '_blank', rel: 'noreferrer noopener' } : {}}>
      
      {inner}
    </a>);

}