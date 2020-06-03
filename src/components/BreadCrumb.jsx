import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class BreadCrumb extends React.Component {
    render() {
        return (
    <div style={{backgroundColor: "white"}}>
      
      <Breadcrumb >
     <div style={{paddingRight: "1%", paddingBottom: "0%"}}><strong>Filters: </strong></div>
        <BreadcrumbItem ><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
}

export default BreadCrumb;