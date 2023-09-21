import { Typography } from "@components/Typography";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.green_light};
`;

export const Header = styled.View`
  height: 200px;
  padding: 0px 24px;

  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.View`
  flex: 1;
  margin-top: -34px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0px 24px;
  background-color: white;
`;

export const Title = styled(Typography).attrs(({}) => ({
  weight: "bold",
  size: "text_sm",
}))`
  align-self: center;
  margin-top: 34px;
  margin-bottom: 24px;
`;

export const TotalMealsContent = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 12px;
`;