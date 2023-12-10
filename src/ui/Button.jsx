import styled, { css } from "styled-components";

const StyleButton = styled.button`
  border-radius: 5px;

  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: #8a270a;
      color: white;
      clip-path: polygon(0 0%, 100% 0, 85% 100%, 0% 100%);
      padding-right: 1rem;
      filter: drop-shadow(0px 0px 30.5px rgba(138, 39, 10, 0.75));
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: #ffe6d6;
      color: #8a270a;
      clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0 100%);
      padding-left: 1rem;
      filter: drop-shadow(0px 0px 25.9px rgba(255, 230, 214, 0.5));
    `}

    ${(props) =>
    props.type === "primary-normal" &&
    css`
      border-radius: 15px;
      padding: 10px !important;
      background-color: #8a270a;
      color: white;
      width: auto !important;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 12px;
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
        className="font-bold py-2 text-sm w-24 md:w-48 md:h-15 md:mt-24 md:text-xl"
      >
        {children}
      </StyleButton>
    </Parent>
  );
}

export default Button;
