import * as colors from './colors';
import * as fonts from './fonts';

const base = `
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: ${fonts.LATO};
    background: ${colors.WHITE};
  }
`;

export default base;
