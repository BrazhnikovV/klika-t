// импортировать React.js (расширение .js необязательно)
var React = require('react');
// импортировать ReactDom.js 
var ReactDOM = require('react-dom');
// импортировать  Table.js
var Table = require('./Table');
// импортировать TableData.js
var TableData = require('./TableData');
// импортировать TableHeaders.js
var TableHeaders = require('./TableHeaders');
// импортировать FilterSelects.js
var FilterSelects = require('./FilterSelects');

/**
 * Filter - класс таблицы
 * 
 */
class Filter extends React.Component {

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
        selects : FilterSelects.getData(),
        fields  : ['','','','','']
      };      
      this.onFilter = this.onFilter.bind(this);      
  };

  /**
   * render - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  render() {
    const options = [];

    for (var i = 0; i < this.state.selects.length; ++i ) {
        options[i] = this.state.selects[i].map((item, index) =>      
        <option key={index}>{item}</option>    
      );
    }

    const select_groups = this.state.headers.map((item, index) =>     
      <div key={index} className="row"> 
        <div key={index} className="form-group col-md-12">
          <label key={index}>{item}</label>
          <select onChange={this.onFilter.bind(this,index)} className="form-control">
            <option>Bce</option>
            {options[index]}
          </select>
        </div>    
      </div>
    );

    return (
      <div className="row">
        <div className="col-md-11 bg-info">
          <div className="form-group col-md-12">
            {select_groups}
          </div>
        </div>
      </div>        
    );
  };

  /**
   * onFilter - 
   * 
   * @access  {private}
   * @param   {integer}  index - 
   * @param   {object}   event - 
   * @return  {undefined}
   */
  onFilter (index,event) {
    console.log('### Filter call method => onFilter');

    var table = new Table();
    var coll_index = event.target.value;

    if (coll_index === 'Все') {
      this.state.fields[index] = '';
    }
    else {
      this.state.fields[index] = coll_index;
    }   

    table.filtered(this.state.fields);
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

module.exports = function(name) {
  return ReactDOM.render(<Filter/>, document.getElementById('filter'));
};