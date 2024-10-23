import { GMCPManager, createGMCPManager } from '../gmcp';
import { BeipMUAPI } from '../beipmu-api';

describe('GMCPManager', () => {
  let mockApi: jest.Mocked<BeipMUAPI>;
  let gmcpManager: GMCPManager;

  beforeEach(() => {
    mockApi = {
      sendGMCP: jest.fn(),
      onGMCP: jest.fn(),
      offGMCP: jest.fn(),
    } as any;
    gmcpManager = createGMCPManager(mockApi);
  });

  test('send calls api.sendGMCP with correct arguments', () => {
    gmcpManager.send('Test', 'Message', { data: 'value' });
    expect(mockApi.sendGMCP).toHaveBeenCalledWith('Test', 'Message', { data: 'value' });
  });

  test('on calls api.onGMCP with correct arguments', () => {
    const handler = jest.fn();
    gmcpManager.on('Test', 'Message', handler);
    expect(mockApi.onGMCP).toHaveBeenCalledWith('Test', 'Message', handler);
  });

  test('off calls api.offGMCP with correct arguments', () => {
    const handler = jest.fn();
    gmcpManager.off('Test', 'Message', handler);
    expect(mockApi.offGMCP).toHaveBeenCalledWith('Test', 'Message', handler);
  });

  test('sendHello sends correct GMCP message', () => {
    gmcpManager.sendHello('TestClient', '1.0.0');
    expect(mockApi.sendGMCP).toHaveBeenCalledWith('Core', 'Hello', { client: 'TestClient', version: '1.0.0' });
  });

  test('sendSupports sends correct GMCP message', () => {
    gmcpManager.sendSupports(['Package1', 'Package2']);
    expect(mockApi.sendGMCP).toHaveBeenCalledWith('Core.Supports', 'Set', ['Package1', 'Package2']);
  });
});
