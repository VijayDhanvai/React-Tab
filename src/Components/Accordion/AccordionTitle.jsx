function AccordionTitle(props) {
  console.log(props);
  const { handleClick, children, clickedIndex, className } = props;
 
  return (
    <a
      className={`${className} btn mt-2  d-flex justify-content-between `}
      onClick={() => handleClick(clickedIndex)}
    >
      {children}
    </a>
  );
}
export default AccordionTitle;
