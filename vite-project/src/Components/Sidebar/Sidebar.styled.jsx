import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarBackground = styled.div`
  background-color: #6c00af;
  margin: 0;
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 150px;
  height: 83.1%;
`;

export const SBLink = styled.li`
  &:hover {
    background-color: #450070;
    padding: 4px;
  }
`;
