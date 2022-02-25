import './style.css'
import { IWrapper } from './type'

const Wrapper = ({ children, title = 'title' }: IWrapper) => {
  return (
    <div className="wrapper">
      <h4>{ title }</h4>
      {children}
    </div>
  )
}

export default Wrapper
