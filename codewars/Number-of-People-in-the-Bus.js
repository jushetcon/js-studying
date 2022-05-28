let number = function(busStops){
  let peopleInBus = 0;
  let peopleOut = 0;
    for (let i=0; i<busStops.length; i++) {
      peopleInBus += busStops[i][0];
      peopleOut += busStops[i][1];
  }
  return peopleInBus - peopleOut;
}