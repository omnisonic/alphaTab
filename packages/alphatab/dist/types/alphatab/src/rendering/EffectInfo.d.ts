import type { Beat } from "./../model/Beat";
import type { NotationElement } from "./../NotationSettings";
import type { BarRendererBase } from "./BarRendererBase";
import type { EffectBand } from "./EffectBand";
import type { EffectBarGlyphSizing } from "./EffectBarGlyphSizing";
import type { EffectGlyph } from "./glyphs/EffectGlyph";
import type { Settings } from "./../Settings";
/**
 * A classes inheriting from this base can provide the
 * data needed by a EffectBarRenderer to create effect glyphs dynamically.
 * @internal
 */
export declare abstract class EffectInfo {
    /**
     * Gets the unique effect name for this effect. (Used for grouping)
     */
    get effectId(): string;
    /**
     * Gets the notation element that this effect represents. (Used for dynamic showing/hiding)
     */
    abstract get notationElement(): NotationElement;
    /**
     * Gets a value indicating whether this effect can share the space
     * with other effects if required.
     * (Example: tempo and dynamics don't share their space with other effects, a let-ring and palm-mute will share the space if possible)
     * @returns true if this effect bar should only be created once for the first track, otherwise false.
     */
    abstract get canShareBand(): boolean;
    /**
     * Gets a value indicating whether this effect glyphs
     * should only be added once on the first track if multiple tracks are rendered.
     * (Example: this allows to render the tempo changes only once)
     * @returns true if this effect bar should only be created once for the first track, otherwise false.
     */
    abstract get hideOnMultiTrack(): boolean;
    /**
     * Checks whether the given beat has the appropriate effect set and
     * needs a glyph creation
     * @param settings
     * @param beat the beat storing the data
     * @returns true if the beat has the effect set, otherwise false.
     */
    abstract shouldCreateGlyph(settings: Settings, beat: Beat): boolean;
    /**
     * Gets the sizing mode of the glyphs created by this info.
     * @returns the sizing mode to apply to the glyphs during layout
     */
    abstract get sizingMode(): EffectBarGlyphSizing;
    /**
     * Creates a new effect glyph for the given beat.
     * @param renderer the renderer which requests for glyph creation
     * @param beat the beat storing the data
     * @returns the glyph which needs to be added to the renderer
     */
    abstract createNewGlyph(renderer: BarRendererBase, beat: Beat): EffectGlyph;
    /**
     * Checks whether an effect glyph can be expanded to a particular beat.
     * @param from the beat which already has the glyph applied
     * @param to the beat which the glyph should get expanded to
     * @returns true if the glyph can be expanded, false if a new glyph needs to be created.
     */
    abstract canExpand(from: Beat, to: Beat): boolean;
    /**
     * Override this method to finalize an effect band with all glyphs created.
     * Allows special layout logic like for whammys where we center-align the glyphs and size the band accordingly.
     * @param _band The band which is being finalized.
     */
    finalizeBand(_band: EffectBand): void;
    /**
     * Override this method when glyphs are for this effect is being re-aligned during resizing.
     * @param _band The band holding the glyph
     */
    onAlignGlyphs(_band: EffectBand): void;
}
