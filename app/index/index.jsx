import React from 'react';
import ReactDom from 'react-dom';
//import {Selection} from 'Test';
//import Expose1, {outputDefault, ddd} from 'testexpose';
import IndexOne from './components/index_1/index_1.jsx';
//import $ from 'jquery';
//require('../lib/jquery-1.8.3.js');
import _ from 'lodash';
console.log('index.jsx:', 'jquery:', $, 'lodash: forEach', _.forEach);
TestExpose.outputDefault();
console.log(TestGlobal, 'TestGlobal------->>>');
console.log('test expose in index.js :', TestExpose.default, 'ddd:', TestExpose.ddd('zs'));
ReactDom.render(<IndexOne name="index1" />, TestGlobal.Selection('index_wrap'))

