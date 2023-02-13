import styled from 'styled-components';

export const Form = styled.form`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
border: 1px solid #1976d2;
min-width: 600px;
padding: 20px 30px;`

export const FormTitle = styled.h2`
color: #1976d2;
font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
display: inline-flex;
flex-wrap: wrap;`

export const Button = styled.button`
width: 180px;
  padding: 6px;
  margin-top: 20px;
  margin-left: 80px;
background-color: lightblue;
color: white;
border-radius: 2px;
border:none;
padding: 5px;
cursor: pointer;
`
export const Input = styled.input`
display: flex;
  justify-content: space-between;
  width: 250px;
  
:hover,
  :focus {
    border-color: lightblue;
    display: inline-flex;
    color: #1976d2;
  }`