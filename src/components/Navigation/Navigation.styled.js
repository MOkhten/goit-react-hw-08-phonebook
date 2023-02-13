import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:  #FFFFFF;
    margin-right: 16px;
    font-family: monospace;
    font-weight: 700;
`;

export const Header = styled.div`
display: flex; 
margin: 0 0 0 20px;

font-family: "Roboto","Helvetica","Arial",sans-serif;
font-weight: 500;
    font-size: 0.475rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    top: 27px;
    left: 450px;
`