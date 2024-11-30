 const calculateDaysBetweenDates = (startDate, endDate) => {
    const start = Date.parse(startDate);
    const end = Date.parse(endDate);
    if((end - start) / (1000 * 3600 * 24)===0){
        return 1;
    }else{
        return (end - start) / (1000 * 3600 * 24)+1; 
    }
  };
  module.exports = {
    calculateDaysBetweenDates,
  };