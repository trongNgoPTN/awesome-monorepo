import { Box, Skeleton, Stack, Typography } from '@mui/material';

interface Props {
  label?: string;
}

export function Placeholder({ label = 'Placeholder' }: Props) {
  return (
    <Box sx={{ p: 3, minWidth: 0 }}>
      <Typography variant="h1" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <Stack spacing={2} sx={{ py: 2 }} useFlexGap>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={100} height={100} />
        <Skeleton variant="rectangular" width="100%" height={30} />
        <Skeleton variant="rounded" width="100%" height={60} />
        <Skeleton variant="rectangular" width="100%" height={30} />
        <Skeleton variant="rectangular" width={300} height={30} />
        <Skeleton variant="rounded" width="100%" height={60} />
        <Skeleton variant="rectangular" width="100%" height={30} />
        <Skeleton variant="rounded" width="100%" height={60} />
        <Skeleton variant="rectangular" width="100%" height={30} />
        <Skeleton variant="rectangular" width={300} height={30} />
        <Skeleton variant="rounded" width="100%" height={60} />
      </Stack>
    </Box>
  );
}
