import { StyledLink } from "./NavLink.styled"

const AuthNav = () => {
    return (
        <div>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
        </div>
    )
};

export default AuthNav;