import markdown from "markdown-it";

const md = markdown({
	html: false,
	xhtmlOut: false,
	breaks: false,
	langPrefix: "language-",
	linkify: false,
	typographer: false,
	quotes: "“”‘’",
	highlight: function (/*str, lang*/) {
		return "";
	},
});

export default md;
