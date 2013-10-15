App.templates = (function(){
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['AppTemplate']=function anonymous(it) {
var out='<div class="b-header"></div><div class="b-page"></div>';return out;
};
  tmpl['LectureTemplate']=function anonymous(it) {
var out='<div class="b-lecture__title b-block__title"><h2 class="b-lecture__header b-block__header">'+(it.title)+'</h2>';if((it.videoUrl || it.presentationUrl)){out+='<ul class="b-lecture__links-list b-block__link-list">';if(it.presentationUrl){out+='<li class="b-lecture__link b-lecture__link_type_presentation b-block__link-item"><a href="'+(it.presentationUrl)+'">Презентация</a></li>';}if(it.videoUrl){out+='<li class="b-lecture__link b-lecture__link_type_video b-block__link-item"><a href="'+(it.videoUrl)+'">Видео</a></li>';}out+='</ul>';}if(it.lecturer){out+='<h3 class="b-lecture__lecturer b-block__subheader">'+(it.lecturer)+'</h3>';}out+='</div><div class="b-block__content b-text">';if(it.description){out+=(it.description);}out+='</div>';return out;
};
  tmpl['MenuItemTemplate']=function anonymous(it) {
var out='<a class="b-menu-item__link';if(it.active){out+=' is-active';}out+='" href="'+(it.url)+'">'+(it.title)+'</a>';return out;
};
  tmpl['PersonTemplate']=function anonymous(it) {
var out='<div class="b-person__title b-block__title"><h2 class="b-block__header">'+(it.name)+'</h2><a href="#students/'+(it.id)+'" class="b-block__linker"></a>';if(it.profiles){out+='<ul class="b-person__link-list b-block__link-list">';var arr1=it.profiles;if(arr1){var profile,index=-1,l1=arr1.length-1;while(index<l1){profile=arr1[index+=1];out+='<li class="b-person__link-item b-person__link-item_type_'+(profile.name.toLowerCase())+' b-block__link-item"><a href="'+(profile.link)+'">'+(profile.name)+'</a></li>';} } out+='</ul>';}out+='</div><div class="b-block__content">';if(it.photo){out+='<img class="b-person__photo" src="'+(it.photo)+'" alt="'+(it.name)+'">';}out+='<div class="b-person__about b-text">'+( it.about)+'</div></div>';return out;
};
return tmpl;})()