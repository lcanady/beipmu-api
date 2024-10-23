import { colorize, ANSI } from '../utils';

describe('Utils', () => {
  test('colorize returns text with correct ANSI color codes', () => {
    expect(colorize('Hello', 'red')).toBe(`${ANSI.red}Hello${ANSI.reset}`);
    expect(colorize('World', 'blue')).toBe(`${ANSI.blue}World${ANSI.reset}`);
  });

  test('ANSI object contains correct color codes', () => {
    expect(ANSI.reset).toBe('\x1b[0m');
    expect(ANSI.bold).toBe('\x1b[1m');
    expect(ANSI.red).toBe('\x1b[31m');
    // Add more expectations for other ANSI color codes
  });
});
