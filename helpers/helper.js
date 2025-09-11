import { execSync } from "child_process";
import AllureReporter from "@wdio/allure-reporter";
import AudioManager from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/audioManeger.js";
import RecordingPage from "/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/recording.page.js";
import fs from "fs";
import path from "path";
import player from "play-sound";

export async function verify(element) {
  await element?.waitForDisplayed({ timeout: 20000 });
}

export async function verifyAndClick(element) {
  await verify(element);
  await element?.click();
}

export async function waitForElement(element, timeout = 240000) {
  await element?.waitForDisplayed({ timeout });
}
export async function performPointerAction(
  driver,
  startX,
  startY,
  endX = startX,
  endY = startY,
  duration = 1000
) {
  const { width, height } = await driver.getWindowRect();
  console.log(`Device Screen Size: ${width}x${height}`);

  const x1 = Math.min(Math.max(Math.round(startX), 0), width - 1);
  const y1 = Math.min(Math.max(Math.round(startY), 0), height - 1);
  const x2 = Math.min(Math.max(Math.round(endX), 0), width - 1);
  const y2 = Math.min(Math.max(Math.round(endY), 0), height - 1);

  console.log(`Performing action from (${x1}, ${y1}) to (${x2}, ${y2})`);

  // Define base actions for a click
  const actions = [
    { type: "pointerMove", duration: 0, x: x1, y: y1 },
    { type: "pointerDown", button: 0 },
    { type: "pause", duration: 100 },
    { type: "pointerUp", button: 0 },
  ];

  if (x1 !== x2 || y1 !== y2) {
    actions.splice(2, 0, {
      type: "pointerMove",
      duration: duration,
      x: x2,
      y: y2,
    });
  }

  await driver.performActions([
    {
      type: "pointer",
      id: "pointer1",
      parameters: { pointerType: "touch" },
      actions,
    },
  ]);

  await driver.releaseActions();
}

export const captureNetworkLogs = async ({
  udid,
  duration = 5000,
  stepName = "Network Calls Captured",
  logFile = "./ios-network-logs.txt",
} = {}) => {
  let logProcess;

  try {
    if (fs.existsSync(logFile)) fs.unlinkSync(logFile); // Remove existing log file

    logProcess = execSync(`idevicesyslog -u ${udid} > ${logFile} &`); // Start log capture
    await browser.pause(duration); // Pause to capture logs
    execSync("pkill -f idevicesyslog"); // Stop log capture

    const logs = fs.readFileSync(logFile, "utf8");
    const networkCalls = logs
      .split("\n")
      .filter((line) => line.includes("HTTP") || line.includes("https://"))
      .map((line) => {
        try {
          const jsonMatch = line.match(/\{.*\}/);
          return {
            raw: line,
            json: jsonMatch ? JSON.parse(jsonMatch[0]) : null,
          };
        } catch {
          return { raw: line, json: null };
        }
      });

    AllureReporter.startStep(stepName);
    networkCalls.forEach((call, index) =>
      AllureReporter.addAttachment(
        `Network Call ${index + 1}`,
        JSON.stringify({ raw: call.raw, parsed: call.json }, null, 2),
        "application/json"
      )
    );
    AllureReporter.endStep();

    return networkCalls;
  } catch (error) {
    console.error("Error capturing network logs:", error);
    AllureReporter.addAttachment("Error Log", error.message, "text/plain");
    throw error;
  } finally {
    if (logProcess) {
      try {
        execSync("pkill -f idevicesyslog");
      } catch (e) {
        console.warn("Failed to kill idevicesyslog process:", e);
      }
    }
  }
};

export async function networkFailureVerification() {
  await driver.activateApp("com.apple.Preferences");
  const aeroplaneModOn = await driver.$(
    '(//XCUIElementTypeSwitch[@value="0"])[2]'
  );
  await aeroplaneModOn.click();
  await driver.activateApp("com.thinkhat.devNoki");
  await expect(RecordingPage.networkFailure).toBeDisplayed();
  await driver.pause(12000);
  await driver.activateApp("com.apple.Preferences");
  const aeroplaneModeOff = await driver.$(
    '(//XCUIElementTypeSwitch[@value="1"])[2]'
  );
  await aeroplaneModeOff.click();
  await driver.activateApp("com.thinkhat.devNoki");
}

export async function AudioCommand(command) {
  const files = fs.readdirSync(AUDIO_DIR);
  const match = files.find(
    (file) =>
      file.toLowerCase().startsWith(command.toLowerCase()) &&
      file.toLowerCase().endsWith(".wav")
  );

  if (!match) throw new Error(`No audio file found for: ${command}`);

  const audioPath = path.join(AUDIO_DIR, match);

  return new Promise((resolve) => {
    play.play(audioPath, (err) => {
      if (err) console.error("Error playing audio:", err);
      resolve();
    });
  });
}
export async function swipe(direction, scrollElement) {
  const validDirections = ["up", "down", "left", "right"];
  // Resolve scroll element
  let element;
  element =
    typeof scrollElement === "string" ? await $(scrollElement) : scrollElement;
  await driver.execute("mobile: swipe", {
    direction,
    duration: 1000,
    elementId: await element.elementId,
    percent: 0.09,
  });
}

export async function aeroplaneModeOn() {
  await driver.pause(2000);
  await verifyAndClick(RecordingPage.pauseBtn);
  await AudioManager.pauseAudio();
  await driver
    .action("pointer")
    .move({ duration: 0, x: 355, y: 22 })
    .down({ button: 0 })
    .move({ duration: 1000, x: 354, y: 720 })
    .up({ button: 0 })
    .perform();
  const airplaneModeBtn = await $("~com.apple.ControlCenter.Airplane");
  await (await airplaneModeBtn).click();

  await driver
    .action("pointer")
    .move({ duration: 0, x: 283, y: 790 })
    .down({ button: 0 })
    .pause(50)
    .up({ button: 0 })
    .perform();
  await driver.pause(4000);
  await verifyAndClick(RecordingPage.playBtn);
  await AudioManager.resumeAudio();
}
export async function aeroplaneModeOff() {
  await driver.pause(2000);
  await verifyAndClick(RecordingPage.pauseBtn);
  await AudioManager.pauseAudio();
  await driver
    .action("pointer")
    .move({ duration: 0, x: 355, y: 22 })
    .down({ button: 0 })
    .move({ duration: 1000, x: 354, y: 720 })
    .up({ button: 0 })
    .perform();
  const airplaneModeBtn = await $("~com.apple.ControlCenter.Airplane");
  await (await airplaneModeBtn).click();

  await driver
    .action("pointer")
    .move({ duration: 0, x: 283, y: 790 })
    .down({ button: 0 })
    .pause(50)
    .up({ button: 0 })
    .perform();
  await driver.pause(4000);
  await waitForElement(RecordingPage.playBtn);
  await verifyAndClick(RecordingPage.playBtn);
  await AudioManager.resumeAudio();
}
