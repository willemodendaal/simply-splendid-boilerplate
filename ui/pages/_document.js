import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		// We do the following to use styled-components:
		// - Step 1: Create an instance of ServerStyleSheet
		const serverStyleSheet = new ServerStyleSheet();

		// - Step 2: Retrieve styles from components in the page
		const page = renderPage((App) => (props) => serverStyleSheet.collectStyles(<App {...props} />));

		// - Step 3: Extract the styles as <style> tags
		const styleTags = serverStyleSheet.getStyleElement();

		// - Step 4: Pass styleTags as a prop
		return { ...page, styleTags };
	}

	render() {
		return (
			<html>
				<Head>
					<title>My page</title>

					{/* Load fonts used by Material-UI  */}
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

					{/* Render styled-components style tags */}
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
