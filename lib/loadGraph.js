var fs = require('fs');
var dot = require('ngraph.fromdot');
module.exports = load;

function load() {
  var fileName = process.argv[2] || '/opt/puppetlabs/puppet/cache/state/graphs/relationships.dot'
  console.log('Loading graph from ' + fileName);
  var content = fs.readFileSync(fileName, 'utf8');
  var graph = dot(content);
  console.log('Loaded ' + graph.getNodesCount() + ' nodes; ' + graph.getLinksCount() + ' packages');

  return graph;
}
