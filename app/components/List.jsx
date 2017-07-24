import React from 'react'

class List extends React.Component{
    render(){
        const data = this.props.todos;
        return (
            <ul style={{marginTop: '10px', fontSize: '20px', lineHeight: '30px'}}>
                {data.map((item, index)=>{
                    return <li key={item.id} onClick={this.clickHandler.bind(this, index)}>{item.text}</li>
                })}
            </ul>
        )
    }

    clickHandler(index){
        this.props.deleteFn(index);
    }
}

export default List;