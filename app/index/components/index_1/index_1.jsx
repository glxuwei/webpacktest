import React from 'react';
//import {Selection} from '../../../common/scripts/Test';
//import {Selection} from 'Test';
import './index_1.less';

export default class IndexOne extends React.Component {
	constructor (props){
		super(props);
		this.state = {};
	}
    render () {
    	require.ensure([], function() {
    		console.log(TestGlobal.Selection, 'TestGlobal in index_1.js----->>>');
    	});
        return <div className="index_1">{this.props.name}</div>
    }

}
