import './styles.scss'

const Navbar = () => {
  return (
    <div className='navigation'>
      <div className='navigation__backBtnContainer'>
        <button className={`
            navigation__button
            navigation__backBtn
            `}>
          {'<-'}
        </button>
      </div>
      <div className='navigation__toggleContainer'>
        <button className={`
            navigation__button
            navigation__toggleList
            `}>
          {'='}
        </button>
      </div>
    </div>
  )
}
export default Navbar