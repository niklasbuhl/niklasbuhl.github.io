import React, { Component } from "react"
import styled from "styled-components"
import styles from "../styles/styles"

// image boolean prop
// image prop
// color prop

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: ${props => (props.fullView ? 'calc(100vh) ' : '' )};
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: auto;
`
// min-height: calc(100vh - ${styles.topFooterHeight});
//padding-bottom: ${styles.topFooterHeight};
// padding-top: ${styles.navigationHeaderHeight};
// min-height: calc(100vh - ${styles.navigationHeaderHeight} - ${styles.topFooterHeight});

const NavHeaderBackground = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${styles.navigationHeaderHeight};
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  content: '';
`

const TopFooterBackground = styled.div`
  display: flex;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: calc(${styles.navigationHeaderHeight} - ${styles.topFooterHeight});
  height: ${styles.topFooterHeight};
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  content: '';
`

const ContentCenter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`

const ContentWrap = styled.div`
  display: flex;
  flex-flow: column;
  max-width: ${styles.maxPageWidth};
  width: 100%;
  flex-grow: 1;
`

const Article = styled.article`
  display: flex;
  flex-direction: ${props => (props.direction != undefined ? props.direction : 'column')};
  flex-grow: 1;
  flex-wrap: wrap;

  ${props => (props.gut === 'mar' ? styles.mar : '')}
  ${props => (props.gut === 'pad' ? styles.pad : '')}

  justify-content: ${props => (props.direction != 'row' ? props.horiAlign : props.vertAlign)};
  align-items: ${props => (props.direction != 'row' ? props.vertAlign : props.horiAlign)};
`
//justify-content: ${props => (props.horiAlign === 'left' ? 'start' : (props.horiAlign === ' bottom' ? 'left' : 'center'))};
//align-items: ${props => (props.vertAlign === 'top' ? 'start' : (props.vertAlign === ' bottom' ? 'end' : 'center'))};

class PageArticle extends Component {

  constructor(props) {
    super()

    this.state = {
      alignHori: undefined,
      alignVert: undefined,
    }
  }

  componentWillMount() {

    // # Align
    if (this.props.align != undefined) {

      var align = this.props.align

      if (align.includes('center')) {
        this.setState({ alignHori: 'center' })
        this.setState({ alignVert: 'center' })
      }

      if (align.includes('left')) {
        this.setState({ alignHori: 'flex-start' })
      } else if (align.includes('right')) {
        this.setState({ alignHori: 'flex-end' })
      }

      if (align.includes('top')) {
        this.setState({ alignVert: 'flex-start' })
      } else if (align.includes('bottom')) {
        this.setState({ alignVert: 'flex-end' })
      }

    }

  }

  render() {
    return (
      <Wrap
        bgColor={this.props.bgColor}
        bgImage={this.props.bgImage}
        fullView={this.props.fullView}
      >

        <NavHeaderBackground
            bgColor={this.props.bgColor}
            bgImage={this.props.bgImage}
          />

        <ContentCenter>

          <ContentWrap>

            <Article
              gut={this.props.gut}
              horiAlign={this.state.alignHori}
              vertAlign={this.state.alignVert}
              direction={this.props.direction}
            >
              {this.props.children}
            </Article>

          </ContentWrap>

        </ContentCenter>

        <TopFooterBackground
          bgColor={this.props.bgColor}
          bgImage={this.props.bgImage}
        />

      </Wrap>
    )
  }
}

/*
<div style={{
  margin: styles.margin,
  width: '100%',
  maxWidth: styles.maxPageWidth
}}>
  {this.props.children}
</div>
*/

export default PageArticle
