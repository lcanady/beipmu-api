import { BeipMUAPI } from './beipmu-api';

export function sendText(api: BeipMUAPI, text: string): void {
  api.sendCommand(`send ${text}`);
}

export function openWindow(api: BeipMUAPI, windowName: string): void {
  api.sendCommand(`window open ${windowName}`);
}

export function closeWindow(api: BeipMUAPI, windowName: string): void {
  api.sendCommand(`window close ${windowName}`);
}

export function setWindowTitle(api: BeipMUAPI, windowName: string, title: string): void {
  api.sendCommand(`window title ${windowName} ${title}`);
}

export function clearWindow(api: BeipMUAPI, windowName: string): void {
  api.sendCommand(`window clear ${windowName}`);
}

export function setWindowFont(api: BeipMUAPI, windowName: string, fontName: string, fontSize: number): void {
  api.sendCommand(`window font ${windowName} "${fontName}" ${fontSize}`);
}

export function setWindowColors(api: BeipMUAPI, windowName: string, foreground: string, background: string): void {
  api.sendCommand(`window colors ${windowName} ${foreground} ${background}`);
}

export function echo(api: BeipMUAPI, text: string): void {
  api.sendCommand(`echo ${text}`);
}

export function echoWindow(api: BeipMUAPI, windowName: string, text: string): void {
  api.sendCommand(`echo ${windowName} ${text}`);
}

export function gag(api: BeipMUAPI): void {
  api.sendCommand('gag');
}

export function ungag(api: BeipMUAPI): void {
  api.sendCommand('ungag');
}

export function runScript(api: BeipMUAPI, scriptName: string): void {
  api.sendCommand(`script run ${scriptName}`);
}

export function stopScript(api: BeipMUAPI, scriptName: string): void {
  api.sendCommand(`script stop ${scriptName}`);
}

// Add more command functions as needed
