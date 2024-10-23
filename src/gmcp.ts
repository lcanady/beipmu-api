import { BeipMUAPI } from './beipmu-api';

export interface GMCPHandler {
  (data: any): void;
}

export class GMCPManager {
  constructor(private api: BeipMUAPI) {}

  send(packageName: string, message: string, data?: any): void {
    this.api.sendGMCP(packageName, message, data);
  }

  on(packageName: string, message: string, handler: GMCPHandler): void {
    this.api.onGMCP(packageName, message, handler);
  }

  off(packageName: string, message: string, handler: GMCPHandler): void {
    this.api.offGMCP(packageName, message, handler);
  }

  // Helper methods for common GMCP packages

  // Core.Hello
  sendHello(client: string, version: string): void {
    this.send('Core', 'Hello', { client, version });
  }

  // Core.Supports.Set
  sendSupports(packages: string[]): void {
    this.send('Core.Supports', 'Set', packages);
  }

  // Add more helper methods for other common GMCP packages as needed
}

export function createGMCPManager(api: BeipMUAPI): GMCPManager {
  return new GMCPManager(api);
}
