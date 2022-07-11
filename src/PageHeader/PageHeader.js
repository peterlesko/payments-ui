import Menu from './Menu';
import './PageHeader.css';

const PageHeader = (props) => {
    // return <div >
    //   <h1>Payments Application</h1>
    // </div>
    return (
      <div className="pageHeader">
        <h1>Payments Application</h1>
        <Menu />
      </div>
    )  
    };

export default PageHeader;
