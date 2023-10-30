import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,
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
          <Link to="/">
            <Typography
              varient="h6"
              color="inherit"
              className={classes.toolbarTitle}
            >
              Valearnis Quizzes
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
