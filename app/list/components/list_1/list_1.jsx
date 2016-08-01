import React from 'react';
import './list_1.less';

export default class ListOne extends React.Component{
	render (){
		console.log(TestGlobal.selection, 'selection------>>');
		return <div className="list-first">{this.props.name}</div>
	}
}