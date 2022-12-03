import { Container } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const CreateConnections: NextPage = () => {
  return (
    <Container maxWidth='lg' className={styles.container}>
        <h1>add connections!</h1>
    </Container>
  );
};


export default CreateConnections;
