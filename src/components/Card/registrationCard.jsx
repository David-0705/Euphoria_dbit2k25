import React from 'react';
import styled from 'styled-components';

const Card = ({ title, text, icon, maxWidth = '300px',onClick  }) => {
  return (
    <StyledWrapper maxWidth={maxWidth}>
      <div className="card "onClick={onClick}>
        <div className="icon">
          {icon}
        </div>
        <p className="title">{title}</p>
        <p className="text">{text}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth};
    min-width: 200px;
    height: 250px;
    background-color: #292929;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
    border: 2px solid rgba(7, 7, 7, 0.12);
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  .icon {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    background: linear-gradient(
      90deg,
      #7eaaff 0%,
      #ff48fb 40%,
      rgba(0, 0, 0, 0.28) 60%
    );
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
  }

  .icon svg {
    width: 38px;
    height: 38px;
    fill: white;
  }

  .card .title {
    margin-top: 30px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-align: center;
  }

  .card .text {
    width: 80%;
    margin: 20px auto 0;
    font-size: 13px;
    text-align: center;
    color: white;
    font-weight: 200;
    letter-spacing: 2px;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
  }

  .card:hover {
    height: 270px;
  }

  .card:hover .text {
    opacity: 1;
    max-height: 40px;
  }

  .card:hover .icon {
    background-position: -120px;
  }

  .card:hover .icon svg path {
    fill: url('#gradientColor');
  }
`;

export default Card;
