import { CardContainer, TextNotFound, Image } from "./style";

const NotFound = () => {
  return (
    <>
      <CardContainer>
        <Image src="./psyduck.png"></Image>
        <TextNotFound>NOT FOUND</TextNotFound>
      </CardContainer>
    </>
  );
};

export default NotFound;
