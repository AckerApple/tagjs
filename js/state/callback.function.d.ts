import { AnySupport } from '../tag/Support.class.js';
import { State } from './state.types.js';
import { Callback } from './callbackMaker.function.js';
/** Wrap a function that will be called back. After the wrapper and function are called, a rendering cycle will update display */
export declare function callback<A, B, C, D, E, F, T>(callback: Callback<A, B, C, D, E, F, T>): (A?: A, B?: B, C?: C, D?: D, E?: E, F?: F) => T;
export declare function createTrigger<A, B, C, D, E, F, T>(support: AnySupport, oldState: State, toCallback: Callback<A, B, C, D, E, F, T>): (...args: any[]) => any;
