function TabButton(props) {
  console.log(props);
  const { handleClick, children, className } = props;

  // console.log('props', props);
  return (
    <button
      className={` ${className} btn ` }
      onClick={() => handleClick(children.toString().toLowerCase())}
    >
      {children}
    </button>
  );
}
export default TabButton;
