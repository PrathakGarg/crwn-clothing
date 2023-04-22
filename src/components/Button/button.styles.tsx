import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles"

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: normal;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: 1px solid #4285f4;
  }

  @media screen and (max-width: 650px) {
    font-size: 11px;
  }

`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`
