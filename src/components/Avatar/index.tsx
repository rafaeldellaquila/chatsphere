import * as S from './styles'

export type AvatarProps = {
  size?: 'medium' | 'large'
  alt: string
  src: string
}
// 'https://i.pravatar.cc/300'
export default function Avatar({ size, src, alt }: AvatarProps) {
  return <S.Wrapper size={size} src={src} alt={alt} />
}
