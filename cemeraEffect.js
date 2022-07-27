let addPostEffects = () => {
  var pipeline = new BABYLON.DefaultRenderingPipeline(
    "defaultPipeline", // The name of the pipeline
    false, // Do you want the pipeline to use HDR texture?
    scene, // The scene instance
    [camera] // The list of cameras to be attached to
  );
  pipeline.bloomEnabled = true;
  pipeline.bloomThreshold = 0;
  pipeline.bloomKernel = 0.35;
  pipeline.bloomScale = 0.5;
  pipeline.grainEnabled = true;
  pipeline.grain.intensity = 8;
  pipeline.grain.animated = true;
  pipeline.chromaticAberrationEnabled = true;
  pipeline.chromaticAberration.aberrationAmount = 65.1;
  pipeline.chromaticAberration.radialIntensity = 2;
  pipeline.sharpenEnabled = true;
  pipeline.sharpen.edgeAmount = 0.15;
}
addPostEffects();