/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = (array) => {
   array.forEach(element => {
    console.log(element);
});
};

 /*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = (array) =>array.map(temp=>(temp-32)*(5/9));
 


/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = (temperatures, threshhold) =>temperatures.filter((element)=>element>threshhold);

    
    

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
//const logHottestDays = (temperatures, threshhold) =>{ 
//return temperatures.filter((element)=>element>threshhold);
//return temperatures.map(temperatures=>(temperatures-32)*(5/9));

   
const logHottestDays =function(temperatures, threshhold){ 

logger(toCelsius(hottestDays(temperatures,threshhold)));
}

// const logHottestDays =function (temperatures, threshhold) {
//         logger(toCelsius(hottestDays(temperatures, threshhold)));
//         const hottestDays = hottestDays(temperatures, threshhold);
//         const Celsius = toCelsius(hottestDays);
//         logger(Celsius);
//     };

        
  //      toCelsius(temperatures),
    //toCelsius([threshhold])).forEach(temperatures => {console.log(temperatures);
        
/* Uncomment the following lines to test your code... */

// logger([1, 2, 3, 4, 5, 6, 7]);
// console.log(toCelsius([212, 122])); // should be: [100, 50];
// console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
// logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
