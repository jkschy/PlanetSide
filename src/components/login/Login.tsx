import { Box, TextField, Typography, Button, useMediaQuery, Snackbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { Navigate } from 'react-router'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundImage: 'linear-gradient(to top right, #01BAEF, #FF01FB)'
	},
	container: {
		backgroundColor: 'white',
		padding: '5vw',
		borderRadius: '1em',
		boxShadow: '0px 0px 10px #424B54'
	},
	containerSmall: {
		width: '80%',
		maxWidth: '400px',
		maxHeight: '242px'
	},
	containerLarge: {
		width: '30%'
	},
	input: {
		marginBottom: '3vw'
	},
	submit: {
		marginTop: '2em'
	}
})

function Login() {
	const [badLogin, setBadLogin] = useState(false)
	const [snackBarText, setSnackBarText] = useState('')

	let username: String
	let password: String
	const handleLogin = () => {
		if (!username || !password) {
			setBadLogin(true)
			setSnackBarText('Please enter a username and password')
			return
		}
	}

	const classes = useStyles()
	const largeScreen = useMediaQuery('(min-width:1000px)')

	if (sessionStorage.getItem('token') != null) {
		return <Navigate to='/Posts' />
	}
	return (
		<div className={classes.root}>
			<Box
				component='form'
				className={`${classes.container} ${largeScreen ? classes.containerLarge : classes.containerSmall}`}
			>
				<Typography variant='h5' align='center'>
					Login or <a href='/'>Register</a>
				</Typography>

				<Box component='div'>
					<TextField
						className={classes.input}
						required
						label='Username'
						id='username-input-box'
						fullWidth
						autoComplete='off'
						onChange={(e) => (username = e.target.value)}
					/>
				</Box>
				<Box component='div'>
					<TextField
						className={classes.input}
						required
						label='Password'
						id='password-input-box'
						type='password'
						autoComplete='off'
						fullWidth
						onChange={(e) => (password = e.target.value)}
					/>
				</Box>
				<Typography variant='body2' align='center'>
					<a href='/'>Forgot Password?</a>
				</Typography>
				<Button className={classes.submit} variant='contained' disableElevation fullWidth onClick={handleLogin}>
					Login
				</Button>
			</Box>
			<Snackbar
				open={badLogin}
				autoHideDuration={3000}
				onClose={() => setBadLogin(false)}
				message={snackBarText}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			/>
		</div>
	)
}

export default Login
