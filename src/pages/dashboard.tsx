'use client'

import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import { Menu, MenuItem } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import ImageIcon from '@mui/icons-material/Image';
import SourceIcon from '@mui/icons-material/Source';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';

// Define the navigation structure
const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    children: [
      {
        segment: 'Dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
      },
      {
        segment: 'Templates',
        title: 'Templates',
        icon: <DashboardIcon />,
      },
      {
        segment: 'Assistant',
        title: 'Assistant',
        icon: <DescriptionIcon />,
      },
    ],
  },
  
  {
    kind: 'divider',
  },

  {
    segment: 'Workflows',
    title: 'Workflows',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'Data Analyst',
        title: 'Data Analyst',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'Article Generator',
        title: 'Article Generator',
        icon: <ArticleIcon />,
      },
      {
        segment: 'Image Generator',
        title: 'Image Generator',
        icon: <ImageIcon />,
      },
      {
        segment: 'Content Rewriter',
        title: 'Content Rewriter ',
        icon: <SourceIcon />,
      },
      {
        segment: 'Documents',
        title: 'Documents',
        icon: <DocumentScannerIcon />,
      },
    ],
  },

  {
    kind: 'divider',
  },

  {
    segment: 'Accounts',
    title: 'Accounts',
    icon: <PersonIcon />,
    children: [
      {
        segment: 'My History',
        title: 'My History',
        icon: <HistoryIcon />,
      },
      {
        segment: 'Usage History ',
        title: 'Usage History ',
        icon: <ImageIcon />,
      },
      {
        segment: 'Plans and Billing',
        title: 'Plans and Billing ',
        icon: <SourceIcon />,
      },
      {
        segment: 'Profile Details',
        title: 'Profile Details',
        icon: <PersonIcon />,
      },
    ],
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

interface DashboardProps {
  window: Window; // Typing the window prop correctly
}

export default function Dashboard(props: DashboardProps) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Add state for the menu dropdown
  const [anchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // Use window directly (not callable)
  const demoWindow = window ? window : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow} // Pass the window prop correctly
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>

      {/* Dropdown Menu for Reports */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Sales</MenuItem>
        <MenuItem onClick={handleClose}>Traffic</MenuItem>
      </Menu>
    </AppProvider>
  );
}
