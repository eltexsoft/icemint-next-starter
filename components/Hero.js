// @flow
import * as React from 'react'

type Props = {
  title: String
}

const Hero = (props: Props) => (
  <div>
    <div className="hero">
      <h1 className="hero-title">{props.title}</h1>
      <div className="hero-images">
        <img src="/static/img/Nextjs.png" alt="next" />
        <img src="/static/img/Redux.png" alt="next" />
        <img src="/static/img/Flow.png" alt="next" />
        <img src="/static/img/PostCSS.png" alt="next" />
        <img src="/static/img/ESLint.png" alt="next" />
        <img src="/static/img/Stylelint.png" alt="next" />
        <img src="/static/img/Prettier.png" alt="next" />
      </div>
    </div>

    <style jsx>{`
      .hero {
        background-color: #eceeef;
        padding: 5rem 1rem;
        margin-bottom: 3rem;
      }

      .hero-title {
        text-align: center;
        font-size: 4em;
      }

      .hero-images {
        text-align: center;

        img {
          padding: 1rem;
          max-height: 90px;
        }
      }
    `}</style>
  </div>
)

export default Hero
