'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }

  '* * * * * *': async () => {
    console.log("Every second")
  },
  '0 0 0 * * *': async () => {
    console.log("Once at midnight")

    //This may call a hundred other functions that need to be run once a day
    try{
      // oneFunction()
    } catch(err){

    }
  },
  '0 0 * * * *': async () => {
    console.log("once every hour")
  }
};
