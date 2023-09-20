import {
  Container,
  NewMealContent,
  PercentCardButton,
  DateTitle,
} from "./styles";

import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { Typography } from "@components/Typography";
import { Button } from "@components/Button";

import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import { DayListItem } from "@components/DayListItem";
import { SectionList } from "react-native";

export function Home() {
  const { colors } = useTheme();

  const DATA = [
    {
      titulo: "11.08.22",
      data: [
        {
          hour: "20:00",
          meal: "X-tudo",
          onTheDiet: false,
        },

        {
          hour: "20:00",
          meal: "Teste 1",
          onTheDiet: true,
        },

        {
          hour: "21:00",
          meal: "teste 3",
          onTheDiet: false,
        },
      ],
    },

    {
      titulo: "14.08.22",
      data: [
        {
          hour: "20:00",
          meal: "X-tudo",
          onTheDiet: false,
        },

        {
          hour: "20:00",
          meal: "Teste 1",
          onTheDiet: true,
        },

        {
          hour: "21:00",
          meal: "teste 3",
          onTheDiet: false,
        },
        {
          hour: "20:00",
          meal: "X-tudo",
          onTheDiet: false,
        },

        {
          hour: "20:00",
          meal: "X-tudo",
          onTheDiet: true,
        },
      ],
    },
  ];

  return (
    <Container>
      <Header />

      <PercentCardButton onPress={() => console.log("navigate to statistics")}>
        <PercentCard
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          variant="green"
        />
      </PercentCardButton>

      <NewMealContent>
        <Typography title="Refeições" />

        <Button
          onPress={() => console.log("Add maeal")}
          title="Nova refeição"
          icon={<Plus size={18} color={colors.white} />}
        />
      </NewMealContent>

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item.meal + index}
        renderItem={({ item }) => (
          <DayListItem
            title={item.meal}
            hours={item.hour}
            isHealthy={item.onTheDiet}
            onPress={() => console.log("navegando")}
          />
        )}
        renderSectionHeader={({ section: { titulo } }) => (
          <DateTitle title={titulo} />
        )}
        style={{ marginTop: 18 }}
      />
    </Container>
  );
}
