import styled, { css } from 'styled-components'
import { Html5 } from '@styled-icons/boxicons-logos/Html5'
import { Css3 } from '@styled-icons/boxicons-logos/Css3'
import { JsSquare } from '@styled-icons/fa-brands/JsSquare'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Git } from '@styled-icons/boxicons-logos/Git'
import { Storybook } from '@styled-icons/simple-icons/Storybook'
import { Graphql } from '@styled-icons/simple-icons/Graphql'

export const UseGraphql = styled(Graphql)`
  ${({ theme }) => css`
    width: 35px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 5px;
  `}
`

export const UseStorybook = styled(Storybook)`
  ${({ theme }) => css`
    width: 35px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 3px;
  `}
`

export const UseGit = styled(Git)`
  ${({ theme }) => css`
    width: 35px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 5px;
  `}
`

export const UseGithub = styled(Github)`
  ${({ theme }) => css`
    width: 40px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 4px;
  `}
`

export const UseStyled = styled(Styledcomponents)`
  ${({ theme }) => css`
    width: 40px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 0;
  `}
`

export const UseReact = styled(ReactLogo)`
  ${({ theme }) => css`
    width: 40px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 0;
  `}
`

export const UseNext = styled(Nextdotjs)`
  ${({ theme }) => css`
    width: 35px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 5px;
  `}
`

export const UseTypescript = styled(Typescript)`
  ${({ theme }) => css`
    width: 30px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 5px;
  `}
`

export const UseJs = styled(JsSquare)`
  ${({ theme }) => css`
    width: 30px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 5px;
  `}
`

export const UseCss3 = styled(Css3)`
  ${({ theme }) => css`
    width: 40px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 0;
  `}
`

export const UseHtml5 = styled(Html5)`
  ${({ theme }) => css`
    width: 40px;
    color: ${theme.colors.white};
    margin: 5px 10px 5px 0;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
  `}
`

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 12% 12% 12%;
  margin-top: 10px;
`

export const IconsDiv = styled.div``
