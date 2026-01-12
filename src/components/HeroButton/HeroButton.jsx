import React from "react";
import styled from "styled-components";

const GlitchButton = ({
  text = "Explore Euphoria",
  primary = "#fd3649",
  accent = "#00e6f6",
  highlight = "#f8f005",
  to = null,
  flip = false,
  onClick,
}) => {
  const handleClick = (e) => {
    if (to) {
      const target = document.getElementById(to);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Wrapper
      primary={primary}
      accent={accent}
      highlight={highlight}
      text={text}
      flip={flip}
    >
      <button className="glitch-btn" type="button" onClick={handleClick}>
        <span>{text}</span>
      </button>
    </Wrapper>
  );
};

export default GlitchButton;

const Wrapper = styled.div`
  .glitch-btn {
    width: 300px;
    height: 64px;
    font-size: 19px;
    font-family: "Blender Pro", sans-serif;
    font-weight: 100;
    text-align: center;
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    cursor: pointer;
    position: relative;

    background: linear-gradient(
      45deg,
      transparent 5%,
      ${({ primary }) => primary} 5%
    );

    box-shadow: 6px 0 0 ${({ accent }) => accent};

    /* 🔥 flip ONLY the button */
    transform: ${({ flip }) => (flip ? "scaleX(-1)" : "none")};
  }

  /* 🔁 unflip visible text */
  .glitch-btn > span {
    display: inline-block;
    transform: ${({ flip }) => (flip ? "scaleX(-1)" : "none")};
  }

  .glitch-btn::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: "${({ text }) => text}";
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
      45deg,
      transparent 3%,
      ${({ accent }) => accent} 3%,
      ${({ accent }) => accent} 5%,
      ${({ primary }) => primary} 5%
    );

    text-shadow:
      -3px -3px 0 ${({ highlight }) => highlight},
       3px  3px 0 ${({ accent }) => accent};

    clip-path: var(--slice-0);
    animation: glitch 1.2s steps(2, end) infinite;

    /* 🔁 unflip glitch layer */
    transform: ${({ flip }) => (flip ? "scaleX(-1)" : "none")};
  }

  @keyframes glitch {
    0%   { clip-path: var(--slice-1); transform: translate(-20px, -10px); }
    10%  { clip-path: var(--slice-3); transform: translate(10px, 10px); }
    20%  { clip-path: var(--slice-1); transform: translate(-10px, 10px); }
    30%  { clip-path: var(--slice-3); transform: translate(0, 5px); }
    40%  { clip-path: var(--slice-2); transform: translate(-5px, 0); }
    50%  { clip-path: var(--slice-3); transform: translate(5px, 0); }
    60%  { clip-path: var(--slice-4); transform: translate(5px, 10px); }
    70%  { clip-path: var(--slice-2); transform: translate(-10px, 10px); }
    80%  { clip-path: var(--slice-5); transform: translate(20px, -10px); }
    90%  { clip-path: var(--slice-1); transform: translate(-10px, 0); }
    100% { clip-path: var(--slice-1); transform: translate(0); }
  }
`;
