import React, { Component } from 'react';

class List extends Component {
    state = {  
       logo:"",
       item:[]         

    };
   onChange=(event)=>{
     this.setState({logo:event.target.value});
   }
     onSubmit=(event)=>{
    event.preventDefault();
    if(this.state.logo!==""){
    this.setState({
        logo:'',
        item:[...this.state.item, this.state.logo]

    });
}else{
    alert("please write something")
}
}
onDelete=(val,event)=>{
event.preventDefault();
var data = [...this.state.item];
data.filter((item,index)=>{
       if(index === val){
               data.splice(index, 1); 
       }
    });
    this.setState({item:[...data]});
}



 
    render() { 
        return ( 
            
                
                    <div className="container">
                        <form onSubmit={this.onSubmit}>
                         <label>
                             enter the list:
                         </label>
                         <input type="text" value={this.state.logo} placeholder="text" onChange={this.onChange} className="form-control"/>
                         
                         <button type="submit"className="btn btn-success">submit</button>
                         
                        </form>
                        <table className="table-mt-3">
                           {this.state.item.map((item,index)=>(
                             <tr>
                               <td key={index} className="text-left">
                                {item}
                               </td>
                               <td className="col-md-6">
                                  <button className="btn btn-danger " onClick={(e)=>this.onDelete(index,e)}>
                                        delete
                                </button>


                               </td>
                             </tr>          
                                        
                           ))}
                        </table>
                    </div>    
        );
    }
}
 
export default List;
     

