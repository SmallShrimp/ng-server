let Service = require('node-windows').Service;
var program = require('commander');

program
    .version('0.1.0')
    .option('-i, --install', '安装')
    .option('-u, --uninstall', '卸载')
    .parse(process.argv);

let svc = new Service({
    name: 'ng-server',    //服务名称  
    description: 'angular静态服务器服务', //描述  
    script: 'G:\\work\\personal\\open\\ng-server\\dist\\server.js' //nodejs项目要启动的文件路径  
});

svc.on('install', () => {
    svc.start();
});
svc.on('uninstall', function () {
    console.log('Uninstall complete.');    
    console.log('The service exists: ', svc.exists);
});

if (program.install) svc.install();
else if (program.uninstall) svc.uninstall();