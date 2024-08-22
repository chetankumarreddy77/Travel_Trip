import React from 'react'

const TravelTripContextValue = React.createContext({
  myTripsList: [],
  addTripList: () => {},
})

export default TravelTripContextValue
