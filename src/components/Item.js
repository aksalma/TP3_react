export default function Item(props) {
    const textStyle = {
        textDecoration: props.completed ? 'line-through' : 'none'
       
    };
  
    return (
        <div>
            <li className="border d-flex justify-content-between align-item-center p-2 m-2" style={{background: '#8758ff'}}>
                <div className="p-3" style={textStyle} onClick={props.toggleTodo}>
                    {props.txt}
                </div>
                <button className="btn btn-light p-2 h-50" onClick={props.delFunc}>
                    Delete
                </button>
            </li>
        </div>
    );
  }