// This component will act as a higher level component so that a wrapping div is not needed.
// Maybe div's are styled a certain way and you don't want a child component to have that style.
const hoc = (props) => props.children;

export default hoc