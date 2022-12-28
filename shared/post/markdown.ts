import markdown from "markdown-it";

const md = markdown({
	html: false,
	xhtmlOut: false,
	breaks: false,
	langPrefix: "language-",
	linkify: true,
	typographer: true,
	quotes: "“”‘’",
	highlight: function (/*str, lang*/) {
		return "";
	}
});

md.renderer.rules.fence = function (tokens, idx, options, env, self) {
	const token = tokens[idx];

	let contents = tokens[idx].content;

	const titleStartIdx = contents.indexOf("^^^");

	if(titleStartIdx !== -1) {
		const titleContentsStartIdx = titleStartIdx + 3;
		const titleEndIdx = contents.indexOf("^^^", titleContentsStartIdx);
		const good = '<div class="code-top">' + contents.substring(titleContentsStartIdx, titleEndIdx) + '</div>';
		 contents= good + '<code>' + contents.substring(titleEndIdx+4) + '</code>';
	} else {
		 contents= '<div class="code-top">example</div><code>' + contents + '</code>'
	}

	return '<pre' + self.renderAttrs(token) + '>' + contents + '</pre>';
}

export default md;
