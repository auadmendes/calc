import styled from 'styled-components'
import { darken, shade } from 'polished';
import dark from '../../styles/theme/dark';


export const Container = styled.div`

width: 356px;
height: 566px;

color: ${({theme}) => theme.colors.text};
border-radius: 20px;

background: ${({theme}) => theme.colors.calculator};

box-shadow: 
0px 4px 4px rgba(0, 0, 0, 0.25), 
0px 188px 52px rgba(0, 0, 0, 0.01), 
0px 120px 48px rgba(0, 0, 0, 0.04), 
0px 68px 41px rgba(0, 0, 0, 0.15), 
0px 30px 30px rgba(0, 0, 0, 0.26), 
0px 8px 17px rgba(0, 0, 0, 0.29), 
inset 0px 6px 8px rgba(255, 255, 255, 0.1), 
inset 0px -4px 5px rgba(0, 0, 0, 0.22);
`;

export const Display = styled.div`
  margin-top: 54px;
  padding-inline: 54px;
`;

export const LastCalc = styled.div`
  text-align: right;
  font-size: 20;
  line-height: 140%;

  color: ${({theme}) => theme.colors.lastCalc};
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-family: 'Rubik';
  font-weight: 500;

  span {
    font-size: 36px;
    line-height: 140%;

  }
`;

export const Keyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 26px;
  margin-inline: 32px;
  
  //padding-bottom: 32px;
`;

interface ButtonProps {
  variant: string;
  symbol?: string
}

export const Button = styled.button<ButtonProps>`
border: 0;
//background: ${({theme}) => theme.colors.primary};

height: 64px;
width: 64px;
gap: 1rem;

left: calc(50% - 64px/2 - 38px);
top: calc(50% - 64px/2 - 85px);

background: ${(props) => props.variant === 'normal' ?  '#352E40' : '#462878'  };

color: ${(props) => props.symbol === 'purple' ? '#975DFA' : 'white'};
font-size: 24px;
line-height: 28px;

box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);
border-radius: 999px;

&:hover {
  background: ${darken(0.4, '#8E7ECE')};
}

`;