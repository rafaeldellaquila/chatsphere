import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material'

import Logo from '@assets/Logo'

interface UserLoginFormProps {
  email: string
  password: string
}

const userLoginFormInitialState: UserLoginFormProps = {
  email: '',
  password: ''
}

const LoginForm: React.FC = () => {
  const { t } = useTranslation()
  const [userLoginForm, setUserLoginForm] = useState<UserLoginFormProps>(userLoginFormInitialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLoginForm({
      ...userLoginForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Logo />
        <Typography component='h1' variant='h5'>
          {t('welcome')}
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            error={userLoginForm.email.length > 0 && !userLoginForm.email.includes('@')}
            helperText={
              userLoginForm.email.length > 0 &&
              !userLoginForm.email.includes('@') &&
              t('email_@_error')
            }
            margin='normal'
            required
            onChange={handleChange}
            fullWidth
            name='email'
            label={t('email')}
            aria-label={t('email')}
            hiddenLabel
            type='email'
            id='email'
            autoComplete='current-password'
          />
          <TextField
            margin='normal'
            required
            onChange={handleChange}
            fullWidth
            name='password'
            placeholder={t('password')}
            aria-label={t('password')}
            hiddenLabel
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default LoginForm
