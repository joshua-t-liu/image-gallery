import styled from 'styled-components';

const ModalContainer = styled.div`
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

//block
const Container = styled.div`
  display: flex;
  &.column {
    flex-direction: column;
  }
`;

//block and element
const ContainerHead = styled.div`

`;

//block and element
const ContainerBody = styled.div`

`;

//block and element
const ContainerFoot = styled.div`

`;


//element - nav button
const ContainerHeadNavBtn = styled.div`

`;

export { ModalContainer };