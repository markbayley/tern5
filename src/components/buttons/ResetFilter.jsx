import React from 'react'

import { Button } from 'react-bootstrap'

function ResetFilter() {
    return (
        <>
        <style type="text/css">
        {`
        .btn-reset {
         
       
       
    
         
        }
  
        .btn-reset:hover {
        
          background-image: url(/img/icons/reset-icon-white.png)
     
        
        }
        
        `}
        </style>
  
        <Button
          style={{ padding: "0px 3px 0px 3px", float: "right" }}
          variant="reset"
          size="sm"
          
        >
          <img src="/img/icons/reset-icon.png" alt="reset" width="30px"/>
        </Button>
  
      </>
    )
}

export default ResetFilter