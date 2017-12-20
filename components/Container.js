// @flow
import * as React from 'react'

type Props = {
  children: React.Element<any>
}

const Container = (props: Props) => (
  <div className="container">
    {props.children}
    <style jsx>{`
      .container {
        width: 100%;
        max-width: 1000px;
        margin: auto;
        padding: 0 1rem;
      }
    `}</style>
  </div>
)

export default Container
