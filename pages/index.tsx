import { Button, Container, Link } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Link href="/create-connections">
        <Button>create new connections!</Button>
      </Link>
    </Container>
  );
};

export default Home;
