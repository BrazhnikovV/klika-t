// импортировать React.js (расширение .js необязательно)
var React = require('react');
// импортировать ReactDom.js 
var ReactDOM = require('react-dom');
// импортировать  Table.js
var Table = require('./Table').default;
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
        fields  : ['','','','',''],
        is_filtering : false
      };      
      this.onFilter = this.onFilter.bind(this);
      this.onSortedTable = this.onSortedTable.bind(this);      
  };

  /**
   * render - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  render() {
    console.log('### Filter call method => render');    

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
        <div className="col-md-9">
          <div className="row">
              <div className="col-md-12">
                  <h2>Плэйлист</h2>
              </div>          
              <div className="col-md-12">
                <Table 
                  filter={this.state.fields} 
                  is_filtering={this.state.is_filtering} 
                  onSorted={this.onSortedTable}
                />
              </div>
          </div>          
        </div>          
        <div className="col-md-3">
          <div className="row">      
            <div className="col-md-12">
                <h2>Фильтр</h2>
            </div>          
            <div id="filter" className="col-md-12">
              <div className="row">
                <div className="col-md-11 bg-info">
                  <div className="form-group col-md-12">
                    {select_groups}
                  </div>
                </div>        
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  };

  /**
   * onSortedTable - 
   * 
   * @access  {private}
   * @param   {integer}  index - 
   * @param   {object}   event - 
   * @return  {undefined}
   */
  onSortedTable (index,event) {
    console.log('### Filter call method => onSortedTable');
    this.setState(prevState => ({
      is_filtering: false
    }));
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

    var coll_index = event.target.value;

    if (coll_index === 'Все') {
      this.state.fields[index] = '';
    }
    else {
      this.state.fields[index] = coll_index;
    }

    this.setState(prevState => ({
      fields: this.state.fields,
      is_filtering: true
    }));
  };

  /**
   * componentDidMount - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  componentDidMount() {
    console.log('### Filter call method => componentDidMount');
  };

  /**
   * componentWillUnmount - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  componentWillUnmount() {
    console.log('### Filter call method => componentWillUnmount');
  }
}

export default Filter;