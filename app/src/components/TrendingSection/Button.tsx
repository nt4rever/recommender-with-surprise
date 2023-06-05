import { FC } from 'react';

interface SectionButtonIProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const SectionButton: FC<SectionButtonIProps> = ({ children, onClick }) => {
  return (
    <div
      className='group inline-flex cursor-pointer rounded-3xl bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primaryHover'
      onClick={onClick}
      aria-hidden='true'
    >
      {children}
      <div className='ml-2'>
        <svg
          className='fill-white transition group-hover:animate-buttonArrowHover'
          width='6'
          height='10'
          viewBox='0 0 6 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M3.1717 5.0005L0.343262 2.17203L1.7575 0.757812L6.0001 5.0005L1.7575 9.2431L0.343262 7.8289L3.1717 5.0005Z' />
        </svg>
      </div>
    </div>
  );
};

export default SectionButton;
