import Avatar from '@components/Avatar'
import Typography from '@components/Typography'

import * as S from './styles'

export default function CardChat() {
  return (
    <S.Wrapper>
      <Avatar size='large' src='https://i.pravatar.cc/300' alt='WIP - Avatar - username' />
      <div>
        <Typography variant='span' size='medium'>
          UXWhiz
        </Typography>
        <Typography variant='span' size='small'>
          Hey, just saw an incredible design...
        </Typography>
      </div>
      <div id='time'>
        <span>12:00</span>
        <span>icon</span>
      </div>
    </S.Wrapper>
  )
}
