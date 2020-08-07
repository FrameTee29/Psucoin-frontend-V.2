import styled from 'styled-components';

const StyledWrapper = styled.body`

  
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
  

  section{
    position:relative;
    min-height:100vh;
    background: #ecdb6b;
    display:flex;
    justify-content:center;
    align-items:center;
    padding : 20px;
  }
  section .container{
    position:relative;
    width: 900px;
    height: 500px;
    background: #fff;
    box-shadow:0 15px 50px rgba(0,0,0,0.2);
    overflow: hidden;
  } 
  section .container .user {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;

  }

  section .container .user .imgBx{
    position: relative;
    width:50%;
    height:100%;
    background: #ff0;
    transition: position 0.5s;
  }

  section .container .user .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    object-fit: cover;
  }
  
  section .container .user .formBx{
    position:relative;
    width:50%;
    height:100%;
    background:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 40px;
    transition: position 0.5s;
  }

  section .container .user .formBx form h2{
    font-size:18px;
    font-weight:600;
    text-transform:uppercase;
    letter-spacing: 2px;
    text-align:center;
    width:100%;
    margin-bottom:10px;
    color:#555;

  }

  section .container .user .formBx form input {
    position:relative;
    width:100%;
    padding: 10px;
    background: #f5f5f5;
    color: #333;
    border:none;
    outline:none;
    box-shadow:none;
    margin:8px 0;
    font-size:14px;
    letter-spacing: 1px;
    font-weight:300;
  }

  section .container .user .formBx form input[type="submit"]{
    max-width:100px;
    background: #677eff;
    color: #fff;
    cursor :pointer;
    font-size:14px;
    font-weight:500;
    letter-spacing:1px;
    transition: 0.5s;
  }

  section .container .user .formBx form .signup{
    position:relative;
    margin-top:20px;
    font-size:11px;
    letter-spacing:1px;
    color:#555;
    text-transform:uppercase;
    font-weight:300;
  }

  section .container .user .formBx form .signup a{
    font-weight:600;
    text-decoration:none;
    color: #677eff;
  }

  @media (max-width: 991px){
    section .container{
      max-width:400px;
    }
    section .container .imgBx{
      display:none;
    }
    section .container .user .formBx{
      width:100%;
    }
  }
 
`

const Signin = () => {
  return (
    <StyledWrapper>
      <section>
        <div className="container">
          <div className="user signBx">
            <div className="imgBx"><img src="/static/images/logosigin.png" /></div>
            <div className="formBx">
              <form>
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <input type="submit" name="" value="login" />
                <p className="signup">Don't have an account ? <a href="/auth/signup">Sign Up.</a></p>
              </form>
            </div>
          </div>
          {/* <div className="user signupBx">
            <div className="imgBx"><img src="/static/images/logosigin.png" /></div>
            <div className="formBx">
              <form>
                <h2>Create an account</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="email" name="" placeholder="Email Address" />
                <input type="password" name="" placeholder="Create Password" />
                <input type="password" name="" placeholder="Confirm Password" />
                <input type="submit" name="" value="login" />
                <p className="signup">Already have an account ? <a href="#">Sign in.</a></p>
              </form>
            </div>
          </div> */}
    
        </div>
      </section>
    </StyledWrapper>
  );
}

export default Signin;