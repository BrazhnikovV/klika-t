// импортировать React.js (расширение .js необязательно)
var React = require('react');
// импортировать ReactDom.js 
var ReactDOM = require('react-dom');

/**
 * Pager - класс таблицы
 * 
 */
class Pager extends React.Component {

  /**
   * constructor - конструктор
   * 
   * @access  {public}
   * @return  {undefined}
   */
  constructor(props) {      
      super(props);
      this.state = {
        count_records : 10
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
    const all_count_pages = Math.ceil(this.props.all_count_records / this.props.count_records);

    let count_pages_array = [];

    for ( let i = 0; i < all_count_pages; ++i ) {
      count_pages_array[i] = i;
    }

    const inner_array = count_pages_array.map((item, index) =>       
        <li 
          key={index} 
          className={this.props.current_page === index ? "active" : ""}
          onClick={this.onClick.bind(this, index)}>
            <a href="#">{index+1}</a>
        </li>
    );

    return (
      <div className="row">
        <div className="col-md-12">
          <ul className="pagination">
            <li><a href="#">&laquo;</a></li>
              {inner_array}
            <li><a href="#">&raquo;</a></li>
          </ul>
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
    console.log('### Pager call method => onClick');

    this.props.onPageClick(index);
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
export default Pager;