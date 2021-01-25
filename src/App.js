import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import mainTheme from "./assets/themes/Main";
import { ThemeProvider } from "@material-ui/core/styles";
import "./assets/css/google.css";

function App() {
	return (
		<ThemeProvider theme={mainTheme}>
			<div class="main">
				<Header />
				<Body />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
