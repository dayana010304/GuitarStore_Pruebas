import React, {useState, Fragment} from 'react'
import {Grid, Container, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from '../../../shared/assets/img/fondo.png'
import {LockOutlined as LockOutlined} from '@material-ui/core'
import { Colors } from '../../../shared/styles/Colors';
import apiBaseUrl from '../../../shared/utils/Api';


const useStyles = makeStyles(theme => ({
    root:{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container:{
      opacity: '0.9',
      height: '60%',
      marginTop: theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2) + 2)]:{
        marginTop: 0,
        width: '100%',
        height: '100%'
      }
    },
    div:{
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar:{
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
    form:{
      width: '100%',
      marginTop: theme.spacing(1)
    },
    button2:{
      marginTop: theme.spacing(1)
    }
}))

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = async () => {
        const userData = {
            email: email,
            password: password
        }
        console.log(userData)
        try {
            const response = await fetch(`${apiBaseUrl}/login`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const user = await response.json();
            console.log(user);
        }
        catch (e) {
            console.log(e)
        }
    }
    return <Fragment>
    <Container maxWidth="sm">
        <Grid container>
            <Grid item xs={12}>
                <TextField id="outlined-basic" onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField id="outlined-basic" onChange={e => setPassword(e.target.value)} label="Password" type="password" variant="outlined" />
            </Grid>
        </Grid>
        <Button variant="contained" onClick={login} className={Colors.btnPrimary}>Inicar sesión</Button>
    </Container>

</Fragment>
}

export default LoginPage;