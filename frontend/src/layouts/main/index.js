import { Link as ScrollLink } from 'react-scroll';
import { useLocation, Outlet } from 'react-router-dom';
// material
import { Box, Container, Typography } from '@mui/material';
// components
import Logo from '../../components/Logo';
//
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';
import LandingPage from '../../pages/LandingPage';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/home';

  return (
    <>
      <MainNavbar />
      <div>
        <LandingPage  />
        <MainFooter />
      </div>
    </>
  );
}
