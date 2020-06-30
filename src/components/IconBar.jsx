import React from 'react'
import {Row} from 'react-bootstrap';

function IconBar() {
    return (
        <div>
            <Row style={{ position: "absolute", left: "112%", top: "8%"}}>
            <img src="img/icons/Location.svg" alt="location" height="40px"/>
            </Row>

            <Row style={{ position: "absolute", left: "112%", top: "22%"}}>
           <img src="img/icons/camera1.svg" alt="location" height="40px"/>
            </Row>
      
            <Row style={{ position: "absolute", left: "112%", top: "35%"}}>
            <img src="img/icons/calendar.svg" alt="location" height="40px"/>
            </Row>

            <Row style={{ position: "absolute", left: "112%", top: "49%"}}>
            <img src="img/icons/frequency.svg" alt="location" height="40px"/>
          </Row>
            
        </div>
    )
}

export default IconBar
