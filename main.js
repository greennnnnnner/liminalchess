//startup
let canvas = document.querySelector("#babylonCanvas");
const engine = new BABYLON.Engine(canvas, true);
//////load media////////


//////
const createScene = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0.6, 1, 1);

  ////////////////////////////node material////////////////////
  var nodeMaterial = new BABYLON.NodeMaterial("node");

  // InputBlock
  var position = new BABYLON.InputBlock("position");
  position.visibleInInspector = false;
  position.visibleOnFrame = false;
  position.target = 1;
  position.setAsAttribute("position");

  // TransformBlock
  var WorldPos = new BABYLON.TransformBlock("WorldPos");
  WorldPos.visibleInInspector = false;
  WorldPos.visibleOnFrame = false;
  WorldPos.target = 1;
  WorldPos.complementZ = 0;
  WorldPos.complementW = 1;

  // InputBlock
  var World = new BABYLON.InputBlock("World");
  World.visibleInInspector = false;
  World.visibleOnFrame = false;
  World.target = 1;
  World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

  // TransformBlock
  var Worldnormal = new BABYLON.TransformBlock("World normal");
  Worldnormal.visibleInInspector = false;
  Worldnormal.visibleOnFrame = false;
  Worldnormal.target = 1;
  Worldnormal.complementZ = 0;
  Worldnormal.complementW = 0;

  // InputBlock
  var normal = new BABYLON.InputBlock("normal");
  normal.visibleInInspector = false;
  normal.visibleOnFrame = false;
  normal.target = 1;
  normal.setAsAttribute("normal");

  // VectorSplitterBlock
  var N = new BABYLON.VectorSplitterBlock("N");
  N.visibleInInspector = false;
  N.visibleOnFrame = false;
  N.target = 4;

  // NormalizeBlock
  var Normalize = new BABYLON.NormalizeBlock("Normalize");
  Normalize.visibleInInspector = false;
  Normalize.visibleOnFrame = false;
  Normalize.target = 4;

  // DotBlock
  var NdotL = new BABYLON.DotBlock("N dot L");
  NdotL.visibleInInspector = false;
  NdotL.visibleOnFrame = false;
  NdotL.target = 4;

  // NormalizeBlock
  var L = new BABYLON.NormalizeBlock("L");
  L.visibleInInspector = false;
  L.visibleOnFrame = false;
  L.target = 4;

  // LightInformationBlock
  // light
  var Lightinformation = new BABYLON.LightInformationBlock("Light information");
  Lightinformation.visibleInInspector = false;
  Lightinformation.visibleOnFrame = false;
  Lightinformation.target = 1;

  // AddBlock
  var H = new BABYLON.AddBlock("H");
  H.visibleInInspector = false;
  H.visibleOnFrame = false;
  H.target = 4;

  // NormalizeBlock
  var Vnormalized = new BABYLON.NormalizeBlock("V(normalized)");
  Vnormalized.visibleInInspector = false;
  Vnormalized.visibleOnFrame = false;
  Vnormalized.target = 4;

  // ViewDirectionBlock
  var Viewdirection = new BABYLON.ViewDirectionBlock("View direction");
  Viewdirection.visibleInInspector = false;
  Viewdirection.visibleOnFrame = false;
  Viewdirection.target = 4;

  // InputBlock
  var cameraPosition = new BABYLON.InputBlock("cameraPosition");
  cameraPosition.visibleInInspector = false;
  cameraPosition.visibleOnFrame = false;
  cameraPosition.target = 1;
  cameraPosition.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);

  // DotBlock
  var NDotV = new BABYLON.DotBlock("N Dot V");
  NDotV.visibleInInspector = false;
  NDotV.visibleOnFrame = false;
  NDotV.target = 4;

  // OneMinusBlock
  var NdotV = new BABYLON.OneMinusBlock("1- NdotV");
  NdotV.visibleInInspector = false;
  NdotV.visibleOnFrame = false;
  NdotV.target = 4;

  // MultiplyBlock
  var rimintensity = new BABYLON.MultiplyBlock("rim intensity");
  rimintensity.visibleInInspector = false;
  rimintensity.visibleOnFrame = false;
  rimintensity.target = 4;

  // PowBlock
  var RimFactor = new BABYLON.PowBlock("Rim Factor");
  RimFactor.visibleInInspector = false;
  RimFactor.visibleOnFrame = false;
  RimFactor.target = 4;

  // InputBlock
  var Float = new BABYLON.InputBlock("Float");
  Float.visibleInInspector = false;
  Float.visibleOnFrame = false;
  Float.target = 1;
  Float.value = 0.7;
  Float.min = 0;
  Float.max = 0;
  Float.isBoolean = false;
  Float.matrixMode = 0;
  Float.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float.isConstant = false;

  // StepBlock
  var quantizedRimIntensity = new BABYLON.StepBlock("quantizedRimIntensity");
  quantizedRimIntensity.visibleInInspector = false;
  quantizedRimIntensity.visibleOnFrame = false;
  quantizedRimIntensity.target = 4;

  // InputBlock
  var Float1 = new BABYLON.InputBlock("Float");
  Float1.visibleInInspector = false;
  Float1.visibleOnFrame = false;
  Float1.target = 1;
  Float1.value = 0.6;
  Float1.min = 0;
  Float1.max = 0;
  Float1.isBoolean = false;
  Float1.matrixMode = 0;
  Float1.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float1.isConstant = false;

  // ScaleBlock
  var Scale = new BABYLON.ScaleBlock("Scale");
  Scale.visibleInInspector = false;
  Scale.visibleOnFrame = false;
  Scale.target = 4;

  // InputBlock
  var Color = new BABYLON.InputBlock("Color3");
  Color.visibleInInspector = false;
  Color.visibleOnFrame = false;
  Color.target = 1;
  Color.value = new BABYLON.Color3(1, 1, 1);
  Color.isConstant = false;

  // AddBlock
  var Addrimspecdiff = new BABYLON.AddBlock("Add rim spec diff");
  Addrimspecdiff.visibleInInspector = false;
  Addrimspecdiff.visibleOnFrame = false;
  Addrimspecdiff.target = 4;

  // AddBlock
  var AddSpeculartodiffuse = new BABYLON.AddBlock("AddSpecular to diffuse");
  AddSpeculartodiffuse.visibleInInspector = false;
  AddSpeculartodiffuse.visibleOnFrame = false;
  AddSpeculartodiffuse.target = 4;

  // AddBlock
  var Add = new BABYLON.AddBlock("Add");
  Add.visibleInInspector = false;
  Add.visibleOnFrame = false;
  Add.target = 4;

  // InputBlock
  var AmbientLight = new BABYLON.InputBlock("Ambient Light");
  AmbientLight.visibleInInspector = false;
  AmbientLight.visibleOnFrame = false;
  AmbientLight.target = 1;
  AmbientLight.value = new BABYLON.Color3(0.17254901960784313, 0.17254901960784313, 0.17254901960784313);
  AmbientLight.isConstant = false;

  // ScaleBlock
  var Scale1 = new BABYLON.ScaleBlock("Scale");
  Scale1.visibleInInspector = false;
  Scale1.visibleOnFrame = false;
  Scale1.target = 4;

  // InputBlock
  var Color1 = new BABYLON.InputBlock("Color3");
  Color1.visibleInInspector = false;
  Color1.visibleOnFrame = false;
  Color1.target = 1;
  Color1.value = new BABYLON.Color3(0.6705882352941176, 0.6705882352941176, 0.6705882352941176);
  Color1.isConstant = false;

  // StepBlock
  var QUANTIZEDDIFFUSELIGHTINGINTENSITY = new BABYLON.StepBlock("QUANTIZED DIFFUSE LIGHTING INTENSITY");
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.visibleInInspector = false;
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.visibleOnFrame = false;
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.target = 4;

  // InputBlock
  var diffuseCutoff = new BABYLON.InputBlock("diffuseCutoff");
  diffuseCutoff.visibleInInspector = false;
  diffuseCutoff.visibleOnFrame = false;
  diffuseCutoff.target = 1;
  diffuseCutoff.value = 0;
  diffuseCutoff.min = 0;
  diffuseCutoff.max = 0;
  diffuseCutoff.isBoolean = false;
  diffuseCutoff.matrixMode = 0;
  diffuseCutoff.animationType = BABYLON.AnimatedInputBlockTypes.None;
  diffuseCutoff.isConstant = false;

  // MultiplyBlock
  var SpecularFactor = new BABYLON.MultiplyBlock("Specular Factor");
  SpecularFactor.visibleInInspector = false;
  SpecularFactor.visibleOnFrame = false;
  SpecularFactor.target = 4;

  // DotBlock
  var NdotH = new BABYLON.DotBlock("N dot H");
  NdotH.visibleInInspector = false;
  NdotH.visibleOnFrame = false;
  NdotH.target = 4;

  // NormalizeBlock
  var HNormalized = new BABYLON.NormalizeBlock("H(Normalized)");
  HNormalized.visibleInInspector = false;
  HNormalized.visibleOnFrame = false;
  HNormalized.target = 4;

  // PowBlock
  var SpecularIntensity = new BABYLON.PowBlock("SpecularIntensity");
  SpecularIntensity.visibleInInspector = false;
  SpecularIntensity.visibleOnFrame = false;
  SpecularIntensity.target = 4;

  // MultiplyBlock
  var Glossiness = new BABYLON.MultiplyBlock("Glossiness^2");
  Glossiness.visibleInInspector = false;
  Glossiness.visibleOnFrame = false;
  Glossiness.target = 4;

  // InputBlock
  var Float2 = new BABYLON.InputBlock("Float");
  Float2.visibleInInspector = false;
  Float2.visibleOnFrame = false;
  Float2.target = 1;
  Float2.value = 1;
  Float2.min = 0;
  Float2.max = 0;
  Float2.isBoolean = false;
  Float2.matrixMode = 0;
  Float2.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float2.isConstant = false;

  // StepBlock
  var Step = new BABYLON.StepBlock("Step");
  Step.visibleInInspector = false;
  Step.visibleOnFrame = false;
  Step.target = 4;

  // InputBlock
  var SpecularCutoff = new BABYLON.InputBlock("Specular Cutoff");
  SpecularCutoff.visibleInInspector = false;
  SpecularCutoff.visibleOnFrame = false;
  SpecularCutoff.target = 1;
  SpecularCutoff.value = 0.9;
  SpecularCutoff.min = 0;
  SpecularCutoff.max = 0;
  SpecularCutoff.isBoolean = false;
  SpecularCutoff.matrixMode = 0;
  SpecularCutoff.animationType = BABYLON.AnimatedInputBlockTypes.None;
  SpecularCutoff.isConstant = false;

  // ScaleBlock
  var specularlightingcalculation = new BABYLON.ScaleBlock("specular lighting calculation");
  specularlightingcalculation.visibleInInspector = false;
  specularlightingcalculation.visibleOnFrame = false;
  specularlightingcalculation.target = 4;

  // InputBlock
  var Color2 = new BABYLON.InputBlock("Color3");
  Color2.visibleInInspector = false;
  Color2.visibleOnFrame = false;
  Color2.target = 1;
  Color2.value = new BABYLON.Color3(1, 1, 1);
  Color2.isConstant = false;

  // MultiplyBlock
  var Multiplylightbysurfacecolor = new BABYLON.MultiplyBlock("Multiply light by surface color");
  Multiplylightbysurfacecolor.visibleInInspector = false;
  Multiplylightbysurfacecolor.visibleOnFrame = false;
  Multiplylightbysurfacecolor.target = 4;

  // InputBlock
  var Color3 = new BABYLON.InputBlock("Color3");
  Color3.visibleInInspector = false;
  Color3.visibleOnFrame = false;
  Color3.target = 1;
  Color3.value = new BABYLON.Color3(0.01960784313725, 0.0392156862745098, 0.40392156862745098);
  /////change color here/////////
  Color3.isConstant = false;

  // FragmentOutputBlock
  var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
  FragmentOutput.visibleInInspector = false;
  FragmentOutput.visibleOnFrame = false;
  FragmentOutput.target = 2;
  FragmentOutput.convertToGammaSpace = false;
  FragmentOutput.convertToLinearSpace = false;
  FragmentOutput.useLogarithmicDepth = false;

  // TransformBlock
  var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
  WorldPosViewProjectionTransform.visibleInInspector = false;
  WorldPosViewProjectionTransform.visibleOnFrame = false;
  WorldPosViewProjectionTransform.target = 1;
  WorldPosViewProjectionTransform.complementZ = 0;
  WorldPosViewProjectionTransform.complementW = 1;

  // InputBlock
  var ViewProjection = new BABYLON.InputBlock("ViewProjection");
  ViewProjection.visibleInInspector = false;
  ViewProjection.visibleOnFrame = false;
  ViewProjection.target = 1;
  ViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

  // VertexOutputBlock
  var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
  VertexOutput.visibleInInspector = false;
  VertexOutput.visibleOnFrame = false;
  VertexOutput.target = 1;

  // Connections
  position.output.connectTo(WorldPos.vector);
  World.output.connectTo(WorldPos.transform);
  WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
  ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
  WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
  AmbientLight.output.connectTo(Add.left);
  Color1.output.connectTo(Scale1.input);
  normal.output.connectTo(Worldnormal.vector);
  World.output.connectTo(Worldnormal.transform);
  Worldnormal.output.connectTo(N.xyzw);
  N.xyzOut.connectTo(Normalize.input);
  Normalize.output.connectTo(NdotL.left);
  WorldPos.output.connectTo(Lightinformation.worldPosition);
  Lightinformation.direction.connectTo(L.input);
  L.output.connectTo(NdotL.right);
  NdotL.output.connectTo(QUANTIZEDDIFFUSELIGHTINGINTENSITY.value);
  diffuseCutoff.output.connectTo(QUANTIZEDDIFFUSELIGHTINGINTENSITY.edge);
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.output.connectTo(Scale1.factor);
  Scale1.output.connectTo(Add.right);
  Add.output.connectTo(AddSpeculartodiffuse.left);
  Color2.output.connectTo(specularlightingcalculation.input);
  Normalize.output.connectTo(NdotH.left);
  L.output.connectTo(H.left);
  WorldPos.output.connectTo(Viewdirection.worldPosition);
  cameraPosition.output.connectTo(Viewdirection.cameraPosition);
  Viewdirection.output.connectTo(Vnormalized.input);
  Vnormalized.output.connectTo(H.right);
  H.output.connectTo(HNormalized.input);
  HNormalized.output.connectTo(NdotH.right);
  NdotH.output.connectTo(SpecularFactor.left);
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.output.connectTo(SpecularFactor.right);
  SpecularFactor.output.connectTo(SpecularIntensity.value);
  Float2.output.connectTo(Glossiness.left);
  Float2.output.connectTo(Glossiness.right);
  Glossiness.output.connectTo(SpecularIntensity.power);
  SpecularIntensity.output.connectTo(Step.value);
  SpecularCutoff.output.connectTo(Step.edge);
  Step.output.connectTo(specularlightingcalculation.factor);
  specularlightingcalculation.output.connectTo(AddSpeculartodiffuse.right);
  AddSpeculartodiffuse.output.connectTo(Addrimspecdiff.left);
  Color.output.connectTo(Scale.input);
  Normalize.output.connectTo(NDotV.left);
  Vnormalized.output.connectTo(NDotV.right);
  NDotV.output.connectTo(NdotV.input);
  NdotV.output.connectTo(rimintensity.left);
  NdotL.output.connectTo(RimFactor.value);
  Float.output.connectTo(RimFactor.power);
  RimFactor.output.connectTo(rimintensity.right);
  rimintensity.output.connectTo(quantizedRimIntensity.value);
  Float1.output.connectTo(quantizedRimIntensity.edge);
  quantizedRimIntensity.output.connectTo(Scale.factor);
  Scale.output.connectTo(Addrimspecdiff.right);
  Addrimspecdiff.output.connectTo(Multiplylightbysurfacecolor.left);
  Color3.output.connectTo(Multiplylightbysurfacecolor.right);
  Multiplylightbysurfacecolor.output.connectTo(FragmentOutput.rgb);

  // Output nodes
  nodeMaterial.addOutputNode(VertexOutput);
  nodeMaterial.addOutputNode(FragmentOutput);
  nodeMaterial.build();
  ////////////////////////////////////////////////////////////////////////////
  ////////nodeMaterial2////////
  var nodeMaterial1 = new BABYLON.NodeMaterial("node");

  // InputBlock
  var position = new BABYLON.InputBlock("position");
  position.visibleInInspector = false;
  position.visibleOnFrame = false;
  position.target = 1;
  position.setAsAttribute("position");

  // TransformBlock
  var WorldPos = new BABYLON.TransformBlock("WorldPos");
  WorldPos.visibleInInspector = false;
  WorldPos.visibleOnFrame = false;
  WorldPos.target = 1;
  WorldPos.complementZ = 0;
  WorldPos.complementW = 1;

  // InputBlock
  var World = new BABYLON.InputBlock("World");
  World.visibleInInspector = false;
  World.visibleOnFrame = false;
  World.target = 1;
  World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

  // TransformBlock
  var Worldnormal = new BABYLON.TransformBlock("World normal");
  Worldnormal.visibleInInspector = false;
  Worldnormal.visibleOnFrame = false;
  Worldnormal.target = 1;
  Worldnormal.complementZ = 0;
  Worldnormal.complementW = 0;

  // InputBlock
  var normal = new BABYLON.InputBlock("normal");
  normal.visibleInInspector = false;
  normal.visibleOnFrame = false;
  normal.target = 1;
  normal.setAsAttribute("normal");

  // VectorSplitterBlock
  var N = new BABYLON.VectorSplitterBlock("N");
  N.visibleInInspector = false;
  N.visibleOnFrame = false;
  N.target = 4;

  // NormalizeBlock
  var Normalize = new BABYLON.NormalizeBlock("Normalize");
  Normalize.visibleInInspector = false;
  Normalize.visibleOnFrame = false;
  Normalize.target = 4;

  // DotBlock
  var NdotL = new BABYLON.DotBlock("N dot L");
  NdotL.visibleInInspector = false;
  NdotL.visibleOnFrame = false;
  NdotL.target = 4;

  // NormalizeBlock
  var L = new BABYLON.NormalizeBlock("L");
  L.visibleInInspector = false;
  L.visibleOnFrame = false;
  L.target = 4;

  // LightInformationBlock
  // light
  var Lightinformation = new BABYLON.LightInformationBlock("Light information");
  Lightinformation.visibleInInspector = false;
  Lightinformation.visibleOnFrame = false;
  Lightinformation.target = 1;

  // MultiplyBlock
  var Multiplylightbysurfacecolor = new BABYLON.MultiplyBlock("Multiply light by surface color");
  Multiplylightbysurfacecolor.visibleInInspector = false;
  Multiplylightbysurfacecolor.visibleOnFrame = false;
  Multiplylightbysurfacecolor.target = 4;

  // AddBlock
  var Addrimspecdiff = new BABYLON.AddBlock("Add rim spec diff");
  Addrimspecdiff.visibleInInspector = false;
  Addrimspecdiff.visibleOnFrame = false;
  Addrimspecdiff.target = 4;

  // AddBlock
  var AddSpeculartodiffuse = new BABYLON.AddBlock("AddSpecular to diffuse");
  AddSpeculartodiffuse.visibleInInspector = false;
  AddSpeculartodiffuse.visibleOnFrame = false;
  AddSpeculartodiffuse.target = 4;

  // AddBlock
  var Add = new BABYLON.AddBlock("Add");
  Add.visibleInInspector = false;
  Add.visibleOnFrame = false;
  Add.target = 4;

  // InputBlock
  var AmbientLight = new BABYLON.InputBlock("Ambient Light");
  AmbientLight.visibleInInspector = false;
  AmbientLight.visibleOnFrame = false;
  AmbientLight.target = 1;
  AmbientLight.value = new BABYLON.Color3(0.17254901960784313, 0.17254901960784313, 0.17254901960784313);
  AmbientLight.isConstant = false;

  // ScaleBlock
  var Scale = new BABYLON.ScaleBlock("Scale");
  Scale.visibleInInspector = false;
  Scale.visibleOnFrame = false;
  Scale.target = 4;

  // InputBlock
  var Color = new BABYLON.InputBlock("Color3");
  Color.visibleInInspector = false;
  Color.visibleOnFrame = false;
  Color.target = 1;
  Color.value = new BABYLON.Color3(0.6705882352941176, 0.6705882352941176, 0.6705882352941176);
  Color.isConstant = false;

  // StepBlock
  var QUANTIZEDDIFFUSELIGHTINGINTENSITY = new BABYLON.StepBlock("QUANTIZED DIFFUSE LIGHTING INTENSITY");
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.visibleInInspector = false;
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.visibleOnFrame = false;
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.target = 4;

  // InputBlock
  var diffuseCutoff = new BABYLON.InputBlock("diffuseCutoff");
  diffuseCutoff.visibleInInspector = false;
  diffuseCutoff.visibleOnFrame = false;
  diffuseCutoff.target = 1;
  diffuseCutoff.value = 0;
  diffuseCutoff.min = 0;
  diffuseCutoff.max = 0;
  diffuseCutoff.isBoolean = false;
  diffuseCutoff.matrixMode = 0;
  diffuseCutoff.animationType = BABYLON.AnimatedInputBlockTypes.None;
  diffuseCutoff.isConstant = false;

  // MultiplyBlock
  var SpecularFactor = new BABYLON.MultiplyBlock("Specular Factor");
  SpecularFactor.visibleInInspector = false;
  SpecularFactor.visibleOnFrame = false;
  SpecularFactor.target = 4;

  // DotBlock
  var NdotH = new BABYLON.DotBlock("N dot H");
  NdotH.visibleInInspector = false;
  NdotH.visibleOnFrame = false;
  NdotH.target = 4;

  // NormalizeBlock
  var HNormalized = new BABYLON.NormalizeBlock("H(Normalized)");
  HNormalized.visibleInInspector = false;
  HNormalized.visibleOnFrame = false;
  HNormalized.target = 4;

  // AddBlock
  var H = new BABYLON.AddBlock("H");
  H.visibleInInspector = false;
  H.visibleOnFrame = false;
  H.target = 4;

  // NormalizeBlock
  var Vnormalized = new BABYLON.NormalizeBlock("V(normalized)");
  Vnormalized.visibleInInspector = false;
  Vnormalized.visibleOnFrame = false;
  Vnormalized.target = 4;

  // ViewDirectionBlock
  var Viewdirection = new BABYLON.ViewDirectionBlock("View direction");
  Viewdirection.visibleInInspector = false;
  Viewdirection.visibleOnFrame = false;
  Viewdirection.target = 4;

  // InputBlock
  var cameraPosition = new BABYLON.InputBlock("cameraPosition");
  cameraPosition.visibleInInspector = false;
  cameraPosition.visibleOnFrame = false;
  cameraPosition.target = 1;
  cameraPosition.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);

  // DotBlock
  var NDotV = new BABYLON.DotBlock("N Dot V");
  NDotV.visibleInInspector = false;
  NDotV.visibleOnFrame = false;
  NDotV.target = 4;

  // OneMinusBlock
  var NdotV = new BABYLON.OneMinusBlock("1- NdotV");
  NdotV.visibleInInspector = false;
  NdotV.visibleOnFrame = false;
  NdotV.target = 4;

  // MultiplyBlock
  var rimintensity = new BABYLON.MultiplyBlock("rim intensity");
  rimintensity.visibleInInspector = false;
  rimintensity.visibleOnFrame = false;
  rimintensity.target = 4;

  // PowBlock
  var RimFactor = new BABYLON.PowBlock("Rim Factor");
  RimFactor.visibleInInspector = false;
  RimFactor.visibleOnFrame = false;
  RimFactor.target = 4;

  // InputBlock
  var Float = new BABYLON.InputBlock("Float");
  Float.visibleInInspector = false;
  Float.visibleOnFrame = false;
  Float.target = 1;
  Float.value = 0.7;
  Float.min = 0;
  Float.max = 0;
  Float.isBoolean = false;
  Float.matrixMode = 0;
  Float.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float.isConstant = false;

  // StepBlock
  var quantizedRimIntensity = new BABYLON.StepBlock("quantizedRimIntensity");
  quantizedRimIntensity.visibleInInspector = false;
  quantizedRimIntensity.visibleOnFrame = false;
  quantizedRimIntensity.target = 4;

  // InputBlock
  var Float1 = new BABYLON.InputBlock("Float");
  Float1.visibleInInspector = false;
  Float1.visibleOnFrame = false;
  Float1.target = 1;
  Float1.value = 0.6;
  Float1.min = 0;
  Float1.max = 0;
  Float1.isBoolean = false;
  Float1.matrixMode = 0;
  Float1.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float1.isConstant = false;

  // ScaleBlock
  var Scale1 = new BABYLON.ScaleBlock("Scale");
  Scale1.visibleInInspector = false;
  Scale1.visibleOnFrame = false;
  Scale1.target = 4;

  // InputBlock
  var Color1 = new BABYLON.InputBlock("Color3");
  Color1.visibleInInspector = false;
  Color1.visibleOnFrame = false;
  Color1.target = 1;
  Color1.value = new BABYLON.Color3(1, 1, 1);
  Color1.isConstant = false;

  // PowBlock
  var SpecularIntensity = new BABYLON.PowBlock("SpecularIntensity");
  SpecularIntensity.visibleInInspector = false;
  SpecularIntensity.visibleOnFrame = false;
  SpecularIntensity.target = 4;

  // MultiplyBlock
  var Glossiness = new BABYLON.MultiplyBlock("Glossiness^2");
  Glossiness.visibleInInspector = false;
  Glossiness.visibleOnFrame = false;
  Glossiness.target = 4;

  // InputBlock
  var Float2 = new BABYLON.InputBlock("Float");
  Float2.visibleInInspector = false;
  Float2.visibleOnFrame = false;
  Float2.target = 1;
  Float2.value = 1;
  Float2.min = 0;
  Float2.max = 0;
  Float2.isBoolean = false;
  Float2.matrixMode = 0;
  Float2.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float2.isConstant = false;

  // StepBlock
  var Step = new BABYLON.StepBlock("Step");
  Step.visibleInInspector = false;
  Step.visibleOnFrame = false;
  Step.target = 4;

  // InputBlock
  var SpecularCutoff = new BABYLON.InputBlock("Specular Cutoff");
  SpecularCutoff.visibleInInspector = false;
  SpecularCutoff.visibleOnFrame = false;
  SpecularCutoff.target = 1;
  SpecularCutoff.value = 0.9;
  SpecularCutoff.min = 0;
  SpecularCutoff.max = 0;
  SpecularCutoff.isBoolean = false;
  SpecularCutoff.matrixMode = 0;
  SpecularCutoff.animationType = BABYLON.AnimatedInputBlockTypes.None;
  SpecularCutoff.isConstant = false;

  // ScaleBlock
  var specularlightingcalculation = new BABYLON.ScaleBlock("specular lighting calculation");
  specularlightingcalculation.visibleInInspector = false;
  specularlightingcalculation.visibleOnFrame = false;
  specularlightingcalculation.target = 4;

  // InputBlock
  var Color2 = new BABYLON.InputBlock("Color3");
  Color2.visibleInInspector = false;
  Color2.visibleOnFrame = false;
  Color2.target = 1;
  Color2.value = new BABYLON.Color3(1, 1, 1);
  Color2.isConstant = false;

  // FragmentOutputBlock
  var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
  FragmentOutput.visibleInInspector = false;
  FragmentOutput.visibleOnFrame = false;
  FragmentOutput.target = 2;
  FragmentOutput.convertToGammaSpace = false;
  FragmentOutput.convertToLinearSpace = false;
  FragmentOutput.useLogarithmicDepth = false;

  // TransformBlock
  var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
  WorldPosViewProjectionTransform.visibleInInspector = false;
  WorldPosViewProjectionTransform.visibleOnFrame = false;
  WorldPosViewProjectionTransform.target = 1;
  WorldPosViewProjectionTransform.complementZ = 0;
  WorldPosViewProjectionTransform.complementW = 1;

  // InputBlock
  var ViewProjection = new BABYLON.InputBlock("ViewProjection");
  ViewProjection.visibleInInspector = false;
  ViewProjection.visibleOnFrame = false;
  ViewProjection.target = 1;
  ViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

  // VertexOutputBlock
  var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
  VertexOutput.visibleInInspector = false;
  VertexOutput.visibleOnFrame = false;
  VertexOutput.target = 1;

  // Connections
  position.output.connectTo(WorldPos.vector);
  World.output.connectTo(WorldPos.transform);
  WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
  ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
  WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
  AmbientLight.output.connectTo(Add.left);
  Color.output.connectTo(Scale.input);
  normal.output.connectTo(Worldnormal.vector);
  World.output.connectTo(Worldnormal.transform);
  Worldnormal.output.connectTo(N.xyzw);
  N.xyzOut.connectTo(Normalize.input);
  Normalize.output.connectTo(NdotL.left);
  WorldPos.output.connectTo(Lightinformation.worldPosition);
  Lightinformation.direction.connectTo(L.input);
  L.output.connectTo(NdotL.right);
  NdotL.output.connectTo(QUANTIZEDDIFFUSELIGHTINGINTENSITY.value);
  diffuseCutoff.output.connectTo(QUANTIZEDDIFFUSELIGHTINGINTENSITY.edge);
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.output.connectTo(Scale.factor);
  Scale.output.connectTo(Add.right);
  Add.output.connectTo(AddSpeculartodiffuse.left);
  Color2.output.connectTo(specularlightingcalculation.input);
  Normalize.output.connectTo(NdotH.left);
  L.output.connectTo(H.left);
  WorldPos.output.connectTo(Viewdirection.worldPosition);
  cameraPosition.output.connectTo(Viewdirection.cameraPosition);
  Viewdirection.output.connectTo(Vnormalized.input);
  Vnormalized.output.connectTo(H.right);
  H.output.connectTo(HNormalized.input);
  HNormalized.output.connectTo(NdotH.right);
  NdotH.output.connectTo(SpecularFactor.left);
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.output.connectTo(SpecularFactor.right);
  SpecularFactor.output.connectTo(SpecularIntensity.value);
  Float2.output.connectTo(Glossiness.left);
  Float2.output.connectTo(Glossiness.right);
  Glossiness.output.connectTo(SpecularIntensity.power);
  SpecularIntensity.output.connectTo(Step.value);
  SpecularCutoff.output.connectTo(Step.edge);
  Step.output.connectTo(specularlightingcalculation.factor);
  specularlightingcalculation.output.connectTo(AddSpeculartodiffuse.right);
  AddSpeculartodiffuse.output.connectTo(Addrimspecdiff.left);
  Color1.output.connectTo(Scale1.input);
  Normalize.output.connectTo(NDotV.left);
  Vnormalized.output.connectTo(NDotV.right);
  NDotV.output.connectTo(NdotV.input);
  NdotV.output.connectTo(rimintensity.left);
  NdotL.output.connectTo(RimFactor.value);
  Float.output.connectTo(RimFactor.power);
  RimFactor.output.connectTo(rimintensity.right);
  rimintensity.output.connectTo(quantizedRimIntensity.value);
  Float1.output.connectTo(quantizedRimIntensity.edge);
  quantizedRimIntensity.output.connectTo(Scale1.factor);
  Scale1.output.connectTo(Addrimspecdiff.right);
  Addrimspecdiff.output.connectTo(Multiplylightbysurfacecolor.left);
  Lightinformation.color.connectTo(Multiplylightbysurfacecolor.right);
  Multiplylightbysurfacecolor.output.connectTo(FragmentOutput.rgb);

  // Output nodes
  nodeMaterial1.addOutputNode(VertexOutput);
  nodeMaterial1.addOutputNode(FragmentOutput);
  nodeMaterial1.build();

  ////////////////

  ///////////////////////////node material 3////////
  var nodeMaterial2 = new BABYLON.NodeMaterial("node");

  // InputBlock
  var position = new BABYLON.InputBlock("position");
  position.visibleInInspector = false;
  position.visibleOnFrame = false;
  position.target = 1;
  position.setAsAttribute("position");

  // TransformBlock
  var WorldPos = new BABYLON.TransformBlock("WorldPos");
  WorldPos.visibleInInspector = false;
  WorldPos.visibleOnFrame = false;
  WorldPos.target = 1;
  WorldPos.complementZ = 0;
  WorldPos.complementW = 1;

  // InputBlock
  var World = new BABYLON.InputBlock("World");
  World.visibleInInspector = false;
  World.visibleOnFrame = false;
  World.target = 1;
  World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

  // TransformBlock
  var Worldnormal = new BABYLON.TransformBlock("World normal");
  Worldnormal.visibleInInspector = false;
  Worldnormal.visibleOnFrame = false;
  Worldnormal.target = 1;
  Worldnormal.complementZ = 0;
  Worldnormal.complementW = 0;

  // InputBlock
  var normal = new BABYLON.InputBlock("normal");
  normal.visibleInInspector = false;
  normal.visibleOnFrame = false;
  normal.target = 1;
  normal.setAsAttribute("normal");

  // VectorSplitterBlock
  var N = new BABYLON.VectorSplitterBlock("N");
  N.visibleInInspector = false;
  N.visibleOnFrame = false;
  N.target = 4;

  // NormalizeBlock
  var Normalize = new BABYLON.NormalizeBlock("Normalize");
  Normalize.visibleInInspector = false;
  Normalize.visibleOnFrame = false;
  Normalize.target = 4;

  // DotBlock
  var NdotL = new BABYLON.DotBlock("N dot L");
  NdotL.visibleInInspector = false;
  NdotL.visibleOnFrame = false;
  NdotL.target = 4;

  // NormalizeBlock
  var L = new BABYLON.NormalizeBlock("L");
  L.visibleInInspector = false;
  L.visibleOnFrame = false;
  L.target = 4;

  // LightInformationBlock
  // light
  var Lightinformation = new BABYLON.LightInformationBlock("Light information");
  Lightinformation.visibleInInspector = false;
  Lightinformation.visibleOnFrame = false;
  Lightinformation.target = 1;

  // AddBlock
  var H = new BABYLON.AddBlock("H");
  H.visibleInInspector = false;
  H.visibleOnFrame = false;
  H.target = 4;

  // NormalizeBlock
  var Vnormalized = new BABYLON.NormalizeBlock("V(normalized)");
  Vnormalized.visibleInInspector = false;
  Vnormalized.visibleOnFrame = false;
  Vnormalized.target = 4;

  // ViewDirectionBlock
  var Viewdirection = new BABYLON.ViewDirectionBlock("View direction");
  Viewdirection.visibleInInspector = false;
  Viewdirection.visibleOnFrame = false;
  Viewdirection.target = 4;

  // InputBlock
  var cameraPosition = new BABYLON.InputBlock("cameraPosition");
  cameraPosition.visibleInInspector = false;
  cameraPosition.visibleOnFrame = false;
  cameraPosition.target = 1;
  cameraPosition.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);

  // DotBlock
  var NDotV = new BABYLON.DotBlock("N Dot V");
  NDotV.visibleInInspector = false;
  NDotV.visibleOnFrame = false;
  NDotV.target = 4;

  // OneMinusBlock
  var NdotV = new BABYLON.OneMinusBlock("1- NdotV");
  NdotV.visibleInInspector = false;
  NdotV.visibleOnFrame = false;
  NdotV.target = 4;

  // MultiplyBlock
  var rimintensity = new BABYLON.MultiplyBlock("rim intensity");
  rimintensity.visibleInInspector = false;
  rimintensity.visibleOnFrame = false;
  rimintensity.target = 4;

  // PowBlock
  var RimFactor = new BABYLON.PowBlock("Rim Factor");
  RimFactor.visibleInInspector = false;
  RimFactor.visibleOnFrame = false;
  RimFactor.target = 4;

  // InputBlock
  var Float = new BABYLON.InputBlock("Float");
  Float.visibleInInspector = false;
  Float.visibleOnFrame = false;
  Float.target = 1;
  Float.value = 0.7;
  Float.min = 0;
  Float.max = 0;
  Float.isBoolean = false;
  Float.matrixMode = 0;
  Float.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float.isConstant = false;

  // StepBlock
  var quantizedRimIntensity = new BABYLON.StepBlock("quantizedRimIntensity");
  quantizedRimIntensity.visibleInInspector = false;
  quantizedRimIntensity.visibleOnFrame = false;
  quantizedRimIntensity.target = 4;

  // InputBlock
  var Float1 = new BABYLON.InputBlock("Float");
  Float1.visibleInInspector = false;
  Float1.visibleOnFrame = false;
  Float1.target = 1;
  Float1.value = 0.6;
  Float1.min = 0;
  Float1.max = 0;
  Float1.isBoolean = false;
  Float1.matrixMode = 0;
  Float1.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float1.isConstant = false;

  // ScaleBlock
  var Scale = new BABYLON.ScaleBlock("Scale");
  Scale.visibleInInspector = false;
  Scale.visibleOnFrame = false;
  Scale.target = 4;

  // InputBlock
  var Color = new BABYLON.InputBlock("Color3");
  Color.visibleInInspector = false;
  Color.visibleOnFrame = false;
  Color.target = 1;
  Color.value = new BABYLON.Color3(1, 1, 1);
  Color.isConstant = false;

  // AddBlock
  var Addrimspecdiff = new BABYLON.AddBlock("Add rim spec diff");
  Addrimspecdiff.visibleInInspector = false;
  Addrimspecdiff.visibleOnFrame = false;
  Addrimspecdiff.target = 4;

  // AddBlock
  var AddSpeculartodiffuse = new BABYLON.AddBlock("AddSpecular to diffuse");
  AddSpeculartodiffuse.visibleInInspector = false;
  AddSpeculartodiffuse.visibleOnFrame = false;
  AddSpeculartodiffuse.target = 4;

  // AddBlock
  var Add = new BABYLON.AddBlock("Add");
  Add.visibleInInspector = false;
  Add.visibleOnFrame = false;
  Add.target = 4;

  // InputBlock
  var AmbientLight = new BABYLON.InputBlock("Ambient Light");
  AmbientLight.visibleInInspector = false;
  AmbientLight.visibleOnFrame = false;
  AmbientLight.target = 1;
  AmbientLight.value = new BABYLON.Color3(0.17254901960784313, 0.17254901960784313, 0.17254901960784313);
  AmbientLight.isConstant = false;

  // ScaleBlock
  var Scale1 = new BABYLON.ScaleBlock("Scale");
  Scale1.visibleInInspector = false;
  Scale1.visibleOnFrame = false;
  Scale1.target = 4;

  // InputBlock
  var Color1 = new BABYLON.InputBlock("Color3");
  Color1.visibleInInspector = false;
  Color1.visibleOnFrame = false;
  Color1.target = 1;
  Color1.value = new BABYLON.Color3(0.6705882352941176, 0.6705882352941176, 0.6705882352941176);
  Color1.isConstant = false;

  // StepBlock
  var QUANTIZEDDIFFUSELIGHTINGINTENSITY = new BABYLON.StepBlock("QUANTIZED DIFFUSE LIGHTING INTENSITY");
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.visibleInInspector = false;
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.visibleOnFrame = false;
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.target = 4;

  // InputBlock
  var diffuseCutoff = new BABYLON.InputBlock("diffuseCutoff");
  diffuseCutoff.visibleInInspector = false;
  diffuseCutoff.visibleOnFrame = false;
  diffuseCutoff.target = 1;
  diffuseCutoff.value = 0;
  diffuseCutoff.min = 0;
  diffuseCutoff.max = 0;
  diffuseCutoff.isBoolean = false;
  diffuseCutoff.matrixMode = 0;
  diffuseCutoff.animationType = BABYLON.AnimatedInputBlockTypes.None;
  diffuseCutoff.isConstant = false;

  // MultiplyBlock
  var SpecularFactor = new BABYLON.MultiplyBlock("Specular Factor");
  SpecularFactor.visibleInInspector = false;
  SpecularFactor.visibleOnFrame = false;
  SpecularFactor.target = 4;

  // DotBlock
  var NdotH = new BABYLON.DotBlock("N dot H");
  NdotH.visibleInInspector = false;
  NdotH.visibleOnFrame = false;
  NdotH.target = 4;

  // NormalizeBlock
  var HNormalized = new BABYLON.NormalizeBlock("H(Normalized)");
  HNormalized.visibleInInspector = false;
  HNormalized.visibleOnFrame = false;
  HNormalized.target = 4;

  // PowBlock
  var SpecularIntensity = new BABYLON.PowBlock("SpecularIntensity");
  SpecularIntensity.visibleInInspector = false;
  SpecularIntensity.visibleOnFrame = false;
  SpecularIntensity.target = 4;

  // MultiplyBlock
  var Glossiness = new BABYLON.MultiplyBlock("Glossiness^2");
  Glossiness.visibleInInspector = false;
  Glossiness.visibleOnFrame = false;
  Glossiness.target = 4;

  // InputBlock
  var Float2 = new BABYLON.InputBlock("Float");
  Float2.visibleInInspector = false;
  Float2.visibleOnFrame = false;
  Float2.target = 1;
  Float2.value = 1;
  Float2.min = 0;
  Float2.max = 0;
  Float2.isBoolean = false;
  Float2.matrixMode = 0;
  Float2.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float2.isConstant = false;

  // StepBlock
  var Step = new BABYLON.StepBlock("Step");
  Step.visibleInInspector = false;
  Step.visibleOnFrame = false;
  Step.target = 4;

  // InputBlock
  var SpecularCutoff = new BABYLON.InputBlock("Specular Cutoff");
  SpecularCutoff.visibleInInspector = false;
  SpecularCutoff.visibleOnFrame = false;
  SpecularCutoff.target = 1;
  SpecularCutoff.value = 0.9;
  SpecularCutoff.min = 0;
  SpecularCutoff.max = 0;
  SpecularCutoff.isBoolean = false;
  SpecularCutoff.matrixMode = 0;
  SpecularCutoff.animationType = BABYLON.AnimatedInputBlockTypes.None;
  SpecularCutoff.isConstant = false;

  // ScaleBlock
  var specularlightingcalculation = new BABYLON.ScaleBlock("specular lighting calculation");
  specularlightingcalculation.visibleInInspector = false;
  specularlightingcalculation.visibleOnFrame = false;
  specularlightingcalculation.target = 4;

  // InputBlock
  var Color2 = new BABYLON.InputBlock("Color3");
  Color2.visibleInInspector = false;
  Color2.visibleOnFrame = false;
  Color2.target = 1;
  Color2.value = new BABYLON.Color3(1, 1, 1);
  Color2.isConstant = false;

  // MultiplyBlock
  var Multiplylightbysurfacecolor = new BABYLON.MultiplyBlock("Multiply light by surface color");
  Multiplylightbysurfacecolor.visibleInInspector = false;
  Multiplylightbysurfacecolor.visibleOnFrame = false;
  Multiplylightbysurfacecolor.target = 4;

  // InputBlock
  var Color3 = new BABYLON.InputBlock("Color3");
  Color3.visibleInInspector = false;
  Color3.visibleOnFrame = false;
  Color3.target = 1;
  Color3.value = new BABYLON.Color3(0.8784313725490196, 0.7843137254901961, 0.7843137254901961);
  Color3.isConstant = false;

  // FragmentOutputBlock
  var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
  FragmentOutput.visibleInInspector = false;
  FragmentOutput.visibleOnFrame = false;
  FragmentOutput.target = 2;
  FragmentOutput.convertToGammaSpace = false;
  FragmentOutput.convertToLinearSpace = false;
  FragmentOutput.useLogarithmicDepth = false;

  // TransformBlock
  var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
  WorldPosViewProjectionTransform.visibleInInspector = false;
  WorldPosViewProjectionTransform.visibleOnFrame = false;
  WorldPosViewProjectionTransform.target = 1;
  WorldPosViewProjectionTransform.complementZ = 0;
  WorldPosViewProjectionTransform.complementW = 1;

  // InputBlock
  var ViewProjection = new BABYLON.InputBlock("ViewProjection");
  ViewProjection.visibleInInspector = false;
  ViewProjection.visibleOnFrame = false;
  ViewProjection.target = 1;
  ViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

  // VertexOutputBlock
  var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
  VertexOutput.visibleInInspector = false;
  VertexOutput.visibleOnFrame = false;
  VertexOutput.target = 1;

  // Connections
  position.output.connectTo(WorldPos.vector);
  World.output.connectTo(WorldPos.transform);
  WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
  ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
  WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
  AmbientLight.output.connectTo(Add.left);
  Color1.output.connectTo(Scale1.input);
  normal.output.connectTo(Worldnormal.vector);
  World.output.connectTo(Worldnormal.transform);
  Worldnormal.output.connectTo(N.xyzw);
  N.xyzOut.connectTo(Normalize.input);
  Normalize.output.connectTo(NdotL.left);
  WorldPos.output.connectTo(Lightinformation.worldPosition);
  Lightinformation.direction.connectTo(L.input);
  L.output.connectTo(NdotL.right);
  NdotL.output.connectTo(QUANTIZEDDIFFUSELIGHTINGINTENSITY.value);
  diffuseCutoff.output.connectTo(QUANTIZEDDIFFUSELIGHTINGINTENSITY.edge);
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.output.connectTo(Scale1.factor);
  Scale1.output.connectTo(Add.right);
  Add.output.connectTo(AddSpeculartodiffuse.left);
  Color2.output.connectTo(specularlightingcalculation.input);
  Normalize.output.connectTo(NdotH.left);
  L.output.connectTo(H.left);
  WorldPos.output.connectTo(Viewdirection.worldPosition);
  cameraPosition.output.connectTo(Viewdirection.cameraPosition);
  Viewdirection.output.connectTo(Vnormalized.input);
  Vnormalized.output.connectTo(H.right);
  H.output.connectTo(HNormalized.input);
  HNormalized.output.connectTo(NdotH.right);
  NdotH.output.connectTo(SpecularFactor.left);
  QUANTIZEDDIFFUSELIGHTINGINTENSITY.output.connectTo(SpecularFactor.right);
  SpecularFactor.output.connectTo(SpecularIntensity.value);
  Float2.output.connectTo(Glossiness.left);
  Float2.output.connectTo(Glossiness.right);
  Glossiness.output.connectTo(SpecularIntensity.power);
  SpecularIntensity.output.connectTo(Step.value);
  SpecularCutoff.output.connectTo(Step.edge);
  Step.output.connectTo(specularlightingcalculation.factor);
  specularlightingcalculation.output.connectTo(AddSpeculartodiffuse.right);
  AddSpeculartodiffuse.output.connectTo(Addrimspecdiff.left);
  Color.output.connectTo(Scale.input);
  Normalize.output.connectTo(NDotV.left);
  Vnormalized.output.connectTo(NDotV.right);
  NDotV.output.connectTo(NdotV.input);
  NdotV.output.connectTo(rimintensity.left);
  NdotL.output.connectTo(RimFactor.value);
  Float.output.connectTo(RimFactor.power);
  RimFactor.output.connectTo(rimintensity.right);
  rimintensity.output.connectTo(quantizedRimIntensity.value);
  Float1.output.connectTo(quantizedRimIntensity.edge);
  quantizedRimIntensity.output.connectTo(Scale.factor);
  Scale.output.connectTo(Addrimspecdiff.right);
  Addrimspecdiff.output.connectTo(Multiplylightbysurfacecolor.left);
  Color3.output.connectTo(Multiplylightbysurfacecolor.right);
  Multiplylightbysurfacecolor.output.connectTo(FragmentOutput.rgb);

  // Output nodes
  nodeMaterial2.addOutputNode(VertexOutput);
  nodeMaterial2.addOutputNode(FragmentOutput);
  nodeMaterial2.build();
  //////////////////////////

  //all the stuff need to put here

  //set FollowCam
  const camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 1, -3), scene);
  camera.attachControl(canvas, true); // this input controls a specific dom element, so if you have multiple canvases it may be useful




  /////delete default camera remote///////
  camera.inputs.removeByType("FreeCameraKeyboardMoveInput");
  camera.inputs.removeByType("FreeCameraMouseInput");
  ////////////////


  ////////////////Howard's move toolkit/////////////by Chen Haoyang////////////////
function jumpMove(obj, direct, speed, distance){
  if (obj.change == 0) {
    let tempPosX = obj.position.x;
    let tempPosY = obj.position.y;
    let tempPosZ = obj.position.z;
    console.log("The position of " + obj.name + " is " + "X:" + tempPosX + " Y:" + tempPosY + "Z:" + tempPosZ);

    let observer = scene.onBeforeRenderObservable.add(function() {
      if (obj.change <= distance/2) {
        switch (direct) {
          case 'x':
            obj.position.x += speed;
            obj.position.y += speed/2;
            break;

          case 'z':
            obj.position.z += speed;
            obj.position.y += speed/2;
            break;

          case '-x':
            obj.position.x -= speed;
            obj.position.y += speed/2;
            break;

          case '-z':
            obj.position.z -= speed;
            obj.position.y += speed/2;
            break;

          case 'xz':
            obj.position.z += speed;
            obj.position.x += speed;
            obj.position.y += speed/2;
            break;

          case '-xz':
            obj.position.z += speed;
            obj.position.x -= speed;
            obj.position.y += speed/2;
            break;

          case 'x-z':
            obj.position.z -= speed;
            obj.position.x += speed;
            obj.position.y += speed/2;
            break;

          case '-x-z':
            obj.position.z -= speed;
            obj.position.x -= speed;
            obj.position.y += speed/2;
            break;

          case 'x-2z':
            obj.position.z -= 2*speed;
            obj.position.x += speed;
            obj.position.y += speed/2;
            break;

          case 'x2z':
            obj.position.z += 2*speed;
            obj.position.x += speed;
            obj.position.y += speed/2;
            break;

          case '-x2z':
            obj.position.z += 2*speed;
            obj.position.x -= speed;
            obj.position.y += speed/2;
            break;

          case '-x-2z':
            obj.position.z -= 2*speed;
            obj.position.x -= speed;
            obj.position.y += speed/2;
            break;

          default:
            console.log("invalid direction");

        }

        obj.change += speed;
      } else if (obj.change <= distance) {
        switch (direct) {
          case 'x':
            obj.position.x += speed;
            obj.position.y -= speed/2;
            break;

          case 'z':
            obj.position.z += speed;
            obj.position.y -= speed/2;
            break;

          case '-x':
            obj.position.x -= speed;
            obj.position.y -= speed/2;
            break;

          case '-z':
            obj.position.z -= speed;
            obj.position.y -= speed/2;
            break;

          case 'xz':
            obj.position.z += speed;
            obj.position.x += speed;
            obj.position.y -= speed/2;
            break;

          case '-xz':
            obj.position.z += speed;
            obj.position.x -= speed;
            obj.position.y -= speed/2;
            break;

          case 'x-z':
            obj.position.z -= speed;
            obj.position.x += speed;
            obj.position.y -= speed/2;
            break;

          case '-x-z':
            obj.position.z -= speed;
            obj.position.x -= speed;
            obj.position.y -= speed/2;
            break;

          case 'x-2z':
            obj.position.z -= 2*speed;
            obj.position.x += speed;
            obj.position.y -= speed/2;
            break;

          case 'x2z':
            obj.position.z += 2*speed;
            obj.position.x += speed;
            obj.position.y -= speed/2;
            break;

          case '-x2z':
            obj.position.z += 2*speed;
            obj.position.x -= speed;
            obj.position.y -= speed/2;
            break;

          case '-x-2z':
            obj.position.z -= 2*speed;
            obj.position.x -= speed;
            obj.position.y -= speed/2;
            break;

          default:
            console.log("invalid direction");

        }
        obj.change += speed;
      } else {
        scene.onBeforeRenderObservable.remove(observer);
        obj.change = 0;
        //To stick on the grid
        //To stick on the grid
        switch (direct) {
          case 'x':
            obj.position.x = tempPosX + distance;
            break;

          case 'z':
            obj.position.z = tempPosZ + distance;
            break;

          case '-x':
            obj.position.x = tempPosX - distance;
            break;

          case '-z':
            obj.position.z = tempPosZ - distance;
            break;

          case 'xz':
            obj.position.x = tempPosX + distance;
            obj.position.z = tempPosZ + distance;
            break;

          case '-xz':
            obj.position.x = tempPosX - distance;
            obj.position.z = tempPosZ + distance;
            break;

          case 'x-z':
            obj.position.x = tempPosX + distance;
            obj.position.z = tempPosZ - distance;
            break;

          case '-x-z':
            obj.position.x = tempPosX - distance;
            obj.position.z = tempPosZ - distance;
            break;

          case 'x-2z':
            obj.position.z = tempPosZ - 2*distance;
            obj.position.x = tempPosX + distance;
            break;

          case 'x2z':
            obj.position.z = tempPosZ + 2*distance;
            obj.position.x = tempPosX + distance;
            break;

          case '-x2z':
            obj.position.z = tempPosZ + 2*distance;
            obj.position.x = tempPosX - distance;
            break;

          case '-x-2z':
            obj.position.z = tempPosZ - 2*distance;
            obj.position.x = tempPosX - distance;
            break;

          default:
            console.log("invalid direction");
        }
        obj.position.y = tempPosY;
      }
    });
  }

}


  function delay(obj, time) {
    if (obj.change == 0) {
      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= 60 * time) {
          obj.change++;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
        }
      });
    }
  }


  function rotateGrid(obj, clockwise, rotateStep) {
    if (obj.change == 0) {
      let tempRotateY = obj.rotation.y;

      if (clockwise == true) {
        let observer = scene.onBeforeRenderObservable.add(function() {
          if (obj.change < (Math.PI / 2)) {
            obj.rotation.y += (Math.PI / 2) / rotateStep;
            obj.change += (Math.PI / 2) / rotateStep;
          } else {
            scene.onBeforeRenderObservable.remove(observer);
            obj.rotation.y = tempRotateY + Math.PI / 2;
            if (obj.direct > 0) {
              obj.direct--;
            } else obj.direct = 3;
            obj.change = 0;
          }
        });
      }

      if (clockwise == false) {
        let observer = scene.onBeforeRenderObservable.add(function() {
          if (obj.change < (Math.PI / 2)) {
            obj.rotation.y -= (Math.PI / 2) / rotateStep;
            obj.change += (Math.PI / 2) / rotateStep;
          } else {
            scene.onBeforeRenderObservable.remove(observer);
            obj.rotation.y = tempRotateY - Math.PI / 2;
            if (obj.direct < 3) {
              obj.direct++;
            } else obj.direct = 0;
            obj.change = 0;
          }
        });
      }
    }
  }



  function moveGrid(obj, direct, speed, distance) {
    if (obj.change == 0) {
      let tempPosX = obj.position.x;
      let tempPosY = obj.position.y;
      let tempPosZ = obj.position.z;
      console.log("The position of " + obj.name + " is " + "X:" + tempPosX + " Y:" + tempPosY + "Z:" + tempPosZ);

      let observer = scene.onBeforeRenderObservable.add(function() {
        if (obj.change <= distance) {
          switch (direct) {
            case 'x':
              obj.position.x += speed;
              break;

            case 'z':
              obj.position.z += speed;
              break;

            case '-x':
              obj.position.x -= speed;
              break;

            case '-z':
              obj.position.z -= speed;
              break;

            case 'xz':
              obj.position.z += speed;
              obj.position.x += speed;
              break;

            case '-xz':
              obj.position.z += speed;
              obj.position.x -= speed;
              break;

            case 'x-z':
              obj.position.z -= speed;
              obj.position.x += speed;
              break;

            case '-x-z':
              obj.position.z -= speed;
              obj.position.x -= speed;
              break;

            default:
              console.log("invalid direction");

          }
          obj.change += speed;
        } else {
          scene.onBeforeRenderObservable.remove(observer);
          obj.change = 0;
          //To stick on the grid
          switch (direct) {
            case 'x':
              obj.position.x = tempPosX + distance;
              break;

            case 'z':
              obj.position.z = tempPosZ + distance;
              break;

            case '-x':
              obj.position.x = tempPosX - distance;
              break;

            case '-z':
              obj.position.z = tempPosZ - distance;
              break;

            case 'xz':
              obj.position.x = tempPosX + distance;
              obj.position.z = tempPosZ + distance;
              break;

            case '-xz':
              obj.position.x = tempPosX - distance;
              obj.position.z = tempPosZ + distance;
              break;

            case 'x-z':
              obj.position.x = tempPosX + distance;
              obj.position.z = tempPosZ - distance;
              break;

            case '-x-z':
              obj.position.x = tempPosX - distance;
              obj.position.z = tempPosZ - distance;
              break;

            default:
              console.log("invalid direction");
          }
        }
      });
    }
  }

  ///////////////////////////end of move toolkit///////////////////////////////

  ///////////////////////////////Control///////////////////////////////////////
  //Type:player//

  //control of moving
  let onControling = false;

  /*
    //move the object by WSAD
    function movingControlType1(obj) {

      camera.parent = obj;
      camera.position.z = -2;
      camera.rotation.x = Math.PI / 10;

      if (onControling == true) {
        scene.onKeyboardObservable.remove(movingControling);
      }

      let movingControling = scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
          case BABYLON.KeyboardEventTypes.KEYDOWN:
            if (kbInfo.event.code == "KeyW") {
              moveGrid(obj, 'x', 0.02, 1);
            }
            if (kbInfo.event.code == "KeyS") {
              moveGrid(obj, '-x', 0.02, 1);
            }
            if (kbInfo.event.code == "KeyA") {
              moveGrid(obj, 'z', 0.02, 1);
            }
            if (kbInfo.event.code == "KeyD") {
              moveGrid(obj, '-z', 0.02, 1);
            }
            console.log("KEY DOWN: ", kbInfo.event.key);
            break;
          case BABYLON.KeyboardEventTypes.KEYUP:
            console.log("KEY UP: ", kbInfo.event.code);
            break;
        }
      });
      onControling = true;
    }
  */
  //move the object by W, rotate the object by AD
  function movingControlType2(camera, obj, speed, rotateStep, distance) {
    //set player
    let originalLifeTime = obj.lifeTime;
    //camera
    camera.parent = obj;
    camera.position.z = -2;
    camera.rotation.x = Math.PI / 13;


    //If the controling object changed, then remove the pervious controler
    if (onControling == true) {
      scene.onKeyboardObservable.remove(movingControling);
    }

    //control
    let movingControling = scene.onKeyboardObservable.add((kbInfo) => {
      switch (kbInfo.type) {
        case BABYLON.KeyboardEventTypes.KEYDOWN:
          //If the obj is not changing, then it can be controled
          if (obj.change == 0) {
            //If input key is vaild, then playerStep++, and continue
            if (kbInfo.event.code == "KeyW" || kbInfo.event.code == "KeyA" || kbInfo.event.code == "KeyD") {
              if (obj.playerStep >= 0) {
                obj.playerStep++;
                if (obj.playerStep > obj.lifeTime) {
                  //If player's life time is over, reset the game
                  initialize();
                  obj.position = new BABYLON.Vector3(0, 0.25, 0);
                  obj.playerStep = 0;
                  obj.lifeTime = originalLifeTime;
                } else {
                  //how to move
                  if (kbInfo.event.code == "KeyW") {
                    switch (obj.direct) {
                      case 0:
                        moveGrid(obj, 'x', speed, distance);
                        break;
                      case 1:
                        moveGrid(obj, 'z', speed, distance);
                        break;
                      case 2:
                        moveGrid(obj, '-x', speed, distance);
                        break;
                      case 3:
                        moveGrid(obj, '-z', speed, distance)
                        break;
                      default:
                        console.log("invaild direct");
                    }
                  } else if (kbInfo.event.code == "KeyA") {
                    rotateGrid(obj, false, rotateStep)
                  } else if (kbInfo.event.code == "KeyD") {
                    rotateGrid(obj, true, rotateStep)
                  }
                }
              } else obj.playerStep = 0;
              console.log("playerStep: " + obj.playerStep);
              console.log("remainingStep: " + (obj.lifeTime - obj.playerStep));
            }
          }
          break;
      }
    });
    onControling = true;
  }
  //move the object by W, rotate the object by AD, for other elements.
  function movingControlType3(obj, speed, rotateStep, distance) {
    let initializeT3 = true;
    //control
    let movingControlingT3 = scene.onKeyboardObservable.add((kbInfo) => {
      switch (kbInfo.type) {
        case BABYLON.KeyboardEventTypes.KEYDOWN:
          //If the obj is not changing, then it can be controled
          console.log(initializeT3);
          if (initializeT3 == false) {
            initializeT3 = true;
          } else if (obj.change == 0) {
            //If input key is vaild, then playerStep++, and continue
            if (kbInfo.event.code == "KeyW" || kbInfo.event.code == "KeyA" || kbInfo.event.code == "KeyD") {
              //how to move
              if (kbInfo.event.code == "KeyW") {
                switch (obj.direct) {
                  case 0:
                    jumpMove(obj, 'x', speed, distance);
                    break;
                  case 1:
                    jumpMove(obj, 'z', speed, distance);
                    break;
                  case 2:
                    jumpMove(obj, '-x', speed, distance);
                    break;
                  case 3:
                    jumpMove(obj, '-z', speed, distance)
                    break;
                  default:
                    console.log("invaild direct");
                }
              } else if (kbInfo.event.code == "KeyA") {
                rotateGrid(obj, false, rotateStep)
              } else if (kbInfo.event.code == "KeyD") {
                rotateGrid(obj, true, rotateStep)
              }
            }
          }
          break;
      }
    });
    scene.onBeforeRenderObservable.add(function() {
      if (isDEAD == true||sphere.isEscaped == true) {
        obj.isVisible = false;
        obj.direct = 1;
        obj.position = new BABYLON.Vector3(0, 0, 0);
        obj.rotation.y = Math.PI / 2;
        initializeT3 = false;
      } else {
        obj.isVisible = true;
      }
    });
  }


  /////////////////////////////end of control//////////////////////////////////////







  //HemisphericLight
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = 0.1;
  //var light1 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 1, -1), new BABYLON.Vector3(0, -1, 1), Math.PI / 2, 100, scene);
  light.diffuse = new BABYLON.Color3(0.43, 0.01, 0.1);


  //////////////////////end of background and skybox///////////////////////////


  ///////////////////////////////ground////////////////////////////////////////
  const ground0 = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 1,
    height: 1
  }, scene);
  ground0.isVisible = false;

  const ground1 = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 1,
    height: 1
  }, scene);
  ground1.isVisible = false;

  for (let j = -10; j < 50; j++) {
    for (let i = -20; i < 25; i++) {
      let newInstance0 = ground0.createInstance("i" + i);
      let newInstance1 = ground1.createInstance("i" + i);

      if (j % 2 == 0) {
        newInstance0.position.x = 2 * (i - 1);
        newInstance0.position.z = j - 1;
      } else {
        newInstance0.position.x = 2 * (i - 1) - 1;
        newInstance0.position.z = j - 1;
      }
      if (j % 2 == 0) {
        newInstance1.position.x = 2 * (i - 1) + 1;
        newInstance1.position.z = j - 1;
      } else {
        newInstance1.position.x = 2 * (i - 1);
        newInstance1.position.z = j - 1;
      }
    }
  }


  //create ground0 material
  ground0.material = new BABYLON.StandardMaterial('ground', scene);
  ground0.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
  ground0.material.emissiveColor = new BABYLON.Color3(0.7, 0.5, 0.5);

  ground0.material.alpha = 1;
  ground0.material.backFaceCulling = false;
  //create ground1 material
  ground1.material = new BABYLON.StandardMaterial('ground', scene);
  ground1.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
  ground1.material.alpha = 1;
  ground1.material.backFaceCulling = false;

  ////////////////////////////end of ground////////////////////////////////////////

  ///////////////////////////////Bonus/////////////////////////////////////

  //when player touched this obj with this function, increase player's lifeTime
  function timeBonus(obj, number, visibleAlter) {
    obj.actionManager = new BABYLON.ActionManager(scene);
    if (obj.isVisible == true) {
      obj.actionManager.registerAction(
        new BABYLON.CombineAction({
          trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
          parameter: {
            mesh: player,
            usePreciseIntersection: true
          }
        }, [(
          //To set objects invisible after touch player
          new BABYLON.SetValueAction({
              trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
              parameter: {
                mesh: player,
                usePreciseIntersection: true
              }
            },
            obj,
            "isVisible",
            visibleAlter
          )
        ), (
          //to add life time to player
          new BABYLON.IncrementValueAction({
              trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
              parameter: {
                mesh: player,
                usePreciseIntersection: true
              }
            },
            player,
            "lifeTime",
            number
          )
        )]));

    }
  }
  ///////////////////////////////End of bonus/////////////////////////////////////

  //////////////////////////object in the scene///////////////////////////////

  /////////////////A test player////////////////////
  //create a sphere
  const sphere = BABYLON.Mesh.CreateSphere("sphere0", 16, 0.3, scene);
  sphere.position.y = 0.25;
  sphere.change = 0;
  sphere.direct = 1;
  sphere.playerStep = 0;
  sphere.lifeTime = 35;
  sphere.isVisible = false;
  sphere.isEscaped = false;

  //a custom funtion by Howard, to control an object by keyboard WSAD
  //movingControlType2(camera, object, movingSpeed, rotationStep, movingDistance,lifeTime)
  var player = sphere;
  //light1.parent = player;
  movingControlType2(camera, player, 0.02, 10, 1);

  //material of Sphere
  sphere.material = new BABYLON.StandardMaterial('sphere', scene);
  sphere.material.wireframe = true;


  //////////////A test object, auto moving, with timeBonus/////////////////
  //create a sphere at (0,1)
  /*const sphere1 = BABYLON.Mesh.CreateSphere("sphere1", 16, 0.2, scene);
  sphere1.position = new BABYLON.Vector3(0, 0.25, 6);
  //var gl = new BABYLON.GlowLayer("glow", scene);
  //gl.addIncludedOnlyMesh(sphere1);
  sphere1.change = 0;
  sphere1.step = 0;
  timeBonus(sphere1, 5, false);

  //material of Sphere
  sphere1.material = new BABYLON.StandardMaterial('sphere', scene);
  sphere1.material.emissiveColor = new BABYLON.Color3(0.3, 0.3, 1);
  //simple of auto-move object
  scene.onBeforeRenderObservable.add(function() {
    if (sphere1.change == 0) {
      switch (sphere1.step) {
        case 0:
          moveGrid(sphere1, 'x', 0.01, 1);
          sphere1.step++;
          break;

        case 1:
          moveGrid(sphere1, '-x', 0.02, 1);
          sphere1.step++;
          break;

        case 2:
          delay(sphere1, 2);
          sphere1.step++;
          break;

        case 3:
          moveGrid(sphere1, '-xz', 0.04, 3);
          sphere1.step++;
          break;

        case 4:
          moveGrid(sphere1, 'x-z', 0.04, 3);
          sphere1.step++;
          break;

        default:
          sphere1.step = 0;
      }

      console.log(sphere1.name + " is in step " + sphere1.step);
      console.log(sphere1.isVisible);
    }
  });
  sphere1.isVisible  = false;
  ////////////////////////A test object//////////////////////////
  //create a sphere at (3,3)
  const sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 16, 0.5, scene);
  sphere2.position = new BABYLON.Vector3(3, 0.25, 3);
  sphere2.change = 0;
  sphere2.step = 0;
  //player's HP - 50
  timeBonus(sphere2, -50, true);

  sphere2.material = new BABYLON.StandardMaterial('sphere', scene);
  sphere2.material.diffuseColor = new BABYLON.Color3(0.6, 0.2, 0.2);
  sphere2.isVisible = false;*/
  ////////////////////////////////////////////////////////////////////////
  //import mesh
  BABYLON.SceneLoader.ImportMesh("", '', 'whiteSoldier.obj', scene, function(newMeshes) {
    console.log(newMeshes);
    for (let i = 0; i < newMeshes.length; i++) {
      //the mother
      newMeshes[i].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
      newMeshes[i].position.x = 0;
      newMeshes[i].rotation.y = Math.PI / 2;
      newMeshes[i].isVisible = true;
      newMeshes[i].change = 0;
      newMeshes[i].direct = 1;
      movingControlType3(newMeshes[i], 0.02, 10, 1);
      newMeshes[i].material = nodeMaterial;
    }
/////////////////set scene/////////////////////
  });

  //import gate
 BABYLON.SceneLoader.ImportMesh("", '', 'gate.obj', scene, function(gate) {
   for (let i = 0; i < gate.length; i++) {
     //the mother
     gate[i].scaling = new BABYLON.Vector3(0.15, 0.15, 0.15);
     gate[i].position.x = 0;
     gate[i].position.y = -0.5;
     gate[i].position.z = 45;
     //gate[i].rotation.y = 2.5;
     gate[i].isVisible = true;
     gate[i].change = 0;
     gate[i].direct = 1;
     //timeBonus(gate[i], 0, true);
     gate[i].actionManager = new BABYLON.ActionManager(scene);
     gate[i].actionManager.registerAction(
    new BABYLON.SetValueAction(
        {
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: {
                mesh: player,
                usePreciseIntersection: true
            }
        },
        sphere,
        "isEscaped",
        true
    )
);

   }
 });

  //import horsehead
  BABYLON.SceneLoader.ImportMesh("", '', 'horsehead.obj', scene, function(horsehead) {
    for (let i = 0; i < horsehead.length; i++) {
      //the mother
      horsehead[i].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
      horsehead[i].position.x = -4;
      horsehead[i].position.y = 1.2;
      horsehead[i].position.z = 15;
      horsehead[i].rotation.x = -3 * Math.PI / 4;
      horsehead[i].rotation.y = Math.PI / 2;
      horsehead[i].isVisible = true;
      horsehead[i].change = 0;
      horsehead[i].direct = 1;
      timeBonus(horsehead[i], 25, true);
      horsehead[i].material = nodeMaterial1;
      }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'horsehead.obj', scene, function(horsehead) {
    for (let i = 0; i < horsehead.length; i++) {
      //the mother
      horsehead[i].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
      horsehead[i].position.x = 4;
      horsehead[i].position.y = 1.2;
      horsehead[i].position.z = 15;
      horsehead[i].rotation.x = -3 * Math.PI / 4;
      horsehead[i].rotation.y = -Math.PI / 2;
      horsehead[i].isVisible = true;
      horsehead[i].change = 0;
      horsehead[i].direct = 1;
      timeBonus(horsehead[i], 25, true);
      horsehead[i].material = nodeMaterial1;
      }
  });
  //import blackHorse around the horsehead
  BABYLON.SceneLoader.ImportMesh("", '', 'blackHorse.obj', scene, function(blackHorse) {
    for (let i = 0; i < blackHorse.length; i++) {
      //the mother
      blackHorse[i].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
      blackHorse[i].position.x = -7;
      blackHorse[i].position.z = 18;
      blackHorse[i].rotation.y = 2;
      blackHorse[i].isVisible = true;
      blackHorse[i].change = 0;
      blackHorse[i].direct = 1;
      blackHorse[i].material = nodeMaterial1;
      timeBonus(blackHorse[i], -100, false);

    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackHorse.obj', scene, function(blackHorse2) {
    for (let i = 0; i < blackHorse2.length; i++) {
      //the mother
      blackHorse2[i].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
      blackHorse2[i].position.x = -5;
      blackHorse2[i].position.z = 20;
      blackHorse2[i].rotation.y = 2.5;
      blackHorse2[i].isVisible = true;
      blackHorse2[i].change = 0;
      blackHorse2[i].direct = 1;
      blackHorse2[i].material = nodeMaterial1;
      timeBonus(blackHorse2[i], -100, false);
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackHorse.obj', scene, function(blackHorse2) {
    for (let i = 0; i < blackHorse2.length; i++) {
      //the mother
      blackHorse2[i].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
      blackHorse2[i].position.x = 4.2;
      blackHorse2[i].position.z = 4.5;
      blackHorse2[i].position.y = -1;
      blackHorse2[i].rotation.x = -Math.PI/12;
      blackHorse2[i].rotation.z = -Math.PI/10;
      blackHorse2[i].isVisible = true;
      blackHorse2[i].change = 0;
      blackHorse2[i].direct = 1;
      blackHorse2[i].material = nodeMaterial1;
      timeBonus(blackHorse2[i], -100, false);
    }
  });


  //import blackSoldier as 2 walls at the start point
  BABYLON.SceneLoader.ImportMesh("", '', 'blackSoldier.obj', scene, function(blackSoldier) {
    for (let i = 0; i < blackSoldier.length; i++) {
      blackSoldier[i].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
      blackSoldier[i].position.x = -1.5;
      blackSoldier[i].rotation.y = Math.PI/2;
      blackSoldier[i].isVisible = true;
      blackSoldier[i].change = 0;
      blackSoldier[i].direct = 1;
      blackSoldier[i].material = nodeMaterial1;
      timeBonus(blackSoldier[i], -1000, true);
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackSoldier.obj', scene, function(blackSoldier2) {
    for (let i = 0; i < blackSoldier2.length; i++) {
      blackSoldier2[i].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
      blackSoldier2[i].position.x = -1.5;
      blackSoldier2[i].position.z = 1.5;
      blackSoldier2[i].isVisible = true;
      blackSoldier2[i].change = 0;
      blackSoldier2[i].direct = 1;

      blackSoldier2[i].material = nodeMaterial1;
      timeBonus(blackSoldier2[i], -1000, true);
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackSoldier.obj', scene, function(blackSoldier3) {
    for (let i = 0; i < blackSoldier3.length; i++) {
      blackSoldier3[i].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
      blackSoldier3[i].position.x = -1.5;
      blackSoldier3[i].position.z = 3;
      blackSoldier3[i].isVisible = true;
      blackSoldier3[i].change = 0;
      blackSoldier3[i].direct = 1;
      timeBonus(blackSoldier3[i], -1000, true);
      blackSoldier3[i].material = nodeMaterial1;
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackSoldier.obj', scene, function(blackSoldier4) {
    for (let i = 0; i < blackSoldier4.length; i++) {
      blackSoldier4[i].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
      blackSoldier4[i].position.x = 1.3;
      blackSoldier4[i].isVisible = true;
      blackSoldier4[i].change = 0;
      blackSoldier4[i].direct = 1;
      blackSoldier4[i].material = nodeMaterial1;
      timeBonus(blackSoldier4[i], -1000, true);
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackSoldier.obj', scene, function(blackSoldier5) {
    for (let i = 0; i < blackSoldier5.length; i++) {
      blackSoldier5[i].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
      blackSoldier5[i].position.x = 1.3;
      blackSoldier5[i].position.z = 1.5;
      blackSoldier5[i].isVisible = true;
      blackSoldier5[i].change = 0;
      blackSoldier5[i].direct = 1;
      timeBonus(blackSoldier5[i], -1000, true);
      blackSoldier5[i].material = nodeMaterial1;
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackSoldier.obj', scene, function(blackSoldier6) {
    for (let i = 0; i < blackSoldier6.length; i++) {
      blackSoldier6[i].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
      blackSoldier6[i].position.x = 1.3;
      blackSoldier6[i].position.z = 3;
      blackSoldier6[i].isVisible = true;
      blackSoldier6[i].change = 0;
      blackSoldier6[i].direct = 1;
      timeBonus(blackSoldier6[i], -1000, true);
      blackSoldier6[i].material = nodeMaterial1;
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackSoldier.obj', scene, function(blackSoldier7) {
    for (let i = 0; i < blackSoldier7.length; i++) {
      blackSoldier7[i].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
      blackSoldier7[i].position.x = -0.1;
      blackSoldier7[i].position.z = -2.4;
      blackSoldier7[i].isVisible = true;
      blackSoldier7[i].change = 0;
      blackSoldier7[i].direct = 1;
      timeBonus(blackSoldier7[i], -1000, true);
      blackSoldier7[i].material = nodeMaterial1;
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackSoldier.obj', scene, function(blackSoldier8) {
    for (let i = 0; i < blackSoldier8.length; i++) {
      blackSoldier8[i].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
      blackSoldier8[i].position.x = -2;
      blackSoldier8[i].position.z = -1.8;
      blackSoldier8[i].isVisible = true;
      blackSoldier8[i].change = 0;
      blackSoldier8[i].direct = 1;
      timeBonus(blackSoldier8[i], -1000, true);
      blackSoldier8[i].material = nodeMaterial1;
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackSoldier.obj', scene, function(blackSoldier9) {
    for (let i = 0; i < blackSoldier9.length; i++) {
      blackSoldier9[i].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
      blackSoldier9[i].position.x = 1.8;
      blackSoldier9[i].position.z = -1.8;
      blackSoldier9[i].isVisible = true;
      blackSoldier9[i].change = 0;
      blackSoldier9[i].direct = 1;
      timeBonus(blackSoldier9[i], -1000, true);
      blackSoldier9[i].material = nodeMaterial1;
    }
  });






  ////////////////Animation//////////////////////

  /*var animationBox = new BABYLON.Animation("myAnimation", "positio



  n", 60,
  BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_LOOP);

  var keys = [];

  keys.push({frame: 0,value: 2.5});
  keys.push({frame: 10,value: 3});
  keys.push({frame: 20,value: 4});
  keys.push({frame: 40,value: 6});
  keys.push({frame: 60,value: 15});
  keys.push({frame: 75,value: 15});
  keys.push({frame: 90,value: 2.5});
  keys.push({frame: 100,value: 2.5});
  keys.push({frame: 140,value: 2.5});

  animationBox.setKeys(keys);
  whiteSoldier2.animations = [];
  whiteSoldier2.animations.push(animationBox);

  scene.beginAnimation(whiteSoldier2, 0, 140, true);*/



  ////////////////////////////////////////////////////////////////////////level set start///////////
  //import blackRook
  BABYLON.SceneLoader.ImportMesh("", '', 'blackRook.obj', scene, function(blackRook) {
    for (let i = 0; i < blackRook.length; i++) {
      blackRook[i].scaling = new BABYLON.Vector3(1, 1, 1);
      blackRook[i].position.x = 6;
      blackRook[i].position.y = -0.3;
      blackRook[i].position.z = 9.4;
      blackRook[i].isVisible = true;
      blackRook[i].change = 0;
      blackRook[i].direct = 1;
      timeBonus(blackRook[i], -1000, true);
      blackRook[i].material = nodeMaterial1;
      //auto-moving of blackRook
      scene.onBeforeRenderObservable.add(function() {
        if (blackRook[i].change == 0) {
          switch (blackRook[i].step) {
            case 0:
              delay(blackRook[i], 4);
              blackRook[i].step++;
              break;
            case 1:
              moveGrid(blackRook[i], '-x', 0.2, 3);
              blackRook[i].step++;
              break;
            case 2:
              moveGrid(blackRook[i], 'x', 0.2, 3);
              blackRook[i].step++;
              break;
            case 3:
              delay(blackRook[i], 3);
              blackRook[i].step++;
              break;
            case 4:
              moveGrid(blackRook[i], '-x', 0.2, 3);
              blackRook[i].step++;
              break;
            case 5:
              moveGrid(blackRook[i], 'x', 0.2, 3);
              blackRook[i].step++;
              break;
            default:
              blackRook[i].step = 0;
          }
        }
      });
    }
  });

  BABYLON.SceneLoader.ImportMesh("", '', 'blackRook.obj', scene, function(blackRook) {
    for (let i = 0; i < blackRook.length; i++) {
      blackRook[i].scaling = new BABYLON.Vector3(1, 1, 1);
      blackRook[i].position.x = 7;
      blackRook[i].position.y = -0.3;
      blackRook[i].position.z = 15.4;
      blackRook[i].isVisible = true;
      blackRook[i].change = 0;
      blackRook[i].direct = 1;
      timeBonus(blackRook[i], -1000, true);
      blackRook[i].material = nodeMaterial1;
      //auto-moving of blackRook
      scene.onBeforeRenderObservable.add(function() {
        if (blackRook[i].change == 0) {
          switch (blackRook[i].step) {
            case 0:

              moveGrid(blackRook[i], 'x', 0.2, 4);
              blackRook[i].step++;
              break;
            case 1:
            delay(blackRook[i], 4);
            blackRook[i].step++;
            break;
            case 2:
              moveGrid(blackRook[i], '-x', 0.2, 4);
              blackRook[i].step++;
              break;
            case 3:
              delay(blackRook[i], 3);
              blackRook[i].step++;
              break;
            case 4:
              moveGrid(blackRook[i], 'x', 0.2, 4);
              blackRook[i].step++;
              break;
            case 5:
              moveGrid(blackRook[i], '-x', 0.2, 4);
              blackRook[i].step++;
              break;
            default:
              blackRook[i].step = 0;
          }
        }
      });
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackRook.obj', scene, function(blackRook) {
    for (let i = 0; i < blackRook.length; i++) {
      blackRook[i].scaling = new BABYLON.Vector3(1, 1, 1);
      blackRook[i].position.x = 2;
      blackRook[i].position.y = -0.3;
      blackRook[i].position.z = 40;
      blackRook[i].isVisible = true;
      blackRook[i].change = 0;
      blackRook[i].direct = 1;
      timeBonus(blackRook[i], -1000, true);
      blackRook[i].material = nodeMaterial1;
      //auto-moving of blackRook
      scene.onBeforeRenderObservable.add(function() {
        if (blackRook[i].change == 0) {
          switch (blackRook[i].step) {
            case 0:

              moveGrid(blackRook[i], 'x', 0.3, 8);
              blackRook[i].step++;
              break;
            case 1:
            delay(blackRook[i], 2);
            blackRook[i].step++;
            break;
            case 2:
              moveGrid(blackRook[i], '-x', 0.4, 8);
              blackRook[i].step++;
              break;
            case 3:
              delay(blackRook[i], 3);
              blackRook[i].step++;
              break;
            case 4:
              moveGrid(blackRook[i], 'x', 0.2, 8);
              blackRook[i].step++;
              break;
            case 5:
              moveGrid(blackRook[i], '-x', 0.2, 8);
              blackRook[i].step++;
              break;
            default:
              blackRook[i].step = 0;
          }
        }
      });
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackRook.obj', scene, function(blackRook2) {
    for (let i = 0; i < blackRook2.length; i++) {
      blackRook2[i].scaling = new BABYLON.Vector3(2,2,2);
      blackRook2[i].position.x = 9.6;
      blackRook2[i].position.y = -0.7;
      blackRook2[i].position.z = 30;
      blackRook2[i].alpha = 0.5;
      blackRook2[i].change = 0;
      blackRook2[i].direct = 1;
      timeBonus(blackRook2[i], -1000, true);
      blackRook2[i].material = nodeMaterial1;
      //auto-moving of blackRook
      scene.onBeforeRenderObservable.add(function() {
        if (blackRook2[i].change == 0) {
          switch (blackRook2[i].step) {
            case 0:
              delay(blackRook2[i], 3);
              blackRook2[i].step++;
              break;
            case 1:
              blackRook2[i].alpha = 0.7;
              moveGrid(blackRook2[i], '-z', 0.1, 3);
              blackRook2[i].step++;
              break;
            case 2:
              blackRook2[i].alpha = 1;
              moveGrid(blackRook2[i], '-z', 0.7, 9.4);
              blackRook2[i].step++;
              break;
            case 3:
              delay(blackRook2[i], 0.5);
              blackRook2[i].step++;
              break;
            case 4:
              moveGrid(blackRook2[i], 'z', 1.2, 12.4);
              blackRook2[i].step++;
              break;
            default:
              blackRook2[i].step = 0;
              blackRook2[i].alpha = 0.5;
          }
        }
      });
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackRook.obj', scene, function(blackRook3) {
    for (let i = 0; i < blackRook3.length; i++) {
      blackRook3[i].scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
      blackRook3[i].position.x = 1;
      blackRook3[i].position.z = 8;
      blackRook3[i].position.y = -0.1;
      blackRook3[i].isVisible = true;
      blackRook3[i].change = 0;
      blackRook3[i].direct = 1;
      timeBonus(blackRook3[i], -1000, true);
      blackRook3[i].material = nodeMaterial1;
      //auto-moving of blackRook
      scene.onBeforeRenderObservable.add(function() {
        if (blackRook3[i].change == 0) {
          switch (blackRook3[i].step) {
            case 0:
              delay(blackRook3[i], 1);
              blackRook3[i].step++;
              break;
            case 1:
              moveGrid(blackRook3[i], 'z', 0.5, 4);
              blackRook3[i].step++;
              break;
            case 2:
              moveGrid(blackRook3[i], '-z', 0.4, 4);
              blackRook3[i].step++;
              break;
            case 3:
              delay(blackRook3[i], 1);
              blackRook3[i].step++;
              break;
            case 4:
              moveGrid(blackRook3[i], 'z', 0.2, 4);
              blackRook3[i].step++;
              break;
            case 5:
              moveGrid(blackRook3[i], '-z', 0.5, 4);
              blackRook3[i].step++;
              break;
            default:
              blackRook3[i].step = 0;
          }
        }
      });
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackRook.obj', scene, function(blackRook4) {
    for (let i = 0; i < blackRook4.length; i++) {
      blackRook4[i].scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
      blackRook4[i].position.x = 6;
      blackRook4[i].position.z = 8;
      blackRook4[i].isVisible = true;
      blackRook4[i].position.y = -0.1;
      blackRook4[i].change = 0;
      blackRook4[i].direct = 1;
      blackRook4[i].material = nodeMaterial1;
      timeBonus(blackRook4[i], -1000, true);
      //auto-moving of blackRook
      scene.onBeforeRenderObservable.add(function() {
        if (blackRook4[i].change == 0) {
          switch (blackRook4[i].step) {
            case 0:
              delay(blackRook4[i], 1);
              blackRook4[i].step++;
              break;
            case 1:
              moveGrid(blackRook4[i], 'z', 0.5, 6);
              blackRook4[i].step++;
              break;
            case 2:
              moveGrid(blackRook4[i], '-z', 0.4, 6);
              blackRook4[i].step++;
              break;
            case 3:
              delay(blackRook4[i], 1);
              blackRook4[i].step++;
              break;
            case 4:
              moveGrid(blackRook4[i], 'z', 0.2, 6);
              blackRook4[i].step++;
              break;
            case 5:
              moveGrid(blackRook4[i], '-z', 0.5, 6);
              blackRook4[i].step++;
              break;
            default:
              blackRook4[i].step = 0;
          }
        }
      });
    }
  });

  /*BABYLON.SceneLoader.ImportMesh("", '', 'blackRook.obj', scene, function(blackRook5) {
    for (let i = 0; i < blackRook5.length; i++) {
      blackRook5[i].scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
      blackRook5[i].position.x = 3;
      blackRook5[i].position.z = 38;
      blackRook5[i].isVisible = true;
      blackRook5[i].change = 0;
      blackRook5[i].direct = 1;

      timeBonus(blackRook5[i], -1000, true);
      //auto-moving of blackRook
      scene.onBeforeRenderObservable.add(function() {
        if (blackRook5[i].change == 0) {
          switch (blackRook5[i].step) {
            case 0:
              delay(blackRook5[i], 2);
              blackRook5[i].step++;
              break;
            case 1:
              moveGrid(blackRook5[i], '-z', 0.7, 15);
              blackRook5[i].step++;
              break;
            case 2:
              moveGrid(blackRook5[i], 'z', 0.7, 15);
              blackRook5[i].step++;
              break;
            case 3:
              delay(blackRook5[i], 3);
              blackRook5[i].step++;
              break;
            case 4:
              moveGrid(blackRook5[i], '-z', 0.7, 15);
              blackRook5[i].step++;
              break;
            case 5:
              moveGrid(blackRook5[i], 'z', 0.7, 15);
              blackRook5[i].step++;
              break;
            default:
              blackRook5[i].step = 0;
          }
        }
      });
    }
  });*/

  //import blackKing
  BABYLON.SceneLoader.ImportMesh("", '', 'blackKing.obj', scene, function(blackKing) {
    for (let i = 0; i < blackKing.length; i++) {
      //the mother
      blackKing[i].scaling = new BABYLON.Vector3(3, 3, 3);
      blackKing[i].position.x = 3;
      blackKing[i].position.z = 10;
      blackKing[i].position.y = -10;
      blackKing[i].rotation.y = Math.PI/2;
      blackKing[i].rotation.x = Math.PI/4;
      blackKing[i].isVisible = true;
      blackKing[i].change = 0;
      blackKing[i].direct = 1;
      timeBonus(blackKing[i], -1000, true);
      blackKing[i].material = nodeMaterial1;
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackKing.obj', scene, function(blackKing) {
    for (let i = 0; i < blackKing.length; i++) {
      //the mother
      blackKing[i].scaling = new BABYLON.Vector3(3, 3, 3);
      blackKing[i].position.x = 3;
      blackKing[i].position.z = 12;
      blackKing[i].position.y = -7;
      blackKing[i].rotation.y = Math.PI/3;
      blackKing[i].rotation.x = Math.PI/7;
      blackKing[i].isVisible = true;
      blackKing[i].change = 0;
      blackKing[i].direct = 1;
      timeBonus(blackKing[i], -1000, true);
      blackKing[i].material = nodeMaterial1;
    }
  });
  //import blackQueen
  BABYLON.SceneLoader.ImportMesh("", '', 'blackQueen.obj', scene, function(blackQueen) {
    for (let i = 0; i < blackQueen.length; i++) {
      //the mother
      blackQueen[i].scaling = new BABYLON.Vector3(4.5, 4.5, 4.5);
      blackQueen[i].position.x = 13;
      blackQueen[i].position.z = 50;
      blackQueen[i].position.y = 0;
    //  blackQueen[i].rotation.y = Math.PI/2;
      blackQueen[i].rotation.z = Math.PI/5;
      //blackQueen[i].rotation.x = -Math.PI/4;
      blackQueen[i].isVisible = true;
      blackQueen[i].change = 0;
      blackQueen[i].direct = 1;
      blackQueen[i].material = nodeMaterial1
      timeBonus(blackQueen[i], -1000, true);

    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackQueen.obj', scene, function(blackQueen) {
    for (let i = 0; i < blackQueen.length; i++) {
      //the mother
      blackQueen[i].scaling = new BABYLON.Vector3(4, 4, 4);
      blackQueen[i].position.x = 8;
      blackQueen[i].position.z = 26;
      blackQueen[i].position.y = 1;
    //blackQueen[i].rotation.y = Math.PI/5;
      blackQueen[i].rotation.z = Math.PI/5;
      //blackQueen[i].rotation.x = -Math.PI/4;
      blackQueen[i].isVisible = true;
      blackQueen[i].change = 0;
      blackQueen[i].direct = 1;
      blackQueen[i].material = nodeMaterial1
      timeBonus(blackQueen[i], -1000, true);

    }
  });


  //import blackBishop
  BABYLON.SceneLoader.ImportMesh("", '', 'blackBishop.obj', scene, function(blackBishop) {
    for (let i = 0; i < blackBishop.length; i++) {
      blackBishop[i].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
      blackBishop[i].position.x = 0;
      blackBishop[i].position.z = 40;
      blackBishop[i].position.y = -0.4;
      blackBishop[i].isVisible = true;
      blackBishop[i].change = 0;
      blackBishop[i].direct = 1;
      blackBishop[i].material = nodeMaterial1
      timeBonus(blackBishop[i], -1000, true);
      scene.onBeforeRenderObservable.add(function() {
        if (blackBishop[i].change == 0) {
          switch (blackBishop[i].step) {
            case 0:
              delay(blackBishop[i], 2);
              blackBishop[i].step++;
              break;
            case 1:
              jumpMove(blackBishop[i], '-x-z', 0.5, 2);
              blackBishop[i].step++;
              break;
            case 2:
              delay(blackBishop[i], 2);
              blackBishop[i].step++;
              break;
            case 3:
              jumpMove(blackBishop[i], 'x-z', 0.5, 2);
              blackBishop[i].step++;
              break;
            case 4:
              delay(blackBishop[i], 2);
              blackBishop[i].step++;
              break;
            case 5:
              jumpMove(blackBishop[i], '-xz', 0.5, 2);
              blackBishop[i].step++;
              break;
            case 6:
              delay(blackBishop[i], 2);
              blackBishop[i].step++;
              break;
            case 7:
              jumpMove(blackBishop[i], 'xz', 0.5, 2);
              blackBishop[i].step++;
              break;
            default:
              blackBishop[i].step = 0;
          }
        }
      });
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackBishop.obj', scene, function(blackBishop2) {
    for (let i = 0; i < blackBishop2.length; i++) {
      blackBishop2[i].scaling = new BABYLON.Vector3(1.8, 1.8, 1.8);
      blackBishop2[i].position.x = -4;
      blackBishop2[i].position.z = 40;
      blackBishop2[i].position.y = -0.6
      blackBishop2[i].isVisible = true;
      blackBishop2[i].change = 0;
      blackBishop2[i].direct = 1;
      blackBishop2[i].material = nodeMaterial1
      timeBonus(blackBishop2[i], -1000, true);
      scene.onBeforeRenderObservable.add(function() {
        if (blackBishop2[i].change == 0) {
          switch (blackBishop2[i].step) {
            case 0:
              delay(blackBishop2[i], 1);
              blackBishop2[i].step++;
              break;
            case 1:
              jumpMove(blackBishop2[i], '-x-z', 0.1, 2);
              blackBishop2[i].step++;
              break;
            case 2:
              delay(blackBishop2[i], 2);
              blackBishop2[i].step++;
              break;
            case 3:
              jumpMove(blackBishop2[i], '-xz', 0.1, 2);
              blackBishop2[i].step++;
              break;
            case 4:
              delay(blackBishop2[i], 1);
              blackBishop2[i].step++;
              break;
            case 5:
              jumpMove(blackBishop2[i], '-x-z', 0.1, 2);
              blackBishop2[i].step++;
                break;
            case 6:
                delay(blackBishop2[i], 2);
                blackBishop2[i].step++;
                break;
            case 7:
                jumpMove(blackBishop2[i], '-xz', 0.1, 2);
                blackBishop2[i].step++;
                break;
            case 8:
                delay(blackBishop2[i], 1);
                blackBishop2[i].step++;
                break;
            case 9:
              jumpMove(blackBishop2[i], 'x-z', 0.3, 2);
              blackBishop2[i].step++;
              break;
            case 10:
              delay(blackBishop2[i], 2);
              blackBishop2[i].step++;
              break;
            case 11:
              jumpMove(blackBishop2[i], 'xz', 0.2, 2);
              blackBishop2[i].step++;
              break;
            case 12:
              delay(blackBishop2[i], 1);
              blackBishop2[i].step++;
              break;
            case 13:
                jumpMove(blackBishop2[i], 'x-z', 0.3, 2);
                blackBishop2[i].step++;
                break;
            case 14:
                delay(blackBishop2[i], 2);
                blackBishop2[i].step++;
                break;
            case 15:
                jumpMove(blackBishop2[i], 'xz', 0.2, 2);
                blackBishop2[i].step++;
                break;
            default:
              blackBishop2[i].step = 0;
          }
        }
      });
    }
  });
  BABYLON.SceneLoader.ImportMesh("", '', 'blackBishop.obj', scene, function(blackBishop2) {
    for (let i = 0; i < blackBishop2.length; i++) {
      blackBishop2[i].scaling = new BABYLON.Vector3(1.8, 1.8, 1.8);
      blackBishop2[i].position.x = 0;
      blackBishop2[i].position.z = 37;
      blackBishop2[i].position.y = -0.6
      blackBishop2[i].isVisible = true;
      blackBishop2[i].change = 0;
      blackBishop2[i].direct = 1;
      blackBishop2[i].material = nodeMaterial1
      timeBonus(blackBishop2[i], -1000, true);
      scene.onBeforeRenderObservable.add(function() {
        if (blackBishop2[i].change == 0) {
          switch (blackBishop2[i].step) {
            case 0:
              delay(blackBishop2[i], 1);
              blackBishop2[i].step++;
              break;
            case 1:
              jumpMove(blackBishop2[i], '-x-z', 0.1, 2);
              blackBishop2[i].step++;
              break;
            case 2:
              delay(blackBishop2[i], 2);
              blackBishop2[i].step++;
              break;
            case 3:
              jumpMove(blackBishop2[i], '-xz', 0.2, 2);
              blackBishop2[i].step++;
              break;
            case 4:
              delay(blackBishop2[i], 1);
              blackBishop2[i].step++;
              break;
            case 5:
              jumpMove(blackBishop2[i], '-x-z', 0.1, 2);
              blackBishop2[i].step++;
                break;
            case 6:
                delay(blackBishop2[i], 2);
                blackBishop2[i].step++;
                break;
            case 7:
                jumpMove(blackBishop2[i], '-xz', 0.2, 2);
                blackBishop2[i].step++;
                break;
            case 8:
                delay(blackBishop2[i], 1);
                blackBishop2[i].step++;
                break;
            case 9:
              jumpMove(blackBishop2[i], 'x-z', 0.3, 2);
              blackBishop2[i].step++;
              break;
            case 10:
              delay(blackBishop2[i], 2);
              blackBishop2[i].step++;
              break;
            case 11:
              jumpMove(blackBishop2[i], 'xz', 0.3, 2);
              blackBishop2[i].step++;
              break;
            case 12:
              delay(blackBishop2[i], 1);
              blackBishop2[i].step++;
              break;
            case 13:
                jumpMove(blackBishop2[i], 'x-z', 0.4, 2);
                blackBishop2[i].step++;
                break;
            case 14:
                delay(blackBishop2[i], 2);
                blackBishop2[i].step++;
                break;
            case 15:
                jumpMove(blackBishop2[i], 'xz', 0.1, 2);
                blackBishop2[i].step++;
                break;
            default:
              blackBishop2[i].step = 0;
          }
        }
      });
    }
  });

  BABYLON.SceneLoader.ImportMesh("", '', 'blackBishop.obj', scene, function(blackBishop) {
    for (let i = 0; i < blackBishop.length; i++) {
      blackBishop[i].scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);
      blackBishop[i].position.x = 0;
      blackBishop[i].position.z = 30;
      blackBishop[i].position.y = -0.4;
      blackBishop[i].isVisible = true;
      blackBishop[i].change = 0;
      blackBishop[i].direct = 1;
      blackBishop[i].material = nodeMaterial1
      timeBonus(blackBishop[i], -1000, true);
      scene.onBeforeRenderObservable.add(function() {
        if (blackBishop[i].change == 0) {
          switch (blackBishop[i].step) {
            case 0:
              delay(blackBishop[i], 2);
              blackBishop[i].step++;
              break;
            case 1:
              jumpMove(blackBishop[i], '-x-z', 0.3, 2);
              blackBishop[i].step++;
              break;
            case 2:
              delay(blackBishop[i], 2);
              blackBishop[i].step++;
              break;
            case 3:
              jumpMove(blackBishop[i], 'x-z', 0.3, 2);
              blackBishop[i].step++;
              break;
            case 4:
              delay(blackBishop[i], 2);
              blackBishop[i].step++;
              break;
            case 5:
              jumpMove(blackBishop[i], '-xz', 0.4, 2);
              blackBishop[i].step++;
              break;
            case 6:
              delay(blackBishop[i], 2);
              blackBishop[i].step++;
              break;
            case 7:
              jumpMove(blackBishop[i], 'xz', 0.6, 2);
              blackBishop[i].step++;
              break;
            default:
              blackBishop[i].step = 0;
          }
        }
      });
    }
  });
    ////////////////////////////////////////////////////////////////////////

  /////////level set end/////////


///////////////game start & game over END///////////////
/*let frontCanv=document.getElementById("frontCanv");
let w = 0.3*window.innerWidth;
frontCanv.width = w;
let h = 0.3*window.innerHeight;
frontCanv.height = h;
let ctx = frontCanv.getContext("2d");
ctx.fillStyle = "rgba(0.2,0,0,0.8)";
ctx.textAlign="center";
ctx.font = "5vw pixel"
ctx.fillRect(0,0,w,h);
ctx.fillStyle = "Blue";
ctx.fillText("Press Any Key To Escape", 0.5*w,0.45*h);*/
////////////////game start & game over END/////////////


  let isDEAD = false;
  let entered1 = false;
  let entered2 = false;


  function initialize() {
    bgMusic.play();
    sphere.position.y = 0.25;
    sphere.change = 0;
    sphere.direct = 1;
    sphere.rotation.y = 0;
    sphere.playerStep = 0;
    sphere.lifeTime = 35;
    sphere.isVisible = false;

    //sphere1.isVisible = true;
    //sphere2.isVisible = false;
    sphere.isEscaped = false;
    isDEAD = false;
  }


  scene.onBeforeRenderObservable.add(function() {
    vegnitte.vignetteWeight = 35 - (player.lifeTime - player.playerStep);
    if(vegnitte.vignetteWeight>30){
      vegnitte.vignetteWeight=30;
    }

    if ((player.lifeTime - player.playerStep <= 0) && isDEAD == false && !entered1){
        entered1 = true;
      alert('PRESS ANYKEY TO START\nW S to control, A D to rotate\nDONT WASTE YOUR MOVE');
    } else if((player.lifeTime - player.playerStep <= 0) && isDEAD == false){

      player.isVisible = false;
      isDEAD = true;
      deadSound.play();
      if(player.lifeTime - player.playerStep<=-10){
        alert('YOU ARE KILLED BY YOUR ENEMY');
      }//determine if player die because enemy
      else{
        alert("YOUR STEPS RUNS OUT, YOU ARE TRAPPED HERE");
      }


    }
    if(sphere.isEscaped){


      if(entered1&&!(entered2)&&sphere.isEscaped){
        entered2 = true;
        sphere.isEscaped = false;
        console.log("enter2 is true");
        //window.close();
      }
      if(entered1&&entered2&&sphere.isEscaped){
        sphere.isEscaped = false;
        alert("YOU ESCSPED, BUT TO WHERE?")
        alert("BYEBYE");
        alert("HAVE A GOOD DREAM");
        window.close();
      }
      console.log(entered1,entered2);
    }

  });
  /////////camera effect///////
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
    pipeline.grain.intensity = 10;
    pipeline.grain.animated = true;
    pipeline.chromaticAberrationEnabled = true;
    pipeline.chromaticAberration.aberrationAmount = 65.1;
    pipeline.chromaticAberration.radialIntensity = 2;
    pipeline.sharpenEnabled = true;
    pipeline.sharpen.edgeAmount = 0.15;
  }
  addPostEffects();

  let vegnitte = new BABYLON.ImageProcessingPostProcess("processing", 1.0, camera);

  vegnitte.vignetteStretch = 1;
  vegnitte.vignetteColor = new BABYLON.Color4(1, 0.2, 0.2, 0.5);
  vegnitte.vignetteEnabled = true;
  ////////////////camera effect end///////

  //////////////////////////object in the scene///////////////////////////////

  ///////////sound effect/////////
  let deadSound = new Audio();
  deadSound.src = "dead.mp3";
  deadSound.volume = 0.3;
  deadSound.loop = false;
  let bgMusic = new Audio();/////backgroundMusic
  bgMusic.src = "bgmusic.mp3";
  bgMusic.loop = true;
  bgMusic.volume = 0.3;
  //////////////////////

  /////////////////////////backnewMeshes and skybox//////////////////////////////////
    let VideoTexture = new BABYLON.VideoTexture("video", ["eyes1.mp4"], scene, true, true);
    VideoTexture.autoPlay = true;
    VideoTexture.muted = true;
    let Background = new BABYLON.Layer("back", null, scene);
    Background.texture = VideoTexture;//comment this line out, and save, then undo the comment, save again, video will be loaded;


  return scene;

}
let scene = createScene();
engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //frontCanv.width = window.innerWidth;
  //frontCanv.height = window.innerHeight;
  engine.resize();
});
/*window.addEventListener('keydown', function() {
  frontCanv.remove();
});*/
