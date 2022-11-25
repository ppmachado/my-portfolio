import * as S from './styles'

const HomePage = () => (
  <S.Wrapper>
    <S.Content>
      <S.GridIcons>
        <a
          href="https://github.com/ppmachado"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.UseGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ppmachadodev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.Linkedin />
        </a>
        <S.Download />
      </S.GridIcons>
      <S.Break />
      <S.GridTitle>
        <S.Image src="img/croods-pp.png" />
        <S.DivHead>
          <S.Subtitle>Hi there, my name is</S.Subtitle>
          <S.Title>Paula Machado</S.Title>
          <S.Subtitle>and I'm a front-end developer</S.Subtitle>
        </S.DivHead>
      </S.GridTitle>
      <S.GridText>
        <S.UseTech />
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </S.Text>
      </S.GridText>
    </S.Content>
  </S.Wrapper>
)

export default HomePage
