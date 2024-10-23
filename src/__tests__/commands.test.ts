import * as commands from '../commands';
import { BeipMUAPI } from '../beipmu-api';

describe('Commands', () => {
  let mockApi: jest.Mocked<BeipMUAPI>;

  beforeEach(() => {
    mockApi = {
      sendCommand: jest.fn(),
    } as any;
  });

  test('sendText sends correct command', () => {
    commands.sendText(mockApi, 'Hello');
    expect(mockApi.sendCommand).toHaveBeenCalledWith('send Hello');
  });

  test('openWindow sends correct command', () => {
    commands.openWindow(mockApi, 'TestWindow');
    expect(mockApi.sendCommand).toHaveBeenCalledWith('window open TestWindow');
  });

  test('closeWindow sends correct command', () => {
    commands.closeWindow(mockApi, 'TestWindow');
    expect(mockApi.sendCommand).toHaveBeenCalledWith('window close TestWindow');
  });

  test('setWindowTitle sends correct command', () => {
    commands.setWindowTitle(mockApi, 'TestWindow', 'New Title');
    expect(mockApi.sendCommand).toHaveBeenCalledWith('window title TestWindow New Title');
  });

  test('clearWindow sends correct command', () => {
    commands.clearWindow(mockApi, 'TestWindow');
    expect(mockApi.sendCommand).toHaveBeenCalledWith('window clear TestWindow');
  });

  // Add more tests for other command functions
});
