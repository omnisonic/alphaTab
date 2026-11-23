import { DynamicValue } from "./../model/DynamicValue";
import type { Duration } from "./../model/Duration";
/**
 * @internal
 */
export declare class MidiUtils {
    static readonly QuarterTime: number;
    private static readonly _minVelocity;
    static readonly VelocityIncrement: number;
    /**
     * Converts the given midi tick duration into milliseconds.
     * @param ticks The duration in midi ticks
     * @param tempo The current tempo in BPM.
     * @returns The converted duration in milliseconds.
     */
    static ticksToMillis(ticks: number, tempo: number): number;
    /**
     * Converts the given midi tick duration into milliseconds.
     * @param millis The duration in milliseconds
     * @param tempo The current tempo in BPM.
     * @returns The converted duration in midi ticks.
     */
    static millisToTicks(millis: number, tempo: number): number;
    /**
     * Converts a duration value to its ticks equivalent.
     */
    static toTicks(duration: Duration): number;
    /**
     * Converts a numerical value to its ticks equivalent.
     * @param duration the numerical proportion to convert. (i.E. timesignature denominator, note duration,...)
     */
    static valueToTicks(duration: number): number;
    static applyDot(ticks: number, doubleDotted: boolean): number;
    static applyTuplet(ticks: number, numerator: number, denominator: number): number;
    static removeTuplet(ticks: number, numerator: number, denominator: number): number;
    static dynamicToVelocity(dynamicValue: DynamicValue, adjustment?: number): number;
    /**
     * Fixed (not user-configurable) dynamics compression for synthesized playback.
     * Linearly maps the raw dynamic range (ppp=15 .. fff=127) onto
     * CompressedMinVelocity..127, so notated dynamics stay audible as relative
     * differences but quiet passages don't drop out (mf ~ -1.9 dB instead of -4.1 dB,
     * p ~ -3.4 dB instead of -8.6 dB). Raw velocities below ppp scale proportionally.
     */
    static readonly CompressedMinVelocity: number;
    /**
     * One dynamic step (VelocityIncrement) expressed in the compressed velocity range.
     */
    static readonly CompressedVelocityIncrement: number;
    static compressVelocity(velocity: number): number;
}
