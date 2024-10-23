// Define the Plugin interface
export interface Plugin {
  initialize(api: BeipMUAPI): void;
  start(): void;
  stop(): void;
}

// Extend the BeipMUAPI class to support plugins
export class BeipMUAPI {
  private plugins: Plugin[] = [];

  // Register a plugin
  registerPlugin(plugin: Plugin): void {
    try {
      plugin.initialize(this);
      this.plugins.push(plugin);
    } catch (error) {
      console.error('Error initializing plugin:', error);
    }
  }

  // Unregister a plugin
  unregisterPlugin(plugin: Plugin): void {
    const index = this.plugins.indexOf(plugin);
    if (index !== -1) {
      try {
        plugin.stop();
        this.plugins.splice(index, 1);
      } catch (error) {
        console.error('Error stopping plugin:', error);
      }
    }
  }

  // Start all plugins
  startPlugins(): void {
    this.plugins.forEach(plugin => {
      try {
        plugin.start();
      } catch (error) {
        console.error('Error starting plugin:', error);
      }
    });
  }

  // Stop all plugins
  stopPlugins(): void {
    this.plugins.forEach(plugin => {
      try {
        plugin.stop();
      } catch (error) {
        console.error('Error stopping plugin:', error);
      }
    });
  }
}
