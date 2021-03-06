import React from 'react'
import { FaDribbble, FaTwitter } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'
import { AuthorProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

const ProfileCard: React.FC<AuthorProps> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(photo.url)} alt={photo.alternativeText} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((socialLink) => (
        <S.Link key={socialLink.url}>
          <a href={socialLink.url} title={socialLink.title}>
            {icons[socialLink.title.toLowerCase()]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
