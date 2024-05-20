import coloredIcon from '@assets/colored_icon.svg'
import coloredLogo from '@assets/colored_logo.svg'
import whiteIcon from '@assets/white_icon.svg'
import whiteLogo from '@assets/white_logo.svg'

import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'colored'
  variant?: 'icon' | 'logo'
  size?: 'small' | 'medium' | 'large'
}

const options = {
  white: {
    icon: whiteIcon,
    logo: whiteLogo
  },
  colored: {
    icon: coloredIcon,
    logo: coloredLogo
  }
}

export default function Logo({ color = 'white', variant = 'icon', size = 'small' }: LogoProps) {
  const src = options[color][variant]
  return <S.Wrapper src={src} size={size} alt={`${color} ${variant}`} variant={variant} />
}
