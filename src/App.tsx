import { EskandriaMenuLandingPage } from "./shaders/landing-pages/LandingPages";
import "./shaders/threeui.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <EskandriaMenuLandingPage
        headingFont="instrument-serif"
        bodyFont="newsreader"
        headingWeight="400"
        bodyWeight="400"
        primaryColor="#241d17"
        headingSize={32}
        bodySize={20}
        headingLetterSpacing={0.010}
      />
    </div>
  );
}

export default Scene;
