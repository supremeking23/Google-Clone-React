import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	overrides: {
		MuiAppBar: {
			colorPrimary: {
				backgroundColor: "transparent",
				color: "black",
			},
		},

		MuiPaper: {
			elevation4: {
				boxShadow: "none",
			},
		},

		MuiInputBase: {
			root: {
				// border: "1px solid red",
				// width: "100%",
			},
		},

		MuiButton: {
			root: {
				backgroundImage: "-webkit-linear-gradient(top, #f5f5f5, #f1f1f1)",
				backgroundColor: "#f2f2f2",
				border: "1px solid #f2f2f2",
				borderRadius: "4px",
				color: "#5f6368",
				fontFamily: "arial, sans-serif",
				fontSize: "14px",
				margin: "11px 4px",
				padding: "0 16px",
				lineHeight: "27px",
				height: "36px",
				minWidth: "54px",
				textAlign: "center",
				cursor: "pointer",
				userSelect: "none",
				textTransform: "capitalize",
			},
			contained: {
				backgroundColor: "#f2f2f2",
				boxShadow: "none",
			},
		},

		MuiTypography: {
			root: {
				margin: "0 5px",
				// fontFamily: "Arial",
			},

			colorPrimary: {
				cursor: "pointer",
			},
		},
	},
});

export default theme;
