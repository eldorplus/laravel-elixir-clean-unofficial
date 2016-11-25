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
 | This task clean all files end folders specified in option.
 | 
 | 
 |
 */

Elixir.extend(taskName, function(options) {
    /**
     * clean task
     */
    new CleanTask(taskName, options).watch(Elixir.config.assetsPath + '/**');
});
