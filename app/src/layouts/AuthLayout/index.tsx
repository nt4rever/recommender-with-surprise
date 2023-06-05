import { Select } from 'antd';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

type AuthLayoutProps = {
  children: any;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }): ReactElement => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-bgBlank'>
      <div className='fixed right-2 top-2'>
        <Select
          defaultValue={'en'}
          value={i18n.language}
          style={{ width: 105 }}
          onChange={changeLanguage}
          options={[
            { value: 'en', label: 'English' },
            { value: 'vi', label: 'Việt Nam' },
            { value: 'jp', label: '日本語' }
          ]}
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
