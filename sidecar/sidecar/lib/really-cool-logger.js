'use strict';

class Logger {
  constructor(service) {
    this.service = service;
  }

  send(target, route, time = Date.now()) {
    // pretend this is actually doing something
    // more interesting than this...
    console.log(`${this.service} - ${target} - ${route} - ${time}`);
  }
}

module.exports = Logger;
