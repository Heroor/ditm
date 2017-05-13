const tool = require('./lib/init.js');
const pack = require('./package.json');

let order = process.argv[2];
let arg = process.argv[3];

switch (order) {
	case 'init':
		tool.init(arg);
		break;
	case 'v':
	case '-v':
		console.log(pack.version);
		break;
	case 'h':
	case '-h':
	case '-help':
		console.log(
			'-v  		  |  get versions \n' +
			'init  		  |  init dev object \n' +
			'init [obj_name]   |  init obj with obj_name \n' +
			'-h  		  |  get help');
		break;
	case undefined:
	default :
		console.log('-h   //get help');
		break;
}
