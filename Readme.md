# ditm  
### Develop the Initialize Tool Manager  
开发初始化工具管理器   
  
Use ditm to quickly build a simple project structure directory   
使用ditm可以快速构建一个简单的项目结构目录  

### how to use？ 
如何使用？   
   
	npm install ditm -g  


- `ditm -v`
	> Get the version.  
	> 获取版本号

- `ditm init`
	> initialize the project file.  
	> 初始化项目结构

- `ditm init [obj_name]`
	> Set the project name, and initialize the project file.  
	> 设置自定义的项目目录名  
- `ditm -h`
	> Get help :).  
	> 获得帮助信息



### Generated directory structure  
生成的目录结构   

-- demo  
 +-- css  
 |-- base.css  
 +-- js  
 +-- lib  
 +-- images  
 +-- index.html  
 +-- 404.html  


### customize

You can customize the list of initialized files！   
你可以自定义初始化的文件列表！ 
> config.json

	{
		"rootName" : "demo",
		"data" : [
			{
				"name" : "index.html",
				"type" : "file"
			}, {
				"name" : "404.html",
				"type" : "file"
			}, {
				"name" : "base.css",
				"type" : "file"
			}, {
				"name" : "css",
				"type" : "dir"
			}, {
				"name" : "js",
				"type" : "dir"
			}, {
				"name" : "images",
				"type" : "dir"
			}, {
				"name" : "lib",
				"type" : "dir"
			}
		]
	}


Change `name` in` data` to the name of the file you want   
Change `type` in` data` to the type you want  
`Dir` is the directory  
`File` is the file  

把`data`中的`name`修改成你要的文件名字  
把`data`中的`type`修改成你要的类型  
	`dir` 是目录  
	`file`是文件  
