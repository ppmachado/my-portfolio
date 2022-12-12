import * as S from './styles'

const HomePage = () => {
  const downloadUri = (url: string) => {
    const a = document.createElement('a')
    a.setAttribute('target', '_blank')

    a.href = url
    a.download = url.split('/').pop() || ''
    document.body.appendChild(a)

    a.click()
    document.body.removeChild(a)
  }
  return (
    <S.Wrapper>
      <S.Content>
        <S.GridIcons>
          <a
            href="https://github.com/ppmachado"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
          >
            <S.UseGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ppmachadodev/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <S.Linkedin />
          </a>

          <S.Download
            onClick={() =>
              downloadUri(
                `${process.env.NEXT_PUBLIC_URL}/public/downloads/Resume-PaulaMachado.pdf`
              )
            }
            title="download-resume"
          />
        </S.GridIcons>
        <S.Break />
        <S.GridTitle>
          <S.Image src="img/croods-pp.png" />
          <S.DivHead>
            <S.Subtitle>Hi there, my name is</S.Subtitle>
            <S.Title>Paula Machado</S.Title>
            <S.Subtitle>and I{"'"}m a front-end developer</S.Subtitle>
          </S.DivHead>
        </S.GridTitle>
        <S.GridText>
          <S.UseTech />
          <S.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </S.Text>
        </S.GridText>
      </S.Content>
    </S.Wrapper>
  )
}

export default HomePage
