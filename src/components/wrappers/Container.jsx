const Container = (props) => {
    let style = props.className;
  return (
    <div className={`p-10 rounded-lg mx-auto + ${style}`}> {props.children}</div>
  )
}

export default Container