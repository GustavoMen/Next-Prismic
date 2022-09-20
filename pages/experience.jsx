import Head from "next/head";
import Aos from "aos";
import { useEffect } from "react";

import { SectionOne, Title, DivProject, ContainerProject, ProjectTitle, ProjectDate, ProjectAbout, DivCategories, Category, SubTitle, CategoryList, ListItem,DivOneBtn,DivTwoBtn, BtnProjectOne,BtnProjectTwo, DivAbout, LinkPage} from '../styles/experience.elements'

export default function Home() {

   useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Mendonça - Expirence</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionOne>
        <Title>Veja alguns projetos que ja desenvolvi.</Title>

        <ContainerProject>
          
          <DivProject data-aos="fade-right">
            <DivAbout>
            <ProjectTitle>
              Oficina da Informatica | Desenvolvedor Front end (Freelancer)
            </ProjectTitle>
            <ProjectDate>JUL/2022 - AGO/2022</ProjectDate>
            <ProjectAbout>
              Trabalhei com um projeto freelancer para desenvolver um site institucional.
              Nesse mesmo projeto amadureci questões como velocidade na entrega e rápido aprendizado, trabalhar com
              tempo curto e com eficiência, e um aprendizado muito mais consolidado em Front End.
              </ProjectAbout>
          </DivAbout>
            <DivCategories>
              <Category>
                <SubTitle>Tecnologias que usei:</SubTitle>
                <CategoryList>
                  <ListItem>ReactJs</ListItem>
                  <ListItem>Typescript</ListItem>
                  <ListItem>Styled-components</ListItem>
                  <ListItem>React Hooks</ListItem>
                </CategoryList>
              </Category>
              <Category>
                <SubTitle>Responsabilidades assumidas:</SubTitle>
                <CategoryList>
                  <ListItem>Desenvolver o design do site.</ListItem>
                  <ListItem>Desenvolver o código de acordo com o design desenvolvido</ListItem>
                  <ListItem>Hospedagem/Deploy</ListItem>
                  <ListItem>Configurações do Google Search Console.</ListItem>
                </CategoryList>
              </Category>
            </DivCategories>
            <DivOneBtn>
              <LinkPage href="https://www.oficinadainformaticabd.com.br/" target="_blank" rel="noreferrer">
                <BtnProjectOne>Acesse o site</BtnProjectOne>
              </LinkPage>
            </DivOneBtn>
          </DivProject>

          <DivProject data-aos="fade-left">
            <DivAbout>
            <ProjectTitle>
              Projeto Pessoal | Desenvolvedor Front end
            </ProjectTitle>
            <ProjectDate>AGO/2022 - SET/2022</ProjectDate>
            <ProjectAbout>
              Desenvolvi uma pagina 404 totalmente responsiva para teste de minhas habilidades. Sem duvidas tive um grande aprendizado no mesmo, sempre exercitando o tempo de entrega e minhas bases de Front End.
              </ProjectAbout>
            </DivAbout>
            <DivCategories>
              <Category>
                <SubTitle>Tecnologias que usei:</SubTitle>
                <CategoryList>
                  <ListItem>ReactJs</ListItem>
                  <ListItem>Typescript</ListItem>
                  <ListItem>Styled-components</ListItem>
                  <ListItem>React Hooks</ListItem>
                </CategoryList>
              </Category>
              <Category>
                <SubTitle>Responsabilidades assumidas:</SubTitle>
                <CategoryList>
                  <ListItem>Desenvolver o código de acordo com o design desenvolvido</ListItem>
                  <ListItem>Hospedagem/Deploy</ListItem>
                </CategoryList>
              </Category>
            </DivCategories>
            <DivTwoBtn>
              <a href="https://github.com/GustavoMen/BlockchainSite" target="_blank" rel="noreferrer">
                <BtnProjectTwo>Veja o codigo</BtnProjectTwo>
              </a>
              <a href="https://blockchain-site.vercel.app/" target="_blank" rel="noreferrer">
                <BtnProjectTwo>Acesse o site</BtnProjectTwo>
              </a>
            </DivTwoBtn>
          </DivProject>
        </ContainerProject>
      </SectionOne>

    </>
  );
}
