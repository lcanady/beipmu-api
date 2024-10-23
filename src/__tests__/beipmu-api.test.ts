import { BeipMUAPI } from '../beipmu-api';

describe('BeipMUAPI', () => {
  let api: BeipMUAPI;
  let mockBeipMU: any;

  beforeEach(() => {
    // Create a mock BeipMU object
    mockBeipMU = {
      version: '1.0.0',
      sendCommand: jest.fn(),
      registerHandler: jest.fn(),
      unregisterHandler: jest.fn(),
      worldName: 'TestWorld',
      characterName: 'TestChar',
      connected: true,
    };

    // Create BeipMUAPI instance with the mock object
    api = new BeipMUAPI(mockBeipMU);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('getVersion returns correct version', () => {
    expect(api.getVersion()).toBe('1.0.0');
  });

  test('sendCommand calls BeipMU.sendCommand', () => {
    api.sendCommand('test command');
    expect(mockBeipMU.sendCommand).toHaveBeenCalledWith('test command');
  });

  test('on registers event handler', () => {
    const callback = jest.fn();
    api.on('connect', callback);
    expect(mockBeipMU.registerHandler).toHaveBeenCalledWith('connect', callback);
  });

  test('off unregisters event handler', () => {
    const callback = jest.fn();
    api.off('disconnect', callback);
    expect(mockBeipMU.unregisterHandler).toHaveBeenCalledWith('disconnect', callback);
  });

  test('sendGMCP sends correct GMCP command', () => {
    api.sendGMCP('Test', 'Message', { data: 'value' });
    expect(mockBeipMU.sendCommand).toHaveBeenCalledWith('gmcp Test Message {"data":"value"}');
  });

  test('getWorldName returns correct world name', () => {
    expect(api.getWorldName()).toBe('TestWorld');
  });

  test('getCharacterName returns correct character name', () => {
    expect(api.getCharacterName()).toBe('TestChar');
  });

  test('isConnected returns correct connection status', () => {
    expect(api.isConnected()).toBe(true);
  });
});
