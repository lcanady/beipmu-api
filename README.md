# BeipMU API Library

The BeipMU API Library is a TypeScript library designed to interact with BeipMU, providing a robust interface for sending commands, handling events, and managing GMCP messages.

## Features

- **Command Execution**: Send commands directly to BeipMU.
- **Event Handling**: Register and unregister event listeners.
- **GMCP Management**: Send and receive GMCP messages.
- **Window Management**: Open, close, and customize windows, including setting fonts and colors.
- **Script Management**: Run and stop scripts.
- **Plugin System**: Extend the library with custom plugins, including registration and unregistration.
- **WebView Management**: Open web views within the BeipMU client.
- **Connection and Session Information**: Check connection status and retrieve world and character names.

## WebViews

For detailed information on how to use WebViews with BeipMU, please refer to the [WebViews Documentation](https://github.com/BeipDev/BeipMU/blob/master/Documentation/WebViews.md). This documentation provides comprehensive guidance on integrating and utilizing WebViews within the BeipMU client.

## Installation

To install the BeipMU API Library, use npm:

```bash
npm install beipmu-api
```

## Usage

### Basic Example

```typescript
import { BeipMUAPI } from 'beipmu-api';

const api = new BeipMUAPI();

// Send a command
api.sendCommand('look');

// Register an event listener
api.on('message', (data) => {
  console.log('Received message:', data);
});

// Send a GMCP message
api.sendGMCP('core.supports.set', '["comm.channel 1"]');
```

### Plugin System

```typescript
import { BeipMUAPI, Plugin } from 'beipmu-api/plugin';

class MyPlugin implements Plugin {
  initialize(api: BeipMUAPI): void {
    console.log('Plugin initialized');
  }
  start(): void {
    console.log('Plugin started');
  }
  stop(): void {
    console.log('Plugin stopped');
  }
}

const api = new BeipMUAPI();
const myPlugin = new MyPlugin();

api.registerPlugin(myPlugin);
api.startPlugins();
```

### Window Management

```typescript
import { openWindow, setWindowTitle, setWindowFont, setWindowColors } from 'beipmu-api/commands';

openWindow(api, 'Chat');
setWindowTitle(api, 'Chat', 'Chat Window');
setWindowFont(api, 'Chat', 'Arial', 12);
setWindowColors(api, 'Chat', '#FFFFFF', '#000000');
```

### GMCP Management

```typescript
import { GMCPManager, createGMCPManager } from 'beipmu-api/gmcp';

const gmcpManager = createGMCPManager(api);
gmcpManager.send('core.hello', 'BeipMU', { version: '1.0' });
gmcpManager.sendSupports(['comm.channel']);
```

### WebView Management

```typescript
api.openWebView('https://example.com', 'exampleView', 'left', { Authorization: 'Bearer token' });
```

### Connection and Session Information

```typescript
console.log('Connected:', api.isConnected());
console.log('World Name:', api.getWorldName());
console.log('Character Name:', api.getCharacterName());
```

### Utility Functions

```typescript
import { colorize } from 'beipmu-api/utils';

console.log(colorize('Hello, World!', 'green'));
```

## Use Cases

- **Interactive Games**: Use the library to create interactive games with dynamic command and event handling.
- **Custom Interfaces**: Develop custom interfaces for BeipMU using the window and script management features.
- **Extensible Applications**: Build applications that can be extended with plugins for additional functionality.

## Troubleshooting

- **Plugin Initialization Errors**: Ensure that plugins are correctly implementing the Plugin interface and handling errors in their methods.
- **Command Execution Issues**: Verify that commands are correctly formatted and that the BeipMU connection is active.
- **Event Handling Problems**: Check that event listeners are registered with the correct event types and that callbacks are functioning as expected.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a clear message.
4. Push your changes to your fork.
5. Submit a pull request with a description of your changes.

## License

This project is licensed under the MIT License.
