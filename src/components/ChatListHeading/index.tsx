import { Icon } from '@iconify/react'

import Button from '@components/Button'
import Typography from '@components/Typography'

import * as S from './styles'

export default function ChatListHeading() {
  return (
    <S.Wrapper>
      <Typography variant='h3'>Chat</Typography>
      <div>
        <Button
          onClick={() => console.log('implement')}
          size='small'
          color='transparent'
          icon={<Icon icon='fluent:filter-28-regular' />}
        />

        <Button
          onClick={() => console.log('implement')}
          size='small'
          color='transparent'
          icon={<Icon icon='fluent:video-28-regular' />}
        />
        <Button
          onClick={() => console.log('implement')}
          size='small'
          color='transparent'
          icon={<Icon icon='akar-icons:chat-add' />}
        />
      </div>
    </S.Wrapper>
  )
}
