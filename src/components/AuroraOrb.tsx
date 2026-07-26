import "../css/AuroraOrb.css";

type AuroraOrbProps = {
    className?: string;
};

// An abstract, slowly morphing aurora blob — flowing light in an organic
// shape. Pure CSS animation; pauses under reduced motion.
const AuroraOrb = ({ className = "" }: AuroraOrbProps) => {
    return (
        <div className={`orb ${className}`} aria-hidden="true">
            <div className="orb__blob-shape">
                <div className="orb__clip">
                    <div className="orb__spin">
                        <div className="orb__aurora" />
                        <div className="orb__blob orb__blob--1" />
                        <div className="orb__blob orb__blob--2" />
                        <div className="orb__blob orb__blob--3" />
                    </div>
                    <div className="orb__noise" />
                    <div className="orb__shine" />
                </div>
            </div>
        </div>
    );
};

export default AuroraOrb;
