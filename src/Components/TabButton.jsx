function TabButton(props) {
  console.log(props);
  const { handleClick, children } = props;

  // console.log('props', props);
  return (
    <button
      className="btn btn-outline-primary mr-1"
      onClick={() => handleClick(children.toLowerCase())}
    >
      {children}
    </button>
  );
}
export default TabButton;
