const Button = (props) => {
  const style = props.className;
  return <button className={'btn ' + {style}}>{props.children}</button>;
};

export default Button;
