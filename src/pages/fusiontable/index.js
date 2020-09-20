import React from 'react';
import '@alifd/next/dist/next.css';
import { Table, Button } from '@alifd/next';
import ExpandedApp from './../components/tableChildren'




class fusionTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: [
                { name: 'aaaa', age: 'ttt' },
                { name: 'ttt', age: 'uuuu' }
            ],
            openRowKeys: [],
            hasExpandedRowCtrl: true
        }
    }
    renderName(value) {
        return '仙仙'
    }
    expandedRowRender = () => {
        // const children = record.children;
        return <ExpandedApp />;
    };
    onRowOpen() {

    }
    render() {
        return (
            <div>
                <Table ref='table3'
                    expandedIndexSimulate
                    dataSource={this.state.tableData}
                    expandedRowRender={this.expandedRowRender.bind(this)}
                    onRowOpen={() => { this.onRowOpen() }} openRowKeys={this.state.openRowKeys}
                    hasExpandedRowCtrl={this.state.hasExpandedRowCtrl}
                >
                    <Table.Column title='姓名' dataIndex='name'>
                    </Table.Column>
                    <Table.Column title='年龄' dataIndex='age' cell={this.renderName.bind(this)}>
                    </Table.Column>
                </Table>


                <Table ref='table1' dataSource={this.state.tableData}>
                    <Table.Column title='姓名' dataIndex='name'>
                    </Table.Column>
                    <Table.Column title='年龄' dataIndex='age' cell={this.renderName.bind(this)}>
                    </Table.Column>
                </Table>

                <Table ref='table2'>
                    <Table.ColumnGroup title='表头1'>
                        <Table.Column title='NAME' dataIndex='name'>
                        </Table.Column>
                        <Table.Column title='AGE' dataIndex='age'>
                        </Table.Column>
                    </Table.ColumnGroup>
                    <Table.ColumnGroup title='表头2'>
                        <Table.Column title='姓名1' dataIndex='name1'></Table.Column>
                    </Table.ColumnGroup>
                </Table>

            </div>
        )
    }
}

export default fusionTable


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dataSource: dataSource(),
//             hasBorder: false,
//             openRowKeys: []
//         };
//     }
//     onSort(dataIndex, order) {
//         const dataSource = this.state.dataSource.sort(function (a, b) {
//             const result = a[dataIndex] - b[dataIndex];
//             return (order === 'asc') ? (result > 0 ? 1 : -1) : (result > 0 ? -1 : 1);
//         });
//         this.setState({
//             dataSource
//         });
//     }
//     disabledExpandedCol() {
//         this.setState({
//             getExpandedColProps: (record, index) => {
//                 console.log(index);
//                 if (index === 3) {
//                     return {
//                         disabled: true
//                     };
//                 }
//             }
//         });
//     }
//     toggleCol() {
//         this.setState({
//             hasExpandedRowCtrl: false
//         });
//     }
//     onRowOpen(openRowKeys) {
//         this.setState({ openRowKeys });
//     }
//     toggleExpand(record) {
//         const key = record.id,
//             { openRowKeys } = this.state,
//             index = openRowKeys.indexOf(key);
//         if (index > -1) {
//             openRowKeys.splice(index, 1);
//         } else {
//             openRowKeys.push(key);
//         }
//         this.setState({
//             openRowKeys: openRowKeys
//         });
//     }
//     rowProps(record, index) {
//         console.log('rowProps', record, index);
//         return { className: `next-myclass-${index}` };
//     }
//     render() {
//         const renderTitle = (value, index, record) => {
//             return <div>{value}<span onClick={this.toggleExpand.bind(this, record)}>index:{index} +++++</span></div>;
//         };
//         return (
//             <span>
//                 <p> <Button onClick={this.disabledExpandedCol.bind(this)}> disable fourth row </Button> &nbsp;
//                     <Button onClick={this.toggleCol.bind(this)}> hide + </Button></p>
//                 <Table dataSource={this.state.dataSource}
//                     expandedIndexSimulate
//                     isZebra={this.state.isZebra}
//                     hasBorder={this.state.hasBorder}
//                     onSort={this.onSort.bind(this)}
//                     expandedRowRender={expandedRowRender}
//                     expandedRowIndent={[1, 1]}
//                     openRowKeys={this.state.openRowKeys}
//                     getExpandedColProps={this.state.getExpandedColProps}
//                     hasExpandedRowCtrl={this.state.hasExpandedRowCtrl}
//                     onRowOpen={this.onRowOpen.bind(this)}
//                     rowProps={this.rowProps.bind(this)}
//                 >
//                     <Table.Column title="Id" dataIndex="id" sortable />
//                     <Table.Column title="Title" dataIndex="title" cell={renderTitle} />
//                     <Table.Column title="Time" dataIndex="time" width={200} />
//                     <Table.Column cell={render} width={200} />
//                 </Table>
//             </span>
//         );
//     }
// }

// export default App