import { capitalizeFirstLetter } from "../common/utils";

function FileView(props){
    return (
        <tr className="content_border">
             <td>{props.file.name}</td>
             <td>{capitalizeFirstLetter(props.file.ownerFirstName) + " " + capitalizeFirstLetter(props.file.ownerLastName)}</td>
             <td>{props.file.updateTimestamp}</td>
             <td></td>
        </tr>
    );
}

export function FileListView(props){
    return (
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col"  style={{ width: '35%' }}>Name</th>
                    <th scope="col"  style={{ width: '20%' }}>Owner</th>
                    <th scope="col" style={{ width: '20%' }}>Last Modified</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.files && props.files.map(
                    (file, index) => <FileView file={ file } />
                 )}
            </tbody>
        </table>
    );
}