/**
 * Created by Nikolay Matvienko on 4/15/18.
 */
'use strict';

const CpuTask = require('./CpuTask');


process.on('message', msg => {
    const cpuTask = new CpuTask(msg.sum, msg.set);

    cpuTask.start()
        .then(data => {
            process.send({ event: 'end', data: data });
        })
        .catch(error => {
            process.send({ event: 'error', error: error });
        })
});