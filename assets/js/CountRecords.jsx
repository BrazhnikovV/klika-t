// импортировать React.js (расширение .js необязательно)
var React = require('react');
// импортировать ReactDom.js 
var ReactDOM = require('react-dom');

/**
 * CountRecords - класс таблицы
 * 
 */
class CountRecords extends React.Component {

  /**
   * constructor - конструктор
   * 
   * @access  {public}
   * @return  {undefined}
   */
  constructor(props) {      
    console.log('### CountRecords call method => constructor');

    super(props);
    this.state = {
      data : [[true,10],[false,25],[false,50],[false,100]]
    };      
    this.onClick = this.onClick.bind(this);      
  };

  /**
   * render - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  render() {

    const buttons = this.state.data.map((item, index) =>      
        <button 
          onClick={this.onClick.bind(this, index)}
          key={index} 
          type="button" 
          className={item[0] ? "btn btn-default active" : 'btn btn-default'}>
            {item[1]}
        </button>
    );

    return (
      <div className="row">
        <div className="col-md-12 text-right">
          <div className="btn-group pagination">
            {buttons}
          </div>
        </div>
      </div>        
    );
  };

  /**
   * onClick - 
   * 
   * @access  {private}
   * @param   {integer}  index - 
   * @param   {object}   event - 
   * @return  {undefined}
   */
  onClick (index,event) {
    console.log('### CountRecords call method => onClick');

    for ( let i = 0; i < this.state.data.length; ++i ) {
      this.state.data[i][0] = false;
    }

    this.state.data[index][0] = true;

    this.setState(prevState => ({
      data: this.state.data
    }));

    this.props.onCountRecords(this.state.data[index][1]);
  };

  /**
   * componentDidMount - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  componentDidMount() {
    console.log('### CountRecords call method => componentDidMount');
  };

  /**
   * componentWillUnmount - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  componentWillUnmount() {
    console.log('### CountRecords call method => componentWillUnmount');
  }
}

export default CountRecords;