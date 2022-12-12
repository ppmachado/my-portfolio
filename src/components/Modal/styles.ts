import styled, { css } from 'styled-components'
import UseBox from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'

export const Box = styled(UseBox)`
  ${({ theme }) => css`
    border-radius: 8px;
    border: none;
    outline: ${theme.colors.primaryLight};

    margin: 20px;
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.small};
    text-align: justify;

    margin: 20px 20px;
  `}
`

export const Modal = styled(Dialog)`
  margin: 20px;
`
