import type { ControllerType } from "./../../src/midi/ControllerType";
import type { IMidiFileHandler } from "./../../src/midi/IMidiFileHandler";
/**
 * @internal
 */
export declare class FlatMidiEventGenerator implements IMidiFileHandler {
    midiEvents: FlatMidiEvent[];
    tickShift: number;
    addTickShift(tickShift: number): void;
    addTimeSignature(tick: number, timeSignatureNumerator: number, timeSignatureDenominator: number): void;
    addRest(track: number, tick: number, channel: number): void;
    addNote(track: number, start: number, length: number, key: number, velocity: number, channel: number): void;
    addControlChange(track: number, tick: number, channel: number, controller: ControllerType, value: number): void;
    addProgramChange(track: number, tick: number, channel: number, program: number): void;
    addTempo(tick: number, tempo: number): void;
    addBend(track: number, tick: number, channel: number, value: number): void;
    addNoteBend(track: number, tick: number, channel: number, key: number, value: number): void;
    finishTrack(track: number, tick: number): void;
}
/**
 * @internal
 */
export declare class FlatMidiEvent {
    tick: number;
    constructor(tick: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatTempoEvent extends FlatMidiEvent {
    tempo: number;
    constructor(tick: number, tempo: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatTimeSignatureEvent extends FlatMidiEvent {
    numerator: number;
    denominator: number;
    constructor(tick: number, numerator: number, denominator: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatTrackMidiEvent extends FlatMidiEvent {
    track: number;
    constructor(tick: number, track: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatTrackEndEvent extends FlatTrackMidiEvent {
    toString(): string;
}
/**
 * @internal
 */
export declare class FlatChannelMidiEvent extends FlatTrackMidiEvent {
    channel: number;
    constructor(tick: number, track: number, channel: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatControlChangeEvent extends FlatChannelMidiEvent {
    controller: ControllerType;
    value: number;
    constructor(tick: number, track: number, channel: number, controller: ControllerType, value: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatRestEvent extends FlatChannelMidiEvent {
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatProgramChangeEvent extends FlatChannelMidiEvent {
    program: number;
    constructor(tick: number, track: number, channel: number, program: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatNoteEvent extends FlatChannelMidiEvent {
    length: number;
    key: number;
    velocity: number;
    constructor(tick: number, track: number, channel: number, length: number, key: number, velocity: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatBendEvent extends FlatChannelMidiEvent {
    value: number;
    constructor(tick: number, track: number, channel: number, value: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
/**
 * @internal
 */
export declare class FlatNoteBendEvent extends FlatChannelMidiEvent {
    key: number;
    value: number;
    constructor(tick: number, track: number, channel: number, key: number, value: number);
    toString(): string;
    equals(obj: unknown): boolean;
}
