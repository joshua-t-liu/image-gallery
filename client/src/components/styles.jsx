import styled from 'styled-components';

const StyledDiv = styled.div`
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
  background-color: ${({ backgroundColor }) => backgroundColor || ''};
`;

const Absolute = styled(StyledDiv)`
  position: absolute;
  top: ${({ top }) => top || ''};
  bottom: ${({ bottom }) => bottom || ''};
  left: ${({ left }) => left || ''};
  right: ${({ right }) => right || ''};
`;

const BorderTop = styled(StyledDiv)`
  border-top: 1px solid ${({ color }) => color};
`;

const FlexContainer = styled(StyledDiv)`
  display: flex;
`;

const FlexContainerCentered = styled(StyledDiv)`
  display: flex;
  align-items: center;
`;

const FlexContainerCol = styled(FlexContainer)`
  flex-direction: column;
`;

const StackZero = styled.div`
  z-index: 0;
`;

const SmallFont = styled.div`
  font-size: 14px;
  line-height: 1.43;
  &.white {
    color: rgb(255, 255, 255);
  }
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

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  &.main:hover {
    transform: scale(1.04);
  }
`;

export { StyledModal, StyledDiv, Absolute, BorderTop, FlexContainer, FlexContainerCentered, FlexContainerCol, StackZero, SmallFont, MainImage };