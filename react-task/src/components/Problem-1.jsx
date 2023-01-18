import React, {useState} from 'react';
import { useEffect } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const[name,setName] = useState('');
    const[status,setStatus] = useState('');
    const [people,setPeople] = useState([]);
    const [peopleToShow,setPeopleToShow] = useState([]);


    const handleNameChange = (event)=>{
        setName(event.target.value);
    }
    const handleStatusChange = (event)=>{
        setStatus(event.target.value.toLowerCase());
        
    }
    const updateContainer = (event)=>{
        event.preventDefault();
        if(/^[A-Za-z]*$/.test(name) && /^[A-Za-z]*$/.test(status)){
            setPeople([...people,{name,status}]);
        }
        else{
            alert("Name and status should contain only alphabets");
        }
    }
    const handleClick = (val) =>{
        setShow(val);
        if(val=='all'){
            let temporary = [...people];
            setPeopleToShow(temporary.sort((a, b) => {
                if (a.status === 'active' && b.status !== 'active') {
                  return -1;
                } else if (a.status !== 'active' && b.status === 'active') {
                  return 1;
                } else if (a.status === 'completed' && b.status !== 'completed') {
                  return -1;
                } else if (a.status !== 'completed' && b.status === 'completed') {
                  return 1;
                } else {
                  if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
                }
              }));
        }
        else if(val=='active')
        {
            setPeopleToShow(people.filter(person=>person.status=='active'));
        }
        else{
            setPeopleToShow(people.filter(person=>person.status=='completed'));
        }
    }
    useEffect(()=>{
        setName('');
        setStatus('');
        if(show=='all'){
            let temporary = [...people];
            setPeopleToShow(temporary.sort((a, b) => {
                if (a.status === 'active' && b.status !== 'active') {
                  return -1;
                } else if (a.status !== 'active' && b.status === 'active') {
                  return 1;
                } else if (a.status === 'completed' && b.status !== 'completed') {
                  return -1;
                } else if (a.status !== 'completed' && b.status === 'completed') {
                  return 1;
                } else {
                  if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
                }
              }));
        }
        else if(show=='active')
        {
            setPeopleToShow(people.filter(person=>person.status=='active'));
        }
        else{
            setPeopleToShow(people.filter(person=>person.status=='completed'));
        }
    },[people])
    console.log(name,status);
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name"
                            value={name} onChange={handleNameChange}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status"
                            value={status}
                            onChange={handleStatusChange}
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary"
                            onClick={updateContainer}
                            >Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                peopleToShow.map((item,id)=>
                                    <tr key={id}>
                                    <td scope='col'>
                                        {item.name}
                                    </td>
                                    <td scope='col'>
                                        {item.status}
                                    </td>  
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;