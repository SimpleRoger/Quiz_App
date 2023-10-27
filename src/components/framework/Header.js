import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.AppBar}
      >
        <Toolbar>
          <Typography
            varient="h6"
            color="inherit"
            className={classes.toolbarTitle}
          >
            Valearnis Quizzes
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
