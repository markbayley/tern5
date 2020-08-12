import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from 'react-bootstrap'
import './buttons.scss';


function ViewImages() {
    return (
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
    )
}

export default ViewImages
