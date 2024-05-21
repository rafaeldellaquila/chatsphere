import { Icon } from '@iconify/react/dist/iconify.js'

import Avatar from '@components/Avatar'
import Typography from '@components/Typography'

import theme from '@styles/theme'

import * as S from './styles'

type CardChatProps = {
  src: string
  alt: string
  username: string
  message: string
  time: string //TODO: change to Date
  checked: boolean
}

export default function CardChat({ src, alt, username, message, time, checked }: CardChatProps) {
  return (
    <S.Wrapper onClick={() => console.log('clicked')}>
      <Avatar size='large' src={src} alt={alt} />
      <div>
        <S.Content>
          <Typography variant='h3' size='large'>
            {username}
          </Typography>
          <Typography variant='span' size='medium' lineClamp='1'>
            {message}
          </Typography>
        </S.Content>
        <S.Timestamp>
          <span>{time}</span>
          {checked && <Icon icon='solar:check-read-linear' color={theme.colors.primary} />}
        </S.Timestamp>
      </div>
    </S.Wrapper>
  )
}
