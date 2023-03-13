import './Dashboard.css';

function Dashboard() {
return (
	<div className="Dashboard">
	<table>
		<tr>
		<th>Project Name</th>
		<th>Owner</th>
		<th>Status</th>
        <th>Last Updated</th>
		</tr>
		<tr>
		<td>Student Film</td>
		<td>Logan Logan</td>
		<td>Active</td>
        <td>2/14/23</td>
		</tr>
		<tr>
		<td>Lorem ipsum</td>
		<td>dolor sit</td>
		<td>Not Active</td>
        <td>12/10/22</td>
		</tr>
		<tr>
		<td>adipiscing elit</td>
		<td>sed do eiusmod tempor</td>
		<td>Active</td>
        <td>1/0/23</td>
		</tr>
	</table>
	</div>
);
}

export default Dashboard;
