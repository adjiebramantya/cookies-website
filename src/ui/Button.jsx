import styled, { css } from "styled-components";
import { device } from "../helpers/device";

const StyleButton = styled.button`
  border-radius: 5px;

  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: #8a270a;
      color: white;
      clip-path: polygon(0 0%, 100% 0, 85% 100%, 0% 100%);
      padding-right: 7px;
      @media ${device.md} {
        padding-right: 15px;
        padding-left: 0px;
      }

      filter: drop-shadow(0px 0px 30.5px rgba(138, 39, 10, 0.75));
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: #ffe6d6;
      color: #8a270a;
      clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0 100%);
      @media ${device.md} {
        padding-right: 0px;
        padding-left: 15px;
      }
      filter: drop-shadow(0px 0px 25.9px rgba(255, 230, 214, 0.5));
    `}

    ${(props) =>
    props.type === "primary-normal" &&
    css`
      border-radius: 15px;
      @media ${device.md} {
        padding: 10px 40px 10px 40px !important;
      }

      padding: 10px !important;
      background-color: #8a270a;
      color: white;
      width: auto !important;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 9px;
      width: 4rem;
      padding: 0rem 0.3rem 0.1rem 0.1rem;
    `}
`;

const Parent = styled.div`
  display: inline;
  ${(props) =>
    props.type === "primary" &&
    css`
      filter: drop-shadow(0px 0px 30.5px rgba(138, 39, 10, 0.75));
    `}

  ${(props) =>
    props.type === "primary-normal" &&
    css`
      filter: unset !important;
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      filter: drop-shadow(0px 0px 25.9px rgba(255, 230, 214, 0.5));
    `};

  ${(props) =>
    props.size === "small" &&
    css`
      filter: drop-shadow(0px 0px 30.5px rgba(138, 39, 10, 0.75));
    `};
`;

StyleButton.defaultProps = {
  type: "primary",
};

function Button({ type, children, size = null }) {
  return (
    <Parent type={type} size={size}>
      <StyleButton
        type={type}
        size={size}
        className="font-bold py-2 ps-1 text-[9px] w-[4rem] md:w-40 md:h-15 md:text-xl md:px-20"
      >
        {children}
      </StyleButton>
    </Parent>
  );
}

export default Button;
