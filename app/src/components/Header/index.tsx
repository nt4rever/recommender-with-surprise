import { LogoutOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.svg';
import { useAuth } from '~/hooks';

const Header = () => {
  const { auth, logout } = useAuth();
  return (
    <div className='flex items-center py-6'>
      <div className='w-1/5'>
        <Link to={'/'}>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className='relative w-3/5'>
        <input
          type='text'
          className='w-full rounded-3xl border-none bg-stone-100 px-5 py-3 text-base font-medium outline-none'
          placeholder='Search products...'
        />
        <div className='absolute right-6 top-0 flex h-full items-center'>
          <button className='cursor-pointer border-none bg-transparent text-lg hover:text-primary'>
            <SearchOutlined />
          </button>
        </div>
      </div>
      <div className='flex w-1/5 justify-end'>
        <button
          className='cursor-pointer border-none bg-transparent text-lg hover:text-primary'
          onClick={logout}
        >
          {auth && auth.firstName + auth.lastName}
          <LogoutOutlined className='ml-2' />
        </button>
      </div>
    </div>
  );
};

export default Header;
