import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 38px 24px;

  > div {
    display: flex;
    align-items: center;

    img{
      width: 30px;
    }
  
    h1{
      font-size: 32px;
      letter-spacing: 5px;
      text-transform: uppercase;
      margin-left: 16px;
    }
  }

  span{
    width: 24px;
    height: 4px;
    background-color: ${({theme}) => theme.COLORS.BLACK};
    position: relative;
    align-self: flex-start;
    transition: all .2s;
    
    &::before {
      content: '';
      width: 24px;
      height: 4px;
      background-color: currentColor;
      position: absolute;
      right: 0;
      top: 8px;
    }

    &::after {
      content: '';
      width: 24px;
      height: 4px;
      background-color: currentColor;
      position: absolute;
      right: 0;
      top: 16px;
    }
  }

  .open{
    transform: rotate(45deg);
    top: 10px;

    &::before{
      display: none;
    }

    &::after{
      transform: rotate(90deg);
      top: 0px;
    }
  }
`