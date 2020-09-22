// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is SAPPER DOCKER?',
		slug: 'what-is-sapper-docker',
		html: `
			<h2>SAPPER DOCKER</h2>
			<p>Something ...</p>
		`
	},

	{
		title: 'How to use Sapper Docker',
		slug: 'how-to-use-sapper-docker',
		html: `
			<h2>Sapper Docker</h2>
			<h2>Step one</h2>
			<p>SomeThing Sapper ...</p>

			<h2>Step two</h2>
			<p>SomeThing Sapper ...</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<h2>Sapper Docker</h2>
			<p>SomeThing Sapper ...</p>
		`
	},

	{
		title: 'How is Sapper Docker different?',
		slug: 'how-is-sapper-docker-different',
		html: `
			<h2>Sapper Docker</h2>
			<p>SomeThing Sapper ...</p>

			<ul>
				<li>Sapper Docker</li>
				<li>SomeThing Sapper ...</li>
				<li>Sapper Docker</li>
				<li>SomeThing Sapper ...</li>
				<li>Sapper Docker</li>
				<li>SomeThing Sapper ...</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<h2>Sapper Docker</h2>
			<p>SomeThing Sapper ...</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
