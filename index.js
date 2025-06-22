const generateGitFile = require('giv-gitignore');
generateGitFile();


class ApiTracker {
  constructor() {}

  async apiTime(fn) {
    try {
      const start = process.hrtime();
      await fn();
      const end = process.hrtime(start);
      const dur = end[0] * 1000 + end[1] / 1000000;
      console.log(dur.toFixed(3));
    } catch (error) {
      console.log(error);
    }
  }
}


