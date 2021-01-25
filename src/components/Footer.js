import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import FolderIcon from "@material-ui/icons/Folder";
// import RestoreIcon from "@material-ui/icons/Restore";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Grid, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: 500,
	},
	philippines: {
		fontSize: "14px",
		lineHeight: "40px",
		marginLeft: "35px",
		color: "rgba(0,0,0,.54)",
	},

	navbarLinks: {
		fontSize: "14px",
		lineHeight: "40px",

		marginLeft: "30px",
	},

	lastNavbarLink: {
		fontSize: "14px",
		lineHeight: "40px",
		marginRight: "30px",
		marginLeft: "30px",
	},

	footerLink: {
		color: "#5f6368",
	},

	rightNavFooter: {
		justifyContent: "flex-end",
		[theme.breakpoints.down("md")]: {
			justifyContent: "center",
			order: 1,
		},
	},

	leftNavFooter: {
		justifyContent: "flex-start",
		[theme.breakpoints.down("md")]: {
			justifyContent: "center",
			order: 2,
		},
	},
}));

export default function Footer() {
	const classes = useStyles();
	const [value, setValue] = React.useState("recents");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="footer">
			<Grid container className="border-bottom-style">
				<Grid item lg={12}>
					<Typography className={classes.philippines}>Philippines</Typography>
				</Grid>
			</Grid>

			<Grid container className="footer-section-one">
				<Grid
					container
					item
					md={12}
					lg={6}
					sm={12}
					className={classes.leftNavFooter}>
					<Typography className={classes.navbarLinks}>
						<Link
							href="https://ads.google.com/intl/en_ph/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
							className={classes.footerLink}>
							Advertising
						</Link>
					</Typography>
					<Typography className={classes.navbarLinks}>
						<Link
							href="https://ads.google.com/intl/en_ph/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
							className={classes.footerLink}>
							Business
						</Link>
					</Typography>
					<Typography className={classes.navbarLinks}>
						<Link
							href="https://ads.google.com/intl/en_ph/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
							className={classes.footerLink}>
							About
						</Link>
					</Typography>
					<Typography className={classes.navbarLinks}>
						<Link
							href="https://ads.google.com/intl/en_ph/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
							className={classes.footerLink}>
							How Search works
						</Link>
					</Typography>
				</Grid>

				<Grid
					container
					className={classes.rightNavFooter}
					item
					lg={6}
					md={12}
					sm={12}>
					<Typography className={classes.navbarLinks}>
						<Link
							href="https://ads.google.com/intl/en_ph/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
							className={classes.footerLink}>
							Privacy
						</Link>
					</Typography>
					<Typography className={classes.navbarLinks}>
						<Link
							href="https://ads.google.com/intl/en_ph/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
							className={classes.footerLink}>
							Terms
						</Link>
					</Typography>
					<Typography className={classes.lastNavbarLink}>
						<Link
							href="https://ads.google.com/intl/en_ph/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
							className={classes.footerLink}>
							Settings
						</Link>
					</Typography>
				</Grid>
			</Grid>

			{/* <Grid container>
				<BottomNavigation
					value={value}
					onChange={handleChange}
					className={classes.root}>
					<BottomNavigationAction
						label="Recents"
						value="recents"
						icon={<RestoreIcon />}
					/>
					<BottomNavigationAction
						label="Favorites"
						value="favorites"
						icon={<FavoriteIcon />}
					/>
					<BottomNavigationAction
						label="Nearby"
						value="nearby"
						icon={<LocationOnIcon />}
					/>
					<BottomNavigationAction
						label="Folder"
						value="folder"
						icon={<FolderIcon />}
					/>
				</BottomNavigation>
			</Grid> */}
		</div>
	);
}

// https://css-tricks.com/couple-takes-sticky-footer/
