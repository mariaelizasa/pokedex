import { LoaderContainer, LoadingTitle, Pokeball } from "./style";

const Loading = () => {
  return (
    <>
    <LoaderContainer>
      <Pokeball />
      <LoadingTitle>Loading...</LoadingTitle>
    </LoaderContainer>
    </>
  );
};

export default Loading;
