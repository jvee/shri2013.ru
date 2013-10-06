var tmpl = (function(){
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['PersonTemplate']=function anonymous(it) {
var out='<div class="b-person__name">'+(it.name)+'</div>';if(it.photo){out+='<img class="b-person__photo" src="'+(it.photo)+'" alt="'+(it.name)+'">';}out+='<div class="b-person__about">'+( it.about)+'</div>';if(it.profiles){out+='<ul class="b-person__profile-list">';var arr1=it.profiles;if(arr1){var profile,index=-1,l1=arr1.length-1;while(index<l1){profile=arr1[index+=1];out+='<li class="b-person__profile-item"><a href="'+(profile.link)+'">'+(profile.name)+'</a></li>';} } out+='</ul>';}return out;
};
return tmpl;})()