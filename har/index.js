var filename	= 'www.beloola.com.har';
var content	= require('fs').readFileSync(filename, 'utf8');
var harData	= JSON.parse(content)

//console.dir(har)

function entryFileExtension(entry){
	var url		= entry.request.url;
	var matches	= url.match(/(\.[^./]+)$/)
	var ext		= (matches && matches[1]) ? matches[1] : '';
	return ext;	
}

function keepImage(entry){
	var ext		= entryFileExtension(entry)
	var isImage	= ['.png', '.gif', '.jpg'].indexOf(ext) !== -1 ? true : false;
	return isImage;
}


// var extCounters	= {};
// har.log.entries.forEach(function(entry){
// 	var url		= entry.request.url;
// 	var matches	= url.match(/(\.[^./]+)$/)
// 	var ext		= (matches && matches[1]) ? matches[1] : '';
// 	extCounters[ext]= extCounters[ext] !== undefined ? extCounters[ext] : {
// 		count	: 0,
// 		size	: 0
// 	};
// 	extCounters[ext]++;
// });
// console.dir(extCounters)



harData.log.entries.filter(keepImage).forEach(function(entry){
	var url		= entry.request.url;
	console.log(url)
});
