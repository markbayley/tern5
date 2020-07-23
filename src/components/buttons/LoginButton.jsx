import React, { useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';




function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  function LoginButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);



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
  

         <Button variant="flat"
   
        size="md" 
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
    
      >
        {isLoading ? 'Loading' : 'LOGIN'}
      </Button>
      </>
 
    );
  }

  
export default LoginButton;