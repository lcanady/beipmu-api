// BeipMU API Library
import { BeipMUEventTypes } from './types';

// Define the BeipMU object interface
interface BeipMU {
  version: string;
  sendCommand: (command: string) => void;
  registerHandler: (event: string, callback: (data: any) => void) => void;
  unregisterHandler: (event: string, callback: (data: any) => void) => void;
  worldName: string;
  characterName: string;
  connected: boolean;
}

// Define the global BeipMU object
declare global {
  interface Window {
    BeipMU?: BeipMU;
  }
}

// Main API class
export class BeipMUAPI {
  private beipMU: BeipMU;

  constructor(mockBeipMU?: BeipMU) {
    if (mockBeipMU) {
      this.beipMU = mockBeipMU;
    } else if (typeof window !== 'undefined' && window.BeipMU) {
      this.beipMU = window.BeipMU;
    } else {
      // Create a mock BeipMU object for testing or non-BeipMU environments
      this.beipMU = {
        version: 'mock',
        sendCommand: () => {},
        registerHandler: () => {},
        unregisterHandler: () => {},
        worldName: 'mock',
        characterName: 'mock',
        connected: false,
      };
      console.warn('BeipMU object not found. Using mock object.');
    }
  }

  // Get the BeipMU version
  getVersion(): string {
    return this.beipMU.version;
  }

  // Send a command to BeipMU
  sendCommand(command: string): void {
    this.beipMU.sendCommand(command);
  }

  // Register an event handler
  on<T extends { type: string; data: any }>(event: T['type'], callback: (data: T['data']) => void): void {
    this.beipMU.registerHandler(event, callback as (data: any) => void);
  }

  // Unregister an event handler
  off<T extends { type: string; data: any }>(event: T['type'], callback: (data: T['data']) => void): void {
    this.beipMU.unregisterHandler(event, callback as (data: any) => void);
  }

  // Send a GMCP message
  sendGMCP(packageName: string, message: string, data?: any): void {
    const gmcpData = data ? JSON.stringify(data) : '';
    this.beipMU.sendCommand(`gmcp ${packageName} ${message} ${gmcpData}`);
  }

  // Register a GMCP handler
  onGMCP(packageName: string, message: string, callback: (data: any) => void): void {
    const eventName = `gmcp.${packageName}.${message}`;
    this.beipMU.registerHandler(eventName, callback);
  }

  // Unregister a GMCP handler
  offGMCP(packageName: string, message: string, callback: (data: any) => void): void {
    const eventName = `gmcp.${packageName}.${message}`;
    this.beipMU.unregisterHandler(eventName, callback);
  }

  // Get the current world name
  getWorldName(): string {
    return this.beipMU.worldName;
  }

  // Get the current character name
  getCharacterName(): string {
    return this.beipMU.characterName;
  }

  // Check if connected to a world
  isConnected(): boolean {
    return this.beipMU.connected;
  }
}

// Export a default instance
export default new BeipMUAPI();
