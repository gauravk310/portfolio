import React from 'react';
import styled from 'styled-components';
import { Github } from 'lucide-react';

const SourceCodeButton = ({ href }) => {
  return (
    <StyledWrapper>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cssbuttons-io cursor-target"
      >
        <span>
          <Github className="github-icon" cursor-targetsize={18} />
          Source Code
        </span>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cssbuttons-io {
    position: relative;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    border-radius: 0.5em;
    cursor: pointer;
    border: 1px solid rgba(6, 182, 212, 0.3);
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(37, 99, 235, 0.1));
    backdrop-filter: blur(10px);
    color: rgb(103, 232, 249);
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
  }

  .cssbuttons-io:hover {
    border-color: rgba(6, 182, 212, 0.6);
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(37, 99, 235, 0.2));
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
    transform: translateY(-2px);
  }

  .github-icon {
    margin-right: 0.5em;
    transition: transform 0.3s ease;
  }

  .cssbuttons-io:hover .github-icon {
    transform: rotate(360deg);
  }

  .cssbuttons-io span {
    position: relative;
    z-index: 10;
    transition: color 0.3s ease;
    display: inline-flex;
    align-items: center;
    padding: 0.6em 1em;
  }

  .cssbuttons-io::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent);
    transition: left 0.5s ease;
    z-index: 1;
  }

  .cssbuttons-io:hover::before {
    left: 100%;
  }

  .cssbuttons-io:active {
    transform: translateY(0) scale(0.98);
  }`;

export default SourceCodeButton;
