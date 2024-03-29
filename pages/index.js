import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import LoginForm from "@/components/LoginForm";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Head>
            <title>Heft Heeders</title>
            <meta name="description" content="For those of us that shall heed our heft" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main />

    </>
  );
}
