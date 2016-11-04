"use strict";

/**
 * Require main dependencies
 */
import CleanTask from './CleanTask';

/**
 * Helpers
 */
const taskName = 'clean';

/**
 |----------------------------------------------------------------
 | Clean
 |----------------------------------------------------------------
 |
 | This task will allow you to use ES2015 code in any browser.
 | It leverages Webpack and Buble to transform and compile
 | your code into a single entry point for the browser.
 |
 */

Elixir.extend(taskName, function(options) {
    console.log(taskName, options);
    /**
     * clean task
     */
    new CleanTask(taskName, options);
});
