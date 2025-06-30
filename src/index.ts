const generateGitFile = require("giv-gitignore");
generateGitFile();
class ApiTracker {
  public reqCounter: number;

  constructor() {
    this.reqCounter = 0;
  }

  async requestCount() {
    return console.log(this.reqCounter);
  }

  async payLoadSize(data: JSON) {
    try {
      const jsonData = JSON.stringify(data);
      const size = Buffer.from(jsonData).length;
      console.log(size);
    } catch (error) {
      console.log(error);
    }
  }

  async insights(fn: () => Promise<any>): Promise<void> {
    try {
      this.reqCounter++;
      const start = process.hrtime();
      await fn();
      const end = process.hrtime(start);
      const dur = end[0] * 1000 + end[1] / 1_000_000;
      const time = dur.toFixed(3);

      let performance = "";
      if (dur < 100) performance = "🚀 Excellent";
      else if (dur < 300) performance = "✅ Good";
      else if (dur < 800) performance = "⚠️ Acceptable";
      else if (dur < 1500) performance = "🐢 Slow";
      else performance = "🔥 Poor";

      console.log(`Response Time: ${time}ms - ${performance}`);
    } catch (error) {
      console.error("Error in apiTime:", error);
    }
  }
}

export default ApiTracker;
