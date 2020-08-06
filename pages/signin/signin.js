import styled from 'styled-components';

const StyledWrapper = styled.section`
  font-family: 'Poppins', sans-serif;
`

const Signin = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="user-signBx">
          <div className="imgBx"><img src="/static/images/coin5.jpg" /></div>
          <div className="formBx">
            <form>
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username"/>
                <input type="password" name="" placeholder="Password"/>
                <input type="submit" name="" value="login"/>
            </form>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Signin;