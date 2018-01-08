// @flow
import * as React from 'react'

type Props = {
  title: String,
  desc: String,
  url: String
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
      <p className="hero-description">
        {props.desc} <a href={props.url}>README</a>
      </p>
    </div>

    <style jsx>{`
      .hero {
        background: linear-gradient(45deg, #fff, #f4fcfa, #fff);
        padding: 5rem 1rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .hero-title {
        text-align: center;
        font-size: 4em;
      }

      .hero-description {
        margin-top: 2rem;
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
