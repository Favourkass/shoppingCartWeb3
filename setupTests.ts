// setupTests.ts

// import { JSDOM } from 'jsdom';
class TextEncoderMock {
    encode(data: string): Uint8Array {
      // Simple implementation, might not cover all cases
      const buffer = Buffer.from(data, 'utf-8');
      return new Uint8Array(buffer);
    }
  }
  
  global.TextEncoder = TextEncoderMock;
import 'jsdom-global/register';
import '@testing-library/jest-dom';


// const dom = new JSDOM('<!doctype html><html><body></body></html>');
// global.document = dom.window.document;
// global.window = dom.window;

// // Mock for localStorage
// global.localStorage = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
// };

// // Mock for sessionStorage
// global.sessionStorage = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
// };
