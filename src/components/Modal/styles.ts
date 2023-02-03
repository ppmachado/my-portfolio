import styled, { css } from 'styled-components'
import UseBox from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'

export const Box = styled(UseBox)`
  ${({ theme }) => css`
    border-radius: 10px;
    border: none;
    outline: ${theme.colors.primaryLight};

    margin: 13px;
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xxxsmall};
    line-height: 27px;
    font-weight: 500;

    text-align: justify;
    align-self: center;
    justify-content: center;

    margin: 20px 20px;
    display: block;

    @media (max-width: 770px) {
      font-size: ${theme.font.sizes.smaller};
    }
  `}
`

export const Modal = styled(Dialog)`
  margin: 20px;

  box-shadow: 11px 13px 45px -15px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 11px 13px 45px -15px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 11px 13px 45px -15px rgba(0, 0, 0, 0.5);
`
