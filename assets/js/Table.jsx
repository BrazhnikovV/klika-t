// импортировать React.js (расширение .js необязательно)
var React = require('react');
// импортировать ReactDom.js 
var ReactDOM = require('react-dom');
// импортировать функцию из TableData.js
var TableData = require('./TableData');
// импортировать функцию из TableHeaders.js
var TableHeaders = require('./TableHeaders');

/**
 * @var array - 
 * @access  {public}
 */
const states_headers = [
  false, false, false, false, false
];

/**
 * Table - класс таблицы
 * 
 */
class Table extends React.Component {

  /**
   * constructor - конструктор
   * 
   * @access  {public}
   * @return  {undefined}
   */
  constructor(props) {
      super(props);
      this.state = {
        headers : new TableHeaders(),
        data_dinamic :   new TableData(),
        data_origin  :   new TableData(),
        states_headers : states_headers
      };

      this.onSorted = this.onSorted.bind(this);
      this.filtered = this.filtered.bind(this);
  };

  /**
   * render - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  render() {   
    const table_headers =  this.state.headers.map((header, index) =>
      <th key={index} 
          onClick={this.onSorted.bind(this, index)}>
            {header}
      </th>
    );

    const table_data = this.state.data_dinamic.map((item, index) =>
      <tr key={index}>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>{item[2]}</td>
        <td>{item[3]}</td>
        <td>{item[4]}</td>
      </tr>
    );

    return (
      <table className="table table-bordered table-hover table-condensed">
          <thead className="bg-info"><tr>{table_headers}</tr></thead>
          <tbody>{table_data}</tbody>
      </table>        
    );
  };

  /**
   * onSorted - отсортировать данные таблицы
   * 
   * @access  {private}
   * @param   {integer}   index - 
   * @return  {undefined}
   */
  onSorted (index) {
    if(!this.state.states_headers[index]) {
      this.state.states_headers[index] = true;
      this.state.data_dinamic.sort(function(a, b) {
          return a[index] == b[index] ? a > b : a[index] > b[index];
      });      
    }
    else {
      this.state.states_headers[index] = false;
      this.state.data_dinamic.sort(function(a, b) {
          return a[index] == b[index] ? a < b : a[index] < b[index];
      });
    }
    this.setState(prevState => ({
      data_dinamic: this.state.data_dinamic
    }));
  };

  /**
   * filtered - 
   * 
   * @access  {private}
   * @param   {array}   index - 
   * @return  {undefined}
   */
  filtered (index) {
    console.log('### Table call method => filtered');

    let inner_array = [];

    for ( let i = 0; i < index.length; ++i ) {
      for ( let j = 0; j < this.state.data_origin.length; ++j ) {
        if(this.state.data_origin[j].indexOf(index[i]) !== -1) {        
          inner_array.push(this.state.data_origin[j]);        
        }
      } 
    }

    let unic_inner_array = this.unique(inner_array);
    let unic_input_array = [];

    for ( let i = 0; i < unic_inner_array.length; ++i ) {
      unic_input_array.push(unic_inner_array[i].split(','));
    }

    if (unic_input_array.length === 0) {
      this.setState(prevState => ({          
        data_dinamic: this.state.data_origin
      }));
    }
    else {
      this.setState(prevState => ({          
        data_dinamic: unic_input_array
      }));
    }     
  };

  /**
   * unique - 
   * 
   * @access  {private}
   * @param   {array}   arr - 
   * @return  {array}
   */
  unique (arr) {
    var obj = {};
    for(var i=0; i<arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    return Object.keys(obj);
  };

  /**
   * componentDidMount - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  componentDidMount() {
    
  };

  /**
   * componentWillUnmount - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  componentWillUnmount() {
    
  }
}

module.exports = function() {
  return ReactDOM.render(<Table/>, document.getElementById('table'));
};