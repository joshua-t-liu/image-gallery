import styled from 'styled-components';

const Div = styled.div`
  font-family: arial;
  overflow: hidden;
  &.tall {
    height: 100%;
  }
  &.wide {
    width: 100%;
  }
  &.relative {
    position: relative;
  }
  &.item {
    flex: ${({ flex }) => flex || '1 1 auto'};
  }
  &.small-font {
    font-size: 14px;
    line-height: 1.43;
  }
  &.white {
    color: rgb(255, 255, 255);
  }
  &.container {
    @media (min-width: 767px) {
      margin: 48px;
      height: calc(100% - 96px);
      width: calc(100% - 96px);
      border-radius: 8px;
    }
  }
  }
`;

const Absolute = styled(Div)`
  position: absolute;
  top: ${({ top }) => top || ''};
  bottom: ${({ bottom }) => bottom || ''};
  left: ${({ left }) => left || ''};
  right: ${({ right }) => right || ''};
  &.position-form {
    right: 8px;
    top: 8px;
    bottom: 16px;
    height: 'calc(100% -96px)';
    width: 332px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    overflow-y: auto;
    z-index: 100;
    border: 1px solid rgb(232, 233, 234);
  }
  &.collapsed {
    top: auto;
  }
`;

const BorderTop = styled(Div)`
  border-top: 1px solid ${({ color }) => color};
`;

const Flexbox = styled(Div)`
  display: flex;
  &.centered {
    align-items: center;
  }
`;

const FlexboxCol = styled(Flexbox)`
  flex-direction: column;
`;

const FlexItem = styled(Div)`
  flex: 1 1 auto;
`;

const StyledModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 1000;
  transition: opacity 0.5s;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  &.zoom:hover {
    transform: scale(1.04);
`;

const Input = styled.input`
border-radius: 8px;
line-height: 1.5;
font-size: 16px;
border-color: rgb(205, 209, 212);
border-width: 1px;
border-style: solid;
padding: 8px;
width: 100%;
box-sizing: border-box
`;

export { StyledModal, Div, Absolute, BorderTop, Flexbox, FlexboxCol, FlexItem, Image, Input };