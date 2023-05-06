import React, { useEffect, useState } from 'react'

const ManageUser = () => {
 
	const [userList, setuserList] = useState([]);

	const fetchUserData=async()=>{
		const res = await fetch('http://localhost:5000/user/getall');
		console.log(res.status);
		const data =await res.json();
		console.log(data);
		setuserList(data);
	}
	useEffect(() => {
		fetchUserData();
	
	
	  return () => {
		second
	  }
	}, [third])
	
	return(
		<div>
			<h1 h1 classsName='text-center display-4'>ManageUser </h1>
			<hr/>
			<table className='table'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th> Password</th>
					</tr>
				</thead>
				<tbody>
					{
						userList.map((user)=>(
							<tr>
								<td>{user._id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.password}</td>
							</tr>
						))
						
					}
				</tbody>
			</table>

		</div>
	)
}

export default ManageUser