import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from 'react-bootstrap'

function ViewImages() {
    return (
        <>
        <style type="text/css">
        {`
        .btn-flat {
          background-color: #fff;
          color:  #00565D;
          border: 1px solid #00565D;
        }
  
        .btn-flat:hover {
          background-color: #00565D;
          color:  #fff;
          border: 1px solid #00565D;
        }
        
        `}
        </style>
        <Link
        style={{ float: "right" }}
        to="gallery"
        smooth={true}
        duration={1000}
      >
        <Button
          style={{ padding: "6px 7px", border: "1px solid #065f65" }}
          variant="flat"
          size="sm"
        >
          View Images
        </Button>
      </Link>
      </>
    )
}

export default ViewImages
