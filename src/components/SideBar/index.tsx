import { Icon } from '@iconify/react'
import { useState } from 'react'

import Avatar from '@components/Avatar'
import Button from '@components/Button'
import Logo from '@components/Logo'

import * as S from './styles'

const globalList = [
  {
    icon: <Icon icon='mingcute:notification-line' />,
    title: 'activity'
  },
  {
    icon: <Icon icon='mage:users' />,
    title: 'community'
  },
  {
    icon: <Icon icon='akar-icons:chat-bubble' />,
    title: 'chat'
  },
  {
    icon: <Icon icon='akar-icons:calendar' />,
    title: 'calendar'
  }
]

const manageList = [
  {
    icon: <Icon icon='mage:archive-drawer' />,

    title: 'archived_chats'
  },
  {
    icon: <Icon icon='solar:star-linear' />,
    title: 'starred_messages'
  }
]

const settingsList = [
  {
    icon: <Icon icon='akar-icons:gear' />,
    title: 'settings'
  },
  {
    icon: <Icon icon='mage:question-mark-circle' />,
    title: 'help'
  }
]

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false)
  const toggleDrawer = () => setCollapsed(!collapsed)

  return (
    <S.Wrapper collapsed={collapsed} className='aside'>
      <div>
        <div className='logo'>
          <Logo color='colored' variant={collapsed ? 'logo' : 'icon'} size='small' />
          <Button
            className='collapse_button'
            onClick={toggleDrawer}
            size='small'
            color='quartenary'
            icon={
              collapsed ? (
                <Icon icon='akar-icons:chevron-left-small' />
              ) : (
                <Icon icon='akar-icons:chevron-right-small' />
              )
            }
          />
        </div>

        <S.Divider />
        <S.List>
          {globalList.map((item, index) => (
            <li key={index}>
              <Button
                key={index}
                icon={item.icon}
                centered={!collapsed}
                color='transparent'
                size='small'
                fullWidth
              >
                {collapsed && item.title}
              </Button>
            </li>
          ))}
        </S.List>

        <S.Divider />

        <S.List>
          {manageList.map((item, index) => (
            <li key={index}>
              <Button
                key={index}
                icon={item.icon}
                centered={!collapsed}
                color='transparent'
                size='small'
                fullWidth
              >
                {collapsed && item.title}
              </Button>
            </li>
          ))}
        </S.List>
      </div>

      <div className='footer'>
        <S.List>
          <S.Divider />
          {settingsList.map((item, index) => (
            <li key={index}>
              <Button
                icon={item.icon}
                centered={!collapsed}
                color='transparent'
                size='small'
                fullWidth
              >
                {collapsed && item.title}
              </Button>
            </li>
          ))}
        </S.List>

        <S.AvatarWrapper>
          {collapsed && (
            <div>
              <Avatar size='medium' src='https://i.pravatar.cc' alt='WIP - Avatar - username' />
              <span>John Doe</span>
            </div>
          )}
          <Button size='small' color='quartenary' icon={<Icon icon='mage:dots-horizontal' />} />
        </S.AvatarWrapper>
      </div>
    </S.Wrapper>
  )
}
