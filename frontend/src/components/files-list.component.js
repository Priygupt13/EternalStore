function FileView(props){
    return (
        <tr>
             <td>{props.file.name}</td>
             <td>{props.file.updateTimestamp}</td>
             <td></td>
        </tr>
    );
}

export function FileListView(props){
    return (
        <tbody>
            {props.files && props.files.map(
              (file, index) => <FileView file={ file } />
            )}
        </tbody>
    );
}