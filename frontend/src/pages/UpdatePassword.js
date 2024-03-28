// material
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import UpdatePasswordForm from '../components/user/UpdatePasswordForm';

// ----------------------------------------------------------------------

export default function PageFive() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Update Password | ZK Wallet">
      <Container maxWidth={themeStretch ? false : 'sm'}>
        <Typography variant="h3">Update Password</Typography>
        <UpdatePasswordForm />
      </Container>
    </Page>
  );
}
