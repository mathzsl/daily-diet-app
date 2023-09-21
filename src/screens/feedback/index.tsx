import { Typography } from "@components/Typography";
import { Container, Content, IllustrationImage, Title } from "./styles";

import { Button } from "@components/Button";

import illustrationHappy from "@assets/Illustration-happy.png";
import illustrationSad from "@assets/Illustration-sad.png";

export function Feedback() {
  const onTheDiet = true;

  return (
    <Container>
      {onTheDiet ? (
        <Content>
          <Typography
            title="Continue assim!"
            size="text_2xl"
            weight="bold"
            color="green_dark"
          />

          <Title>
            Você continua {}
            <Typography title="dentro da dieta." size="text_md" weight="bold" />
            {} Muito bem!
          </Title>

          <IllustrationImage source={illustrationHappy} />
        </Content>
      ) : (
        <Content>
          <Typography
            title="Que pena!"
            size="text_2xl"
            weight="bold"
            color="red_dark"
          />

          <Title>
            Você {}
            <Typography title="saiu da dieta" size="text_md" weight="bold" />
            {} dessa vez, mas continue se esforçando e não desista!
          </Title>

          <IllustrationImage source={illustrationSad} />
        </Content>
      )}

      <Button title="Ir para a página inicial" />
    </Container>
  );
}