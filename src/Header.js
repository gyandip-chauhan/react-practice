import './Header.css';

function Header(props) {
  return (
    <div className="Header">
      <h1> Hello {props.name} </h1>
    </div>
  );
}

export default Header;
