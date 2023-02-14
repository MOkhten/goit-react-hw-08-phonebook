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
    margin: 0 0 20px 20px;
    font-family: monospace;
    font-weight: 700;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    
`;

export const Header = styled.div`
display: flex; 
margin: 0 0 0 20px;
/* position: relative; */
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
    
`