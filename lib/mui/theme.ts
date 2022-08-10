import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#14b8a6",
			"50": "#f0fdfa",
			"100": "#ccfbf1",
			"200": "#99f6e4",
			"300": "#5eead4",
			"400": "#2dd4bf",
			"500": "#14b8a6",
			"600": "#0d9488",
			"700": "#0f766e",
			"800": "#115e59",
			"900": "#134e4a",
		},
		grey: {
			"50": "#f8fafc",
			"100": "#f1f5f9",
			"200": "#e2e8f0",
			"300": "#cbd5e1",
			"400": "#94a3b8",
			"500": "#64748b",
			"600": "#475569",
			"700": "#334155",
			"800": "#1e293b",
			"900": "#0f172a",
		},
	},
	typography: {
		fontFamily: "Inter var",
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					width: "100%",
					paddingTop: "0.5rem",
					paddingBottom: "0.5rem",
					borderRadius: "0.375rem",
					fontSize: "0.875rem",
					lineHeight: "1.25rem",
					fontWeight: "500",
					textTransform: "none",
				},
			},
		},
		MuiInput: {
			styleOverrides: {
				root: {
					"::placeholder": {
						color: "#94a3b8",
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					width: "100%",
				},
			},
		},
	},
});

export default theme;
