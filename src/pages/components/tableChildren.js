import React from 'react';
import { Table, Button } from '@alifd/next';
class ExpandedApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childArr: [
                {
                    name: '1', age: 'eeeee'
                }, {
                    name: '222', age: 'gdd'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Table dataSource={this.state.childArr}>
                    <Table.Column dataIndex='name' title='Mingzi'>

                    </Table.Column>
                    <Table.Column dataIndex='name' title='Mingzi'>

                    </Table.Column>
                </Table>

            </div >
        )
    }
}


// class ExpandedApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dataSource: this.props.dataSource
//         };
//     }
//     load() {
//         let { dataSource } = this.state;
//         dataSource = dataSource.concat(dataSource);
//         this.setState({ dataSource });
//     }
//     render() {
//         const style = {
//             borderTop: '1px solid #eee',
//             textAlign: 'center',
//             background: '#f8f8f8',
//             lineHeight: '28px'
//         };
//         return (
//             <div style={{ marginTop: 10 }}>
//                 <Table dataSource={this.state.dataSource} hasHeader={false} hasBorder={false}>
//                     <Table.Column title="Title" dataIndex="title" />
//                     <Table.Column title="Time" dataIndex="time" width={200} />
//                 </Table>
//                 <p style={style}
//                     onClick={this.load.bind(this)}>{this.props.index}: Load more data. </p>
//             </div>
//         );
//     }
// }






export default ExpandedApp;