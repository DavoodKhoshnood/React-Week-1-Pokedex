const Logo = (props) => {
  console.log(props)
  return (
    <>
      <header>
        <h1>
          Welcome to {props.team}'s {props.appName}
        </h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" />
      </header>
    </>
  )
}
export default Logo
