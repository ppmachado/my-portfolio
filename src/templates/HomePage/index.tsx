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
            Born and raised in the Brazilian Amazon, where we used to live
            without technology and internet access, I only started to know more
            about the tech world when I was older. Starting this journey in
            2019, I worked with video editions and graphic design, when I soon
            discovered the UI/UX and web development area. I{"'"}m studying
            front-end development since 2021 and currently popping my own
            platform! Feel free to make contact and download my resume :)
          </S.Text>
        </S.GridText>
      </S.Content>
    </S.Wrapper>
  )
}

export default HomePage
