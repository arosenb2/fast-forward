var http = require('http');
var cheerio = require('cheerio');

module.exports.getEntryInfo = function(q){
	var opt = {
		host: 'en.wikipedia.org',
		port: 80,
		path: '/wiki/'+q,
	};

	http.get(opt,function(res){
		var body = "";
		res.setEncoding("utf-8");
		res.on("data",function(chunk){
			body += chunk;
		});
		res.on("end",function(){
			$ = cheerio.load(body);
			var t = ($("td a.image img").attr("src")).replace("/thumb","").split("/");
			t.pop();

			var ret = {"image":t.join("/"),"description":""};

			var imdbURL = $("a[title='Internet Movie Database']").parent().children("a").attr("href");

			http.get(imdbURL,function(imdb){
				var imdbBody = "";
				imdb.setEncoding("utf-8");
				imdb.on("data",function(chunk){
					imdbBody += chunk;
				}).on("end",function(){
					$ = cheerio.load(imdbBody);
					ret.description = $("p[itemprop='description']").text().replace(/\n/i,"");
					return ret;
				});
			});
		});
	});
}