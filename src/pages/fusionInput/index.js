import React from 'react';
import '@alifd/next/dist/next.css';
import { CascaderSelect } from '@alifd/next';
class fuSionInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: JSON.parse(localStorage.getItem('searchVals')) || [],
            selectVal: null
        }
    }

    debounce(func,wait) {
        let timeout;
        return function () {
            let context=this
            let args=arguments
            if(timeout) clearTimeout(timeout)
            timeout=setTimeout(()=>{
                func.apply(context,args)
            },wait)
        }
    }


    handleInput(value) {
        console.log(value);
        console.log(this.state.selectVal);
        let data1 = [{
            value: '2974',
            label: '西安',
            children: [
                { value: '2975', label: '西安市', disabled: true },
                { value: '2976', label: '高陵县', checkboxDisabled: true },
                { value: '2977', label: '蓝田县' },
                { value: '2978', label: '户县' },
                { value: '2979', label: '周至县' },
                { value: '4208', label: '灞桥区' },
                { value: '4209', label: '长安区' },
                { value: '4210', label: '莲湖区' },
                { value: '4211', label: '临潼区' },
                { value: '4212', label: '未央区' },
                { value: '4213', label: '新城区' },
                { value: '4214', label: '阎良区' },
                { value: '4215', label: '雁塔区' },
                { value: '4388', label: '碑林区' },
                { value: '610127', label: '其它区' }
            ]
        }];
        setTimeout(() => {
            this.setState({
                data: data1
            })
        }, 1000)
    }

    handleFocus() {
        this.setState({
            data: JSON.parse(localStorage.getItem('searchVals')) || []
        })
    }

    unique(arr) {
        return Array.from(new Set(arr))
    }


    handleChange(value, data) {
        console.log(this.state.selectVal);
        console.log(data);
        if (data) {
            let arr = JSON.parse(localStorage.getItem('searchVals')) || []
            let obj = {
                value: data.value,
                label: data.label
            }
            console.log(obj);
            arr.push(obj)
            arr = this.unique(arr)
            console.log(arr);
            localStorage.setItem('searchVals', JSON.stringify(arr))
        }


    }
    render() {
        return (
            <div>
                <CascaderSelect dataSource={this.state.data} onInput={() => { this.debounce(this.handleInput(),2000) }} hasClear
                    showSearch defaultValue={this.state.selectVal}
                    onFocus={this.handleFocus.bind(this)} onChange={(value, data) => {
                        this.handleChange(value, data)
                    }}></CascaderSelect>

            </div>
        )
    }
}
export default fuSionInput;