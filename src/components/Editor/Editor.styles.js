import styled from "@emotion/styled";

export const Container = styled.div`
  background: red;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
`;

const aspectRatio = 9 / 16;

export const Canvas = styled.canvas`
  background: ${({ theme }) => theme.colors.BACKGROUND};
  width: 100%;
  height: ${aspectRatio * 100}vw;
  object-fit: contain;
`;
