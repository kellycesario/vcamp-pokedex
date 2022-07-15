import { Link } from 'react-router-dom';

import './styles.scss'

import Arrow from '@assets/icons/backB-arrow.svg'
import list from '@assets/icons/list.svg'

const Navbar = () => {
  return (
    <div className='navigation'>
      <div className='navigation__backBtnContainer'>
        <button className={`
            navigation__button
            navigation__backBtn
            `}>
          <Link to="/">    
            <img className="pokeCard__arrowImage"src={Arrow} />
          </Link>
        </button>
      </div>
      <div className='navigation__toggleContainer'>
        <button className={`
            navigation__button
            navigation__toggleList
            `}>
          <img src={list} />
        </button>
      </div>
    </div>
  )
}
export default Navbar