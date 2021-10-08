import { AgGridReact } from 'ag-grid-react/lib/agGridReact';
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCommentsAttemp } from '../../redux/actions/commentsActions';
import { getPostsAttemp } from '../../redux/actions/postsActions';
import { getUsersAttemp } from '../../redux/actions/usersActions';


const UserList = (props) => {
  const dispatch = useDispatch(); 
  const posts = useSelector((state) => {return state.posts.posts})
  const comments = useSelector((state) => {return state.coments.comments})
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  useEffect(()=> {
      dispatch(getUsersAttemp());
      dispatch(getPostsAttemp());
      dispatch(getCommentsAttemp());

      console.log(posts)
      console.log(comments)
  }, [])


  const columns = {

  }

  const defaultColDef= {
    
  }


  return (<div>
    <h3>Users Registered</h3>
    <div className="ag-theme-alpine" style={{height: 600, minwidth: '53%'}}>
      <AgGridReact 
        columnDefs={columns}
        defaultColDef={defaultColDef}
      />
    </div>
    
  </div>)
}

export default UserList;