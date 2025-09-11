import { spawn } from "child_process";
import { exec } from "child_process";
import util from "util";
import fs from "fs";
// import path from "path";

const execPromise = util.promisify(exec);
class AudioManager {
  constructor() {
    this.audioFiles = {
      english: "/Users/nagasubarayudu/Desktop/IOS/utils/audioFiles/CardiacArrest.wav",
      spanish: "/Users/nagasubarayudu/Desktop/IOS/utils/audioFiles/CardiacArrestEs.wav",
    };
    this.currentAudioFile = null;
    this.currentProcess = null;
    this.isPaused = false;
    this.pausedTime = 0; // Track paused time in seconds
    this.startTime = 0; // Track start time in seconds

    // 🔹 Added for audio duration limit
    this.playedTime = 0;
    this.maxDuration = 608; // 10:08 in seconds
    this._durationTicker = null;
  }

  _startDurationTicker() {
    if (this._durationTicker) return;
    this._durationTicker = setInterval(async () => {
      let elapsed = this.playedTime;
      if (!this.isPaused && this.startTime) {
        elapsed += Date.now() / 1000 - this.startTime;
      }
      if (elapsed >= this.maxDuration) {
        clearInterval(this._durationTicker);
        this._durationTicker = null;
        await this.stopAudio();
        console.log("Audio auto-stopped at 10:08 (608 sec)");
      }
    }, 1000);
  }

  async playAudio(language) {
    const audioFilePath = this.audioFiles[language] || this.audioFiles.english;

    if (this.isPaused && this.currentProcess) {
      this.currentProcess = spawn("afplay", [
        "-t",
        String(Number.MAX_SAFE_INTEGER),
        "-ss",
        String(this.pausedTime),
        audioFilePath,
      ]);
      this.currentProcess.on("error", (err) => {
        console.error("Failed to resume afplay:", err);
      });
      this.startTime = Date.now() / 1000;
      this.isPaused = false;
      this._startDurationTicker(); // 🔹 start ticker on resume
      return audioFilePath;
    } else {
      if (this.currentProcess) {
        await this.stopAudio();
      }
      this.currentAudioFile = audioFilePath;
      this.currentProcess = spawn("afplay", [audioFilePath]);
      this.currentProcess.on("error", (err) => {
        console.error("Failed to start afplay:", err);
      });
      this.startTime = Date.now() / 1000;
      this.isPaused = false;
      this._startDurationTicker(); // 🔹 start ticker on play
      return this.currentAudioFile;
    }
  }

  async pauseAudio() {
    if (this.currentProcess && !this.isPaused) {
      this.playedTime += Date.now() / 1000 - this.startTime; // 🔹 accumulate playback
      this.pausedTime = this.playedTime;

      const { stdout } = await execPromise("pgrep afplay || true");
      if (stdout.trim()) {
        await execPromise("pkill -STOP afplay");
        this.isPaused = true;
      }
    }
  }
  async resumeAudio() {
    if (this.currentProcess && this.isPaused) {
      await execPromise("pkill -CONT afplay");
      this.startTime = Date.now() / 1000;
      this.isPaused = false;
      this._startDurationTicker(); // 🔹 restart ticker
    }
  }

  async stopAudio() {
    if (this.currentProcess) {
      const { stdout } = await execPromise("pgrep afplay || true");
      if (stdout.trim()) {
        await execPromise("killall afplay");
      }
      this.currentProcess = null;
    }
    this.isPaused = false;
    this.pausedTime = 0;
    this.startTime = 0;
    this.playedTime = 0;
    if (this._durationTicker) {
      clearInterval(this._durationTicker);
      this._durationTicker = null;
    }
  }
  async AudioCommand(language = "english") {
    return await this.playAudio(language);
  }
  async TextComparison(recordedText) {
    const TEXT_FILE_PATH =
      "/Users/nagasubarayudu/Desktop/NokiAndroid/utils/audiotranscripts/CardiacArrest.txt";

    const textFileContent = fs.readFileSync(TEXT_FILE_PATH, "utf8").trim();

    // Ensure recordedText is a string
    const normalizedRecordedText = String(recordedText || "").trim();

    const isMatch =
      textFileContent.toLowerCase() === normalizedRecordedText.toLowerCase();

    return {
      audioFile: this.currentAudioFile,
      textFile: TEXT_FILE_PATH,
      textFileContent,
      recordedText: normalizedRecordedText,
      isMatch,
    };
  }
}
export default new AudioManager();
