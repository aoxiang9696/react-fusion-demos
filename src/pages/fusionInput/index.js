import React from 'react';
import '@alifd/next/dist/next.css';
import { CascaderSelect } from '@alifd/next';
class fuSionInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            selectVal: null
        }
    }
    handleChange(value) {
        console.log(value);
        console.log(this.state.selectVal);
        let data1 =
            [{
                children: [{
                    value: "2974",
                    label: "西安",
                    children: [
                        { value: "2975", label: "西安市" },
                        { value: "2976", label: "高陵县" }

                    ]
                }]
            }]
        setTimeout(() => {
            this.setState({
                data: data1

            })
            console.log(this.state.data);
        }, 1200)
    }
    componentWillUpdate() {
        console.log(this.state.data);
    }
    handleFocus() {
        this.setState({
            data: []
        })
    }
    render() {
        return (
            <div>
                <CascaderSelect dataSource={this.state.data} onInput={this.handleChange.bind(this)} showSearch value={this.state.selectVal}
                    onFocus={this.handleFocus.bind(this)}></CascaderSelect>

            </div>
        )
    }
}
export default fuSionInput;