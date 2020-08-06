import styled from 'styled-components';

const StyledWrapper = styled.body`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
  }


  
`

const Signin = () => {
  return (
    <StyledWrapper>
      <section>
        <div className="container">
          <div className="user-signBx">
            <div className="imgBx"><img src="/static/images/coin5.jpg" /></div>
            <div className="formBx">
              <form>
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <input type="submit" name="" value="login" />
                <p className="signup">Don't have an account ? <a href="#">Sign Up</a></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
}

export default Signin;