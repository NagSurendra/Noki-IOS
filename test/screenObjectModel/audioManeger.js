import { spawn } from "child_process";
import { exec } from "child_process";
import util from "util";
import fs from "fs";
import {normalizeText, levenshtein } from "/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js"
// import path from "path";

const execPromise = util.promisify(exec);
class AudioManager {
  constructor() {
    this.audioFiles = {
      english: "/Users/nagasubarayudu/Desktop/IOS/utils/audioFiles/CardiacArrest.wav",
      spanish: "/Users/nagasubarayudu/Desktop/IOS/utils/audioFiles/CardiacArrest.mp3",
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
  
    // 🔹 Final played time update
    if (!this.isPaused && this.startTime) {
      this.playedTime += Date.now() / 1000 - this.startTime;
    }
  
    // Load full transcript (linked to current audio)
    const transcriptMap = {
      english: "/Users/nagasubarayudu/Desktop/IOS/utils/audiotranscripts/CardiacArrest.txt",
      spanish: "/Users/nagasubarayudu/Desktop/IOS/utils/audiotranscripts/CardiacArrestEs.txt",
    };
  
    // Find which transcript to use
    let language = "english";
    for (const [lang, path] of Object.entries(this.audioFiles)) {
      if (path === this.currentAudioFile) {
        language = lang;
      }
    }
  
    const transcriptPath = transcriptMap[language];
    const fullTranscript = fs.readFileSync(transcriptPath, "utf8").trim().split(/\s+/);
  
    // Approximate slice of transcript
    const wordsPerSecond = fullTranscript.length / this.maxDuration;
    const wordsToTake = Math.floor(this.playedTime * wordsPerSecond);
  
    const partialTranscript = fullTranscript.slice(0, wordsToTake).join(" ");
  
    // Save to .txt file
    const logDir = "/Users/nagasubarayudu/Desktop/IOS/utils/audioLogs";
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  
    const logFile = `${logDir}/played_audio_${Date.now()}.txt`;
    fs.writeFileSync(logFile, partialTranscript, "utf8");
  
    console.log("Transcript of played audio saved to:", logFile);
  
    // Reset state
    this.isPaused = false;
    this.pausedTime = 0;
    this.startTime = 0;
    this.playedTime = 0;
    if (this._durationTicker) {
      clearInterval(this._durationTicker);
      this._durationTicker = null;
    }
    return logFile;
  }
  
  
  async  TextComparison() {
    const transcriptDir = "/Users/nagasubarayudu/Desktop/IOS/utils/audioLogs";
    const transcriptFiles = fs.readdirSync(transcriptDir)
      .filter(f => f.startsWith("played_audio_") && f.endsWith(".txt"))
      .sort((a,b) => b.localeCompare(a));
    const latestTranscript = `${transcriptDir}/${transcriptFiles[0]}`;
  
    const scannedDir = "/Users/nagasubarayudu/Desktop/IOS/_results_";
    const scannedFiles = fs.readdirSync(scannedDir)
      .filter(f => f.startsWith("scanned_texts_") && f.endsWith(".txt"))
      .sort((a,b) => b.localeCompare(a));
    const latestScanned = `${scannedDir}/${scannedFiles[0]}`;
  
    const scannedText = normalizeText(fs.readFileSync(latestScanned, "utf8"));
    const transcriptText = normalizeText(fs.readFileSync(latestTranscript, "utf8"));
  
    const distance = levenshtein(scannedText, transcriptText);
    const maxLen = Math.max(scannedText.length, transcriptText.length) || 1;
    const similarity = ((1 - distance / maxLen) * 100).toFixed(2);
  
    allure.step(`Text comparison result: ${similarity}%`, () => {
      allure.attachment("Scanned Text", scannedText, "text/plain");
      allure.attachment("Transcript Text", transcriptText, "text/plain");
    });
  
    return {
      scannedFile: latestScanned,
      transcriptFile: latestTranscript,
      similarity: `${similarity}%`,
    };
  }
}
export default new AudioManager();
