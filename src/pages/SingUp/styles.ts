import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroudImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh; /* tenha 100% do tamanho (altura) da tela */

  display: flex; /* vai ficar 1 ao lado do outro */
  align-items: stretch; /* vai fazer com que os itens dentro tenham o tamanho total da página */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*place-content: center; todo o conteúdo do content vai ficar no centro */

  width: 100%; /* nunca vai reduzir o tamanho do conteúdo */
  max-width: 700px; /* nunca vai aumentar mais que 700px */
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(+50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    /* especifíca que esta pegando apenas as âncoras neste nível, ou seja, fora do form */
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1; /* faz com que ocupe todo o espaço, menos os 700px */
  background: url(${signUpBackgroudImg}) no-repeat center;
  background-size: cover; /* para cobrir o tamanho que se tem sobrando */
`;
