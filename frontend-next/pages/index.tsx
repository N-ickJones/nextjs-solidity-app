import { Container, Grid, Paper } from '@mui/material';
import Greeter from '../components/Greeter';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{marginTop: 100, backgroundColor: "#00ffad"}}>
        <Grid container style={{padding: 50}}>
          <Greeter />
        </Grid>
      </Paper>
    </Container>
  )
}
