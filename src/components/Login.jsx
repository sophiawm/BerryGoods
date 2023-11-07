import styled from 'styled-components'

const Login = () => {
  return (
    <main className={MainWrap}>
      <figure className="logo-wrap">
        <picture className="logo-container">
          <img src="/src/assets/logo-berry-goods.svg" type="image/svg" alt="" className="logo-container__image-embed" />
        </picture>
        <p className="logo__slogan">Sell and buy delicious designs!</p>
      </figure>
      <section className="login-wrap">
        <h1 className="login-title"></h1>
        <form action="" className="login-form">
          <label htmlFor="email" className="email"></label>
          <input type="text" id="email" name='email'placeholder='Email'/>
          <label htmlFor="password" className="password"></label>
          <input type="password" id="password" name="password" placeholder='Password'/>
          <button className="button-submit" type='submit'>Sign in</button>
        </form>
      </section>

    </main>
  )
}

const MainWrap = styled.main`
  display: grid;
  grid: 
    "figure" auto
    "login"  auto
    / 1fr ;
    font-family: 'Quicksand'; 
`

const LogoWrap = styled.figure`
  grid-area : figure;
  display:flex;
  justify-content: center; 
  align-content: center; 
`
const LogoContainer = styled.picture`
  display: flex;
  width: 100%;
  max-width: 6rem;
`


export default Login


 