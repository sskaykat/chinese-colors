import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import BodyBg from './assets/img/bg.texture.png';
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color:#ffffeb;
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  *::-webkit-scrollbar {
    width: 0px;
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  body{
    -webkit-overflow-scrolling: touch;
    overflow:hidden;
    margin:0 auto;
    background-image: url(${BodyBg});
    transition:background-color 1.6s;

  }


  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 14px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 20px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 24px;
      }
  }
`;

export default GlobalStyle;
