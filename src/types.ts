// Type definitions for BeipMU API

export interface BeipMUEvent {
  type: string;
  data: any;
}

export interface WindowInfo {
  id: number;
  type: string;
  title: string;
  text: string;
}

export interface LineInfo {
  window: number;
  line: number;
  text: string;
}

// Add more interfaces for other event types as needed

export interface GMCPEvent {
  package: string;
  message: string;
  data: any;
}

// ... (add more GMCP-related interfaces as needed)

export interface ConnectEvent {
  type: 'connect';
  data: {
    host: string;
    port: number;
  };
}

export interface DisconnectEvent {
  type: 'disconnect';
  data: null;
}

export interface LineEvent {
  type: 'line';
  data: LineInfo;
}

export interface ScriptEvent {
  type: 'script';
  data: {
    name: string;
    action: 'start' | 'stop' | 'error';
    error?: string;
  };
}

export type BeipMUEventTypes = ConnectEvent | DisconnectEvent | LineEvent | ScriptEvent | GMCPEvent;
