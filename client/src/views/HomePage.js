import React from 'react';
import styled from 'styled-components';
import ImageCarousel from '../components/atoms/ImageSlider/ImageCarousel';
import { CarouselData } from '../components/atoms/ImageSlider/CarouselData';
import HomeCard from '../components/atoms/HomeCard/HomeCard';

const CardsSection = styled.div`
  margin: auto;
  text-align: center;
`;

const Column = styled.div`
  display: table-cell;
`;
const Row = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-spacing: 10px;
`;

const HomePage = () => (
  <CardsSection>
    <ImageCarousel slides={CarouselData} />;
    <Row>
      <Column>
        <HomeCard
          image="https://images.unsplash.com/photo-1550520920-27ba45c38740?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          name="Computer"
          price="1345,34 zł"
        />
      </Column>
      <Column>
        <HomeCard
          image="https://images.unsplash.com/photo-1550520920-27ba45c38740?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          name="Computer"
          price="1345,34 zł"
        />
      </Column>
      <Column>
        <HomeCard
          image="https://images.unsplash.com/photo-1550520920-27ba45c38740?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80g"
          name="Computer"
          price="1345,34 zł"
        />
      </Column>
    </Row>
  </CardsSection>
);

export default HomePage;
