import { capitalizeFirstLetter, timestampToDate } from "../common/utils";
import React from "react";

class FileView extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.file.name;
        this.id = props.file.id;
        this.updateTimestamp = timestampToDate(props.file.updateTimestamp);
        this.owner = capitalizeFirstLetter(props.file.ownerFirstName) + " " + capitalizeFirstLetter(props.file.ownerLastName);
    }

    render(){
        return (
            <tr className="content_border">
                 <td>{this.name}</td>
                 <td>{this.owner}</td>
                 <td>{this.updateTimestamp}</td>
                 <td></td>
            </tr>
        );
    }
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