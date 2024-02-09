const Container = (props) => {
    let style = props.className;
  return (
    <div className={"lg:p-10 p-0  md:p-5 rounded-lg mx-auto " + style}> {props.children}</div>
  )
}

export default Container