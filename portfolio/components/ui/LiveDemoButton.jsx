import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'lucide-react';

const LiveDemoButton = ({ href }) => {
  return (
    <StyledWrapper>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="live-demo-btn cursor-target"
      >
        <span>
          Live Demo
          <ExternalLink className="external-icon" size={18} />
        </span>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .live-demo-btn {
    position: relative;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    border-radius: 0.5em;
    cursor: pointer;
    border: 1px solid rgba(59, 130, 246, 0.4);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15));
    backdrop-filter: blur(10px);
    color: rgb(147, 197, 253);
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
  }

  .live-demo-btn:hover {
    border-color: rgba(59, 130, 246, 0.7);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25));
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.4);
    transform: translateY(-2px);
  }

  .external-icon {
    margin-left: 0.5em;
    transition: transform 0.3s ease;
  }

  .live-demo-btn:hover .external-icon {
    transform: translate(4px, -4px);
  }

  .live-demo-btn span {
    position: relative;
    z-index: 10;
    transition: color 0.3s ease;
    display: inline-flex;
    align-items: center;
    padding: 0.6em 1em;
  }

  .live-demo-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
    transition: left 0.5s ease;
    z-index: 1;
  }

  .live-demo-btn:hover::before {
    left: 100%;
  }

  .live-demo-btn::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(147, 197, 253, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    z-index: 0;
  }

  .live-demo-btn:hover::after {
    width: 300px;
    height: 300px;
  }

  .live-demo-btn:active {
    transform: translateY(0) scale(0.98);
  }
`;

export default LiveDemoButton;
