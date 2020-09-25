import { createGlobalStyle, css } from 'styled-components'
import './all.scss'



const GlobalStyles = createGlobalStyle`

  :root {
    --gutter: 16px;
    --halfGutter: 8px;
    --maxPageContentWidth: 1024px;
    --maxContentWidth: calc(var(--maxPageContentWidth) - (var(--gutter) * 2));
    --topNavBarHeight: 48px;
    --topFooterHeight: 32px;
    --heroHeaderHeight: 240px;
    --bottomFooterHeight: 240px;
    --mobileBreakpoint: 414px;
    --tabletBreakpoint: 720px;
    --desktopBreakpoint: var(--maxPageContentWidth);
  }

`
/*
const Inter = css`
  // font-family: 'Helvetica';
  font-family: 'Inter', sans-serif;
  letter-spacing: -1px;
`

const center = css`
  justify-content: space-around;
  align-items: center;
`
*/

export default GlobalStyles

/*
export default {
  GlobalStyles: GlobalStyles,
  Inter: Inter,
}
*/
