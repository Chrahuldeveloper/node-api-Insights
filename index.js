const generateGitFile = require("giv-gitignore");
generateGitFile();
class ApiTracker {
  constructor() {}

  async apiTime(fn) {
    try {
      const start = process.hrtime();
      await fn();
      const end = process.hrtime(start);
      const dur = end[0] * 1000 + end[1] / 1000000;
      const time = dur.toFixed(3);

      let performance = "";
      if (dur < 100) {
        performance = "🚀 Excellent";
      } else if (dur < 300) {
        performance = "✅ Good";
      } else if (dur < 800) {
        performance = "⚠️ Acceptable";
      } else if (dur < 1500) {
        performance = "🐢 Slow";
      } else {
        performance = "🔥 Poor";
      }

      console.log(`Response Time: ${time}ms - ${performance}`);
    } catch (error) {
      console.log(error);
    }
  }
}
