function AccordionTitle(props) {
  console.log(props);
  const { handleClick, children, clickedIndex } = props;
 
  return (
    <a
      className="btn btn-outline-primary mr-1 d-block  "
      onClick={() => handleClick(clickedIndex)}
    >
      {children}
    </a>
  );
}
export default AccordionTitle;
