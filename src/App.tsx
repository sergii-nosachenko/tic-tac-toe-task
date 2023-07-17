import { Box, Typography } from '@mui/material';
import Game from './components/Game.solution';

export default function App() {
  return (
    <Box textAlign="center">
      <Typography variant="h2">Tic Tac Toe</Typography>
      <Game />
    </Box>
  );
}
