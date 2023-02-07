import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  display: inline-block;
  &.active {
    color: #FFFFFF;
    background-color: #1976d2;
  }
`;