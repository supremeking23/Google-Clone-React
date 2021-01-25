import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import logo from "../assets/img/google.png";

import Button from "@material-ui/core/Button";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
	mic: {
		height: "24px",
		width: "24px",
		verticalAlign: "center",
		cursor: "pointer",
	},
}));

const useStylesBootstrap = makeStyles((theme) => ({
	arrow: {
		color: theme.palette.common.black,
	},
	tooltip: {
		backgroundColor: theme.palette.common.black,
	},
}));

function BootstrapTooltip(props) {
	const classes = useStylesBootstrap();

	return <Tooltip arrow classes={classes} {...props} />;
}

export default function Body() {
	const classes = useStyles();

	const micComponent = () => {
		return (
			<>
				<BootstrapTooltip title="Search by voice">
					<Grid justify="flex-end">
						<svg
							class={classes.mic}
							focusable="false"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
								fill="#4285f4"></path>
							<path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
							<path
								d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
								fill="#f4b400"></path>
							<path
								d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
								fill="#ea4335"></path>
						</svg>
					</Grid>
				</BootstrapTooltip>
			</>
		);
	};

	return (
		<Grid>
			<center>
				<Grid item>
					<img src={logo} alt="google" className="google-logo" />
				</Grid>

				<form
					// action="/google.com"
					// method="get"
					onSubmit={() => {
						window.location.href = "google.com";
					}}
					noValidate
					autoComplete="off"
					className="google-form">
					<Grid
						className="border"
						lg={4}
						md={8}
						sm={8}
						container
						justify="space-between"
						alignItems="center">
						<InputBase
							// name="searchfor"
							fullWidth={true}
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
							startAdornment={<SearchIcon className="search-icon" />}
							endAdornment={micComponent()}
						/>
					</Grid>

					<Grid className="buttons-grid">
						<Button type="submit" variant="contained">
							Google Search
						</Button>

						<Button type="submit" variant="contained">
							I'm Feeling Lucky
						</Button>
					</Grid>
				</form>

				<Grid className="google-offers">
					<Typography>
						Google offered in:
						<Link href="#">Filipino</Link>
						<Link href="#">Cebuano</Link>
					</Typography>
				</Grid>
			</center>
		</Grid>
	);
}
