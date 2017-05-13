const config = require('../config.json');
const path = require('path');
const fs = require('fs');

let baseCssName = 'base.css';
let dirName = '';

exports.init = (rootName = config.rootName)=>{
	fs.mkdir(path.join('./', rootName), (err)=>{
		if (err) {
			console.log(`Directory initialization failed! Please check if the file already exists.`);
			console.log(err);
			return;
		}
		config.data.forEach((o)=>{
			let name = o.name;
			if (o.type == 'file') {
				fs.readFile(path.join(__dirname, name), 'utf8', (err,data)=>{
					if (err) {
						console.log(`${o.name} is not found!`);
						return;
					}
					if (o.name == baseCssName) {
						dirName = '/css';
					}
					fs.writeFile(path.join('./', rootName + dirName, name), data, (err)=>{
						if (err) {
							console.log(`${o.name} failed to create!`);
							return;
						}
						console.log(`${o.name} create success!`);
					});
					dirName = '';
				});
			} else if (o.type == 'dir') {
				fs.mkdir(path.join('./', rootName, o.name), (err)=>{
					if (err) {
						console.log(`${o.name} failed to create!`);
						return;
					}
					console.log(`${o.name} create success!`);
				});
			}
		});
	});
};