import styled, { css } from 'styled-components'
import { Github } from '@styled-icons/evaicons-solid/Github'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { DownloadForOffline } from '@styled-icons/material-rounded/DownloadForOffline'
import TechIcons from 'components/TechIcons'

export const UseTech = styled(TechIcons)``

export const Download = styled(DownloadForOffline)`
  width: 30px;
  height: auto;
  ${({ theme }) => css`
    color: ${theme.colors.icons};
    cursor: pointer;

    :hover {
      color: ${theme.colors.white};
    }
  `}
`

export const Linkedin = styled(LinkedinSquare)`
  width: 30px;
  height: auto;
  margin-right: 15px;
  ${({ theme }) => css`
    color: ${theme.colors.icons};
    cursor: pointer;

    :hover {
      color: ${theme.colors.white};
    }
  `}
`

export const UseGithub = styled(Github)`
  width: 30px;
  height: auto;
  margin-right: 15px;
  ${({ theme }) => css`
    color: ${theme.colors.icons};
    cursor: pointer;

    :hover {
      color: ${theme.colors.white};
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 100%;
    width: 100%;
    height: 100vh;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    width: 100%;
    max-width: 1000px;
    margin: auto;

    display: flex-block;
  `}
`

export const Image = styled.img`
  width: 200px;
  height: auto;

  justify-self: center;
`

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 500;
    line-height: 23px;

    margin: 20px;
    margin-right: 40px;
    text-align: justify;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    font-family: ${theme.font.family01};
    font-size: ${theme.font.sizes.huge};
    font-weight: 500;

    padding: 20px;
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.small};
    font-weight: 500;
  `}
`

export const GridTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  flex-wrap: wrap;
  width: 100%;

  gap: 70px;
  justify-content: center;
  align-items: center;
`
export const GridText = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

  justify-content: center;
  align-items: center;
`

export const DivHead = styled.div`
  display: grid;
  grid-template-rows: auto;
`

export const Break = styled.hr`
  width: 100%;
  margin-bottom: 50px;
`

export const GridIcons = styled.div`
  padding: 30px;
  padding-right: 20%;
  text-align: end;
`
