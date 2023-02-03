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
        return (
          <S.Span>
            HTML5 is a markup language for structuring and presenting content on
            the World Wide Web (WWW). It’s in their fifth and latest version,
            which includes new attributes and features. The APIs and Document
            Object Model (DOM) are now fundamental parts of the HTML5.
          </S.Span>
        )
      }
      case 'css3': {
        return (
          <S.Span>
            CSS (Cascading Style Sheets) is a style sheet language used for
            describe the presentation of a document, written by HTML or XML. It
            is designed to enable the separation of content and presentation,
            including the layouts, colors and fonts, improving accessibility.
          </S.Span>
        )
      }
      case 'javascript': {
        return (
          <S.Span>
            JavaScript (or JS) is a programming language used by 98% of the web
            applications, executing the code on the user’s devices. Is a
            high-level language that conforms to the ECMAScript standard. It has
            APIs (Application Programming Interfaces) for working with text,
            dates, data structures and DOM’s.
          </S.Span>
        )
      }
      case 'typescript': {
        return (
          <S.Span>
            TypeScript is a free and open-source programming language, developed
            and maintained by Microsoft. It adds optional static typing to
            JavaScript, being a strict syntactical superset of it. It is
            designed for large applications and can be used to develop
            JavaScript applications for both client-side and server-side.
          </S.Span>
        )
      }
      case 'react': {
        return (
          <S.Span>
            React (or ReactJS) is a free and open-source JavaScript library,
            made to front-end developers and based on UI components. It is
            maintained by Meta and a big community of other companies and
            developers. Can be used to develop single-pages, mobile or
            server-rendered applications with frameworks, like NextJS.
          </S.Span>
        )
      }
      case 'next': {
        return (
          <S.Span>
            NextJS is an open-source React framework, created by Vercel and
            enable React based applications with server-side rendering and
            generating static websites. While React apps can only render their
            content in the client-side browser, NextJS extends this
            functionality to include applications rendered on the server-side.
          </S.Span>
        )
      }
      case 'styled-comp': {
        return (
          <S.Span>
            Styled-components enable the developer to enhance CSS for styling
            React component systems. It provides different tools, keeping track
            of which components are rendered on a page and injecting their
            styles automatically. It also generates unique class names for your
            styled, so the class name bugs don’t happen. Every bit of the
            styling is tied to a specific component, being a simple and safe
            management tool.
          </S.Span>
        )
      }
      case 'git': {
        return (
          <S.Span>
            Git is a distributed version control system, tracking changes in any
            set of files. It is usually used for coordinating work among
            programmers that are collaboratively developing a code. It supports
            non-linear workflows, where we can run different branches on
            different systems. Every Git directory on every computer is a
            full-fledged repository with all the history and versions tracking,
            independent of a central server.
          </S.Span>
        )
      }
      case 'github': {
        return (
          <S.Span>
            GitHub in an internet hosting service for version control using Git.
            It provides the distributed version control of Git, plus access
            control, bug tracking, feature requests, tasks managements and wikis
            for every project. It is commonly used to host open-source
            developments projects and have over 83 million developers using
            their service.
          </S.Span>
        )
      }
      case 'storybook': {
        return (
          <S.Span>
            Storybook is a component tool, creating every piece of UI as a
            component. The best of it is that you don’t have to render a whole
            app just to see how your components will look like, you can now
            render a specific variation in isolation, by passing props, mocking
            datas and faking events. It provides an isolated iframe to render
            components without interference from the app logic and context.
          </S.Span>
        )
      }
      case 'graphql': {
        return (
          <S.Span>
            GraphQL is a query language for APIs and a runtime for fulfilling
            those queries with your existing data. It provides a complete and
            understandable description of the data in your API, giving clients
            the power to ask for exactly what they need, making it easier to
            evolve APIs over time.
          </S.Span>
        )
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
