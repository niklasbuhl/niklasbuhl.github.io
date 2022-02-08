import React, { Component } from "react"
import Emoji from './Emoji'
import styled, { css } from "styled-components"
import styles from "../styles/styles"

// Responsive Width

// Aspect Ratio

// Original Width
var input = styles.maxPageWidth

var maxPageWidth = Number(input.replace('px', ''))

var cols = {
  col1: (maxPageWidth / 12 * 1).toString() + 'px',
  col2: (maxPageWidth / 12 * 2).toString() + 'px',
  col3: (maxPageWidth / 12 * 3).toString() + 'px',
  col4: (maxPageWidth / 12 * 4).toString() + 'px',
  col5: (maxPageWidth / 12 * 5).toString() + 'px',
  col6: (maxPageWidth / 12 * 6).toString() + 'px',
  col7: (maxPageWidth / 12 * 7).toString() + 'px',
  col8: (maxPageWidth / 12 * 8).toString() + 'px',
  col9: (maxPageWidth / 12 * 9).toString() + 'px',
  col10: (maxPageWidth / 12 * 10).toString() + 'px',
  col11: (maxPageWidth / 12 * 11).toString() + 'px',
  col12: (maxPageWidth).toString() + 'px',
}

const Col1 = css`
  width: calc(100% / 12);
  @media (max-width: ${cols.col11}) { width: calc(100% / 11); }
  @media (max-width: ${cols.col10}) { width: calc(100% / 10); }
  @media (max-width: ${cols.col9}) { width: calc(100% / 9); }
  @media (max-width: ${cols.col8}) { width: calc(100% / 8); }
  @media (max-width: ${cols.col7}) { width: calc(100% / 7); }
  @media (max-width: ${cols.col6}) { width: calc(100% / 6); }
  @media (max-width: ${cols.col5}) { width: calc(100% / 5); }
  @media (max-width: ${cols.col4}) { width: calc(100% / 4); }
  @media (max-width: ${cols.col3}) { width: calc(100% / 3); }
  @media (max-width: ${cols.col2}) { width: calc(100% / 2); }
  @media (max-width: ${cols.col1}) { width: calc(100% / 1); }
`

const Col2 = css`
  width: calc(100% / 6);
  @media (max-width: ${cols.col11}) { width: 20%; }
  @media (max-width: ${cols.col9}) { width: 25%; }
  @media (max-width: ${cols.col7}) { width: calc(100% / 3); }
  @media (max-width: ${cols.col5}) { width: 50%; }
  @media (max-width: ${cols.col3}) { width: 100%; }
`

const Col3 = css`
  width: 25%;
  @media (max-width: ${cols.col10}) { width: calc(100% / 3); }
  @media (max-width: ${cols.col7}) { width: 50%; }
  @media (max-width: ${cols.col4}) { width: 100%; }
`

const Col4 = css`
  width: calc(100% / 3);
  @media (max-width: ${cols.col10}) { width: 50%; }
  @media (max-width: ${cols.col6}) { width: 100%; }
`

const Col5 = css`
  width: calc(100% / 12 * 5);
  @media (max-width: ${cols.col11}) { width: 50%; }
  @media (max-width: ${cols.col6}) { width: 100%; }
`

const Col6 = css`
  width: 50%;
  @media (max-width: ${cols.col7}) { width: 100%; }
`

const Col7 = css`
  width: calc(100% / 12 * 7);
  @media (max-width: ${cols.col8}) { width: 100%; }

`

const Col8 = css`
  width: calc(100% / 3 * 2);
  @media (max-width: ${cols.col9}) { width: 100%; }
`

const Col9 = css`
  width: calc(100% / 4 * 3);
  @media (max-width: ${cols.col10}) { width: 100%; }
`

const Col10 = css`
  width: calc(100% / 6 * 5);
  @media (max-width: ${cols.col11}) { width: 100%; }
`

const Col11 = css`
  width: calc(100% / 12 * 11);
  @media (max-width: ${cols.col11}) { width: 100%; }
`

const Col12 = css`
  width: 100%;
`

const Col = styled.div`
  display: flex;
  background: purple;
  flex-grow: ${props => (props.nogrow ? '0' : '1' )};
  ${props => (props.col === 1 ? Col1 : '')}
  ${props => (props.col === 2 ? Col2 : '')}
  ${props => (props.col === 3 ? Col3 : '')}
  ${props => (props.col === 4 ? Col4 : '')}
  ${props => (props.col === 5 ? Col5 : '')}
  ${props => (props.col === 6 ? Col6 : '')}
  ${props => (props.col === 7 ? Col7 : '')}
  ${props => (props.col === 8 ? Col8 : '')}
  ${props => (props.col === 9 ? Col9 : '')}
  ${props => (props.col === 10 ? Col10 : '')}
  ${props => (props.col === 11 ? Col11 : '')}
  ${props => (props.col === 12 ? Col12 : '')}
`

const Inner = styled.div`
  display: flex;
  border: 1px solid green;
  margin: calc(${styles.margin} / 2);
`

class Element extends Component {

  constructor(props) {
    super()
  }

  render() {
    return (
      <Col col={this.props.col} nogrow={this.props.nogrow} >
        <Inner>
          {this.props.children}
        </Inner>
      </Col>
    )
  }
}

export default Element
