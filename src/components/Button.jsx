import '../components/Button.css'

function Button({textButton, handleclick, isClicker}) {
  return (
    
    <button onClick={handleclick}
      className= {isClicker ? 'btnClicker' : 'btnReiniciar'}
    >
      {textButton}
      
    </button>
  )
}

export default Button