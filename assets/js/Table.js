// импортировать React.js (расширение .js необязательно)
var React = require('react');
// импортировать ReactDom.js 
var ReactDOM = require('react-dom');

/**
 * @var array - заголовки колонок таблицы
 * @access  {public}
 */
const headers = [
  "Book", "Author", "Language", "Published", "Sales"
];

/**
 * @var array - данные таблицы
 * @access  {public}
 */
const data = [
  ["The Lord of the Rings", "J. R. R. Tolkien","English", "1954–1955", "150 million"],
  ["Le Petit Prince (The Little Prince)", "Antoine deSaint-Exupéry","French", "1943", "140 million"],
  ["Harry Potter and the Philosopher's Stone", "J. K. Rowling","English", "1997", "107 million"],
  ["And Then There Were None", "Agatha Christie","English", "1939", "100 million"],
  ["Dream of the Red Chamber", "Cao Xueqin","Chinese", "1754–1791", "100 million"],
  ["The Hobbit", "J. R. R. Tolkien","English", "1937", "100 million"],
  ["She: A History of Adventure", "H. Rider Haggard","English", "1887", "100 million"],
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
      super(props);;
  };

  /**
   * render - 
   * 
   * @access  {private}
   * @return  {undefined}
   */
  render() {   
    const table_headers =  headers.map((header, index) =>
      <th key={index}>{header}</th>
    );

    const table_data = data.map((item, index) =>
      <tr key={index}>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>{item[2]}</td>
        <td>{item[3]}</td>
        <td>{item[4]}</td>
      </tr>
    );

    return (
      <table className="table">
          <thead><tr>{table_headers}</tr></thead>
          <tbody>{table_data}</tbody>
      </table>        
    );
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
  return ReactDOM.render(<Table/>, document.getElementById('root'));
};