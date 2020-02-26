// DO NOT EDIT THIS FILE
// This file is automatically generated from the webgme-setup-tool.
'use strict';


var config = require('webgme/config/config.default'),
    validateConfig = require('webgme/config/validator');

// The paths can be loaded from the webgme-setup.json
config.plugin.basePaths.push(__dirname + '/../node_modules/petri-net/src/plugins');
config.plugin.basePaths.push(__dirname + '/../node_modules/webgme-finite-state-machine/src/plugins');
config.plugin.basePaths.push(__dirname + '/../node_modules/formula/src/plugins');
config.plugin.basePaths.push(__dirname + '/../node_modules/sysml/src/plugins');
config.plugin.basePaths.push(__dirname + '/../node_modules/power/src/plugins');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/petri-net/src/decorators');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/webgme-logic-gates/src/decorators');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/business-process-modeling/src/decorators');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/sysml/src/decorators');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/webgme-finite-state-machine/src/decorators');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/ui-components/src/decorators');
config.visualization.decoratorPaths.push(__dirname + '/../node_modules/webgme-connection-remover/src/decorators');
config.seedProjects.basePaths.push(__dirname + '/../node_modules/webgme-logic-gates/src/seeds/LogicGates');
config.seedProjects.basePaths.push(__dirname + '/../node_modules/petri-net/src/seeds/PetriNet');
config.seedProjects.basePaths.push(__dirname + '/../node_modules/webgme-finite-state-machine/src/seeds/FiniteStateMachine');
config.seedProjects.basePaths.push(__dirname + '/../node_modules/business-process-modeling/src/seeds/BusinessProcessModeling');
config.seedProjects.basePaths.push(__dirname + '/../node_modules/sysml/src/seeds/SysML');
config.seedProjects.basePaths.push(__dirname + '/../node_modules/power/src/seeds/Power');



config.visualization.panelPaths.push(__dirname + '/../node_modules/webgme-icore/src/visualizers/panels');




// Visualizer descriptors
config.visualization.visualizerDescriptors.push(__dirname + '/../src/visualizers/Visualizers.json');
// Add requirejs paths
config.requirejsPaths = {
  'ICore': 'panels/ICore/ICorePanel',
  'ConnRemoverDecorator': 'node_modules/webgme-connection-remover/src/decorators/ConnRemoverDecorator',
  'DisplayMetaDecorator': 'node_modules/ui-components/src/decorators/DisplayMetaDecorator',
  'UMLStateMachineDecorator': 'node_modules/webgme-finite-state-machine/src/decorators/UMLStateMachineDecorator',
  'SysMLDecorator': 'node_modules/sysml/src/decorators/SysMLDecorator',
  'BusinessProcessModelingDecorator': 'node_modules/business-process-modeling/src/decorators/BusinessProcessModelingDecorator',
  'LogicGatesDecorator': 'node_modules/webgme-logic-gates/src/decorators/LogicGatesDecorator',
  'PetriNetDecorator': 'node_modules/petri-net/src/decorators/PetriNetDecorator',
  'Power': 'node_modules/power/src/seeds/Power',
  'SysML': 'node_modules/sysml/src/seeds/SysML',
  'BusinessProcessModeling': 'node_modules/business-process-modeling/src/seeds/BusinessProcessModeling',
  'FiniteStateMachine': 'node_modules/webgme-finite-state-machine/src/seeds/FiniteStateMachine',
  'PetriNet': 'node_modules/petri-net/src/seeds/PetriNet',
  'LogicGates': 'node_modules/webgme-logic-gates/src/seeds/LogicGates',
  'OpenDSS_Generator': 'node_modules/power/src/plugins/OpenDSS_Generator',
  'SysMLImporter': 'node_modules/sysml/src/plugins/SysMLImporter',
  'SysMLExporter': 'node_modules/sysml/src/plugins/SysMLExporter',
  'Export2FORMULA': 'node_modules/formula/src/plugins/Export2FORMULA',
  'FSMImporter': 'node_modules/webgme-finite-state-machine/src/plugins/FSMImporter',
  'FSMCodeGenerator': 'node_modules/webgme-finite-state-machine/src/plugins/FSMCodeGenerator',
  'PetriNetExporter': 'node_modules/petri-net/src/plugins/PetriNetExporter',
  'panels': './src/visualizers/panels',
  'widgets': './src/visualizers/widgets',
  'panels/ICore': './node_modules/webgme-icore/src/visualizers/panels/ICore',
  'widgets/ICore': './node_modules/webgme-icore/src/visualizers/widgets/ICore',
  'petri-net': './node_modules/petri-net/src/common',
  'finite-state-machine': './node_modules/finite-state-machine/src/common',
  'formula': './node_modules/formula/src/common',
  'sysml': './node_modules/sysml/src/common',
  'power': './node_modules/power/src/common',
  'logic-gates': './node_modules/logic-gates/src/common',
  'business-process-modeling': './node_modules/business-process-modeling/src/common',
  'ui-components': './node_modules/ui-components/src/common',
  'webgme-connection-remover': './node_modules/webgme-connection-remover/src/common',
  'webgme-icore': './node_modules/webgme-icore/src/common',
  'editor': './src/common'
};


config.mongo.uri = 'mongodb://127.0.0.1:27017/editor';
validateConfig(config);
module.exports = config;
