import {
  Paper,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Close, RadioButtonUnchecked } from '@mui/icons-material';

const Game = () => (
  <>
    <Typography
      variant="h5"
      gutterBottom
    >
      Next turn: player
    </Typography>

    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 320,
        flexGrow: 1,
        marginBottom: 4,
      }}
    >
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Button
            variant="outlined"
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              cursor: 'pointer',
            }}
          >
            <Close fontSize="large" />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              cursor: 'pointer',
            }}
          >
            <Close fontSize="large" />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              cursor: 'pointer',
            }}
          >
            <RadioButtonUnchecked fontSize="large" />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              cursor: 'pointer',
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              cursor: 'pointer',
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              cursor: 'pointer',
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              cursor: 'pointer',
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              cursor: 'pointer',
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              cursor: 'pointer',
            }}
          />
        </Grid>
      </Grid>
    </Paper>

    <Button
      variant="contained"
      color="secondary"
    >
      Reset
    </Button>

    <Dialog
      open={false}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Game Over</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Winner is player
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          autoFocus
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>

    <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <List>
          <ListItem>
            <ListItemText
              primary="Total games"
              secondary={0}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText 
              primary="X wins"
              secondary={0}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="O wins"
              secondary={0}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Draws"
              secondary={0}
            />
          </ListItem>
        </List>
      </Drawer>
  </>
);

export default Game;
