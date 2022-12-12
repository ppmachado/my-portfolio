import * as S from './styles'
import { useState } from 'react'
import { ModalType } from 'components/Modal'

const TechIcons = () => {
  const [openModal, setOpenModal] = useState(false)
  const [typeModal, setTypeModal] = useState<ModalType>(undefined)

  const onClickModal = (type: ModalType) => {
    setTypeModal(type)
    setOpenModal(!openModal)
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.List id="html5" onClick={() => onClickModal('html5')} title="html5">
          <S.UseHtml5 />
        </S.List>

        <S.List id="css3" onClick={() => onClickModal('css3')} title="css3">
          <S.UseCss3 />
        </S.List>

        <S.List
          id="javascript"
          onClick={() => onClickModal('javascript')}
          title="javascript"
        >
          <S.UseJs />
        </S.List>

        <S.List
          id="typescript"
          onClick={() => onClickModal('typescript')}
          title="typescript"
        >
          <S.UseTypescript />
        </S.List>

        <S.List
          id="react"
          onClick={() => onClickModal('react')}
          title="reactjs"
        >
          <S.UseReact />
        </S.List>

        <S.List id="next" onClick={() => onClickModal('next')} title="nextjs">
          <S.UseNext />
        </S.List>

        <S.List
          id="styled-comp"
          onClick={() => onClickModal('styled-comp')}
          title="styled-components"
        >
          <S.UseStyled />
        </S.List>

        <S.List id="git" onClick={() => onClickModal('git')} title="git">
          <S.UseGit />
        </S.List>

        <S.List
          id="github"
          onClick={() => onClickModal('github')}
          title="github"
        >
          <S.UseGithub />
        </S.List>

        <S.List
          id="storybook"
          onClick={() => onClickModal('storybook')}
          title="storybook"
        >
          <S.UseStorybook />
        </S.List>

        <S.List
          id="graphql"
          onClick={() => onClickModal('graphql')}
          title="graphql"
        >
          <S.UseGraphql />
        </S.List>
      </S.Content>

      <S.Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        type={typeModal}
      />
    </S.Wrapper>
  )
}

export default TechIcons
