import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import blogLogo from "./Assets/blogLogo.gif";
import BlogPosts from "./components/BlogPosts";
import BlogPostsForm from "./components/BlogPostsForm";
import useStyles from "./styles/app.styles.js";
import { useDispatch } from "react-redux";
import { fetchAllBlogPost } from "./actions/blogPosts";

function App() {
  const dispatch = useDispatch();
  const appStyles = useStyles();

  useEffect(() => {
    dispatch(fetchAllBlogPost());
  }, [dispatch]);

  return (
    <div className="App">
      <Container maxWidth="xl">
        <AppBar
          className={appStyles.navigationBar}
          position="static"
          color="inherit"
        >
          <img
            className={appStyles.image}
            src={blogLogo}
            alt="icon"
            height="100"
          />
          <Typography className={appStyles.title} variant="h4" align="center">
            Mern awesome blog
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={2}
            >
              <Grid item xs={12} sm={7}>
                <BlogPostsForm />
              </Grid>
              <Grid item xs={12} sm={4}>
                <BlogPosts />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
