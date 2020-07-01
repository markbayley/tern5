import React from 'react'

const buttons = [
    { name: "All", type: "All" },
    { name: "phenocam", type: "phenocam" },
    { name: "panorama", type: "panorama" }
 
  ];
  class Filter extends React.Component {
    constructor() {
      super();
      this.state = {
        venues: [
        {
            "id": 1,
            "description": "This is my home ",
            "name": "St Lucia",
            "type": "phenocam",
            "geometry": [
                 -27,
                 153
            ]
        },
        {
            "id": 2,
            "description": "Queensland outback town",
            "name": "Longreach",
            "type": "phenocam",
            "geometry": [
                -23,
                144
            ]
        },
        {
            "id": 3,
            "description": "Town in outback somewhere",
            "name": "Widden",
            "type": "phenocam",
            "geometry": [
               -33,
               150
            ]
        },
        {
            "id": 4,
            "description": "Small town in Australia",
            "name": "Wodonga",
            "type": "phenocam",
            "geometry": [
                -36,
                147
            ]
        },
        {
            "id": 5,
            "description": "Town New South Wales",
            "name": "Kempsey",
            "type": "panorama",
            "geometry": [
                -31,
                152
            ]
        },
        {
            "id": 6,
            "description": "This is a small town",
            "name": "Wingan",
            "type": "panorama",
            "geometry": [
                -37,
                149
            ]
        },
        {
            "id": 7,
            "description": "Town in South Australia",
            "name": "Yumbarra",
            "type": "panorama",
            "geometry": [
                -31,
                133.409063
            ]
        },
        {
            "id": 8,
            "description": "A lake in Tasmania",
            "name": "Lake Leake",
            "type": "panorama",
            "geometry": [
                -42,
                148
            ]
        },
        {
            "id": 9,
            "description": "This is a town",
            "name": "Gregory",
            "type": "panorama",
            "geometry": [
                -16,
                130
            ]
        },
        {
            "id": 10,
            "description": "This is a lake",
            "name": "panorama",
            "type": "panorama",
            "geometry": [
                -27,
                122
            ]
        }
    ],
        filterVenue: []
      };
    }
  
    componentDidMount() {
      this.setState({
        filterVenue: this.state.venues
      });
    }
  
    handleClick = name => {
      let filterVenue = [];
      if (name === "All") {
        filterVenue = this.state.venues;
      } else {
        filterVenue = this.state.venues.filter(
          venue => venue.type === name
        );
      }
  
      this.setState({ filterVenue });
    };
  

    render() {
        const renderAll = this.state.filterVenue.map(venue => (
          <li key={venue.name}>{venue.name}</li>
        ));
        return (
          <div style={{paddingLeft: "10%"}}>
            {buttons.map(({ name, type }) => (
              <button
                key={name}
                type={type}
                onClick={this.handleClick.bind(this, name)}
              >
                {name}
              </button>
            ))}
    
            <p>Venue: {renderAll}</p>
            <h2>{this.state.filterVenue.length}</h2>
          </div>
        );
      }
    }

export default Filter;