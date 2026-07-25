// Calm, static background: one soft aurora glow, a faint abstract colour mesh
// for depth, and a fine grain texture. No moving elements.
const AuroraBackground = () => {
    return (
        <div className="aurora" aria-hidden="true">
            <div className="aurora__glow" />
            <div className="aurora__mesh" />
            <div className="aurora__grain" />
        </div>
    );
};

export default AuroraBackground;
