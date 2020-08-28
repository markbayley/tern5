import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class BreadCrumb extends React.Component {
    render() {
        return (
    <div style={{ backgroundColor: "#fff"}}>
      
      <Breadcrumb className="breadcrumb" style={{ backgroundColor: "#fff", marginTop: "10px"}}>
       
        <BreadcrumbItem><a  href="#"> Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#"> Library</a></BreadcrumbItem>
        <BreadcrumbItem active> Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
}

export default BreadCrumb;