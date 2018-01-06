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
        count_records : 10,
        prev_pgn_class : 'disabled',
        next_pgn_class : 'disabled',
        all_count_pages : 0
      };      
      this.onClick = this.onClick.bind(this);
      this.lockPrevNextButton = this.lockPrevNextButton.bind(this);      
  };

  /**
   * render - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  render() {
    this.state.all_count_pages = Math.ceil(this.props.all_count_records / this.props.count_records);    

    let count_pages_array = [];

    for ( let i = 0; i < this.state.all_count_pages; ++i ) {
      count_pages_array[i] = i;
    }

    this.lockPrevNextButton();

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
            <li 
              onClick={this.onClick.bind(this, (this.props.current_page-1))} 
              className={this.state.prev_pgn_class}>
              <a href="#">&laquo;</a>
            </li>
              {inner_array}
            <li 
              onClick={this.onClick.bind(this, (this.props.current_page+1))} 
              className={this.state.next_pgn_class}>
              <a href="#">&raquo;</a>
            </li>
          </ul>
        </div>
      </div>        
    );
  };

  /**
   * lockPrevNextButton - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  lockPrevNextButton() {
    console.log('### Pager call method => lockPrevNextButton');

    if ( this.props.current_page !== 0 ) {
      this.state.prev_pgn_class = ''; 
    }
    else {
      this.state.prev_pgn_class = 'disabled'; 
    }

    if ( this.props.current_page === (this.state.all_count_pages - 1) ) {
      this.state.next_pgn_class = 'disabled'; 
    }
    else {
      this.state.next_pgn_class = ''; 
    }
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

    if( this.state.all_count_pages === index ) {
      console.log('### onClick => BLOCK');
      event.preventDefault();
      return false;
    }    

    if( index === -1 ) {
      console.log('### onClick => BLOCK');
      event.preventDefault();
      return false;
    }

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