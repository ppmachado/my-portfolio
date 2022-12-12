import * as S from './styles'

export type ModalType =
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'next'
  | 'styled-comp'
  | 'git'
  | 'github'
  | 'storybook'
  | 'graphql'
  | undefined

export type ModalProps = {
  open?: boolean
  onClose?: () => void
  type?: ModalType
}

function ModalIcons({ open, type, onClose, ...props }: ModalProps) {
  const switchType = () => {
    switch (type) {
      case 'html5': {
        return <S.Span>oie</S.Span>
      }
      case 'css3': {
        return <p>aloha</p>
      }
      case 'javascript': {
        return <p />
      }
      case 'typescript': {
        return <p />
      }
      case 'react': {
        return <p />
      }
      case 'next': {
        return <p />
      }
      case 'styled-comp': {
        return <p />
      }
      case 'git': {
        return <p />
      }
      case 'github': {
        return <p />
      }
      case 'storybook': {
        return <p />
      }
      case 'graphql': {
        return <p />
      }
      default: {
        return <></>
      }
    }
  }

  return (
    <S.Modal
      open={open !== undefined ? open : false}
      onClose={() => !!onClose && onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...props}
    >
      <S.Box
        sx={{
          padding: '2px'
        }}
      >
        {switchType()}
      </S.Box>
    </S.Modal>
  )
}

export default ModalIcons
