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
    width: 100vw;
    height: 100vh;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    width: 100%;
    max-width: 1024px;
    margin: auto;

    display: block;
    padding-bottom: 50px;
  `}
`

export const Image = styled.img`
  width: 200px;
  height: auto;

  justify-self: center;

  @media (max-width: 780px) {
    width: 250px;
  }
`

export const Text = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: 500;
    line-height: 23px;

    margin: 20px;
    margin-right: 100px;
    text-align: justify;

    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.smaller};
      margin-right: 50px;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    font-family: ${theme.font.family01};
    font-size: ${theme.font.sizes.huge};
    font-weight: 500;

    padding: 20px;

    @media (max-width: 550px) {
      font-size: ${theme.font.sizes.large};
    }
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 500;

    @media (max-width: 550px) {
      font-size: ${theme.font.sizes.xxsmall};
    }
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

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const GridText = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;

  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 20px;
    gap: 15px;
  }
`

export const DivHead = styled.div`
  display: grid;
  grid-template-rows: auto;

  @media (max-width: 600px) {
    display: grid;
    justify-self: center;
    align-self: center;
    margin-left: 30px;
  }
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
