import React from "react";
import Header from "./framework/Header";
import Footer from "./framework/Footer";
import ConnectApi from "../api/ConnectApi";

// MaterialUI
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

export default function QuizSelect() {
  const classes = useStyles();
  const API_URL = "http://127.0.0.1:8000/quiz/";
  const { data } = ConnectApi(API_URL);
  console.log(data);
  console.log("HI");
  return (
    <div>
      <Header />
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="stretch">
          {data.map((q) => (
            <Grid item key={q.title} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={q.title}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h6" color="textPrimary">
                      Random Quiz
                    </Typography>
                  </div>
                  <ul>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                    >
                      50 questions
                    </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    href={`http://localhost:3000/r/${q.title}`}
                  >
                    Start Quiz
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* {data.map((q) => q.title)} */}
      <Footer />
    </div>
  );
}
