import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOutUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

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
  const userEmail = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.AppBar}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Link to="/">
            <Typography
              varient="h6"
              color="inherit"
              className={classes.toolbarTitle}
            >
              Valearnis Quizzes
            </Typography>
          </Link>

          {userEmail && (
            <Typography
            style={{ cursor: 'pointer' }} // Add this style
            onClick={() => {
                dispatch(signOutUser());
                signOut(auth);
              }}
            >
              Log Out
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
