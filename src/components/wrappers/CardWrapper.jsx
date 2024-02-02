const CardWrapper = (props) => {
  let style = props.style;
  return(
   <section className={` p-8 rounded + ${style}`}>
    {props.children}
    
    </section>

  )
};

export default CardWrapper;

